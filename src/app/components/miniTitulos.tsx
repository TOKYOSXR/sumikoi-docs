

export default function MiniTitulos({ titulo }: { titulo: string }) {
    return (
        <div className="flex justify-center items-center pt-20 flex-col gap-5 mb-10 dark:bg-[#2c2c2c]">
            <h1 className="text-3xl font-bold text-center text-[#d81e1e] dark:text-white">{titulo}</h1>
            <div className="w-24 h-1 bg-[#F3603A] rounded-full"></div>
        </div>
    );
}