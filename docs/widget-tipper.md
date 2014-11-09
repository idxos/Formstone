# Tipper

A jQuery plugin for simple tooltips.

## Options

Options are set by passing a valid options object at initialization or to the public "defaults" method. You can also set custom options for a specific instance by attaching a data-tipper-options attribute containing a properly formatted JSON object to the target element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| delay | int | 0 | Hover delay |
| direction | string | 'top' | Tooltip direction |
| follow | boolean | false | Flag to follow mouse |
| formatter | function | $.noop | Text format function |
| margin | int | 15 | Tooltip margin |
| match | boolean | false | Flag to match mouse position |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.tipper("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").tipper("destroy");
```
