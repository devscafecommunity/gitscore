// Chakra
import { Text, Heading, Divider } from "@chakra-ui/react";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

// Motion
import { motion } from "framer-motion";

import EventData from "@/utils/interfaces/Events";

import "@fontsource/jetbrains-mono";

// React
import { useEffect, useState } from "react";

export default function EventHeader() {
  const [eventCount, setEventCount] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events/eventcount")
      .then((res) => res.json())
      .then((data) => {
        setEventCount(data.count);
      });

    fetch("/api/events/getevents")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  function totalStartedEvents(events: EventData[]) {
    return events.filter((event: EventData) => event.status === "In progress")
      .length;
  }

  function totalDoneEvents(events: EventData[]) {
    return events.filter((event: EventData) => event.status === "Done").length;
  }

  function totalNotStartedEvents(events: EventData[]) {
    return events.filter((event: EventData) => event.status === "Not started")
      .length;
  }

  function totalEvents(events: EventData[]) {
    return events.length;
  }

  function getEventTracking(events: EventData[]) {
    const total = totalEvents(events);
    const progress = totalStartedEvents(events);
    const done = totalDoneEvents(events);
    const notStarted = totalNotStartedEvents(events);

    const progressPercentage = (progress / total) * 100;
    const donePercentage = (done / total) * 100;
    const notStartedPercentage = (notStarted / total) * 100;

    // Status: gain, loss, neutral

    let status = "neutral";
    if (progressPercentage > donePercentage) {
      status = "gain";
    } else if (progressPercentage < donePercentage) {
      status = "loss";
    }

    return {
      progressPercentage,
      donePercentage,
      notStartedPercentage,
      status,
    };
  }

  function getEventPercentage(events: EventData[]) {
    const progress = totalStartedEvents(events);
    const done = totalDoneEvents(events);
    const notStarted = totalNotStartedEvents(events);

    const total = totalEvents(events);

    const progressPercentage = (progress / total) * 100;
    const donePercentage = (done / total) * 100;
    const notStartedPercentage = (notStarted / total) * 100;
    const major = Math.max(
      progressPercentage,
      donePercentage,
      notStartedPercentage
    );

    if (major === progressPercentage) {
      return {
        status: "Em Progresso",
        percentage: progressPercentage,
      };
    } else if (major === donePercentage) {
      return {
        status: "Terminado",
        percentage: donePercentage,
      };
    } else if (major === notStartedPercentage) {
      return {
        status: "Não Iniciado",
        percentage: notStartedPercentage,
      };
    }
  }

  // The averege days between the events
  function getEventSpacing(events: EventData[]) {
    const total = totalEvents(events);
    let totalDays = 0;
    for (let i = 0; i < total - 1; i++) {
      const eventDate = new Date(events[i].date);
      const nextEventDate = new Date(events[i + 1].date);
      const diffTime = Math.abs(nextEventDate.getTime() - eventDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      totalDays += diffDays;
    }
    return Number.isNaN(totalDays / total) ? 0 : totalDays / total;
  }

  // Average cost of the events
  function getEventCost(events: EventData[]) {
    const total = totalEvents(events);
    let totalCost = 0;
    for (let i = 0; i < total; i++) {
      totalCost += events[i].total_cost;
    }
    return Number.isNaN(totalCost / total) ? 0 : totalCost / total;
  }

  // Historic average cost of the events // Track if the cost is increasing or decreasing over time
  // Return the percentage of the increase or decrease
  /*
  Return: {
    status: "gain" | "loss",
    percentage: number
  }
  */
  function getEventCostTracking(events: EventData[]) {
    const total = totalEvents(events);
    let totalCost = 0;
    for (let i = 0; i < total; i++) {
      totalCost += events[i].total_cost;
    }
    const averageCost = totalCost / total;
    const lastCost = events[total - 1].total_cost;
    const diff = lastCost - averageCost;
    const percentage = (diff / averageCost) * 100;
    if (percentage > 0) {
      return {
        status: "gain",
        percentage,
      };
    } else if (percentage < 0) {
      return {
        status: "loss",
        percentage: Math.abs(percentage),
      };
    } else {
      return {
        status: "neutral",
        percentage: 0,
      };
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full m-6 p-6"
    >
      <Heading as="h1" size="2xl" fontFamily="JetBrains Mono">
        Eventos Dev&apos;s Café
      </Heading>
      <Text fontSize="xl" color="gray.500" fontFamily="JetBrains Mono">
        Aqui você encontra informações sobre os eventos
      </Text>
      <Divider my={5} />

      <div className="flex flex-col gap-4 justify-center w-full">
      <StatGroup className="flex flex-row gap-4 w-full justify-center" fontFamily="JetBrains Mono">
        <Stat>
          <StatLabel className="text-center">Distributção</StatLabel>
          <StatNumber className="text-center">
            {" "}
            {totalStartedEvents(events)} / {totalDoneEvents(events)} /{" "}
            {totalNotStartedEvents(events)}
          </StatNumber>
          <StatHelpText className="text-center">
            Start / Done / Progress
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel className="text-center">Custo Historico</StatLabel>
          <StatNumber className="text-center">
            {getEventTracking(events).status === "gain" ? (
              <StatArrow type="increase" />
            ) : getEventTracking(events).status === "loss" ? (
              <StatArrow type="decrease" />
            ) : (
              <></>
            )}{" "}
            {getEventTracking(events).status === "gain"
              ? getEventTracking(events).progressPercentage
              : getEventTracking(events).status === "loss"
              ? getEventTracking(events).donePercentage
              : getEventTracking(events).notStartedPercentage}
            %
          </StatNumber>
          <StatHelpText className="text-center">
            {getEventTracking(events).status === "gain" ? "Aumento" : "Diminuição"} de custo
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel className="text-center">Custo Médio</StatLabel>
          <StatNumber className="text-center">
            {getEventCost(events)} R$
          </StatNumber>
          <StatHelpText className="text-center">Por evento</StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup className="flex flex-row gap-4 w-full justify-center" fontFamily="JetBrains Mono">
        <Stat className="text-center">
          <StatLabel className="text-center">Eventos</StatLabel>
          <StatNumber className="text-center">{eventCount}</StatNumber>
          <StatHelpText className="text-center">Total de Eventos</StatHelpText>
        </Stat>
        <Stat className="text-center">
          <StatLabel className="text-center">Espaçamento</StatLabel>
          <StatNumber className="text-center">
            {getEventSpacing(events)} dias
          </StatNumber>
          <StatHelpText className="text-center">Entre eventos</StatHelpText>
        </Stat>
        <Stat className="text-center">
          <StatLabel className="text-center">Majoritariedade</StatLabel>
          <StatNumber className="text-center">
            {getEventPercentage(events)?.percentage}%
          </StatNumber>
          <StatHelpText className="text-center">
            São {getEventPercentage(events)?.status}
          </StatHelpText>
        </Stat>
      </StatGroup>
      </div>
      <Divider my={5} />
    </motion.div>
  );
}
