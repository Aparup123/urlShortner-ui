export const Container = ({ children, className }:
    {
        children: React.ReactNode;
        className?: string
    }) => {
    return (
        <div className={`max-w-5xl px-4 mx-auto ${className}`}>{children}</div>
    )
}