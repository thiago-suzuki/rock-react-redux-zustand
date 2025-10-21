//import { MessageCircle } from "lucide-react"
import { useEffect } from "react"
import { Header } from "../components/Header"
import { Video } from "../components/Video"
import { Module } from "../components/Module"
// import { useAppDispatch, useAppSelector } from "../store/hooks"
// import { loadCourse, useCurrentLesson } from "../store/slices/player"
import { useCurrentLesson, useStore } from "../zustand-store";

export function Player() {
    // const dispatch = useAppDispatch()

    // const modules = useAppSelector(state => state.player.course?.modules);

    const course = useStore(state => state.course);
    const load = useStore(state => state.load);

    const { currentLesson, currentModule } = useCurrentLesson();

    useEffect(() => {
        // setTimeout(() => {
        //     //dispatch(loadCourse())
        // }, 3000)
        load();
    }, [])

    useEffect(() => {
        if(currentLesson && currentModule) document.title = `Ouvindo: ${currentLesson.title} - ${currentModule.title}`
    }, [currentLesson])

    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center p-4">
            <div className="flex w-[1180px] flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Header />

                    {/* <button className="flex items-center gap-2 bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                        <MessageCircle className="w-4 h-4" />
                        Deixar feedback
                    </button> */}
                </div>

                <main className="
                    lg:relative flex flex-col lg:flex-row 
                    overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 
                    lg:pr-80
                ">
                    <div className="flex-1">
                        <Video />
                    </div>
                    <aside
                        className="
                            w-full lg:w-80
                            lg:absolute lg:bottom-0 lg:top-0 lg:right-0
                            lg:border-l border-t 
                            divide-y-2 divide-zinc-900 border-zinc-800 
                            bg-zinc-900 
                            overflow-y-scroll 
                            scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 
                            order-2 lg:order-none
                            max-h-[50vh] lg:max-h-none
                        "
                    >
                        {/* {modules && modules.map((module, index) => {
                            return (
                                <Module
                                    key={module.id} 
                                    moduleIndex={index} 
                                    title={module.title} 
                                    amountOfLessons={module.lessons.length} 
                                />
                            )
                        })} */}

                        {course?.modules && course?.modules.map((module, index) => {
                            return (
                                <Module
                                    key={module.id} 
                                    moduleIndex={index} 
                                    title={module.title} 
                                    amountOfLessons={module.lessons.length} 
                                />
                            )
                        })}
                    </aside>
                </main>
            </div>
        </div>
    )
}