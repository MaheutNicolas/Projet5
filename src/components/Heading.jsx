function Heading ({ as: Tag, className, children }) {
    return <Tag className={className}>{children}</Tag>;
};

export default Heading;