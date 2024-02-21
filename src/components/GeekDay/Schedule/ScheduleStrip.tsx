import React, { useEffect, useRef, useState } from "react";
import "../../../styles/geekday-styles/schedule-styles/schedule.css";

import ScheduleBox from "./ScheduleBox";

interface Props {
    title: string;
    salonDetail: {
        title: string;
        speaker: string;
        time: string;
        image: string;
    }[];
    slideValue: number;
    setSlideValue: (value: number) => void;
}

const ScheduleStrip = (props: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isOrigin, setIsOrigin] = useState(false);

    useEffect(() => {
        if (containerRef.current && !isOrigin) {
            containerRef.current.scrollLeft = props.slideValue;
        }
    }, [isOrigin, props.slideValue]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const newPosition = containerRef.current.scrollLeft;
                props.setSlideValue(newPosition);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
        };
    }, [props]);

    return (
        <div className="schedule-strip">
            <p className="schedule-strip-title">{props.title}</p>
            <div
                ref={containerRef}
                className="schedule-strip-list"
                onTouchStart={() => setIsOrigin(true)}
                onTouchEnd={() => setIsOrigin(false)}
            >
                {props.salonDetail.map((member, index) => {
                    return (
                        <ScheduleBox
                            key={index}
                            title={member.title}
                            speaker={member.speaker}
                            time={member.time}
                            image={member.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ScheduleStrip;