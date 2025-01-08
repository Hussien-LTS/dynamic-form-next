import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";

interface FieldData {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required?: boolean;
  listOfValues?: string[];
}

interface FormProps {
  fields: FieldData[];
}

const DynamicForm: React.FC<FormProps> = ({ fields }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 600, margin: "auto" }}
    >
      {fields.map((field) => {
        const isRequired = field.required ? " (Required)" : "";
        switch (field.fieldType) {
          case "TEXT":
            return (
              <Controller
                key={field.id}
                name={field.name}
                control={control}
                defaultValue={field.defaultValue || ""}
                rules={{
                  required: field.required
                    ? `${field.name} is required`
                    : undefined,
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
                render={({ field: controllerField, fieldState: { error } }) => (
                  <TextField
                    {...controllerField}
                    fullWidth
                    label={`${field.name}${isRequired}`}
                    margin="normal"
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
            );

          case "LIST":
            return (
              <Controller
                key={field.id}
                name={field.name}
                control={control}
                defaultValue={field.defaultValue || ""}
                render={({ field: controllerField, fieldState: { error } }) => (
                  <TextField
                    {...controllerField}
                    select
                    fullWidth
                    label={`${field.name}${isRequired}`}
                    margin="normal"
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : ""}
                  >
                    {field.listOfValues?.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            );

          case "RADIO":
            return (
              <FormControl key={field.id} component="fieldset">
                <FormLabel component="legend">{field.name}</FormLabel>
                <Controller
                  key={field.id}
                  name={field.name}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{
                    required: field.required
                      ? `${field.name} is required`
                      : undefined,
                  }}
                  render={({
                    field: controllerField,
                    fieldState: { error },
                  }) => (
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
      })}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
