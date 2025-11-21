import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}
  
  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    let idstr = req.params.id
    

    let id =  parseInt(idstr)
    await this.vehicleStore.deleteVehicle({id : id})
    await res.status(204).send();
    
  }
}


