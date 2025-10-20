//import { useAppSelector } from "../store/hooks";
//import { useCurrentLesson } from "../store/slices/player";

import { Music } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
    const { currentModule, currentLesson } = useCurrentLesson();    
    // const isCourseLoading = useAppSelector(state => state.player.isLoading);

    const isLoading = useStore(store => store.isLoading)

    //if (isCourseLoading) return  <h1 className="text-2xl font-bold">Carregando...</h1>
    if (isLoading) return  <h1 className="text-2xl font-bold">Carregando...</h1>
    

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold flex items-center">
                <Music className="w-6 h-6 mr-2 text-blue-600 animate-beat"/>
                {currentLesson?.title}
            </h1>
            <span className="text-sm text-zinc-400">{currentModule?.title}</span>
        </div>
    )
}