// import { Fraction } from '@uniswap/sdk-core';
// import JSBI from 'jsbi';
import React from 'react';

import { ApproveTransactionInfo, TransactionInfo, TransactionType } from '../../state/transactions/types';

// function formatAmount(amountRaw: string, decimals: number, sigFigs: number): string {
//   return new Fraction(amountRaw, JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(decimals))).toSignificant(sigFigs);
// }

// function FormattedCurrencyAmount({
//   rawAmount,
//   symbol,
//   decimals,
//   sigFigs,
// }: {
//   rawAmount: string;
//   symbol: string;
//   decimals: number;
//   sigFigs: number;
// }) {
//   return (
//     <>
//       {formatAmount(rawAmount, decimals, sigFigs)} {symbol}
//     </>
//   );
// }

function ApprovalSummary({ info }: { info: ApproveTransactionInfo }) {
  return (
    <>
      <p className={'font-semibold'}>Approve</p>
      <p className={'text-sm'}>Approve {info.tokenSymbol}</p>
    </>
  );
}

export function TransactionSummary({ info }: { info: TransactionInfo }) {
  switch (info.type) {
    case TransactionType.APPROVAL:
      return <ApprovalSummary info={info} />;
  }
}
