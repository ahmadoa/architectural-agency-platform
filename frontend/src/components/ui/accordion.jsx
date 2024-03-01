import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-45 text-primary-foreground text-2xl group hover:bg-muted-foreground/10",
          className
        )}
        {...props}
      >
        <div className="pl-5 group-hover:pl-10 transition-all duration-500">
          {children}
        </div>

        <PlusIcon className="h-5 w-5 shrink-0 text-primary-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-primary-foreground/50"
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn("pb-4 pt-0 px-10 py-5 mb-5 font-light", className)}
      >
        {children}
      </motion.div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
