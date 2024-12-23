import NextTopNav from "./NextTopNav";
import SocialIcons from "./SocialIcons";
import { TopContact } from "./TopContact";

export const TopNavBar = () => {
  return (
    <>
      <section className="bg-foreground py-4 hidden lg:block">
        <div className="container flex justify-between  ">
          <TopContact />
          {/* Social Icons */}
          <SocialIcons />
        </div>
      </section>

      <NextTopNav />
    </>
  );
};
