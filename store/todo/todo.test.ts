import {
  afterAll,
  beforeAll,
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from ".";

// describe('runs', () => {
//     test('it works', () => {
//         expect(true).toBe(true)
//     })
// })

beforeAll(() => {
  setActivePinia(createPinia());
});

// describe('TodoStore', () => {
//     test('create a store', () => {
//         const store = useTodoStore()
//         expect(store).toBeDefined()
//     })
// })

describe("todo", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("create a store", () => {
    expect(store).toBeDefined();
  });

  test("initializes with empty items", () => {
    expect(store.items).toStrictEqual([]);
  });

  test("create todo item", () => {
    store.add({ title: "Test title" });
    expect(store.items[0]).toBeDefined();
    expect(store.items[0].title).toBe("Test title");
  });

  test("get todo item", () => {
    store.add({ title: "Test title" });
    const item = store.items[0];
    const todo = store.getById(item.id);

    expect(todo).toStrictEqual(item);
  });

  test("gets todo by desc", () => {
    const items = [
      {
        createdAt: new Date(2022, 7, 4),
      },
      {
        createdAt: new Date(2022, 7, 3),
      },
      {
        createdAt: new Date(2022, 7, 2),
      },
    ];
    // @ts-ignore
    store.items = items;

    const orderedTodos = store.getByDescTodos;

    expect(orderedTodos[0].createdAt.getDay()).toBe(2);
    expect(orderedTodos[1].createdAt.getDay()).toBe(3);
    expect(orderedTodos[2].createdAt.getDay()).toBe(4);
    expect(store.items[0].createdAt.getDay()).toBe(4);
  });

  test("removes a todo", () => {
    store.add({ title: "test" });

    const todo = store.items[0];
    store.remove(todo.id);

    expect(store.items).toStrictEqual([]);
  });

  test("update a todo", () => {
    store.add({ title: "test" });

    const todo = store.items[0];
    store.update(todo.id, { done: true });
    expect(store.items[0].done).toStrictEqual(true);
  });

  test("update a todo title", () => {
    store.add({ title: "test" });

    const todo = store.items[0];
    store.update(todo.id, { title: "updated" });
    expect(store.items[0].title).toStrictEqual("updated");
  });
});
