export enum LayoutBreakpoints {
    MOBILE        = '(max-width: 599px)',
    TAB           = '(min-width: 600px) and (max-width: 1279px)',
    DESKTOP       = '(min-width: 1280px) and (max-width: 1919px)',
    LARGE_DESKTOP = '(min-width: 1920px)',
}

export interface EmployeeElement {
    id: string;
    name: string;
    position: string;
    about: string,     
    joining_date: string;
  }
  
export let ELEMENT_DATA: EmployeeElement[] = [
    {
        id: `a3a4b3df-eac4-4071-9c6d-2076bceac3fd`,
        position: "Human Resource Manager",
        name: 'Rahul Verma',
        about: `Lorem ipsum dolor  earum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `b1441def-b1ac-4bce-a123-07f9dfecc134`,
        position: "Project Manager", 
        name: 'Ritesh Kumar', 
        about: `Lorem ipsum dolor  id ratione omnis dignissimos earum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `58d13005-7f6f-4229-9e1b-41dd92d689d9`,
        position: "Product Designer", 
        name: 'Alena Jonas', 
        about: `Lorem ipsum dolor. Earum nostrum eveniet dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `3330a0ee-9dd9-42ae-89e4-d97d923b1d23`,
        position: "Ui/Ux designer", 
        name: 'Rabindra Babau Rahula', 
        about: `Lorem ipsum dolor nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `5ebb123d-58ab-461d-9f14-fa3163fcb396`,
        position: "Frontend Developer", 
        name: 'Peter Parker', 
        about: `Lorem ipsum dolor s earum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `2507e8d0-1d7e-4557-9822-4c779bcdb48c`,
        position: "Backend Developer", 
        name: `Ritik d'Souja`, 
        about: `Lorem ipsum dolor sit amet .
        Dolores velit similique incidunt ea id ratione omnis dignissimos earum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `43636687-b29f-41be-81e9-ffccaa1e243a`,
        position: "Fullstack Developer", 
        name: 'Sophiya Christine', 
        about: `Lorem ipsum dolor  nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `3fc90810-3266-4560-80a3-6c7dcc676831`,
        position: "Backend Developer", 
        name: 'Sophiya Singh', 
        about: `Lorem ipsum dolor nobis autem aliquam dolore ad `,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `9ae92bb6-f44c-4a54-9c16-37b652a19586`,
        position: "Product Designer", 
        name: 'Sophiya Agrawal', 
        about: `Lorem ipsum dolor sit s reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `2da7d001-4062-4ca4-9b79-d436136e662c`,
        position: "Ui/Ux designer", 
        name: 'Anubhav Agrawal', 
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum eveniet voluptatibus omnis itaque ut nulla, quaerat amet. Amet repellendus perspiciatis, laboriosam eius quae laudantium iste porro sapiente sint provident.
        Dolores velit similique incidunt  error repellat.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `bb7f218f-8ce9-4a5b-ba37-c9e2676e45a3`,
        position: "Human Resource Manager", 
        name: 'Swapnil Srivastava', 
        about: `Lorem ipsum dolorearum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `47263af5-0e8f-453e-accf-afe778defabc`,
        position: "Fullstack Developer", 
        name: 'Anushka Mishra', 
        about: `Lorem ipsum dolor sit  voluptatibus omnis itaque ut nulla, quaerat amet. Amet repellendus perspiciatis, laboriosam eius quae laudantium iste porro sapiente sint provident.
        Dolores `, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `a651c9ed-5d10-4fbc-957b-e13163c324f3`,
        position: "Frontend Developer", 
        name: 'Manish Agrahari', 
        about: `Lorem ipsum dolor  dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `cdeccd1c-76d2-49c6-a7d9-fb953dff6c1e`,
        position: "Product Designer", 
        name: 'Urja Singh', 
        about: `Lorem ipsum   incidunt ea id ratione omnis dignissimos earum nobis autem aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `9a7f02ae-686c-48ca-9f00-771b6818ff7d`,
        position: "Backend Developer", 
        name: 'Riva Diwan', 
        about: `Lorem i aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `a1ac60df-1ad8-4501-af36-1b5bd42b0351`,
        position: "Fullstack Developer", 
        name: 'Sanskriti Singh', 
        about: `Lorem ipsum  aliquam dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `a360c4b2-4f49-4ec6-9226-ef37e9bad8e4`,
        position: "Ui/Ux designer", 
        name: 'utkarsh Singh', 
        about: `Lorem ipsum dolor dolore ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `cd7b90e9-591f-4959-9ea7-0d63aebe60ee`,
        position: "Frontend Developer", 
        name: 'Utkarsh Jaiswal', 
        about: `Lorem ipsum dolor ad reprehenderit reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `461fb17e-0d7c-4fef-94c6-0e16ebfc4977`,
        position: "Fullstack Developer", 
        name: 'Yash Agrahari', 
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum eveniet voluptatibus omnis itaque ut nulla, quaerat amet. Amet repellendus perspiciatis, laboriosam eius quae laudantium iste porro sapiente sint provident.
        Dolores velit similique .`,  
        joining_date: new Date().toLocaleDateString()
    },
    {
        id: `fd0fc5ca-0ae7-4817-a9c7-f04410460d35`,
        position: "Backend Developer", 
        name: 'Yash Dixit', 
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum eveniet voluptatibus omnis itaque ut nulla, quaerat amet. Amet repellendus perspiciatis, laboriosam eius qu reiciendis error repellat temporibus commodi ipsam voluptate, quibusdam, porro culpa illo vitae nisi. Quisquam.`, 
        joining_date: new Date().toLocaleDateString()
    },
  ];