export interface FinancialTransaction {
    custom_classifications:      any[];
    id:                          number;
    guid:                        null;
    type:                        string;
    absolute_amount:             string;
    amount:                      string;
    occurred_at:                 Date;
    document:                    string;
    original_description:        null;
    user_description:            string;
    bank_statement_id:           null;
    classification_center_id:    number | null;
    deposit_account_id:          number;
    person_id:                   null;
    parent_id:                   null;
    currency_id:                 number;
    category_id:                 number | null;
    transfer_id:                 null;
    created_at:                  Date;
    updated_at:                  Date;
    imported_from_sync:          boolean;
    balance_difference:          boolean;
    divided:                     boolean;
    attachments_count:           number;
    observation:                 string;
    reconciled:                  boolean;
    transfer_deposit_account_id: null;
    attachment_id_list:          any[];
    reconciliations:             Reconciliations;
    links:                       Link[];
}

export interface Link {
    rel:    string;
    href:   string;
    method: string;
}

export interface Reconciliations {
    financial_accounts:     FinancialAccount[];
    financial_transactions: any[];
}

export interface FinancialAccount {
    id:    number;
    links: Link[];
}

export default FinancialTransaction;