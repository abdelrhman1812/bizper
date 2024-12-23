import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectLanguage() {
  return (
    <Select defaultValue="usa">
      <SelectTrigger
        className=" hidden md:flex  w-[180px] p-5 border-0 focus:border-0 outline-none"
        aria-label="Select a country"
      >
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {[
            {
              value: "usa",
              label: "USA",
              flag: "https://readymadeui.com/usa_flag.webp",
            },
            {
              value: "england",
              label: "England",
              flag: "https://readymadeui.com/uk_flag.webp",
            },
            {
              value: "india",
              label: "India",
              flag: "https://readymadeui.com/india_flag.webp",
            },
            {
              value: "singapore",
              label: "Singapore",
              flag: "https://readymadeui.com/singapore_flag.webp",
            },
          ].map((country) => (
            <SelectItem key={country.value} value={country.value}>
              <div className="flex items-center space-x-2">
                <img
                  src={country.flag}
                  alt={`${country.label} flag`}
                  className="w-5 h-5 rounded"
                />
                <p>{country.label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
