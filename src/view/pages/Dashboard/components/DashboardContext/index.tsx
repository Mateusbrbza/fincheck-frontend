import { BankAccount } from '@/app/entities/BankAccount';
import { createContext, useCallback, useState } from 'react';

interface DashboardContextProps {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  isNewAccountModalOpen: boolean;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  isNewTransactionModalOpen: boolean;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void;
  closeNewTransactionModal(): void;
  isEditAccountModalOpen: boolean;
  accountBeingEdited: BankAccount | null;
  openEditAccountModal(bankAccount: BankAccount): void;
  closeEditAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] = useState<
    'INCOME' | 'EXPENSE' | null
  >(null);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [accountBeingEdited, setAccountBeingEdited] =
    useState<BankAccount | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setAccountBeingEdited(bankAccount);
    setIsEditAccountModalOpen(true);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setAccountBeingEdited(null);
    setIsEditAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        newTransactionType,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        isNewTransactionModalOpen,
        openNewTransactionModal,
        closeNewTransactionModal,
        isEditAccountModalOpen,
        accountBeingEdited,
        openEditAccountModal,
        closeEditAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
