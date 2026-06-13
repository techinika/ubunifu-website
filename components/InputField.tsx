import type { ComponentType, SVGProps } from "react";

type Props = {
  id: string;
  label: string;
  type?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ id, label, type = "text", icon: Icon, placeholder, value, onChange }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type} name={id} id={id} value={value} onChange={onChange} required
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-400"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
