import { FC } from "react";
import dynamic from "next/dynamic";
// Internal import
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitch from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <NetworkSwitch />
        <select
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="select max-w-xs border-none bg-transparent outline-0 cursor-pointer"
        >
          <option value="mainnet-beta">main</option>
          <option value="devnet">dev</option>
          <option value="testnet">test</option>
        </select>
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
