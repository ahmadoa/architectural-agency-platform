import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import arrow from "@/assets/arrow.svg";
import Layout from "@/layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      fullname: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  // form submit handler & email sender
  const onSubmit = (data) => {
    const params = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
      subject: data.subject,
    };
    fetch("http://localhost:3000/api/send-email", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          reset();
          toast({
            className: cn(
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
            ),
            title: "Email Sent Successfully!",
            description:
              "Thank you for contacting us, we will get back to you.",
          });
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "Error Sending Email",
          description: "Please try again later.",
          status: "error",
        });
      });
  };

  return (
    <Layout>
      <div className=" flex flex-col px-10">
        <div className="flex flex-col justify-between h-screen pt-16 pb-10">
          <div className="flex flex-row justify-between my-14">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-4/12 uppercase text-lg font-overusedBold text-zinc-500"
            >
              Contact
            </motion.h1>
            <motion.div className="w-7/12 flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col text-3xl font-overusedBold text-foreground"
              >
                <h1> Okay, we've shown (almost) everything.</h1>
                <h1>Are you ready to chat about our next project?</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex flex-col text-xl font-overusedMedium text-muted-foreground/80"
              >
                <h1>Fill out the form below or send us an email at</h1>
                <h1>
                  <span className="underline">hello@nebula.co</span> to setup up
                  an introductory call
                </h1>
              </motion.div>
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="text-6xl font-overusedBold mt-10"
          >
            Let's get started...
          </motion.h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-foreground rounded-3xl flex flex-col gap-5 my-5 p-24 text-white"
          data-cursor="-inverse"
        >
          <h1 className="font-overusedMedium text-teal-500 text-3xl">
            Brief us on what you need...
          </h1>
          <div className="flex flex-row gap-10 mt-10">
            <div className="w-1/2 flex flex-col gap-10">
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="fullname">Full name*</Label>
                <Input
                  type="text"
                  id="fullname"
                  placeholder="Your full name"
                  className="h-14 border-muted/30 placeholder:text-muted-foreground/70 text-lg outline-none placeholder:text-lg focus:border-teal-500 transition-all focus:outline-none"
                  {...register("fullname", { required: true })}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email*</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="h-14 border-muted/30 text-lg placeholder:text-muted-foreground/70 outline-none placeholder:text-lg focus:border-teal-500 transition-all focus:outline-none"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="subject">Subject*</Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Subject of your Enquiry"
                  className="h-14 border-muted/30 placeholder:text-muted-foreground/70 text-lg outline-none placeholder:text-lg focus:border-teal-500 transition-all focus:outline-none"
                  {...register("subject", { required: true })}
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-row">
              <div className="grid w-full gap-3">
                <Label htmlFor="message">Your Enquiry*</Label>
                <Textarea
                  placeholder="Type your Enquiry here"
                  id="message"
                  className="min-h-96 border-muted/30 placeholder:text-muted-foreground/70 text-lg outline-none placeholder:text-lg focus:border-teal-500 transition-all focus:outline-none"
                  {...register("message", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-10">
            <div className="text-xl text-zinc-400 font-overusedMedium">
              All set and filled? Email address looking good?
            </div>
            <button className="relative self-start flex flex-row items-center gap-5 overflow-hidden group border-b border-b-white/40 text-teal-500">
              <img
                src={arrow}
                className="w-7 group-hover:translate-x-2 stroke-white grayscale invert transition-all duration-500"
              />
              <div className="flex flex-col relative">
                <span className="text-xl group-hover:-translate-y-16 transition-all duration-500 font-overusedMedium uppercase">
                  Send
                </span>
                <span className="text-xl absolute translate-y-20 group-hover:-translate-y-0 transition-all duration-500 font-overusedMedium uppercase">
                  Send
                </span>
              </div>
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full -bottom-0 bg-primary-foreground"></span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
