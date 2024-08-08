import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="chat-container flex flex-row gap-[123px] mx-auto w-full max-w-[1728px] pt-[21px] bg-custom-gradient">
      <div className="chat-history flex flex-col w-full text-white max-w-[404px]  px-5 py-4 rounded-3xl border border-white bg-[#151313]">
        <div className="chat-boxes-container flex flex-col font-dosis gap-[18px]">
          <div className="chat-box flex overflow-hidden gap-6 items-center px-5 py-4 rounded-3xl border border-gray-700 bg-zinc-900 shadow-[0px_4px_8px_rgba(139,139,139,0.25)]">
            <div className="flex flex-col min-w-[240px] w-[284px]">
              <h1 className="text-2xl font-bold leading-none">
                How to open VSCode?
              </h1>
              <div className="mt-2 text-base leading-5">
                Open the Terminal, type <code>code .</code> to open VSCode.
                <br />
                Alternatively, go to the directory where your current project is
                located, open the Terminal in that directory, and type:{" "}
                <code>code .</code>
              </div>
            </div>
            <Image
              loading="lazy"
              src="/message-history-icon.png"
              alt="message-history-icon"
              className="object-contain w-5 aspect-square"
              width={24}
              height={24}
            />
          </div>

          <div className="chat-box flex overflow-hidden gap-6 items-center px-5 py-4 rounded-3xl border border-gray-700 bg-zinc-900 shadow-[0px_4px_8px_rgba(139,139,139,0.25)]">
            <div className="flex flex-col min-w-[240px] w-[284px]">
              <h1 className="text-2xl font-bold leading-none">
                How to open VSCode?
              </h1>
              <div className="mt-2 text-base leading-5">
                Open the Terminal, type <code>code .</code> to open VSCode.
                <br />
                Alternatively, go to the directory where your current project is
                located, open the Terminal in that directory, and type:{" "}
                <code>code .</code>
              </div>
            </div>
            <Image
              loading="lazy"
              src="/message-history-icon.png"
              alt="message-history-icon"
              className="object-contain w-5 aspect-square"
              width={24}
              height={24}
            />
          </div>

          <div className="chat-box flex overflow-hidden gap-6 items-center px-5 py-4 rounded-3xl border border-gray-700 bg-zinc-900 shadow-[0px_4px_8px_rgba(139,139,139,0.25)]">
            <div className="flex flex-col min-w-[240px] w-[284px]">
              <h1 className="text-2xl font-bold leading-none">
                How to open VSCode?
              </h1>
              <div className="mt-2 text-base leading-5">
                Open the Terminal, type <code>code .</code> to open VSCode.
                <br />
                Alternatively, go to the directory where your current project is
                located, open the Terminal in that directory, and type:{" "}
                <code>code .</code>
              </div>
            </div>
            <Image
              loading="lazy"
              src="/message-history-icon.png"
              alt="message-history-icon"
              className="object-contain w-5 aspect-square"
              width={24}
              height={24}
            />
          </div>

          <div className="chat-box flex overflow-hidden gap-6 items-center px-5 py-4 rounded-3xl border border-gray-700 bg-zinc-900 shadow-[0px_4px_8px_rgba(139,139,139,0.25)]">
            <div className="flex flex-col min-w-[240px] w-[284px]">
              <h1 className="text-2xl font-bold leading-none">
                How to open VSCode?
              </h1>
              <div className="mt-2 text-base leading-5">
                Open the Terminal, type <code>code .</code> to open VSCode.
                <br />
                Alternatively, go to the directory where your current project is
                located, open the Terminal in that directory, and type:{" "}
                <code>code .</code>
              </div>
            </div>
            <Image
              loading="lazy"
              src="/message-history-icon.png"
              alt="message-history-icon"
              className="object-contain w-5 aspect-square"
              width={24}
              height={24}
            />
          </div>

          <div className="chat-box flex overflow-hidden gap-6 items-center px-5 py-4 rounded-3xl border border-gray-700 bg-zinc-900 shadow-[0px_4px_8px_rgba(139,139,139,0.25)]">
            <div className="flex flex-col min-w-[240px] w-[284px]">
              <h1 className="text-2xl font-bold leading-none">
                How to open VSCode?
              </h1>
              <div className="mt-2 text-base leading-5">
                Open the Terminal, type <code>code .</code> to open VSCode.
                <br />
                Alternatively, go to the directory where your current project is
                located, open the Terminal in that directory, and type:{" "}
                <code>code .</code>
              </div>
            </div>
            <Image
              loading="lazy"
              src="/message-history-icon.png"
              alt="message-history-icon"
              className="object-contain w-5 aspect-square"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="chat-box-text mt-5 flex flex-col items-center justify-center px-5 py-4 rounded-[12px] font-bold text-[16px] font-saira border leading-[1.2] border-white bg-[#ffffff] text-black">
          Load more
        </div>
      </div>

      <div className="chat-input-container h-[918px] w-[962px] flex flex-col overflow-y-auto">
  <div className="chat-conversation-container flex flex-col flex-grow">
    <div className="chat-user flex overflow-hidden gap-6 items-center self-start px-6 py-3 text-2xl leading-tight text-white bg-gradient-to-r from-[#5D5588] to-[#8A81B9] rounded-[24px] max-md:px-5">
      <Image
        loading="lazy"
        src="/user.png"
        alt="user"
        width={66}
        height={66}
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.05] rounded-[99px] w-[66px]"
      />
      <div className="self-stretch my-auto">
        How to open my jam bottle?
      </div>
    </div>
    <div className="chat-ai flex w-[670px] flex-wrap gap-5 items-start self-end px-6 py-3 mt-8 text-2xl leading-7 text-black bg-[#BAB1EB] rounded-3xl">
      <Image
        loading="lazy"
        src="/dev.png"
        alt="dev"
        width={43}
        height={43}
        className="object-contain shrink-0 aspect-[0.86] w-[43px]"
      />
      <div className="w-[559px] max-md:max-w-full">
        Make sure your hands are dry, then grip the lid firmly and twist
        it while holding the bottle with your other hand. This should give
        you enough leverage to loosen the lid.
      </div>
    </div>
  </div>

  <div className="chat-text-input self-center flex flex-col mt-5 px-3.5 pt-4 pb-2 rounded-3xl border border-gray-700 border-solid w-[788px] h-[120px] shadow-[0px_4px_8px_rgba(62,58,83,1)]">
    <input type="text" className="w-full h-full bg-transparent outline-none text-base leading-tight text-neutral-400" placeholder="Ask me anything..." />
    <div className="flex flex-wrap gap-5 justify-between mt-9 w-full">
      <div className="flex gap-2 self-start mt-2.5 text-base font-semibold leading-tight text-white"></div>
      <Image src="/submit.png" alt="send-icon" width={24} height={24} className="object-contain justify-self-end cursor-pointer" />
    </div>
  </div>
</div>

    </div>
  );
};

export default page;
