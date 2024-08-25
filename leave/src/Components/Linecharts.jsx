import React from "react";
import bluebox from "../assets/icons/Rectangle blue.png"
import purplebox from "../assets/icons/Rectangle purple.png"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 40000,
    pv: 24000,
    rv: 35000,
    sv: 45000,
    uvLga: "Abaji",
    pvLga: "Bwari",
    rvLga: "Gwagwalada",
    svLga: "Kuje",
  },
  {
    name: "Tue",
    uv: 30000,
    pv: 13980,
    rv: 30000,
    sv: 42000,
    uvLga: "Abaji",
    pvLga: "Bwari",
    rvLga: "Gwagwalada",
    svLga: "Kuje",
  },
  {
    name: "Wed",
    uv: 20000,
    pv: 9800,
    rv: 20000,
    sv: 38000,
    uvLga: "Abaji",
    pvLga: "Bwari",
    rvLga: "Gwagwalada",
    svLga: "Kuje",
  },
  {
    name: "Thur",
    uv: 27800,
    pv: 39080,
    rv: 33000,
    sv: 47000,
    uvLga: "Abaji",
    pvLga: "Bwari",
    rvLga: "Gwagwalada",
    svLga: "Kuje",
  },
  {
    name: "Fri",
    uv: 18900,
    pv: 48000,
    rv: 28000,
    sv: 36000,
    uvLga: "Abaji",
    pvLga: "Bwari",
    rvLga: "Gwagwalada",
    svLga: "Kuje",
  },
  //   {
  //     name: "Sat",
  //     uv: 23900,
  //     pv: 38000,
  //     rv: 37000,
  //     sv: 49000,
  //     uvLga: "Abaji",
  //     pvLga: "Bwari",
  //     rvLga: "Gwagwalada",
  //     svLga: "Kuje",
  //   },
  //   {
  //     name: "Sun",
  //     uv: 34900,
  //     pv: 43000,
  //     rv: 39000,
  //     sv: 50000,
  //     uvLga: "Abaji",
  //     pvLga: "Bwari",
  //     rvLga: "Gwagwalada",
  //     svLga: "Kuje",
  //   },
];

const LgaBreakdown = () => {
  //   interface CustomTooltipProps {
  //     active?: boolean;
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     payload?: any[] | null;
  //     label?: string;
  //   }

  //   const CustomTooltip: React.FC<CustomTooltipProps> = ({
  //     active,
  //     payload,
  //     label,
  //   }) => {
  //     if (active && payload && payload.length) {
  //       return (
  //         <div className="custom-tooltip bg-white px-10 py-3 -ml-14 -mt-18 z-40 relative rounded-lg shadow-lg font-Urbanist cursor-pointer w-72">
  //           <p className="label text-h11 font-medium">{${label}}</p>
  //           <p className="text-h12 my-3">Revenue</p>
  //           {payload.map((entry, index) => (
  //             <div key={item-${index}} className="uv font-semibold text-h11 flex justify-between">
  //               <p>{${entry.payload[${entry.dataKey}Lga`]}`}</p>
  //               <span>{₦${entry.value}}</span>
  //             </div>
  //           ))}
  //         </div>
  //       );
  //     }

  //     return null;
  //   };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <h1 className="font-bold m-3">Tickets this Week</h1>
      <div className="labels flex m-3 justify-end">
        <div className="mx-4 p-3 flex ">
            <img src={bluebox} alt="" className="object-contain"/>
          <label className="p-1">Resolved</label>
        </div>
        <div className="mx-4 p-3 flex">
        <img src={purplebox} alt="" className="object-contain"/>
          <label className="p-1">Unresolved</label>
        </div>
      </div>
      <LineChart data={data} margin={{ top: 10, right: 5, left: 5, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          style={{ stroke: "gray", color: "black" }}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip cursor={false} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#6C60FF"
          strokeWidth={2}
          activeDot={{ fill: "#6C60FF", strokeWidth: 3, r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="sv"
          stroke="#CE2A96"
          strokeWidth={2}
          activeDot={{ fill: "#CE2A96", strokeWidth: 3, r: 7 }}
        />
        {/* <Line
           type="monotone"
           dataKey="rv"
           stroke="#FF8042"
           strokeWidth={2}
           activeDot={{ fill: "#FF8042", strokeWidth: 3, r: 7 }}
         /> */}
        {/* <Line
            type="monotone"
            dataKey="uv"
            stroke="#CE2A96"
            strokeWidth={2}
            activeDot={{ fill: "#CE2A96", strokeWidth: 3, r: 7 }}
          /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LgaBreakdown;
