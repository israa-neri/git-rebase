import { Offering } from "./Offering";

export class Tickets {
    id: string = '';
    name: string = '';
    description: string = '';
    visibleInIncident: boolean = false;
    visibleInRequirement: boolean = false;
    approvalLevel: string = '';
    status: string = '';
    offering: Offering;

    constructor(attributes?: any) {}
}
