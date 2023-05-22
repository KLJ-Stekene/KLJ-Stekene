type BoardMemberCardProps = {
    firstName: String,
    lastName: String,
}

export default function BoardMemberCard({firstName, lastName}: BoardMemberCardProps) {
    return <div>
        <span>{firstName} {lastName}</span>
    </div>;
}