"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../UI/Form/Inputs/TextInput";
import DatePickerInput from "../UI/Form/Inputs/DatePickerInput";
import FormWrapper from "../UI/Form/FormWrapper/FormWrapper";
import { useMetricsStore } from "@/stores/metricsStore";
import { MetricsSchema, metricsSchema } from "@/schemas/metricsSchema";

type NewMetricsFormProps = {
  buttonText: string;
  onSubmit: (data: MetricsSchema) => void;
};

const NewMetricsForm = ({ buttonText, onSubmit }: NewMetricsFormProps) => {
  const methods = useForm<MetricsSchema>({
    resolver: zodResolver(metricsSchema),
    defaultValues: {
      metricsDate: new Date(),
    },
  });
  return (
    <FormWrapper
      buttonText={buttonText}
      methods={methods}
      onSubmit={onSubmit}>
      <DatePickerInput
        name="metricsDate"
        label="Date of metrics"
      />
      <TextInput
        name="weight"
        label="Weight"
        placeholder="After waking up, before eating or drinking"
        type="number"
      />
      <TextInput
        name="chest"
        label="Chest"
        placeholder="Measured at nipple level, arms relaxed"
        type="number"
      />
      <TextInput
        name="waist"
        label="Waist"
        placeholder="Narrowest part of the torso (above belly button)"
        type="number"
      />
      <TextInput
        name="hips"
        label="Hips"
        placeholder="Widest part of the buttocks"
        type="number"
      />
      <TextInput
        name="shoulders"
        label="Shoulders"
        placeholder="Around the widest part of the shoulders"
        type="number"
      />
      <TextInput
        name="biceps"
        label="Biceps"
        placeholder="Flexed, around the peak of the bicep"
        type="number"
      />
      <TextInput
        name="forearms"
        label="Forearms"
        placeholder="Thickest part of the forearm"
        type="number"
      />
      <TextInput
        name="thighs"
        label="Thighs"
        placeholder="Upper thigh, just below the glutes"
        type="number"
      />
      <TextInput
        name="calves"
        label="Calves"
        placeholder="Thickest part of the lower leg"
        type="number"
      />
    </FormWrapper>
  );
};

export default NewMetricsForm;
