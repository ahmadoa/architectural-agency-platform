import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Offers() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await axios.get(
        "https://nebula-backend-azure.vercel.app/api/services"
      );
      setServices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section
      className="w-full h-fit px-5 md:px-10 py-10 md:py-16 bg-foreground flex flex-col md:flex-row gap-10 md:gap-0"
      data-cursor="-inverse"
    >
      <div className="md:w-1/2 flex flex-col gap-5">
        <h1 className="uppercase text-2xl md:text-3xl lg:text-6xl font-bold text-teal-500">
          What do we offer
        </h1>
        <p className="md:w-8/12 text-sm md:text-lg font-normal text-primary-foreground">
          Unveiling the potential within your space, we offer a comprehensive
          suite of services to bring your vision to life.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col">
        <Accordion type="multiple" collapsible>
          {services.length > 0 ? (
            services.map((service, index) => (
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{service.serviceName}</AccordionTrigger>
                <AccordionContent>{service.description}</AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p>Loading team data...</p>
          )}
        </Accordion>
      </div>
    </section>
  );
}
