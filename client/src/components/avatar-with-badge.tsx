import groupImg from "@/assets/group-img.png"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Props {
    name: string;
    src?: string;
    size?: string
    isOnline?: boolean;
    isGroup?: boolean;
}

const AvatarWithBadge = ({ name, src, size = "w-9 h-9", isOnline, isGroup = false }: Props) => {

    const avatar = isGroup ? groupImg : src || "";
    return (
        <div className="relative shrink-0" >
            <Avatar className={size}>
                <AvatarImage src={avatar} />
                <AvatarFallback
                    className="bg-primary/10  text-primary font-semibold" >
                    {name.charAt(0)}
                </AvatarFallback>
            </Avatar>
            {
                isOnline && !isGroup && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-2 bg-green-500 rounded-full" />
                )}
        </div>
    )
};

export default AvatarWithBadge
