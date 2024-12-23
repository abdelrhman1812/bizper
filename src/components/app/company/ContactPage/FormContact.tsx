"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const FormContact = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="overlay absolute top-5 left-50 transform -z-10 translate-x-1/2 translate-y-1/2">
        <Image
          src={"/Image/Contact/bg.png"}
          width={760}
          height={362}
          alt="bg"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[24px] md:text-[32px] text-secondary font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor magnaaliqua.
            </p>
          </div>

          <div className="space-y-6">
            {/* Call Us */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-primary p-3 rounded-lg ">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-lightGray">0100803461</p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-primary p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-mail</h3>
                <p className="text-lightGray">abdelrhmanali1812@gamil.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-primary p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-lightGray">Mansoura</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            {["Facebook", "Twitter", "Linkedin", "Skype", "Pinterest"].map(
              (social) => (
                <Link
                  key={social}
                  href="/"
                  className="shadow px-3 py-2 hover:bg-primary hover:text-white rounded transition duration-500 ease-in-out"
                >
                  {social}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-[24px] md:text-[32px] text-secondary font-bold mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-lightGray mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolor magnaaliqua.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="Name"
                className="bg-[#EFF0F6] outline-none focus:border-primary py-4 pl-4 rounded-md"
              />
              <input
                placeholder="Phone"
                className="bg-[#EFF0F6] outline-none focus:border-primary py-4 pl-4 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#EFF0F6] outline-none focus:border-primary py-4 pl-4 rounded-md"
              />
              <input
                placeholder="Website"
                className="bg-[#EFF0F6] outline-none focus:border-primary py-4 pl-4 rounded-md"
              />
            </div>
            <Textarea
              placeholder="How can we help"
              className="min-h-[150px] bg-[#EFF0F6]"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-red-600 text-white py-6 text-lg"
            >
              SUBMIT NOW
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
