import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Saira } from "next/font/google";
import Link from "next/link";
import { HTMLProps, SVGProps } from "react";

const saira = Saira({ subsets: ["latin"], weight: "600" });

export default function TeamSection() {
  return (
    <div className="min-h-screen relative flex justify-center py-20 overflow-x-hidden">
      {/* Graphics */}
      <div className="hidden lg:block absolute top-20 left-20">
        <TransparentRing className="absolute translate-y-1/2 translate-x-1/2 z-20" />
        <SolidRing className="absolute " />
      </div>
      <BlurBlob className="absolute bottom-0 left-0" />
      <BlurBlob className="absolute bottom-20 left-20 blur-xl h-20 w-20" />
      <BlurBlob className="absolute top-1/2 right-8 blur-[100px]" />

      {/* Text Content */}
      <div className="w-full max-w-2xl relative lg:translate-x-1/2">
        <h1 className={cn("text-center lg:text-5xl", saira.className)}>
          Our Team
        </h1>

        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-12 w-full mt-12 px-8 sm:px-16">
          <TeamCard
            teammateName="Liam"
            teammateImgSrc="/liam.jpg"
            discordHandle="not.liam"
            discordLink="#"
          />
          <TeamCard
            teammateName="Spitfire"
            teammateImgSrc="/spitfire.png"
            discordHandle="spitfire_kasnoviz"
            discordLink="#"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-12 w-full mt-12 px-8 sm:px-16 relative lg:-left-20">
          <TeamCard
            teammateName="Shafi"
            teammateImgSrc="/shafi.png"
            discordHandle="shafi"
            discordLink="#"
          />
          <TeamCard
            teammateName="Potenzy"
            teammateImgSrc="/potenzy.png"
            discordHandle="potenzy"
            discordLink="#"
          />
        </div>
      </div>
    </div>
  );
}

function SolidRing({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-80 w-80 bg-gradient-to-tl from-brightYellow to-dumbYellow rounded-full flex items-center justify-center",
        className
      )}
    >
      <div className="bg-davy h-2/3 w-2/3 rounded-full" />
    </div>
  );
}

function TransparentRing({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-80 w-80 bg-davy/70 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-brightYellow",
        className
      )}
    >
      <div className="bg-davy h-2/3 w-2/3 rounded-full border-2 border-brightYellow" />
    </div>
  );
}

function BlurBlob({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-40 w-40 bg-brightYellow blur-[200px] rounded-full",
        className
      )}
    ></div>
  );
}

type TeamCardProps = HTMLProps<HTMLDivElement> & {
  teammateName: string;
  teammateImgSrc: string;
  discordHandle?: string;
  discordLink?: string;
};

function TeamCard({
  className,
  teammateName,
  teammateImgSrc,
  discordHandle,
  discordLink,
  ...props
}: TeamCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center gap-4 pt-20 pb-12 px-12 border-2 border-brightYellow rounded-2xl shadow-xl shadow-brightYellow",
        className
      )}
    >
      <Avatar className="w-16 h-16">
        <AvatarImage
          src={teammateImgSrc}
          className="object-cover"
        ></AvatarImage>
        <AvatarFallback className="rounded">AZ</AvatarFallback>
      </Avatar>

      <p className="font-semibold text-lg text-center">
        {discordHandle} as {teammateName}
      </p>

      <Link href={discordLink ?? "#"}>
        <Button className="w-full h-12 overflow-hidden">
          <LogosDiscord className="h-32 w-32" />
        </Button>
      </Link>
    </div>
  );
}

export function LogosDiscord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.12em"
      height="1em"
      viewBox="0 0 512 100"
      {...props}
    >
      <path
        fill="#5865F2"
        d="M82.003 0a104.2 104.2 0 0 1 26.402 8.297c14.484 21.63 21.68 46.025 19.023 74.163c-11.082 8.286-21.831 13.313-32.4 16.603a80 80 0 0 1-6.935-11.421a68 68 0 0 0 10.94-5.326a66 66 0 0 1-2.677-2.118c-20.805 9.85-43.684 9.85-64.74 0c-.866.73-1.762 1.44-2.678 2.118a68 68 0 0 0 10.921 5.315a80.5 80.5 0 0 1-6.935 11.422C22.365 95.763 11.626 90.736.544 82.46C-1.722 58.188 2.807 33.566 19.516 8.317A104 104 0 0 1 45.939 0c1.147 2.056 2.506 4.822 3.422 7.022q14.494-2.22 29.26 0A77 77 0 0 1 82.003 0m253.933 31.687q10.567 0 17.544 4.533v13.17q-2.461-1.727-5.738-2.807q-3.274-1.08-7.016-1.08c-4.368 0-7.78.813-10.246 2.447s-3.703 3.763-3.703 6.405c0 2.59 1.196 4.709 3.592 6.374c2.397 1.655 5.868 2.488 10.428 2.488c2.345 0 4.66-.35 6.945-1.038c2.275-.7 4.238-1.553 5.878-2.56v12.737q-7.745 4.75-17.967 4.75c-5.736-.02-10.629-1.028-14.665-3.043s-7.086-4.75-9.119-8.204s-3.06-7.34-3.06-11.658s1.057-8.183 3.17-11.586q3.17-5.104 9.302-8.02c4.085-1.942 8.967-2.908 14.655-2.908m-52.917-.01c3.945 0 7.559.431 10.852 1.295c3.29.864 6.008 1.964 8.173 3.31v11.299c-2.216-1.347-4.753-2.406-7.65-3.208a33.6 33.6 0 0 0-8.92-1.182c-4.418 0-6.621.77-6.621 2.303c0 .72.342 1.254 1.026 1.614s1.942.73 3.764 1.12l7.045 1.296q6.904 1.22 10.287 4.276q3.383 3.054 3.382 9.037c0 4.37-1.86 7.834-5.596 10.404q-5.599 3.855-15.893 3.855c-4.037-.01-7.96-.514-11.766-1.522c-3.805-1.007-7.238-2.467-10.287-4.39V59.24q3.457 2.73 9.27 4.503c3.875 1.172 7.62 1.758 11.243 1.758q2.536 0 3.835-.679c.866-.452 1.3-.997 1.3-1.624c0-.72-.232-1.316-.706-1.8c-.473-.483-1.39-.884-2.747-1.223l-8.455-1.943c-4.842-1.151-8.275-2.745-10.317-4.79c-2.044-2.036-3.061-4.709-3.061-8.02c0-2.785.886-5.201 2.678-7.268q2.672-3.1 7.609-4.78c3.292-1.13 7.136-1.696 11.555-1.696M512 23.833v51.813h-17.263V66.22c-1.46 3.547-3.674 6.25-6.653 8.101c-2.98 1.84-6.664 2.766-11.032 2.766c-3.905 0-7.306-.967-10.217-2.91q-4.362-2.914-6.732-7.988c-1.57-3.382-2.367-7.206-2.367-11.483q-.075-6.615 2.507-11.874c1.712-3.506 4.136-6.24 7.257-8.204c3.12-1.963 6.684-2.95 10.68-2.95c8.082 0 13.548 3.524 16.408 10.564l.148.373V23.833zm-126.533 7.833c5.587 0 10.407.956 14.444 2.879c4.036 1.922 7.117 4.554 9.23 7.916c2.115 3.362 3.17 7.217 3.17 11.586c0 4.318-1.055 8.225-3.17 11.73c-2.113 3.506-5.204 6.26-9.27 8.276c-4.067 2.015-8.868 3.022-14.413 3.022c-5.547 0-10.348-.997-14.404-3.012c-4.067-2.015-7.166-4.77-9.301-8.276c-2.133-3.505-3.21-7.412-3.21-11.73c0-4.317 1.066-8.173 3.21-11.555c2.143-3.382 5.224-6.035 9.27-7.957c4.036-1.923 8.858-2.879 14.444-2.879m-132.36 11.802v32.404h-17.21V43.468c5.273 2.323 11.816 2.426 17.21 0m195.128-10.856c2.486 0 4.62.576 6.412 1.727v15.544c-1.791-1.203-4.107-1.799-6.975-1.799c-3.756 0-6.654 1.162-8.668 3.485c-2.022 2.324-3.03 5.942-3.03 10.836v13.241h-17.261V33.548h16.91v13.385c.936-4.894 2.457-8.502 4.55-10.836c2.084-2.323 4.78-3.485 8.062-3.485m-248.79-7.34c6.624 0 12.22 1.059 16.81 3.166c4.58 2.108 8.013 5.048 10.288 8.81c2.273 3.763 3.42 8.07 3.42 12.923c0 4.75-1.187 9.057-3.562 12.912c-2.376 3.866-5.99 6.92-10.85 9.17c-4.861 2.252-10.882 3.383-18.078 3.383h-25.506V25.272zM42.728 41.348c-6.432 0-11.505 5.912-11.505 13.098s5.184 13.087 11.505 13.087c6.432 0 11.515-5.901 11.505-13.087c.11-7.197-5.073-13.098-11.505-13.098m42.516 0c-6.432 0-11.505 5.912-11.505 13.098s5.184 13.087 11.505 13.087c6.432 0 11.505-5.901 11.505-13.087c.11-7.197-5.073-13.098-11.505-13.098m300.214 3.58c-3.01 0-5.366.853-7.087 2.56c-1.71 1.707-2.567 3.989-2.567 6.868q0 4.317 2.567 6.939c1.712 1.748 4.076 2.632 7.087 2.632c2.957-.01 5.294-.884 7.004-2.632c1.713-1.748 2.577-4.06 2.577-6.94c0-2.878-.856-5.17-2.577-6.867q-2.567-2.56-7.004-2.56m99.767.216q-4.363 0-6.975 2.56c-1.742 1.707-2.607 3.917-2.607 6.652c0 2.734.865 4.965 2.607 6.692s4.037 2.59 6.905 2.59c2.908-.01 5.243-.883 7.006-2.63c1.762-1.749 2.637-4.02 2.637-6.796c0-2.684-.856-4.873-2.567-6.55c-1.712-1.675-4.057-2.518-7.006-2.518m-287.038-7.063h-8.596v24.756h7.6c4.46 0 7.892-1.141 10.287-3.413c2.396-2.283 3.594-5.387 3.594-9.325c0-3.65-1.068-6.559-3.201-8.738c-2.134-2.18-5.365-3.28-9.684-3.28M244.51 22.24c4.752 0 8.606 3.534 8.606 7.895s-3.854 7.896-8.606 7.896c-4.754 0-8.607-3.535-8.607-7.896s3.853-7.895 8.607-7.895"
      ></path>
    </svg>
  );
}
