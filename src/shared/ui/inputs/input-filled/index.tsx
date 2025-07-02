import { Input } from "@mantine/core"
import cx from "clsx"
import React, { forwardRef } from "react"

import s from "./styles.module.scss"
import { IInputStyled } from "./types"

export const InputFilled = forwardRef<HTMLInputElement, IInputStyled>(
  ({ error, height = 40, className, ...props }: IInputStyled, ref) => (
    <>
      <Input
        ref={ref}
        styles={{ input: { height } }}
        className={cx(s.input, className, {
          [s.error]: error,
        })}
        {...props}
      />
    </>
  ),
)

InputFilled.displayName = "InputFilled"
