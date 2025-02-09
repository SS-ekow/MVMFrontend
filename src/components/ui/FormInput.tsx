import { type InputHTMLAttributes, forwardRef } from "react"
import { cn } from "../../lib/utils"

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-[#272343]">
        {label}
      </label>
      <input
        className={cn(
          "w-full px-3 py-2 bg-white border rounded-md text-[#272343] placeholder-[#9a9caa]",
          "focus:outline-none focus:ring-2 focus:ring-[#029fae] focus:border-transparent",
          "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
          error ? "border-red-500" : "border-[#e1e3e5]",
          className,
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
})

FormInput.displayName = "FormInput"

export { FormInput }

