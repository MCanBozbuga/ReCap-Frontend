import {Customer} from "./customer";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModel extends ResponseModel{
    data:Customer[]
}