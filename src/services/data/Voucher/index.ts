import { IVoucher } from "../../../screens/Listar";
import { api } from "../../api";

class VoucherData {
    index() {
        return api.get<IVoucher[]>('/voucher')
    }
    store(data: IVoucher) {
        return api.post('/voucher', data)
    }
    delete(id: number) {
        return api.delete(`/voucher/${id}`)
    }
}

export default new VoucherData()