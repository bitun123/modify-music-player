import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";


export default function FaceExpression({onClick = () => {}}) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

async function handleDetect(){
const expression =detect({ landmarkerRef, videoRef, setExpression })
onClick(expression)
}

    return (
        <div className="w-[20rem] h-[20rem] flex flex-col gap-3 items-center p-2 ">
            <video
                ref={videoRef}
                playsInline
            />
            <h2 className="text-xl font-semibold ">{expression}</h2>
            <button onClick={() => { handleDetect() }} className="px-1 py-1 border-none outline-none text-xl bg-orange-300 rounded active:scale-95 cursor-pointer">Detect expression</button>
        </div>
    );
}