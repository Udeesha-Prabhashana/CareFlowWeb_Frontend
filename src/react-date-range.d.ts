declare module 'react-date-range' {
  import { ComponentType } from 'react';

  export interface Range {
    startDate: Date;
    endDate: Date;
    key: string;
  }

  export interface RangeKeyDict {
    selection: Range;
  }

  export interface DateRangeProps {
    editableDateInputs?: boolean;
    onChange: (rangesByKey: RangeKeyDict) => void;
    moveRangeOnFirstSelection?: boolean;
    ranges: Range[];
    className?: string;
    minDate?: Date;
  }

  export const DateRange: ComponentType<DateRangeProps>;
}
