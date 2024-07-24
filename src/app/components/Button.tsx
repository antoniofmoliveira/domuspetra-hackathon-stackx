import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
/**
 * Button component.
 *
 * A button component that can be used to trigger an action or navigate to another page.
 *
 * @component
 * @example
 * <Button>Click me</Button>
 *
 * @param {React.ReactNode} children - The content of the button.
 * @param {string} className - Additional class names for the button.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} rest - Additional props for the button.
 * @returns {JSX.Element} The rendered button component.
 */
export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
