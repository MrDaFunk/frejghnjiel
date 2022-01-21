import { FormEvent, FocusEvent, ChangeEvent } from 'react';

type Change = ChangeEvent<HTMLInputElement>;

type Focus = FocusEvent<HTMLInputElement>;

type Form = FormEvent;

export type { Change, Focus, Form };
