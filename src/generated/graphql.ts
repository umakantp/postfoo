/* IMP: This file is auto-generated by npm run generate, don't change manually */
import gql from 'graphql-tag'
import * as Apollo from '@apollo/client'
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache'
export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string, output: string },
  String: { input: string, output: string },
  Boolean: { input: boolean, output: boolean },
  Int: { input: number, output: number },
  Float: { input: number, output: number },
  BigInt: { input: number, output: number },
  Date: { input: string, output: string },
  DateTime: { input: string, output: string },
  EmailAddress: { input: string, output: string },
  JWT: { input: string, output: string },
  NonEmptyString: { input: string, output: string },
  PhoneNumber: { input: string, output: string },
  URL: { input: string, output: string },
  Void: { input: void, output: void },
}

export type Code = Node & {
  /**  The OTP code that was sent to the user  */
  code: Scalars['NonEmptyString']['output'],
  createdAt: Scalars['DateTime']['output'],
  /**  When the code expires if set  */
  expireAt?: Maybe<Scalars['DateTime']['output']>,
  id: Scalars['NonEmptyString']['output'],
  updatedAt: Scalars['DateTime']['output'],
  /**  The user that this code is for  */
  userId: Scalars['NonEmptyString']['output'],
}

/**  Error codes  */
export enum ErrorCode {
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  CONFLICT = 'CONFLICT',
  DATABASE_ERROR = 'DATABASE_ERROR',
  FORBIDDEN = 'FORBIDDEN',
  GRAPHQL_PARSE_FAILED = 'GRAPHQL_PARSE_FAILED',
  GRAPHQL_VALIDATION_FAILED = 'GRAPHQL_VALIDATION_FAILED',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  LOCKED = 'LOCKED',
  METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
  NOT_FOUND = 'NOT_FOUND',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  UNAUTHENTICATED = 'UNAUTHENTICATED'
}

export type Mutation = {
  resendCode: SuccessPayload,
  signIn: User,
  signUp: User,
  verifyCode: User,
}


export type MutationResendCodeArgs = {
  input: ResendCodeInput,
}


export type MutationSignInArgs = {
  input: SignInInput,
}


export type MutationSignUpArgs = {
  input: SignUpInput,
}


export type MutationVerifyCodeArgs = {
  input: VerifyCodeInput,
}

export type Node = {
  createdAt: Scalars['DateTime']['output'],
  id: Scalars['NonEmptyString']['output'],
  updatedAt: Scalars['DateTime']['output'],
}

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>,
  hasNextPage: Scalars['Boolean']['output'],
  hasPreviousPage: Scalars['Boolean']['output'],
  startCursor?: Maybe<Scalars['String']['output']>,
}

export type PageInput = {
  /**  Cursor-based pagination, load after this cursor  */
  after?: InputMaybe<Scalars['String']['input']>,
  /**  How many to load (from the start), supports 0 for getting the `total`  */
  first?: InputMaybe<Scalars['Int']['input']>,
  /**  How many to load (from the end, reversed results)  */
  last?: InputMaybe<Scalars['Int']['input']>,
  /**  Offset-based pagination, skip this many  */
  offset?: InputMaybe<Scalars['Int']['input']>,
}

export type Query = {
  add?: Maybe<Scalars['Int']['output']>,
  me?: Maybe<User>,
}


export type QueryAddArgs = {
  x?: InputMaybe<Scalars['Int']['input']>,
  y?: InputMaybe<Scalars['Int']['input']>,
}

export type ResendCodeInput = {
  mobile?: InputMaybe<Scalars['PhoneNumber']['input']>,
  userId?: InputMaybe<Scalars['NonEmptyString']['input']>,
}

export type SignInInput = {
  mobile: Scalars['PhoneNumber']['input'],
  password: Scalars['NonEmptyString']['input'],
}

export type SignUpInput = {
  firstName: Scalars['NonEmptyString']['input'],
  lastName?: InputMaybe<Scalars['NonEmptyString']['input']>,
  mobile: Scalars['PhoneNumber']['input'],
  password: Scalars['NonEmptyString']['input'],
}

export type SuccessPayload = {
  error?: Maybe<ErrorCode>,
}

export type User = Node & {
  codes: Array<Code>,
  createdAt: Scalars['DateTime']['output'],
  firstName: Scalars['NonEmptyString']['output'],
  id: Scalars['NonEmptyString']['output'],
  isBlocked: Scalars['Boolean']['output'],
  isVerified: Scalars['Boolean']['output'],
  lastName?: Maybe<Scalars['NonEmptyString']['output']>,
  mobile: Scalars['PhoneNumber']['output'],
  /**  The generated full (first+last) name  */
  name: Scalars['NonEmptyString']['output'],
  password: Scalars['NonEmptyString']['output'],
  salt: Scalars['NonEmptyString']['output'],
  status: UserStatus,
  /**  A fresh JWT for the user  */
  token: Scalars['JWT']['output'],
  updatedAt: Scalars['DateTime']['output'],
}

export enum UserStatus {
  Superadmin = 'Superadmin',
  User = 'User'
}

export type VerifyCodeInput = {
  code: Scalars['NonEmptyString']['input'],
  mobile?: InputMaybe<Scalars['PhoneNumber']['input']>,
  userId?: InputMaybe<Scalars['NonEmptyString']['input']>,
}

export type MyUserResponseFragment = { id: string, firstName: string, lastName?: string | undefined, name: string, mobile: string, token: string, status: UserStatus, isVerified: boolean, isBlocked: boolean }

export type SignInMutationVariables = Exact<{
  input: SignInInput,
}>


export type SignInMutation = { signIn: { id: string, firstName: string, lastName?: string | undefined, name: string, mobile: string, token: string, status: UserStatus, isVerified: boolean, isBlocked: boolean } }

export type SignUpMutationVariables = Exact<{
  input: SignUpInput,
}>


export type SignUpMutation = { signUp: { id: string, firstName: string, lastName?: string | undefined, name: string, mobile: string, token: string, status: UserStatus, isVerified: boolean, isBlocked: boolean } }

export type VerifyCodeMutationVariables = Exact<{
  input: VerifyCodeInput,
}>


export type VerifyCodeMutation = { verifyCode: { id: string, firstName: string, lastName?: string | undefined, name: string, mobile: string, token: string, status: UserStatus, isVerified: boolean, isBlocked: boolean } }

export type ResendCodeMutationVariables = Exact<{
  input: ResendCodeInput,
}>


export type ResendCodeMutation = { resendCode: { error?: ErrorCode | undefined } }

export type MeQueryVariables = Exact<{ [key: string]: never }>


export type MeQuery = { me?: { id: string, firstName: string, lastName?: string | undefined, name: string, mobile: string, token: string, status: UserStatus, isVerified: boolean, isBlocked: boolean } | undefined }

export const MyUserResponseFragmentDoc = gql`
    fragment MyUserResponse on User {
  id
  firstName
  lastName
  name
  mobile
  token
  status
  isVerified
  isBlocked
}
    `
export const SignInDocument = gql`
    mutation signIn($input: SignInInput!) {
  signIn(input: $input) {
    ...MyUserResponse
  }
}
    ${MyUserResponseFragmentDoc}`
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options)
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>
export const SignUpDocument = gql`
    mutation signUp($input: SignUpInput!) {
  signUp(input: $input) {
    ...MyUserResponse
  }
}
    ${MyUserResponseFragmentDoc}`
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options)
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>
export const VerifyCodeDocument = gql`
    mutation verifyCode($input: VerifyCodeInput!) {
  verifyCode(input: $input) {
    ...MyUserResponse
  }
}
    ${MyUserResponseFragmentDoc}`
export type VerifyCodeMutationFn = Apollo.MutationFunction<VerifyCodeMutation, VerifyCodeMutationVariables>

/**
 * __useVerifyCodeMutation__
 *
 * To run a mutation, you first call `useVerifyCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCodeMutation, { data, loading, error }] = useVerifyCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyCodeMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCodeMutation, VerifyCodeMutationVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(VerifyCodeDocument, options)
}
export type VerifyCodeMutationHookResult = ReturnType<typeof useVerifyCodeMutation>
export type VerifyCodeMutationResult = Apollo.MutationResult<VerifyCodeMutation>
export type VerifyCodeMutationOptions = Apollo.BaseMutationOptions<VerifyCodeMutation, VerifyCodeMutationVariables>
export const ResendCodeDocument = gql`
    mutation resendCode($input: ResendCodeInput!) {
  resendCode(input: $input) {
    error
  }
}
    `
export type ResendCodeMutationFn = Apollo.MutationFunction<ResendCodeMutation, ResendCodeMutationVariables>

/**
 * __useResendCodeMutation__
 *
 * To run a mutation, you first call `useResendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendCodeMutation, { data, loading, error }] = useResendCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResendCodeMutation(baseOptions?: Apollo.MutationHookOptions<ResendCodeMutation, ResendCodeMutationVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<ResendCodeMutation, ResendCodeMutationVariables>(ResendCodeDocument, options)
}
export type ResendCodeMutationHookResult = ReturnType<typeof useResendCodeMutation>
export type ResendCodeMutationResult = Apollo.MutationResult<ResendCodeMutation>
export type ResendCodeMutationOptions = Apollo.BaseMutationOptions<ResendCodeMutation, ResendCodeMutationVariables>
export const MeDocument = gql`
    query me {
  me {
    ...MyUserResponse
  }
}
    ${MyUserResponseFragmentDoc}`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export type CodeKeySpecifier = ('code' | 'createdAt' | 'expireAt' | 'id' | 'updatedAt' | 'userId' | CodeKeySpecifier)[]
export type CodeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
  expireAt?: FieldPolicy<any> | FieldReadFunction<any>,
  id?: FieldPolicy<any> | FieldReadFunction<any>,
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
  userId?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type MutationKeySpecifier = ('resendCode' | 'signIn' | 'signUp' | 'verifyCode' | MutationKeySpecifier)[]
export type MutationFieldPolicy = {
  resendCode?: FieldPolicy<any> | FieldReadFunction<any>,
  signIn?: FieldPolicy<any> | FieldReadFunction<any>,
  signUp?: FieldPolicy<any> | FieldReadFunction<any>,
  verifyCode?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type NodeKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | NodeKeySpecifier)[]
export type NodeFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
  id?: FieldPolicy<any> | FieldReadFunction<any>,
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[]
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type QueryKeySpecifier = ('add' | 'me' | QueryKeySpecifier)[]
export type QueryFieldPolicy = {
  add?: FieldPolicy<any> | FieldReadFunction<any>,
  me?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type SuccessPayloadKeySpecifier = ('error' | SuccessPayloadKeySpecifier)[]
export type SuccessPayloadFieldPolicy = {
  error?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type UserKeySpecifier = ('codes' | 'createdAt' | 'firstName' | 'id' | 'isBlocked' | 'isVerified' | 'lastName' | 'mobile' | 'name' | 'password' | 'salt' | 'status' | 'token' | 'updatedAt' | UserKeySpecifier)[]
export type UserFieldPolicy = {
  codes?: FieldPolicy<any> | FieldReadFunction<any>,
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
  firstName?: FieldPolicy<any> | FieldReadFunction<any>,
  id?: FieldPolicy<any> | FieldReadFunction<any>,
  isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
  isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
  lastName?: FieldPolicy<any> | FieldReadFunction<any>,
  mobile?: FieldPolicy<any> | FieldReadFunction<any>,
  name?: FieldPolicy<any> | FieldReadFunction<any>,
  password?: FieldPolicy<any> | FieldReadFunction<any>,
  salt?: FieldPolicy<any> | FieldReadFunction<any>,
  status?: FieldPolicy<any> | FieldReadFunction<any>,
  token?: FieldPolicy<any> | FieldReadFunction<any>,
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
}
export type StrictTypedTypePolicies = {
  Code?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | CodeKeySpecifier | (() => undefined | CodeKeySpecifier),
    fields?: CodeFieldPolicy,
  },
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
    fields?: MutationFieldPolicy,
  },
  Node?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
    fields?: NodeFieldPolicy,
  },
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
    fields?: PageInfoFieldPolicy,
  },
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
    fields?: QueryFieldPolicy,
  },
  SuccessPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | SuccessPayloadKeySpecifier | (() => undefined | SuccessPayloadKeySpecifier),
    fields?: SuccessPayloadFieldPolicy,
  },
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
    fields?: UserFieldPolicy,
  },
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies