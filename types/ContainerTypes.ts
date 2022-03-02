export interface UserContainerInterfece {
  item: any
  handelDelete: any
  onOpenModal: any
};

export interface ModalInterfece {
  isOpen: boolean
  onClose: any
  onContinue: any
  firstname: string
  lastname: string
};

export interface useOutsideClickInterfece {
  isOpen: any
  ref: any
  action: any
};

export interface actionInterfece {
  type: string
  payload?: any
};

export interface initialStateInterfece {
  list: any[]
  status: string
  error: any
};

export interface userInterfece {
  birthDate: string
  email: string
  firstname: string
  id?: number
  isDeleted?: boolean
  lastname: string
  phone?: string
  picture?: any
  userId?: string
};

export interface changesNameInterfece {
  id: number
  firstname: string
  lastname: string
};

export interface getLimitUserInterfece {
  limit: number
  offset: number
}
