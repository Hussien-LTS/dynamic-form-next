import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";

interface Field {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required?: boolean;
  listOfValues?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FieldRenderer: React.FC<{ field: Field; control: any }> = ({
  field,
  control,
}) => {
  switch (field.fieldType) {
    case "TEXT":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ""}
          rules={{
            required: field.required ? `${field.name} is required` : undefined,
            minLength: field.minLength
              ? {
                  value: field.minLength,
                  message: `Minimum length is ${field.minLength}`,
                }
              : undefined,
            maxLength: field.maxLength
              ? {
                  value: field.maxLength,
                  message: `Maximum length is ${field.maxLength}`,
                }
              : undefined,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={field.name}
              value={value}
              onChange={onChange}
              fullWidth
              error={!!error}
              helperText={error ? error.message : ""}
              margin="normal"
            />
          )}
        />
      );

    case "LIST":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ""}
          rules={{
            required: field.required ? `${field.name} is required` : undefined,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              value={value}
              onChange={onChange}
              fullWidth
              error={!!error}
              displayEmpty
            >
              {field.listOfValues?.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      );

    case "RADIO":
      return (
        <FormControl key={field.id} component="fieldset">
          <FormLabel component="legend">{field.name}</FormLabel>
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.defaultValue || ""}
            rules={{
              required: field.required
                ? `${field.name} is required`
                : undefined,
            }}
            render={({ field: controllerField, fieldState: { error } }) => (
              <div>
                <RadioGroup {...controllerField}>
                  {field.listOfValues?.map((value, index) => (
                    <FormControlLabel
                      key={index}
                      value={value}
                      control={<Radio />}
                      label={value}
                    />
                  ))}
                </RadioGroup>
                {error && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "-0.5rem",
                    }}
                  >
                    {error.message}
                  </p>
                )}
              </div>
            )}
          />
        </FormControl>
      );

    default:
      return null;
  }
};

export { FieldRenderer };
