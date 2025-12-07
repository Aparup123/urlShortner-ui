export const Container = ({ children, className }:
    {
        children: React.ReactNode;
        className?: string
    }) => {
    return (
        <div className={`max-w-5xl md:px-8 px-4 mx-auto ${className}`}>{children}</div>
    )
}