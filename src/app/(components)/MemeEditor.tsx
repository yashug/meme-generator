"use client";
import { MemeTemplate } from "../(data)/types";
import { useForm } from "react-hook-form";
import MemeDisplay from "./MemeDisplay";

const textValues = (template: MemeTemplate) =>
  template.textareas.reduce(
    (values, ta) => ({
      ...values,
      [ta.id]: ta.text,
    }),
    {} as Record<string, string>
  );

const MemeEditor = ({ templates }: { templates: MemeTemplate[] }) => {
  const { register, handleSubmit, watch, setValue } = useForm<{
    template: string;
    values: Record<string, string>;
  }>({
    defaultValues: {
      template: templates[0].id,
      values: {},
    },
  });

  const templateId = watch("template");
  const template = templates.find((template) => template.id === templateId)!;

  const values = watch("values");

  return (
    <form>
      <div className="grid sm:grid-cols-1 md:grid-cols-[60%_40%]">
        <MemeDisplay template={template} values={values} />
        <div className="px-2">
          <select
            className="select select-bordered w-full"
            value={templateId}
            onChange={(evt) => {
              const newTemplate = templates.find(
                (template) => template.id === evt.target.value
              )!;

              setValue("template", newTemplate.id);
              setValue("values", textValues(newTemplate));
            }}
          >
            <option disabled>Pick your template</option>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.id}
              </option>
            ))}
          </select>
          {template.textareas.map((textarea, index) => (
            <div key={index} className="mt-5">
              <label htmlFor={textarea.id}>{textarea.id}</label>
              <div>
                <input
                  className="input w-full input-bordered"
                  type="text"
                  {...register(`values.${textarea.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default MemeEditor;
