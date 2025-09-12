
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Imovel
 * 
 */
export type Imovel = $Result.DefaultSelection<Prisma.$ImovelPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Imovels
 * const imovels = await prisma.imovel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Imovels
   * const imovels = await prisma.imovel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.imovel`: Exposes CRUD operations for the **Imovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imovels
    * const imovels = await prisma.imovel.findMany()
    * ```
    */
  get imovel(): Prisma.ImovelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Imovel: 'Imovel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "imovel"
      txIsolationLevel: never
    }
    model: {
      Imovel: {
        payload: Prisma.$ImovelPayload<ExtArgs>
        fields: Prisma.ImovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          findFirst: {
            args: Prisma.ImovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          findMany: {
            args: Prisma.ImovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>[]
          }
          create: {
            args: Prisma.ImovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          createMany: {
            args: Prisma.ImovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          update: {
            args: Prisma.ImovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          deleteMany: {
            args: Prisma.ImovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          aggregate: {
            args: Prisma.ImovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImovel>
          }
          groupBy: {
            args: Prisma.ImovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImovelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ImovelFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ImovelAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ImovelCountArgs<ExtArgs>
            result: $Utils.Optional<ImovelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    imovel?: ImovelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Imovel
   */

  export type AggregateImovel = {
    _count: ImovelCountAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  export type ImovelMinAggregateOutputType = {
    id: string | null
    category: string | null
    state: string | null
    city: string | null
    title: string | null
    text: string | null
    price: string | null
  }

  export type ImovelMaxAggregateOutputType = {
    id: string | null
    category: string | null
    state: string | null
    city: string | null
    title: string | null
    text: string | null
    price: string | null
  }

  export type ImovelCountAggregateOutputType = {
    id: number
    category: number
    state: number
    city: number
    images: number
    title: number
    text: number
    price: number
    _all: number
  }


  export type ImovelMinAggregateInputType = {
    id?: true
    category?: true
    state?: true
    city?: true
    title?: true
    text?: true
    price?: true
  }

  export type ImovelMaxAggregateInputType = {
    id?: true
    category?: true
    state?: true
    city?: true
    title?: true
    text?: true
    price?: true
  }

  export type ImovelCountAggregateInputType = {
    id?: true
    category?: true
    state?: true
    city?: true
    images?: true
    title?: true
    text?: true
    price?: true
    _all?: true
  }

  export type ImovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imovel to aggregate.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imovels
    **/
    _count?: true | ImovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImovelMaxAggregateInputType
  }

  export type GetImovelAggregateType<T extends ImovelAggregateArgs> = {
        [P in keyof T & keyof AggregateImovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImovel[P]>
      : GetScalarType<T[P], AggregateImovel[P]>
  }




  export type ImovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImovelWhereInput
    orderBy?: ImovelOrderByWithAggregationInput | ImovelOrderByWithAggregationInput[]
    by: ImovelScalarFieldEnum[] | ImovelScalarFieldEnum
    having?: ImovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImovelCountAggregateInputType | true
    _min?: ImovelMinAggregateInputType
    _max?: ImovelMaxAggregateInputType
  }

  export type ImovelGroupByOutputType = {
    id: string
    category: string
    state: string
    city: string
    images: string[]
    title: string
    text: string
    price: string | null
    _count: ImovelCountAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  type GetImovelGroupByPayload<T extends ImovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImovelGroupByOutputType[P]>
            : GetScalarType<T[P], ImovelGroupByOutputType[P]>
        }
      >
    >


  export type ImovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    state?: boolean
    city?: boolean
    images?: boolean
    title?: boolean
    text?: boolean
    price?: boolean
  }, ExtArgs["result"]["imovel"]>



  export type ImovelSelectScalar = {
    id?: boolean
    category?: boolean
    state?: boolean
    city?: boolean
    images?: boolean
    title?: boolean
    text?: boolean
    price?: boolean
  }

  export type ImovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "state" | "city" | "images" | "title" | "text" | "price", ExtArgs["result"]["imovel"]>

  export type $ImovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imovel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      state: string
      city: string
      images: string[]
      title: string
      text: string
      price: string | null
    }, ExtArgs["result"]["imovel"]>
    composites: {}
  }

  type ImovelGetPayload<S extends boolean | null | undefined | ImovelDefaultArgs> = $Result.GetResult<Prisma.$ImovelPayload, S>

  type ImovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImovelCountAggregateInputType | true
    }

  export interface ImovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imovel'], meta: { name: 'Imovel' } }
    /**
     * Find zero or one Imovel that matches the filter.
     * @param {ImovelFindUniqueArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImovelFindUniqueArgs>(args: SelectSubset<T, ImovelFindUniqueArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImovelFindUniqueOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImovelFindUniqueOrThrowArgs>(args: SelectSubset<T, ImovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindFirstArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImovelFindFirstArgs>(args?: SelectSubset<T, ImovelFindFirstArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindFirstOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImovelFindFirstOrThrowArgs>(args?: SelectSubset<T, ImovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imovels
     * const imovels = await prisma.imovel.findMany()
     * 
     * // Get first 10 Imovels
     * const imovels = await prisma.imovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imovelWithIdOnly = await prisma.imovel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImovelFindManyArgs>(args?: SelectSubset<T, ImovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imovel.
     * @param {ImovelCreateArgs} args - Arguments to create a Imovel.
     * @example
     * // Create one Imovel
     * const Imovel = await prisma.imovel.create({
     *   data: {
     *     // ... data to create a Imovel
     *   }
     * })
     * 
     */
    create<T extends ImovelCreateArgs>(args: SelectSubset<T, ImovelCreateArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imovels.
     * @param {ImovelCreateManyArgs} args - Arguments to create many Imovels.
     * @example
     * // Create many Imovels
     * const imovel = await prisma.imovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImovelCreateManyArgs>(args?: SelectSubset<T, ImovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imovel.
     * @param {ImovelDeleteArgs} args - Arguments to delete one Imovel.
     * @example
     * // Delete one Imovel
     * const Imovel = await prisma.imovel.delete({
     *   where: {
     *     // ... filter to delete one Imovel
     *   }
     * })
     * 
     */
    delete<T extends ImovelDeleteArgs>(args: SelectSubset<T, ImovelDeleteArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imovel.
     * @param {ImovelUpdateArgs} args - Arguments to update one Imovel.
     * @example
     * // Update one Imovel
     * const imovel = await prisma.imovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImovelUpdateArgs>(args: SelectSubset<T, ImovelUpdateArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imovels.
     * @param {ImovelDeleteManyArgs} args - Arguments to filter Imovels to delete.
     * @example
     * // Delete a few Imovels
     * const { count } = await prisma.imovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImovelDeleteManyArgs>(args?: SelectSubset<T, ImovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imovels
     * const imovel = await prisma.imovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImovelUpdateManyArgs>(args: SelectSubset<T, ImovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imovel.
     * @param {ImovelUpsertArgs} args - Arguments to update or create a Imovel.
     * @example
     * // Update or create a Imovel
     * const imovel = await prisma.imovel.upsert({
     *   create: {
     *     // ... data to create a Imovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imovel we want to update
     *   }
     * })
     */
    upsert<T extends ImovelUpsertArgs>(args: SelectSubset<T, ImovelUpsertArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imovels that matches the filter.
     * @param {ImovelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const imovel = await prisma.imovel.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ImovelFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Imovel.
     * @param {ImovelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const imovel = await prisma.imovel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ImovelAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelCountArgs} args - Arguments to filter Imovels to count.
     * @example
     * // Count the number of Imovels
     * const count = await prisma.imovel.count({
     *   where: {
     *     // ... the filter for the Imovels we want to count
     *   }
     * })
    **/
    count<T extends ImovelCountArgs>(
      args?: Subset<T, ImovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImovelAggregateArgs>(args: Subset<T, ImovelAggregateArgs>): Prisma.PrismaPromise<GetImovelAggregateType<T>>

    /**
     * Group by Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImovelGroupByArgs['orderBy'] }
        : { orderBy?: ImovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imovel model
   */
  readonly fields: ImovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imovel model
   */
  interface ImovelFieldRefs {
    readonly id: FieldRef<"Imovel", 'String'>
    readonly category: FieldRef<"Imovel", 'String'>
    readonly state: FieldRef<"Imovel", 'String'>
    readonly city: FieldRef<"Imovel", 'String'>
    readonly images: FieldRef<"Imovel", 'String[]'>
    readonly title: FieldRef<"Imovel", 'String'>
    readonly text: FieldRef<"Imovel", 'String'>
    readonly price: FieldRef<"Imovel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imovel findUnique
   */
  export type ImovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel findUniqueOrThrow
   */
  export type ImovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel findFirst
   */
  export type ImovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel findFirstOrThrow
   */
  export type ImovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel findMany
   */
  export type ImovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter, which Imovels to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel create
   */
  export type ImovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * The data needed to create a Imovel.
     */
    data: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
  }

  /**
   * Imovel createMany
   */
  export type ImovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imovels.
     */
    data: ImovelCreateManyInput | ImovelCreateManyInput[]
  }

  /**
   * Imovel update
   */
  export type ImovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * The data needed to update a Imovel.
     */
    data: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
    /**
     * Choose, which Imovel to update.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel updateMany
   */
  export type ImovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imovels.
     */
    data: XOR<ImovelUpdateManyMutationInput, ImovelUncheckedUpdateManyInput>
    /**
     * Filter which Imovels to update
     */
    where?: ImovelWhereInput
    /**
     * Limit how many Imovels to update.
     */
    limit?: number
  }

  /**
   * Imovel upsert
   */
  export type ImovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * The filter to search for the Imovel to update in case it exists.
     */
    where: ImovelWhereUniqueInput
    /**
     * In case the Imovel found by the `where` argument doesn't exist, create a new Imovel with this data.
     */
    create: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
    /**
     * In case the Imovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
  }

  /**
   * Imovel delete
   */
  export type ImovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Filter which Imovel to delete.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel deleteMany
   */
  export type ImovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imovels to delete
     */
    where?: ImovelWhereInput
    /**
     * Limit how many Imovels to delete.
     */
    limit?: number
  }

  /**
   * Imovel findRaw
   */
  export type ImovelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Imovel aggregateRaw
   */
  export type ImovelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Imovel without action
   */
  export type ImovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ImovelScalarFieldEnum: {
    id: 'id',
    category: 'category',
    state: 'state',
    city: 'city',
    images: 'images',
    title: 'title',
    text: 'text',
    price: 'price'
  };

  export type ImovelScalarFieldEnum = (typeof ImovelScalarFieldEnum)[keyof typeof ImovelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ImovelWhereInput = {
    AND?: ImovelWhereInput | ImovelWhereInput[]
    OR?: ImovelWhereInput[]
    NOT?: ImovelWhereInput | ImovelWhereInput[]
    id?: StringFilter<"Imovel"> | string
    category?: StringFilter<"Imovel"> | string
    state?: StringFilter<"Imovel"> | string
    city?: StringFilter<"Imovel"> | string
    images?: StringNullableListFilter<"Imovel">
    title?: StringFilter<"Imovel"> | string
    text?: StringFilter<"Imovel"> | string
    price?: StringNullableFilter<"Imovel"> | string | null
  }

  export type ImovelOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    state?: SortOrder
    city?: SortOrder
    images?: SortOrder
    title?: SortOrder
    text?: SortOrder
    price?: SortOrder
  }

  export type ImovelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImovelWhereInput | ImovelWhereInput[]
    OR?: ImovelWhereInput[]
    NOT?: ImovelWhereInput | ImovelWhereInput[]
    category?: StringFilter<"Imovel"> | string
    state?: StringFilter<"Imovel"> | string
    city?: StringFilter<"Imovel"> | string
    images?: StringNullableListFilter<"Imovel">
    title?: StringFilter<"Imovel"> | string
    text?: StringFilter<"Imovel"> | string
    price?: StringNullableFilter<"Imovel"> | string | null
  }, "id">

  export type ImovelOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    state?: SortOrder
    city?: SortOrder
    images?: SortOrder
    title?: SortOrder
    text?: SortOrder
    price?: SortOrder
    _count?: ImovelCountOrderByAggregateInput
    _max?: ImovelMaxOrderByAggregateInput
    _min?: ImovelMinOrderByAggregateInput
  }

  export type ImovelScalarWhereWithAggregatesInput = {
    AND?: ImovelScalarWhereWithAggregatesInput | ImovelScalarWhereWithAggregatesInput[]
    OR?: ImovelScalarWhereWithAggregatesInput[]
    NOT?: ImovelScalarWhereWithAggregatesInput | ImovelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Imovel"> | string
    category?: StringWithAggregatesFilter<"Imovel"> | string
    state?: StringWithAggregatesFilter<"Imovel"> | string
    city?: StringWithAggregatesFilter<"Imovel"> | string
    images?: StringNullableListFilter<"Imovel">
    title?: StringWithAggregatesFilter<"Imovel"> | string
    text?: StringWithAggregatesFilter<"Imovel"> | string
    price?: StringNullableWithAggregatesFilter<"Imovel"> | string | null
  }

  export type ImovelCreateInput = {
    id?: string
    category: string
    state: string
    city: string
    images?: ImovelCreateimagesInput | string[]
    title: string
    text: string
    price?: string | null
  }

  export type ImovelUncheckedCreateInput = {
    id?: string
    category: string
    state: string
    city: string
    images?: ImovelCreateimagesInput | string[]
    title: string
    text: string
    price?: string | null
  }

  export type ImovelUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: ImovelUpdateimagesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImovelUncheckedUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: ImovelUpdateimagesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImovelCreateManyInput = {
    id?: string
    category: string
    state: string
    city: string
    images?: ImovelCreateimagesInput | string[]
    title: string
    text: string
    price?: string | null
  }

  export type ImovelUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: ImovelUpdateimagesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImovelUncheckedUpdateManyInput = {
    category?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: ImovelUpdateimagesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ImovelCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    state?: SortOrder
    city?: SortOrder
    images?: SortOrder
    title?: SortOrder
    text?: SortOrder
    price?: SortOrder
  }

  export type ImovelMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    state?: SortOrder
    city?: SortOrder
    title?: SortOrder
    text?: SortOrder
    price?: SortOrder
  }

  export type ImovelMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    state?: SortOrder
    city?: SortOrder
    title?: SortOrder
    text?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ImovelCreateimagesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImovelUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}