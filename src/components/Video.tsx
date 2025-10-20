import ReactPlayer from "react-player"
import { Loader } from "lucide-react";
// import { next, useCurrentLesson } from "../store/slices/player";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
    //const dispatch = useAppDispatch();
    const { currentLesson } = useCurrentLesson();
    //const isCourseLoading = useAppSelector(state => state.player.isLoading);
    const isLoading = useStore(state => state.isLoading);
    const next = useStore(state => state.next);

    function handlePlayNext() {
        //dispatch(next())
        next()
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video">
            {/* {isCourseLoading ? (
                <div className="flex h-full items-center justify-center">
                    <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
                </div>
            ) : (
                <ReactPlayer  
                    width="100%"
                    height="100%"
                    controls
                    playing
                    onEnded={handlePlayNext}
                    src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />
            )} */}
            {isLoading ? (
                <div className="flex h-full items-center justify-center">
                    <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
                </div>
            ) : (
                <ReactPlayer  
                    width="100%"
                    height="100%"
                    controls
                    playing
                    onEnded={handlePlayNext}
                    src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />
            )}
        </div>
    )
}