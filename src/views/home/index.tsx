import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Internal Import
import pkg from "../../../package.json";

export const HomeView: FC = ({ setOpenCreateModal }) => {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[72px]">
      <div className="px-6 py-4">
        <div className="bg-default-950/40 rounded-2xl">
          <div className="p-6">
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="bg-primary/10 -z-1 start-0 absolute top-0 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none"></div>
              <div className="bg-primary/20 -z-1 end-0 absolute bottom-0 h-14 w-14 animate-ping rounded-full"></div>

              <div>
                <span className="text-primary bg-primary/20 rounded-md px-3 py-1 text-sm font-medium uppercase tracking-wider">
                  CREATE SOLANA TOKEN {pkg.version}
                </span>

                <h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
                  Create Your Solana Tokens Without Code
                </h1>
                <p className="text-default-300 md:text-lg">
                  Launch your solana token. All in one solana token development
                  and deployment.
                </p>

                <div className="new_add_css">
                  <a
                    onClick={() => setOpenCreateModal(true)}
                    className="hover:bg-primary-hover bg-purple-400 group-first: mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-1 text-white transition-all duration-500"
                  >
                    <span className="bg-primary/20 text-primary me-2 flex h11 w-11 items-center justify-center rounded-full group-hover:bg-white/10 group-hover:text-white">
                      <i data-lucide="image">
                        <MdGeneratingTokens />
                      </i>
                    </span>
                    Create
                  </a>
                  <a className="mt-8">
                    <WalletMultiButton />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
