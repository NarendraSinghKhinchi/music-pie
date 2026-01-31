import { View, ViewProps } from "react-native"

interface Props extends ViewProps {
  className?: string
}

export const NeumorphicContainer = ({ className = "", ...props }: Props) => {
  return (
    <View
      className={`bg-sky-100 rounded-3xl shadow-xl shadow-sky-200 ${className}`}
      {...props}
    />
  )
}
