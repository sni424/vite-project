import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "../atoms";

const Trello = () => {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
        setMinutes(Number(e.currentTarget.value));
    };
    const [hour, setHour] = useRecoilState(hourSelector);
    const onHourChange = (e: React.FormEvent<HTMLInputElement>) => {
        setHour(Number(e.currentTarget.value));
    };

    return (
        <div>
            <input
                value={minutes.toString()}
                onChange={onMinutesChange}
                type="number"
                placeholder="Minutes"
            />
            <input
                value={hour.toString()}
                onChange={onHourChange}
                type="number"
                placeholder="Hours"
            />
        </div>
    );
};

export default Trello;
