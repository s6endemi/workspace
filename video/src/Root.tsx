import { Composition } from "remotion";
import { MobilityIllusion } from "./MobilityIllusion";
import { PreviaAppFilm } from "./PreviaAppFilm";
import { MovementAgePulse } from "./MovementAgePulse";
import { WeekendScreening } from "./WeekendScreening";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PreviaAppFilm"
        component={PreviaAppFilm}
        durationInFrames={589}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MobilityIllusion"
        component={MobilityIllusion}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MovementAgePulse"
        component={MovementAgePulse}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="WeekendScreening"
        component={WeekendScreening}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
