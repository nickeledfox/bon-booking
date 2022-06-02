export type SearchPropertiesProps = {
  state: {
    from: Location;
    destination: string;
    date: Date | any;
    options: {
      adult: string;
      children: string;
      room: string;
    };
  };
};
