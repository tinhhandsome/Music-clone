(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1003: function (e, t, n) {
      var i = (e.exports = {
        waitForPlayThreshold: function (e, t) {
          if ("history" === t.sourceInfo.type) return n(7).reject();
          var r = (function (e, t) {
            if (e.playlist)
              return {
                resourceType: "playlist",
                resourceId: e.playlist.resource_id,
                resourceUrn: "soundcloud:playlists:" + e.playlist.resource_id,
              };
            if (
              "station" === t.sourceInfo.resourceType ||
              "system-playlist" === t.sourceInfo.resourceType
            )
              return {
                resourceType: t.sourceInfo.resourceType,
                resourceId: t.sourceInfo.resourceId,
                resourceUrn: t.sourceInfo.resourceId,
              };
            switch (t.sourceInfo.type) {
              case "user-profile":
              case "user-tracks":
              case "user-reposts":
              case "user-likes":
                return {
                  resourceType: "user",
                  resourceId: t.sourceInfo.resourceId,
                  resourceUrn: "soundcloud:users:" + t.sourceInfo.resourceId,
                };
              default:
                return null;
            }
          })(e, t);
          return e.isAd()
            ? n(7).reject()
            : i.whenSoundPlayedMinimum(e).then(function () {
                return {
                  soundId: e.id,
                  playContext: r,
                };
              });
        },
        getMinimumPlayTime: function () {
          return 1e3;
        },
        whenSoundPlayedMinimum: function (e) {
          var t = n(7).defer(),
            r = window.setTimeout(function () {
              e.off(null, o),
                e.off(null, a),
                e.isPlaying() ? t.resolve() : t.reject();
            }, i.getMinimumPlayTime());
          function o() {
            window.clearTimeout(r), t.resolve();
          }
          function a() {
            window.clearTimeout(r), t.reject();
          }
          return e.once("finish", o), e.once("pause", a), t.promise();
        },
      });
    },
    1004: function (e, t) {
      var n;
      e.exports = function (e) {
        return e && (n = e), n;
      };
    },
    1005: function (e, t, n) {
      e.exports = {
        log: function (e) {
          var t = n(26).stringify({
            query: e,
          });
          new window.Image().src =
            "https://eventlogger.soundcloud.com/audio_error" + t;
        },
      };
    },
    1009: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "include", function () {
          return s;
        });
      var i = n(0),
        r = n.n(i),
        o = n(65),
        a = n.n(o);
      function s() {
        (window._qoptions = {
          qacct: "p-47_zcqmJsLHXQ",
        }),
          r.a.defer(a.a.insertScript, "//secure.quantserve.com/quant.js");
      }
    },
    1010: function (e, t, n) {
      var i = window.Image;
      e.exports = {
        include: function () {
          var e = this,
            t = new (n(57))("visual-iq-page-tracking");
          n(8).on("layout:change", function (n) {
            e.adjustViewCounts(t, n),
              e.pushEvent({
                event: n.layoutName,
                layoutViewCounts: e.getViewCounts(t),
              });
          }),
            n(8).on("upload_funnel:save", function () {
              e.pushEvent({
                event: "upload-save",
              });
            }),
            n(8).once("signup:successful", function () {
              e.pushEvent({
                event: "signup-successful",
              });
            }),
            n(0).defer(
              n(65).insertScript,
              "https://vt.myvisualiq.net/2/UhSoiql1ezhCaix6DQ3nmQ%3D%3D/vt-235.js"
            );
        },
        pushEvent: function (e) {
          var t = e.event,
            o = e.layoutViewCounts,
            a = void 0 === o ? {} : o,
            s = e.subscriptionTerm,
            u = void 0 === s ? null : s,
            l = e.isFirstSubscription;
          if (
            n(23).isOneTrustEnabled()
              ? n(23).isCategoryEnabled(n(23).CookieCategory.Performance)
              : n(149).isOneTrustScanner() ||
                n(4).get("privacy_settings").isOptedInToAnalytics()
          ) {
            var c = new i();
            switch (t) {
              case "creator-signup-successful-pro":
                var d =
                  "monthly" === u
                    ? "72.35"
                    : "yearly" === u
                    ? "184.89"
                    : void 0;
                c.src = r(367, {
                  revenue: d,
                  isFirstSubscription: l,
                });
                break;
              case "creator-signup-successful-pro-unlimited":
                var f =
                  "monthly" === u
                    ? "191.58"
                    : "yearly" === u
                    ? "471.05"
                    : void 0;
                c.src = r(368, {
                  revenue: f,
                  isFirstSubscription: l,
                });
                break;
              case "upload-save":
                var h = n(4).get("me").getNumTracks() < 1;
                c.src = r(366, {
                  isFirstTimeUpload: h,
                });
                break;
              case "signup-successful":
                c.src = r(364);
                break;
              case "upload":
                1 === a.uploadVisitCount ? (c.src = r(363)) : (c.src = r(365));
            }
          }
        },
        adjustViewCounts: function (e, t) {
          switch (t.layoutName) {
            case "upload":
              o(e, "uploadVisitCount");
              break;
            case "stats":
              o(e, "statsVisitCount");
          }
          o(e, "allVisitCount");
        },
        getViewCounts: function (e) {
          return {
            uploadVisitCount: e.get("uploadVisitCount") || 0,
            statsVisitCount: e.get("statsVisitCount") || 0,
            premiumVisitCount: 0,
            allVisitCount: e.get("allVisitCount") || 0,
          };
        },
      };
      function r(e, t) {
        var i =
          "https://t.myvisualiq.net/activity_pixel?pt=i&et=a&ago=212&ao=855&px=" +
          e +
          "&ord=" +
          n(425).generate() +
          "&r=" +
          Date.now();
        for (var r in t)
          if (null !== t[r] && void 0 !== t[r])
            switch (r) {
              case "revenue":
                i += "&revenue=" + t.revenue;
                break;
              case "isFirstSubscription":
                i += "&u1=" + (t.isFirstSubscription ? "1" : "2");
                break;
              case "isFirstTimeUpload":
                i += "&u1=" + (t.isFirstTimeUpload ? "1" : "0");
            }
        return i;
      }
      function o(e, t) {
        e.set(t, (e.get(t) || 0) + 1);
      }
    },
    1011: function (e, t, n) {
      var i = {
        name: "rubicon_last_sync",
        value: "synced",
        expirationInDays: 1,
        secure: !0,
      };
      e.exports = {
        include: function () {
          var e = n(4).get("geoip"),
            t = n(68).get("rubicon_last_sync"),
            r = n(4).get("me").getPerk("adFree"),
            o = n(75).doNotTrack;
          if (
            n(149).isOneTrustScanner() ||
            (!o &&
              !r &&
              !t &&
              (function (e) {
                return n(0).contains(
                  n(51).monetizableCountryCodes(),
                  e.get("country_code")
                );
              })(e))
          ) {
            var a = {
              "data-partner": n(4).get("rubiconPartnerCode"),
              "data-region": e.get("region"),
              "data-country": e.get("country_code"),
              "data-endpoint": "eu",
            };
            return n(65)
              .insertSandboxedScript(
                "//secure-assets.rubiconproject.com/utils/xapi/multi-sync.js",
                n(0).omit(a, n(0).isUndefined)
              )
              .then(
                function () {
                  return n(68).set(i);
                },
                function (e) {
                  return !1;
                }
              );
          }
        },
      };
    },
    1012: function (e, t, n) {
      e.exports = {
        userId: function () {
          return n(68).get("rubicon_user_id");
        },
      };
    },
    1013: function (e, t) {
      !(function (e) {
        var t = {};
        function n(i) {
          if (t[i]) return t[i].exports;
          var r = (t[i] = {
            i: i,
            l: !1,
            exports: {},
          });
          return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        (n.m = e),
          (n.c = t),
          (n.d = function (e, t, i) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                enumerable: !0,
                get: i,
              });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module",
              }),
              Object.defineProperty(e, "__esModule", {
                value: !0,
              });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (
              (n.r(i),
              Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e,
              }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                n.d(
                  i,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return i;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 3));
      })([
        function (e, t) {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
          };
        },
        function (e, t, n) {
          e.exports = !n(2)(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        function (e, t) {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        function (e, t, n) {
          "use strict";
          n.r(t),
            n(4),
            (function () {
              if ("function" != typeof window.__tcfapi) {
                var e,
                  t = [],
                  n = window,
                  i = n.document;
                !n.__tcfapi &&
                  (function e() {
                    var t = !!n.frames.__tcfapiLocator;
                    if (!t)
                      if (i.body) {
                        var r = i.createElement("iframe");
                        (r.style.cssText = "display:none"),
                          (r.name = "__tcfapiLocator"),
                          i.body.appendChild(r);
                      } else setTimeout(e, 5);
                    return !t;
                  })() &&
                  ((n.__tcfapi = function () {
                    for (
                      var n = arguments.length, i = new Array(n), r = 0;
                      r < n;
                      r++
                    )
                      i[r] = arguments[r];
                    if (!i.length) return t;
                    if ("setGdprApplies" === i[0])
                      i.length > 3 &&
                        2 === parseInt(i[1], 10) &&
                        "boolean" == typeof i[3] &&
                        ((e = i[3]),
                        "function" == typeof i[2] && i[2]("set", !0));
                    else if ("ping" === i[0]) {
                      var o = {
                        gdprApplies: e,
                        cmpLoaded: !1,
                        apiVersion: "2.0",
                      };
                      "function" == typeof i[2] && i[2](o, !0);
                    } else t.push(i);
                  }),
                  n.addEventListener(
                    "message",
                    function (e) {
                      var t = "string" == typeof e.data,
                        i = {};
                      try {
                        i = t ? JSON.parse(e.data) : e.data;
                      } catch (e) {}
                      var r = i.__tcfapiCall;
                      r &&
                        n.__tcfapi(
                          r.command,
                          r.parameter,
                          r.version,
                          function (n, i) {
                            var o = {
                              __tcfapiReturn: {
                                returnValue: n,
                                success: i,
                                callId: r.callId,
                              },
                            };
                            t && (o = JSON.stringify(o)),
                              e.source.postMessage(o, "*");
                          }
                        );
                    },
                    !1
                  ));
              }
            })();
        },
        function (e, t, n) {
          var i = n(5).f,
            r = Function.prototype,
            o = /^\s*function ([^ (]*)/;
          "name" in r ||
            (n(1) &&
              i(r, "name", {
                configurable: !0,
                get: function () {
                  try {
                    return ("" + this).match(o)[1];
                  } catch (e) {
                    return "";
                  }
                },
              }));
        },
        function (e, t, n) {
          var i = n(6),
            r = n(7),
            o = n(10),
            a = Object.defineProperty;
          t.f = n(1)
            ? Object.defineProperty
            : function (e, t, n) {
                if ((i(e), (t = o(t, !0)), i(n), r))
                  try {
                    return a(e, t, n);
                  } catch (e) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e;
              };
        },
        function (e, t, n) {
          var i = n(0);
          e.exports = function (e) {
            if (!i(e)) throw TypeError(e + " is not an object!");
            return e;
          };
        },
        function (e, t, n) {
          e.exports =
            !n(1) &&
            !n(2)(function () {
              return (
                7 !=
                Object.defineProperty(n(8)("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (e, t, n) {
          var i = n(0),
            r = n(9).document,
            o = i(r) && i(r.createElement);
          e.exports = function (e) {
            return o ? r.createElement(e) : {};
          };
        },
        function (e, t) {
          var n = (e.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = n);
        },
        function (e, t, n) {
          var i = n(0);
          e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (
              t &&
              "function" == typeof (n = e.toString) &&
              !i((r = n.call(e)))
            )
              return r;
            if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e))))
              return r;
            if (
              !t &&
              "function" == typeof (n = e.toString) &&
              !i((r = n.call(e)))
            )
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        },
      ]);
    },
    1014: function (e, t, n) {
      e.exports = {
        include: function () {
          n(23).isOneTrustEnabled()
            ? i(n(23).isCategoryEnabled(n(23).CookieCategory.Performance))
            : n(68)
                .whenAllowed()
                .then(function () {
                  i(n(4).get("privacy_settings").isOptedInToAnalytics());
                });
        },
      };
      function i(e) {
        (window._comscore = window._comscore || []).push({
          c1: "2",
          c2: "16601931",
          cs_ucfr: e ? "1" : "0",
        }),
          n(65).insertScript("https://sb.scorecardresearch.com/beacon.js", {
            removeAfterLoad: !0,
          });
      }
    },
    1015: function (e, t) {
      e.exports = [
        "v2_listening",
        "reco_listening",
        "creator_subs",
        "creator",
        "ads",
        "logged_in_listening",
      ];
    },
    102: function (e, t, n) {
      e.exports = n(423)({
        label: "cast-sender",
        enabled: !0,
        buffer: !0,
      });
    },
    1022: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "dataProvider", function () {
          return s;
        });
      var i = n(35),
        r = n.n(i),
        o = n(210),
        a = new o.V2MemoryStore({
          nextStore: new o.V2NetworkStore({
            endpoints: r.a,
          }),
        }),
        s = new o.DataProvider(a);
    },
    1023: function (e, t, n) {
      var i = (function () {
          "use strict";
          return function (e) {
            var t = e.fn,
              n = e.minTaskTime;
            (this.fn = t), (this.minTaskTime = n);
          };
        })(),
        r = (function () {
          "use strict";
          function e() {
            (this.isProcessing = !1), (this.tasks = []);
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = e.fn,
                n = e.minTaskTime,
                r = new i({
                  fn: t,
                  minTaskTime: n,
                });
              return this.tasks.push(r), this.processQueue(), r;
            }),
            (t.remove = function (e) {
              n(121).removeElement(this.tasks, e);
            }),
            (t.processQueue = function () {
              var e = this;
              this.isProcessing ||
                ((this.isProcessing = !0),
                n(1024).requestIdleCallback(function (t) {
                  for (
                    ;
                    e.tasks.length &&
                    t.timeRemaining() > e.tasks[0].minTaskTime;

                  )
                    e.tasks.shift().fn();
                  (e.isProcessing = !1), e.tasks.length && e.processQueue();
                }));
            }),
            e
          );
        })();
      e.exports = {
        IdleQueue: r,
      };
    },
    1024: function (e, t, n) {
      e.exports = {
        requestIdleCallback: r(window.requestIdleCallback, function (e) {
          var t = new i();
          return window.setTimeout(function () {
            return e(t);
          }, 0);
        }).bind(window),
        cancelIdleCallback: r(window.cancelIdleCallback, function (e) {
          window.clearTimeout(e);
        }).bind(window),
      };
      var i = (function () {
        "use strict";
        function e() {
          (this.startTime = o()), (this.didTimeout = !1);
        }
        return (
          (e.prototype.timeRemaining = function () {
            return Math.max(0, 16 - (o() - this.startTime));
          }),
          e
        );
      })();
      function r(e, t) {
        return n(0).isFunction(e) ? e : t;
      }
      function o() {
        return Date.now();
      }
    },
    1029: function (e, t, n) {
      e.exports = n(140).extend({
        _propagate: !0,
        data: null,
        initialize: function (e) {
          this.data = e || {};
        },
        stopPropagation: function () {
          this._propagate = !1;
        },
        isPropagationStopped: function () {
          return !this._propagate;
        },
      });
    },
    104: function (e, t) {
      e.exports = {
        CANCELING: "canceling",
        EDITING: "editing",
        NONE: "none",
        SAVING: "saving",
      };
    },
    1041: function (e, t) {
      e.exports = {
        user: {
          likes: {
            permalink_url: ":permalink_url/likes",
            uri: ":uri/favorites",
          },
          spotlight: {
            permalink_url: ":permalink_url",
            uri: ":uri/spotlight",
          },
        },
      };
    },
    1042: function (e, t) {
      function n(e) {
        return "/" + Array.prototype.filter.call(arguments, Boolean).join("/");
      }
      function i(e, t, n, i) {
        return (
          "recommended" === i && (i = "related"),
          this.apply("listen-network", {
            userPermalink: e,
            soundPermalink: t,
            secretToken: n,
            subpage: i,
          })
        );
      }
      e.exports = [
        {
          name: "listen",
          route: "(?::secretToken|comment-:id)?",
          handler: function (e, t, n, i) {
            return this.apply("listen", {
              userPermalink: e,
              soundPermalink: t,
              secretToken: n,
              commentId: parseInt(i, 10),
            });
          },
        },
        {
          route: "(?::secretToken/)?groups",
          code: 410,
          redirect: function (e, t, i) {
            return n(e, t, i);
          },
        },
        {
          route: "(?::secretToken/)?(likes)",
          handler: i,
        },
        {
          route: "(?::secretToken/)?(reposts)",
          handler: i,
        },
        {
          route: "(?::secretToken/)?(sets)",
          handler: i,
        },
        {
          route: "(?::secretToken/)?(albums)",
          handler: i,
        },
        {
          route: "(?::secretToken/)?(recommended)",
          handler: i,
        },
        {
          route: "(?::secretToken/)?comments(?:/:id)?",
          redirect: function (e, t, i, r) {
            return n(e, t, i, r ? "comment-" + r : null);
          },
        },
        {
          route: "(?::secretToken/)?related",
          redirect: function (e, t, i) {
            return n(e, t, i, "recommended");
          },
        },
        {
          route:
            "download(?:.(?:mp3|wave|aiff|aac|flac|m4a))?(?:/:secretToken)?",
          code: 410,
          redirect: function (e, t, i) {
            return n(e, t, i);
          },
        },
        {
          route: "edit",
          redirect: function (e, t) {
            return n(e, t);
          },
        },
      ];
    },
    1043: function (e, t) {
      e.exports = [
        {
          name: "playlist",
          route: ":secretToken?",
          handler: function (e, t, n) {
            return this.apply("listen", {
              userPermalink: e,
              playlistPermalink: t,
              secretToken: n,
            });
          },
        },
        {
          route: "(?::secretToken/)?(likes|reposts)",
          handler: function (e, t, n, i) {
            return this.apply("listen-network", {
              userPermalink: e,
              playlistPermalink: t,
              secretToken: n,
              subpage: i,
            });
          },
        },
        {
          route: "edit",
          redirect: function (e, t) {
            return "/" + e + "/sets/" + t;
          },
        },
      ];
    },
    1044: function (e, t) {
      function n(e, t) {
        return this.apply("user", {
          userPermalink: e,
          subpage: t,
        });
      }
      function i(e, t) {
        return this.apply("user-network", {
          userPermalink: e,
          subpage: t,
        });
      }
      e.exports = [
        {
          name: "user",
          route: "",
          handler: function (e) {
            return this.apply("user", {
              userPermalink: e,
            });
          },
        },
        {
          route: "(albums)",
          handler: n,
        },
        {
          route: "(reposts)",
          handler: n,
        },
        {
          route: "(sets)",
          handler: n,
        },
        {
          route: "(tracks)",
          handler: n,
        },
        {
          route: "(popular-tracks)",
          handler: n,
        },
        {
          route: "(likes)",
          handler: i,
        },
        {
          route: "(followers)",
          handler: i,
        },
        {
          route: "(following)",
          handler: i,
        },
        {
          route: "(comments)",
          handler: i,
        },
        {
          route: "favorites",
          redirect: function (e) {
            return "/" + e + "/likes";
          },
        },
        {
          route: "groups|spotlight",
          code: 410,
          redirect: function (e) {
            return "/" + e;
          },
        },
      ];
    },
    1045: function (e, t) {
      function n(e) {
        return function (t, n, i, r, o) {
          return t !== this.getCurrentUserPermalink()
            ? this.navigate("/" + t, {
                replace: !0,
                trigger: !0,
              })
            : e.apply(this, arguments);
        };
      }
      e.exports = [
        {
          route: "",
          requiresLogin: !0,
          handler: n(function (e) {
            return this.apply("stats");
          }),
        },
        {
          route: ":metric(?:/:date/:date)?(/expanded)?",
          requiresLogin: !0,
          handler: n(function (e, t, n, i, r) {
            return r && this.navigateToRoute
              ? this.navigateToRoute(
                  "stats",
                  [
                    {
                      metric: t,
                      from: n,
                      to: i,
                    },
                  ],
                  {
                    replace: !0,
                    trigger: !0,
                  }
                )
              : this.apply("stats", {
                  metric: t,
                  from: n,
                  to: i,
                });
          }),
        },
      ];
    },
    1046: function (e, t) {
      function n(e) {
        return function (t, n, i, r, o, a) {
          var s = this.getCurrentUserPermalink();
          return t !== s
            ? this.navigate("/" + t, {
                replace: !0,
                trigger: !0,
              })
            : e.apply(this, arguments);
        };
      }
      e.exports = [
        {
          route: "",
          requiresLogin: !0,
          handler: n(function (e, t) {
            return this.apply("track-stats", {
              trackPermalink: t,
              userPermalink: e,
            });
          }),
        },
        {
          route: ":metric(?:/:date/:date)?(/expanded)?",
          requiresLogin: !0,
          handler: n(function (e, t, n, i, r, o) {
            if (o && this.navigateToRoute) {
              var a = {
                user: {
                  permalink: e,
                },
                permalink: t,
              };
              return this.navigateToRoute(
                "track-stats",
                [
                  a,
                  {
                    metric: n,
                    from: i,
                    to: r,
                  },
                ],
                {
                  replace: !0,
                  trigger: !0,
                }
              );
            }
            return this.apply("track-stats", {
              metric: n,
              from: i,
              to: r,
              trackPermalink: t,
              userPermalink: e,
            });
          }),
        },
      ];
    },
    1047: function (e, t, n) {
      function i(e) {
        return this.apply("collection", {
          subpage: e,
        });
      }
      function r(e) {
        return "/" + this.getCurrentUserPermalink() + "/" + e;
      }
      function o() {
        return n(0).any(
          [
            "can_see_revshare_premier_agreement",
            n(204).KNOWN_CONTENT_MONETIZATION,
            n(204).UNKNOWN_CONTENT_PAYOUTS,
          ],
          this.getFeatureValue
        );
      }
      function a() {
        return this.getFeatureValue("can_view_revshare_pro_prospect");
      }
      function s() {
        return this.getFeatureValue("can_see_revshare_pro_agreement");
      }
      function u() {
        return this.getFeatureValue("v2_repost_redirect_page");
      }
      e.exports = [
        {
          route: "",
          requiresLogin: !0,
          redirect: function () {
            return "/" + this.getCurrentUserPermalink();
          },
        },
        {
          route: "tracks",
          requiresLogin: !0,
          handler: function () {
            return this.apply("track-manager");
          },
        },
        {
          route: "(collection)",
          redirect: function () {
            return "/you/library";
          },
        },
        {
          route: "(library)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(likes)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(sets)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(albums)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(following)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(stations)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(history)",
          requiresLogin: !0,
          handler: i,
          meta: {
            feature: "collection",
          },
        },
        {
          route: "(followers)",
          requiresLogin: !0,
          redirect: r,
        },
        {
          route: "(comments)",
          requiresLogin: !0,
          redirect: r,
        },
        {
          route: "(reposts)",
          requiresLogin: !0,
          redirect: r,
        },
        {
          route: "subscriptions",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("subscriptions", {
              subpage: e,
            });
          },
        },
        {
          route: "premier",
          handler: function () {
            return this.isLoggedIn()
              ? o.call(this)
                ? this.apply("oscp", {
                    subpage: "",
                  })
                : s.call(this)
                ? this.apply("track-monetization", {
                    subpage: "agreement",
                  })
                : a.call(this)
                ? this.apply("track-monetization", {
                    subpage: "onboarding",
                  })
                : u.call(this)
                ? this.apply("track-monetization", {
                    subpage: "pre-repostnetwork-redirect",
                  })
                : this.navigate("https://www.repostnetwork.com", {
                    hard: !0,
                  })
              : (this.unauthenticated(), this.unauthenticated());
          },
          meta: {
            sitemap: [
              {
                loc: "premier",
                changefreq: n(52).ChangeFrequency.daily,
                priority: 1,
              },
            ],
          },
        },
        {
          route: "premier/(?:(agreement|getting-started|faqs))",
          handler: function (e) {
            return o.call(this)
              ? this.apply("oscp", {
                  subpage: e,
                })
              : this.navigateToRoute("premier", null, {
                  replace: !0,
                  trigger: !0,
                });
          },
        },
        {
          route: "premier/(?:(onboarding|resources))",
          handler: function (e) {
            if (!o.call(this))
              switch (e) {
                case "onboarding":
                  if (this.getFeatureValue("can_see_revshare_pro_agreement"))
                    return this.navigate("/you/premier", {
                      replace: !0,
                      trigger: !0,
                    });
                  if (this.getFeatureValue("can_view_revshare_pro_prospect"))
                    return this.apply("track-monetization", {
                      subpage: e,
                    });
                  break;
                case "resources":
                  if (this.getFeatureValue("can_see_revshare_pro_agreement"))
                    return this.apply("track-monetization", {
                      subpage: e,
                    });
              }
            return this.apply("error", {
              type: "404",
            });
          },
        },
        {
          route: "insights/overview",
          requiresLogin: !0,
          handler: function () {
            return this.apply("insights");
          },
        },
        {
          route: "(stats(?:/.*)?)",
          requiresLogin: !0,
          redirect: function (e) {
            return "/" + this.getCurrentUserPermalink() + "/" + e;
          },
        },
        {
          route: "reports",
          requiresLogin: !0,
          handler: function () {
            return this.getFeatureValue("can_see_earnings_dashboard")
              ? this.apply("reports")
              : this.apply("error", {
                  type: "404",
                });
          },
        },
        {
          route: "mastering(?:/tracks/(:id))?",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("mastering", {
              trackId: e,
            });
          },
        },
      ];
    },
    1048: function (e, t) {
      e.exports = [
        {
          route: "",
          requiresLogin: !0,
          handler: function () {
            return this.apply("developer-apps");
          },
        },
        {
          route: "new",
          redirect: function () {
            return "https://docs.google.com/forms/d/e/1FAIpQLSfNxc82RJuzC0DnISat7n4H-G7IsPQIdaMpe202iiHZEoso9w/viewform";
          },
        },
      ];
    },
    1049: function (e, t) {
      e.exports = [
        {
          route: "",
          redirect: "/you/stations",
        },
        {
          route: ":stationType/:stationIdentifier",
          handler: function (e, t) {
            return this.apply("station", {
              type: e,
              identifier: t,
            });
          },
        },
      ];
    },
    1050: function (e, t, n) {
      function i(e, t, i) {
        var r = n(0).findWhere(e, t);
        return r ? r.id : i;
      }
      e.exports = [
        {
          route: "(top|new)?",
          handler: function (e) {
            var t = this.getQueryParams();
            return this.apply("charts", {
              chartKind: i(
                n(109).kinds,
                {
                  urlPart: e,
                },
                n(109).defaultKind
              ),
              genre: i(
                n(109).genres,
                {
                  id: t.genre,
                },
                n(109).defaultGenre
              ),
              country: i(n(109).countries, {
                id: t.country,
              }),
            });
          },
          meta: {
            sitemap: [
              {
                loc: "",
                changefreq: n(52).ChangeFrequency.hourly,
                priority: 1,
              },
              {
                loc: "top",
                changefreq: n(52).ChangeFrequency.hourly,
                priority: 1,
              },
              {
                loc: "new",
                changefreq: n(52).ChangeFrequency.hourly,
                priority: 1,
              },
            ],
          },
        },
      ];
    },
    1051: function (e, t, n) {
      e.exports = [
        {
          route: "",
          requiresLogin: !1,
          handler: function () {
            return this.apply("discover");
          },
          meta: {
            sitemap: [
              {
                loc: "",
                changefreq: n(52).ChangeFrequency.hourly,
                priority: 1,
              },
            ],
          },
        },
        {
          route: "weekly",
          requiresLogin: !0,
          handler: function () {
            return this.apply("system-playlist", {
              systemPlaylistPermalink: "weekly",
            });
          },
        },
        {
          route: "your-(?::num+)-playback",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("system-playlist", {
              systemPlaylistPermalink: "your-playback:" + e,
            });
          },
        },
        {
          route: "sets/:systemPlaylistPermalink",
          requiresLogin: !1,
          handler: function (e) {
            return this.apply("system-playlist", {
              systemPlaylistPermalink: e,
            });
          },
        },
      ];
    },
    1052: function (e, t, n) {
      e.exports = [
        {
          route: "",
          code: 401,
          handler: function () {
            return this.apply("people");
          },
        },
        {
          route: "(following|followers)",
          redirect: function (e) {
            return "/you/" + e;
          },
        },
        {
          route: "directory(?:/(:alphanum+))?",
          handler: function (e) {
            return this.apply("people-directory", {
              subpage: e || "A",
            });
          },
          meta: {
            sitemap: [
              {
                loc: "directory",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 1,
              },
            ],
          },
        },
        {
          route: "finder|genre|find_friends",
          redirect: "/people",
        },
      ];
    },
    1053: function (e, t, n) {
      e.exports = [
        {
          route: "(.*)",
          handler: function (e) {
            return this.apply("static-page", {
              pageName: "pages/" + e,
            });
          },
          meta: {
            sitemap: [
              {
                loc: "privacy",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "oscp-privacy",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "cookies",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "competition",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "copyright/report",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "copyright",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "dmca_policy",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "model-withdrawal-form",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "contact",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "modern-slavery-act",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "promote-terms-and-conditions",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          route: "embed",
          handler: function () {
            return this.apply("widgets");
          },
          meta: {
            sitemap: [
              {
                loc: "embed",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          route: "widgets",
          redirect: "/pages/embed",
        },
        {
          route: "unsubscribed",
          code: 401,
          handler: function () {
            return this.apply("unsubscribed");
          },
        },
        {
          route: "who-we-are",
          redirect: "/pages/contact",
        },
        {
          route: "(copyright/report/form)",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("copyright-form", {
              pageName: "pages/" + e,
            });
          },
        },
      ];
    },
    1054: function (e, t, n) {
      e.exports = [
        {
          route: ":tag",
          handler: function (e) {
            var t = r(e.split("/")),
              n = t.tag,
              i = t.subpage;
            return this.apply("tags", {
              tag: n,
              subpage: i,
            });
          },
        },
      ];
      var i = ["recent-tracks", "popular-tracks", "playlists"],
        r = function (e) {
          var t = e.join("/"),
            r = i[0],
            o = e[e.length - 1];
          return (
            n(1055)(i, o) && ((r = o), (t = e.slice(0, -1).join("/"))),
            {
              tag: (t = decodeURIComponent(t)),
              subpage: r,
            }
          );
        };
    },
    106: function (e, t, n) {
      var i = /\s/,
        r = /([a-z])([A-Z])/g;
      e.exports = {
        usertext: n(326).withDefaults(n(327).default),
        usertextOneline: n(326).withDefaults(n(327).oneline),
        splitWords: function (e) {
          return e ? (i.test(e) ? e : e.replace(r, "$1​$2")) : "";
        },
      };
    },
    1076: function (e, t, n) {
      e.exports = [
        {
          route: "(iphone|android)?",
          handler: function (e) {
            return this.apply("mobile", {
              platform: e,
            });
          },
          meta: {
            sitemap: [
              {
                loc: "",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "iphone",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "android",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
      ];
    },
    1077: function (e, t) {
      e.exports = [
        {
          route:
            "(content|notifications|streaming|privacy|communications|analytics|advertising|verification)?",
          requiresLogin: !0,
          handler: function (e) {
            return "verification" !== e ||
              this.getFeatureValue("v2_can_request_verified_badge")
              ? this.apply("settings", {
                  subpage: e || "",
                })
              : this.apply("error", {
                  type: "404",
                });
          },
        },
        {
          route: "account",
          requiresLogin: !0,
          redirect: "/settings",
        },
        {
          route: "extra",
          redirect: "/settings/content",
        },
        {
          route: "plan",
          redirect: "/you/subscriptions",
        },
        {
          route: "email",
          redirect: "/settings/notifications",
        },
      ];
    },
    1078: function (e, t, n) {
      e.exports = [
        {
          route: "reset/success",
          handler: function () {
            return this.apply("password-reset-success");
          },
        },
        {
          route: "forgot",
          handler: function () {
            return this.isLoggedIn()
              ? this.navigate("/settings", {
                  replace: !0,
                  trigger: !0,
                })
              : this.apply("signin", {
                  subpage: "forgot",
                });
          },
        },
        {
          route: "",
          handler: function () {
            return this.isLoggedIn()
              ? this.navigate("/", {
                  replace: !0,
                  trigger: !0,
                })
              : this.apply("signin");
          },
          meta: {
            sitemap: [
              {
                loc: "",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 1,
              },
            ],
          },
        },
      ];
    },
    108: function (e, t, n) {
      (function (t) {
        var i = /^(?:(?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.com)\b\/?/i,
          r = /^(?:(?:ht|f)tps?:\/\/|mailto:)/i,
          o = /^[a-zA-Z0-9.!#$ %&’* +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          a = [
            "accounts",
            "activate",
            "activity",
            "admin",
            "android",
            "announcements",
            "api",
            "apps",
            "artworks",
            "assets",
            "comments",
            "community-guidelines",
            "connect",
            "customize",
            "creativecommons",
            "creator",
            "creators",
            "dashboard",
            "dropbox",
            "emails",
            "errors",
            "events",
            "explore",
            "facebook",
            "faqs",
            "favorites",
            "feedbacks",
            "feeds",
            "for",
            "forums",
            "genres",
            "gifts",
            "google_plus",
            "groups",
            "guestlist",
            "help",
            "hot",
            "invite",
            "imprint",
            "iphone",
            "ipad",
            "ipod",
            "jobs",
            "join-us",
            "latest",
            "login",
            "logout",
            "mac",
            "me",
            "messages",
            "mobile",
            "music",
            "newsletters",
            "notifications",
            "oauth",
            "oauth2",
            "orders",
            "oembed",
            "pages",
            "partners",
            "people",
            "player",
            "playlists",
            "posts",
            "press",
            "pro",
            "press_release",
            "search",
            "session",
            "sets",
            "settings",
            "signin",
            "sign-in",
            "signup",
            "sign-up",
            "sitemap",
            "sound",
            "sounds",
            "stats",
            "stream",
            "subscription",
            "terms-of-use",
            "tour",
            "tracks",
            "turn_off_notifications",
            "tags",
            "upload",
            "users",
            "videos",
            "waveform",
            "welcome",
            "widgets",
            "widget.xml",
            "widget",
            "widget.json",
            "you",
            "campaigns",
            "contacts",
            "discover",
            "fans",
            "faq",
            "logged_exceptions",
            "manifest.webapp",
            "robots",
            "topics",
          ],
          s = [];
        n(601).forEach(function (e) {
          s.unshift(e);
        });
        var u = (e.exports = {
          scLinksRegexGlobal: /soundcloud\.com\/[a-zA-Z0-9:_\/?=#&%-]+/g,
          soundcloudUrlRegex: i,
          anySCLinkRegex: /^(?:(?:https?:\/\/)?(?:[-\w]+\.)*?soundcloud\.com)\b\/?/i,
          getReservedKeywords: function () {
            return a;
          },
          updateSCLinks: function (e, i) {
            var o, a;
            return (
              void 0 === i && (i = {}),
              (null == (o = i) ? void 0 : o.usertext) &&
                (e = n(106).usertext(e, i)),
              (null == (a = i) ? void 0 : a.usertextOneline) &&
                (e = n(106).usertextOneline(e, i)),
              (e = t("<div>").html(e)).find("a").each(function (e, i) {
                var o = t(i),
                  a = i.getAttribute("href");
                if (!r.test(a)) {
                  var s = n(26).parse(a);
                  if (s.path) {
                    var l = u.getRouteInfo(s.path);
                    if (l)
                      if ("listen" === l.name) {
                        var c = s.path.split("/").slice(1);
                        o.text(
                          n(324).capitalize(c[0]) +
                            " – " +
                            n(324).capitalize(c[1])
                        );
                      } else if ("user" === l.name) {
                        var d = s.path.split("/")[1];
                        if (u.getReservedKeywords().indexOf(d) > -1) return;
                        o.addClass("g-link-user");
                        var f = i.previousSibling;
                        if (
                          3 === (null == f ? void 0 : f.nodeType) &&
                          /@$/.test(f.textContent)
                        )
                          return;
                        i.parentNode.insertBefore(
                          window.document.createTextNode("@"),
                          i
                        ),
                          o.text(d);
                      }
                  }
                }
              }),
              e.html()
            );
          },
          getRouteInfo: function (e) {
            var t = e.replace(/^\//, "");
            return n(0).find(s, function (e) {
              return e.route.test(t);
            });
          },
          getAudibleModels: function (e) {
            var t = this.filterAudibleLinks(e),
              i = n(7).defer(),
              r = t.map(function (e) {
                return "listen" === e.info.name
                  ? n(17).resolve.apply(n(17), e.info.params)
                  : "playlist" === e.info.name
                  ? n(48).resolve.apply(n(48), e.info.params)
                  : "discover/(?:sets/:systemPlaylistPermalink)" === e.info.name
                  ? n(90).resolve.apply(n(90), e.info.params)
                  : void 0;
              });
            return (
              n(7)
                .settled(r)
                .always(function () {
                  for (
                    var e = arguments.length, r = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    r[o] = arguments[o];
                  var a = n(0).map(r, function (e, i) {
                    var r = e[0];
                    return r instanceof n(17) ||
                      r instanceof n(48) ||
                      r instanceof n(90)
                      ? {
                          audible: r,
                          link: t[i].link,
                        }
                      : null;
                  });
                  i.resolve(a);
                }),
              i
            );
          },
          filterAudibleLinks: function (e) {
            var t = n(4).get("router"),
              i = [
                "listen",
                "playlist",
                "discover/(?:sets/:systemPlaylistPermalink)",
              ];
            return n(0).reduce(
              e,
              function (e, n) {
                var r = t.getUrlInfo(n);
                return (
                  i.indexOf(null == r ? void 0 : r.name) > -1 &&
                    e.push({
                      info: r,
                      link: n,
                    }),
                  e
                );
              },
              []
            );
          },
          formatUserGeneratedLink: function (e) {
            var t = n(26).parse(e);
            return i.test(t.host)
              ? (function (e) {
                  if (
                    e &&
                    ((t = e),
                    (n = "javascript:"),
                    t.trim().substr(0, n.length).toLowerCase() === n)
                  )
                    return "";
                  var t, n;
                  return e;
                })(t.path)
              : n(106).usertext.redirectLink(e);
          },
          isEmail: function (e) {
            return o.test(e);
          },
          usernameLinkForTemplate: function (e, t) {
            return e
              ? n(28).el(
                  "a",
                  {
                    href: n(22).getRoute("user", e),
                    class: t || "",
                  },
                  [n(11).Utils.escapeExpression(e.username)]
                )
              : "";
          },
          getUserLink: function (e) {
            return e ? n(22).getRoute("user", e) : null;
          },
        });
      }.call(this, n(15)));
    },
    1080: function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e;
      }
      e.exports = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(i, e);
      };
    },
    1081: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return (i.innerHTML = e.replace(r, "&lt;")), i.value;
      };
      var i = document.createElement("textarea"),
        r = /</g;
    },
    1082: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        if (null == e || !1 === e) return "";
        if (!o.test(e)) return e;
        return e.replace(r, a);
      };
      var i = {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
        },
        r = /&(?!\w+;)|[<>"'`]/g,
        o = /[&<>"'`]/,
        a = function (e) {
          return i[e] || "&amp;";
        };
    },
    1083: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n) {
        if (!e || (n && n.test(t))) return t;
        return e.replace(i, window.encodeURIComponent(t));
      };
      var i = /%s/;
    },
    1084: function (e, t, n) {
      "use strict";
      var i = n(605);
      e.exports = function (e, t) {
        if (e.length < t) return e;
        return (
          (o.innerHTML = r.innerHTML = e),
          i(
            r,
            function (e) {
              if (t > 0) {
                var n = e.data.length;
                (t -= n) <= 0 &&
                  (e.data = e.substringData(0, e.data.length + t));
              } else e.data = "";
            },
            function () {
              return t > 0;
            },
            function (e) {
              var t = void 0;
              for (; e; )
                (t = e), (e = e.nextSibling), t.parentNode.removeChild(t);
            }
          ),
          r.innerHTML + (r.innerHTML === o.innerHTML ? "" : "&hellip;")
        );
      };
      var r = document.createElement("div"),
        o = document.createElement("div");
    },
    1085: function (e, t, n) {
      "use strict";
      e.exports = function () {
        var e = [],
          t = Math.floor(1e4 * Math.random()),
          n = /xxxLINK[0-9]+\|([0-9]+)xxx/g;
        return {
          addPlaceholder: function (n, i) {
            return (
              e.push({
                href: n,
                text: i,
              }),
              "xxxLINK" + t + "|" + (e.length - 1) + "xxx"
            );
          },
          flatten: function (t, i) {
            var r = t.replace(n, function (t, n) {
              var r = e[parseInt(n, 10)];
              return r ? i(r.href, r.text) : t;
            });
            return (e.length = 0), r;
          },
        };
      };
    },
    1086: function (e, t, n) {
      "use strict";
      var i = n(605);
      e.exports = function (e, t) {
        var n = new RegExp("\\S{" + t + ",}", "g"),
          o = new RegExp("(\\S{" + Math.floor(t / 2) + "}(?=\\S{2}))");
        if (!n.test(e)) return e;
        return (
          (r.innerHTML = e),
          i(r, function (e) {
            (n.lastIndex = 0),
              n.test(e.data) &&
                (e.data = e.data.replace(n, function (e) {
                  return e.split(o).filter(Boolean).join("​");
                }));
          }),
          r.innerHTML
        );
      };
      var r = document.createElement("div");
    },
    1087: function (e, t, n) {
      "use strict";
      var i = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              i = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(i = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                i = !0
              );
            } catch (e) {
              (r = !0), (o = e);
            } finally {
              try {
                !i && s.return && s.return();
              } finally {
                if (r) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
      e.exports = function (e, t, n) {
        var o = (e = n ? e.replace(n, "") : e).match(r) || [],
          a = i(o, 1)[0];
        if (a && e.length > t) {
          var s = e.search(r) + a.length,
            u = Math.floor((t - s) / 2);
          return e.slice(0, s + u) + "&hellip;" + e.slice(-u);
        }
        return e;
      };
      var r = /\.[a-z-]{2,30}\//;
    },
    1089: function (e, t, n) {
      e.exports = new (n(16))({
        requirePrototype: n(21).prototype,
        defaults: {
          isPrivate: function () {
            return "private" === this.get("sharing");
          },
          isPublic: function () {
            return !this.isPrivate();
          },
          extractSecretToken: n(0).noop,
        },
        around: {
          url: function (e, t) {
            var i = this.get("secret_token"),
              r = e(t);
            return i && this.isPrivate()
              ? n(26).modify(r, {
                  query: {
                    secret_token: i,
                  },
                })
              : r;
          },
          parse: function (e, t) {
            var i;
            return (
              "string" == typeof this.baseUrl &&
                (i = n(26).parse(this.baseUrl).query.secret_token),
              i || (i = this.extractSecretToken(t)),
              i && (t.secret_token = i),
              e(t)
            );
          },
        },
      });
    },
    109: function (e, t) {
      e.exports = {
        defaultKind: "top",
        defaultGenre: "all-music",
        defaultCountry: "all-countries",
        kinds: [
          {
            id: "top",
            urlPart: "top",
          },
          {
            id: "trending",
            urlPart: "new",
          },
        ],
        genres: [
          {
            id: "all-music",
            category: "all",
            content: "music",
          },
          {
            id: "all-audio",
            category: "all",
            content: "audio",
          },
          {
            id: "alternativerock",
            category: "music",
            content: "music",
          },
          {
            id: "ambient",
            category: "music",
            content: "music",
          },
          {
            id: "classical",
            category: "music",
            content: "music",
          },
          {
            id: "country",
            category: "music",
            content: "music",
          },
          {
            id: "danceedm",
            category: "music",
            content: "music",
          },
          {
            id: "dancehall",
            category: "music",
            content: "music",
          },
          {
            id: "deephouse",
            category: "music",
            content: "music",
          },
          {
            id: "disco",
            category: "music",
            content: "music",
          },
          {
            id: "drumbass",
            category: "music",
            content: "music",
          },
          {
            id: "dubstep",
            category: "music",
            content: "music",
          },
          {
            id: "electronic",
            category: "music",
            content: "music",
          },
          {
            id: "folksingersongwriter",
            category: "music",
            content: "music",
          },
          {
            id: "hiphoprap",
            category: "music",
            content: "music",
          },
          {
            id: "house",
            category: "music",
            content: "music",
          },
          {
            id: "indie",
            category: "music",
            content: "music",
          },
          {
            id: "jazzblues",
            category: "music",
            content: "music",
          },
          {
            id: "latin",
            category: "music",
            content: "music",
          },
          {
            id: "metal",
            category: "music",
            content: "music",
          },
          {
            id: "piano",
            category: "music",
            content: "music",
          },
          {
            id: "pop",
            category: "music",
            content: "music",
          },
          {
            id: "rbsoul",
            category: "music",
            content: "music",
          },
          {
            id: "reggae",
            category: "music",
            content: "music",
          },
          {
            id: "reggaeton",
            category: "music",
            content: "music",
          },
          {
            id: "rock",
            category: "music",
            content: "music",
          },
          {
            id: "soundtrack",
            category: "music",
            content: "music",
          },
          {
            id: "techno",
            category: "music",
            content: "music",
          },
          {
            id: "trance",
            category: "music",
            content: "music",
          },
          {
            id: "trap",
            category: "music",
            content: "music",
          },
          {
            id: "triphop",
            category: "music",
            content: "music",
          },
          {
            id: "world",
            category: "music",
            content: "music",
          },
          {
            id: "audiobooks",
            category: "audio",
            content: "audio",
          },
          {
            id: "business",
            category: "audio",
            content: "audio",
          },
          {
            id: "comedy",
            category: "audio",
            content: "audio",
          },
          {
            id: "entertainment",
            category: "audio",
            content: "audio",
          },
          {
            id: "learning",
            category: "audio",
            content: "audio",
          },
          {
            id: "newspolitics",
            category: "audio",
            content: "audio",
          },
          {
            id: "religionspirituality",
            category: "audio",
            content: "audio",
          },
          {
            id: "science",
            category: "audio",
            content: "audio",
          },
          {
            id: "sports",
            category: "audio",
            content: "audio",
          },
          {
            id: "storytelling",
            category: "audio",
            content: "audio",
          },
          {
            id: "technology",
            category: "audio",
            content: "audio",
          },
        ],
        countries: [
          {
            id: "all-countries",
          },
          {
            id: "AU",
          },
          {
            id: "CA",
          },
          {
            id: "FR",
          },
          {
            id: "GB",
          },
          {
            id: "DE",
          },
          {
            id: "IE",
          },
          {
            id: "NZ",
          },
          {
            id: "NL",
          },
          {
            id: "US",
          },
        ],
      };
    },
    1090: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      e.exports = new (n(16))({
        requires: ["previousAttributes", "set", "get"],
        around: {
          parse: function (e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              i[r - 1] = arguments[r];
            var o = e.apply(this, i),
              a = o.monetization;
            return (
              !0 === (null == a ? void 0 : a.worldwide) &&
                (o.monetization.territories = n(0).difference(
                  n(51).monetizableCountryCodes(),
                  a.excluded_territories
                )),
              o
            );
          },
        },
        before: {
          save: function () {
            this.set({
              monetization: this._computeWorldwideMonetization(),
            });
          },
        },
        hasMonetizationWorldwide: function () {
          return !0 === (this.get("monetization") || {}).worldwide;
        },
        _computeWorldwideMonetization: function () {
          var e = this.get("monetization"),
            t = this.get("rightsholders"),
            r = n(0).indexBy(
              this.previousAttributes().rightsholders,
              "territory"
            );
          return this.hasMonetizationWorldwide()
            ? !1 ===
                n(0).isEqual(
                  n(0).sortBy(e.territories),
                  n(0).sortBy(
                    n(0).difference(
                      n(51).monetizableCountryCodes(),
                      null == e ? void 0 : e.excluded_territories
                    )
                  )
                ) ||
              n(0).any(t, function (e) {
                var t = e.rightsholder_urn,
                  n = e.territory;
                return r[n].rightsholder_urn !== t;
              })
              ? i({}, e, {
                  worldwide: !1,
                })
              : i({}, e, {
                  territories: [],
                })
            : e;
        },
      });
    },
    1091: function (e, t, n) {
      function i(e) {
        return n(0).some(this.ownerAttributes, function (t) {
          return e.indexOf(t) > -1;
        });
      }
      e.exports = new (n(16))({
        requires: ["ownerAttributes", "ownerUrl", "attrExists"],
        around: {
          fetch: function (e, t) {
            var r,
              o = t && t.attrs,
              a = n(0).clone(t),
              s = n(4).get("me").owns(this);
            return (
              (r = o && i.call(this, o)),
              s &&
                r &&
                ((a.url = n(26).modify(this.ownerUrl(), {
                  query: {
                    representation: "owner",
                  },
                })),
                (a.batch = !1)),
              e.call(this, a)
            );
          },
        },
      });
    },
    1092: function (e, t, n) {
      var i = 2 * n(29).MS_IN_SECOND,
        r = 30 * n(29).MS_IN_SECOND;
      e.exports = new (n(16))({
        applyTo: function (e) {
          var t = e.constructor;
          this.before(t, {
            onCleanup: function (e) {
              e.pollOff();
            },
          });
        },
        after: {
          initialize: function () {
            this._polling = {
              circuit: null,
              callbacks: {},
            };
          },
        },
        pollOn: function (e, t, o) {
          var a = this._polling,
            s = a.circuit;
          s ||
            (s = a.circuit = new (n(193))({
              tolerance: 1,
              baseDelay: i,
              maxDelay: r,
              backoffRate: 1.5,
              giveUp: 100,
              enabled: !1,
            }))
              .on(
                "enabled",
                function () {
                  this.fetch({
                    attrs: Object.keys(a.callbacks),
                    batch: !1,
                  }),
                    s.failed();
                },
                this
              )
              .on(
                "giveup",
                function () {
                  this.pollOff();
                },
                this
              ),
            (a.callbacks[e] = a.callbacks[e] || []),
            a.callbacks[e].length || s.succeeded(),
            this._polling.callbacks[e].push({
              callback: t,
              context: o,
            }),
            this.on("change:" + e, t, o);
        },
        pollOff: function (e, t, i) {
          var r,
            o = this._polling,
            a = {};
          3 === arguments.length && o.callbacks[e]
            ? ((r = []),
              (a[e] = []),
              o.callbacks[e].forEach(function (n) {
                n.callback === t && n.context === i ? a[e].push(n) : r.push(n);
              }),
              (o.callbacks[e] = r),
              o.callbacks[e].length || delete o.callbacks[e])
            : e
            ? ((a = {
                attr: o.callbacks[e] || [],
              }),
              delete o.callbacks[e])
            : ((a = o.callbacks), (o.callbacks = {})),
            n(0).each(
              a,
              function (e, t) {
                e.forEach(function (e) {
                  this.off("change:" + t, e.callback, e.context);
                }, this);
              },
              this
            ),
            !Object.keys(o.callbacks).length &&
              o.circuit &&
              (o.circuit.dispose(), (o.circuit = null));
        },
      });
    },
    1098: function (e, t, n) {
      e.exports = {
        buildConnectionEventManager: function () {
          var e = [],
            t = !1;
          return {
            handleConnectionEvents: function (t) {
              t.onConnectionRequired.subscribe(i),
                t.onConnectionRecovered.subscribe(i),
                t.onChange.subscribe(function (n) {
                  n.dead && (e.splice(e.indexOf(t), 1), i());
                }),
                e.push(t),
                i();
            },
          };
          function i() {
            var i = e.some(function (e) {
              return e.isConnectionRequired();
            });
            i !== t &&
              ((t = i),
              n(8).trigger(
                i
                  ? "error:audio_no_connection"
                  : "error:audio_connection_recovered"
              ));
          }
        },
      };
    },
    1099: function (e, t, n) {
      e.exports = {
        buildPlayer: function (e) {
          var t = e.dataPromise,
            i = e.audioPerformanceReporter,
            r = e.errorReporter,
            o = n(7).defer();
          return (
            t
              .then(function (e) {
                var t = e.duration,
                  a = e.trackUrn;
                if ("pending" === o.state())
                  return new (n(69).Player)({
                    controllers: [
                      new (n(613).ChromecastPlayerController)({
                        castContext: n(116)
                          .getInstance()
                          .then(function (e) {
                            return e.getContext();
                          }),
                      }),
                    ],
                    duration: t,
                    streamUrlRetriever: new (n(356).StreamUrlRetriever)({
                      urlsWithRenditions: [
                        {
                          url: a,
                          rendition: n(69).renditions.maestroChromecast,
                        },
                      ],
                    }),
                    audioPerformanceReporter: function (e) {
                      return i(
                        n(0).assign(
                          {
                            trackUrn: a,
                            entityType: "soundcloud",
                          },
                          e
                        )
                      );
                    },
                    errorReporter: function (e) {
                      return r(
                        n(0).assign(
                          {
                            trackUrn: a,
                            entityType: "soundcloud",
                          },
                          e
                        )
                      );
                    },
                    preloadingEnabled: !0,
                    logger: n(163),
                  });
              })
              .then(o.resolve, o.reject),
            o
          );
        },
      };
    },
    1100: function (e, t, n) {
      function i(e) {
        return "SNIP" === e;
      }
      function r() {
        switch (n(289).getCurrentQuality()) {
          case n(216).HQ:
            return "high";
          case n(216).SQ:
            return "standard";
          default:
            return;
        }
      }
      function o(e) {
        return {
          snippet: i(e),
          qualities:
            n(289).getCurrentQuality() === n(216).HQ
              ? [n(69).Quality.HQ, n(69).Quality.SQ]
              : [n(69).Quality.SQ],
        };
      }
      e.exports = {
        buildPlayer: function (e) {
          var t = e.dataPromise,
            i = e.audioPerformanceReporter,
            a = e.errorReporter,
            s = e.audioReporter,
            u = e.checkpointInterval,
            l = n(7).defer();
          return (
            t
              .then(function (e) {
                var t = e.secretToken,
                  c = e.duration,
                  d = e.getPolicy,
                  f = e.onPolicyOrMediaChange,
                  h = e.getMediaPayload,
                  p = e.trackUrn,
                  g = e.trackId;
                if ("pending" === l.state()) {
                  var m = {
                      request: function (e) {
                        return (
                          (e.url = n(26).modify(e.url, {
                            query: {
                              stage: n(68).get("stage"),
                            },
                          })),
                          n(435).stringLoader.request(e)
                        );
                      },
                    },
                    v = n(18).getAuthToken(),
                    y = new (n(421).StreamUrlRetriever)({
                      loader: m,
                      clientId: n(4).get("client_id"),
                      trackId: g,
                      secretToken: t,
                      requestAuthorization: v ? "OAuth " + v : null,
                      mediaPayload: h(),
                    }),
                    _ = new (n(69).Player)({
                      controllers: [
                        new (n(611).HLSMSEPlayerController)(n(328).fading),
                        new (n(162).HTML5PlayerController)(n(328).fading),
                      ],
                      duration: c,
                      streamUrlRetriever: y,
                      getURLOpts: o(d()),
                      streamUrlsExpire: !0,
                      audioPerformanceReporter: function (e) {
                        return i(
                          n(0).assign(
                            {
                              trackUrn: p,
                              entityType: "soundcloud",
                              audioQualityMode: r(),
                            },
                            e
                          )
                        );
                      },
                      errorReporter: function (e) {
                        return a(
                          n(0).assign(
                            {
                              trackUrn: p,
                              entityType: "soundcloud",
                              audioQualityMode: r(),
                            },
                            e
                          )
                        );
                      },
                      audioReporter: function (e) {
                        return s(
                          n(0).assign(
                            {
                              audioQualityMode: r(),
                            },
                            e
                          )
                        );
                      },
                      audioCheckpointInterval: u,
                      fadeOnPauseAndPlay: !0,
                      fadeOnSeek: !0,
                      pausedMaxBufferLength: 15e3,
                      playingMaxBufferLength: 3e5,
                      logger: n(163),
                    });
                  if (!_.isDead()) {
                    var b = function () {
                        w();
                      },
                      w = function () {
                        var e = n(18).getAuthToken();
                        y.updateRequestAuthorization(e ? "OAuth " + e : null);
                      },
                      k = function () {
                        w(), y.updateMediaPayload(h()), _.reload(o(d()));
                      },
                      A = function () {
                        _.reload(o(d()));
                      };
                    _.onChange.subscribe(function (e) {
                      e.dead &&
                        (n(8).off(null, b), f.remove(k), n(92).off(null, A));
                    }),
                      n(8).on("connect:login connect:logout", b),
                      f.onSignal(k),
                      n(92).on(n(289).STREAMING_QUALITY_SETTING, A);
                  }
                  return _;
                }
              })
              .then(l.resolve, l.reject),
            l
          );
        },
      };
    },
    1101: function (e, t, n) {
      e.exports = {
        buildPlayer: function (e) {
          var t = e.url,
            i = e.audioPerformanceReporter,
            r = e.errorReporter,
            o = e.audioReporter,
            a = e.checkpointInterval;
          if (!t) throw new Error("ExternalAudioAd: requires url");
          return new (n(69).Player)({
            controllers: [new (n(162).HTML5PlayerController)(n(328).general)],
            streamUrlRetriever: new (n(356).StreamUrlRetriever)({
              urlsWithRenditions: [
                {
                  url: t,
                  rendition: n(69).renditions.httpMp3,
                },
              ],
            }),
            streamUrlsExpire: !1,
            fadeOnPauseAndPlay: !1,
            audioPerformanceReporter: function (e) {
              return i(
                n(0).assign(
                  {
                    entityType: "ad_audio",
                  },
                  e
                )
              );
            },
            errorReporter: function (e) {
              return r(
                n(0).assign(
                  {
                    entityType: "ad_audio",
                  },
                  e
                )
              );
            },
            audioReporter: o,
            audioCheckpointInterval: a,
            logger: n(163),
            seekStrategy: n(83).NeverAllowSeekStrategy,
          });
        },
      };
    },
    1102: function (e, t) {
      e.exports = {
        buildPreloadingManager: function () {
          var e = [],
            t = !1;
          return {
            registerPlayer: function (t) {
              t.onChange.subscribe(function (n) {
                n.dead && e.splice(e.indexOf(t), 1);
              }),
                e.push(t),
                n();
            },
            enablePreloading: function () {
              (t = !0), n();
            },
            disablePreloading: function () {
              (t = !1), n();
            },
          };
          function n() {
            e.forEach(function (e) {
              t ? e.enablePreloading() : e.disablePreloading();
            });
          }
        },
      };
    },
    111: function (e, t, n) {
      var i,
        r = s(".,'\"()[]-"),
        o = new RegExp("^[^\\s" + r + "]"),
        a = new RegExp("(?:^|\\s)[\\s" + r + "]?[^\\s" + r + "]", "g");
      e.exports = {
        sentenceCase: function (e) {
          return e.replace(o, u);
        },
        titleCase: function (e) {
          return e.replace(a, u);
        },
        permalink: function (e) {
          return n(318)(e)
            .toLowerCase()
            .replace(/\s/g, "-")
            .replace(/[^a-z0-9_-]+/g, "")
            .replace(/^[_-]+|[_-]+$/g, "")
            .replace(/([-_])[-_]+/g, "$1")
            .replace(/^[^a-z]+$/, "$&a");
        },
        truncate: function (e, t) {
          return e.length > t ? e.slice(0, t - 1) + "…" : e;
        },
        regexpEscape: s,
        truncateFileName: function (e, t) {
          if (!e || e.length <= t) return e;
          var n = e.split(".").pop();
          return (e = n
            ? e.substring(0, t - 2 - n.length) + "…." + n
            : e.substring(0, t));
        },
        countLetters: function (e) {
          return (i || (i = new (n(955))()), i).countGraphemes(e);
        },
      };
      function s(e) {
        return e.replace(/[-\/\\$\^*+?.()|\[\]{}]/g, "\\$&");
      }
      function u(e) {
        return e.toUpperCase();
      }
    },
    1115: function (e, t) {
      var n = ["free", "consumer-mid-tier", "consumer-high-tier"],
        i = {
          adFree: [!1, !0, !0],
        };
      e.exports = {
        get: function (e, t) {
          var r = i[t];
          if (r) return r[n.indexOf(e)];
        },
      };
    },
    1116: function (e, t) {
      e.exports = {
        getOverrides: function (e) {
          return (
            void 0 === e && (e = {}),
            Object.keys(e)
              .filter(function (e) {
                return -1 !== e.indexOf("feature.");
              })
              .reduce(function (t, n) {
                var i = n.replace("feature.", ""),
                  r = "false" !== e[n] && "0" !== e[n];
                return (t[i] = r), t;
              }, {})
          );
        },
      };
    },
    116: function (e, t, n) {
      var i = (6 * n(29).MS_IN_SECOND) / 100,
        r = !1,
        o = !1,
        a = null;
      window.__onGCastApiAvailable = function () {
        window.chrome &&
          window.cast &&
          window.chrome.cast &&
          ((r = !0),
          n(8).on("googleCast:start", function (e) {
            (o = !0), (a = e.getSafeDeviceName());
          }),
          n(8).on("googleCast:end", function () {
            (o = !1), (a = null);
          }));
      };
      var s = n(7).defer();
      e.exports = {
        getInstance: n(0).memoize(function () {
          var e = (n(60).chrome
            ? n(7)
                .promise(function (e, t) {
                  n(65).insertScript(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
                    {
                      onload: e,
                      onerror: t,
                    }
                  );
                })
                .then(null, function () {
                  return n(7).reject("Failed to load cast_sender.js");
                })
            : n(7).reject("Cast is disabled for browser")
          )
            .then(function () {
              return n(7)
                .poll(
                  function () {
                    return r;
                  },
                  100,
                  i
                )
                .then(null, function () {
                  return n(7).reject("SDK loaded but unavailable");
                });
            })
            .then(function () {
              return n(968).fromSDK(window.chrome, window.cast);
            });
          return (
            e.then(s.resolve, function (e) {
              n(102).error("Load failed:", e), s.reject(e);
            }),
            e
          );
        }),
        getInstanceLazy: function () {
          return s.promise();
        },
        isCasting: function () {
          return o;
        },
        safeDeviceName: function () {
          return a;
        },
      };
    },
    117: function (e, t, n) {
      var i,
        r = ["album", "ep", "single", "compilation"],
        o =
          (((i = {}).playlist = n(1).Lingua.t("Playlist")),
          (i.album = n(1).Lingua.t("Album")),
          (i.ep = n(1).Lingua.t("EP")),
          (i.single = n(1).Lingua.t("Single")),
          (i.compilation = n(1).Lingua.t("Compilation")),
          i),
        a = function (e) {
          return function (t) {
            return r.indexOf(t) > -1 ? t : e;
          };
        },
        s = a("playlist"),
        u = a(null);
      e.exports = {
        typeToApi: u,
        apiToType: s,
        releaseLabels: o,
        getReleaseLabel: function (e) {
          return o[e] || "";
        },
        defaultReleaseType: "playlist",
      };
    },
    118: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "getTrackerUrls", function () {
          return d;
        }),
        n.d(t, "log", function () {
          return f;
        }),
        n.d(t, "logEvent", function () {
          return h;
        });
      var i = n(4),
        r = n.n(i),
        o = n(13),
        a = n(0),
        s = n.n(a).a.flatten,
        u = {
          play: ["sound_play", "SCAudioStart"],
          skip: ["sound_skip"],
          finish: ["sound_finish"],
          adImpression: ["impression"],
          adClick: ["ad_click"],
          pause: ["SCAudioPause"],
          resume: ["SCAudioResume"],
          first_quartile: ["SCAudioFirstQuartile"],
          second_quartile: ["SCAudioSecondQuartile"],
          third_quartile: ["SCAudioThirdQuartile"],
        },
        l = function (e) {
          new window.Image().src = e;
        },
        c = !1;
      function d(e, t) {
        return s(
          (u[e] || []).map(function (e) {
            return t[e] || [];
          })
        );
      }
      function f(e, t) {
        void 0 === e && (e = []),
          void 0 === t && (t = {}),
          c ||
            (r.a.get("features") &&
              (r.a.get("features").has("debug_ad_trackers") &&
                ((window.__sc_ad_trackers = []),
                (l = function (e) {
                  window.__sc_ad_trackers.push(e), (new window.Image().src = e);
                })),
              (c = !0))),
          e
            .map(function (e) {
              return (function (e, t) {
                return e.replace(/\[([A-Z]+)\]/g, function (e, n) {
                  switch (n) {
                    case "ERRORCODE":
                      return null != t.errorCode ? String(t.errorCode) : e;
                    case "CACHEBUSTING":
                      return String(
                        ((r = 1e7),
                        (a = 99999999),
                        (r = Math.ceil(r)),
                        (a = Math.floor(a)),
                        Math.floor(Math.random() * (a - r + 1)) + r)
                      );
                    case "TIMESTAMP":
                      return new Date(
                        o.LinguaLib.dateTimeHelper.nowAtServer()
                      ).toISOString();
                    case "CONTENTPLAYHEAD":
                      return null != t.contentPlayheadInMs
                        ? ((i = t.contentPlayheadInMs),
                          new Date(i).toISOString().substring(11, 23))
                        : e;
                    default:
                      return e;
                  }
                  var i, r, a;
                });
              })(e, t);
            })
            .forEach(function (e) {
              l(e);
            });
      }
      function h(e, t) {
        return f(d(e, t.trackerUrlsByAdEvent || {}), t);
      }
    },
    1184: function (e, t, n) {
      e.exports = function (e) {
        var t = n(259).createAbortController(),
          i = (function (e, t) {
            return n(433)(
              function () {
                return n(35).callEndpoint(
                  "uploadTranscodingTrigger",
                  {
                    id: e,
                  },
                  null,
                  null,
                  null,
                  {
                    abort: t,
                  }
                );
              },
              function () {
                return !0;
              },
              {
                maxRetries: 5,
                abort: t,
              }
            );
          })(e, t.signal).then(function () {
            return (function (e, t) {
              var i,
                r,
                o,
                a = n(7).defer(),
                s = a.promise();
              function u(e) {
                r = window.setTimeout(
                  l,
                  (function (e) {
                    return (i = !e && i ? Math.min(1e4, 1.5 * i) : 1e3);
                  })(e)
                );
              }
              function l() {
                (function (e, t) {
                  return n(35).callEndpoint(
                    "uploadTranscodingStatus",
                    {
                      id: e,
                    },
                    null,
                    null,
                    null,
                    {
                      abort: t,
                    }
                  );
                })(e, t)
                  .done(c)
                  .fail(d);
              }
              function c(e) {
                switch (e.body.status) {
                  case n(228).QUEUED:
                  case n(228).PREPARING:
                    u();
                    break;
                  case n(228).TRANSCODING:
                    u(e.body.percentage === o),
                      (o = e.body.percentage),
                      a.notify(o);
                    break;
                  case n(228).FINISHED:
                    a.resolve();
                    break;
                  case n(228).NOT_FOUND:
                  case n(228).FAILURE:
                    a.reject();
                }
              }
              function d(e) {
                500 === e.status ? u() : a.reject();
              }
              return (
                u(),
                t.addAbortListener(function e() {
                  window.clearTimeout(r), a.reject(), t.removeAbortListener(e);
                }),
                s
              );
            })(e, t.signal);
          });
        return (i.abort = t.abort), i;
      };
    },
    1185: function (e, t, n) {
      e.exports = new (n(16))(n(1186), {
        constraints: null,
        constraintConditions: null,
        before: {
          initialize: function () {
            i.call(this);
          },
        },
        override: {
          _validate: function () {
            return !0;
          },
          isValid: function () {
            return n(0).every(this.fields, function (e) {
              return e.validity === n(50).VALID;
            });
          },
        },
        hasConstraintsOwnedBy: function (e) {
          return c.call(this, e).length > 0;
        },
        setFieldValidation: function (e, t, i) {
          var r = this.fields[e],
            o = t === n(50).VALID;
          (r.validity = t),
            (r.isValid === o && r.message === i) ||
              ((r.message = i),
              (r.isValid = o),
              this.trigger("validation:" + e, r));
        },
        resetFieldValidation: function () {
          for (
            var e = this, t = arguments.length, i = new Array(t), r = 0;
            r < t;
            r++
          )
            i[r] = arguments[r];
          n(0)
            .flatten(i)
            .forEach(function (t) {
              var i = e.fields[t];
              i &&
                (a.call(e, t),
                (i.validity = e.hasConstraintsOwnedBy(t)
                  ? n(50).UNKNOWN
                  : n(50).VALID),
                (i.message = ""),
                (i.isValid = !0),
                e.trigger("validation:" + t, i));
            });
        },
        resetAllFieldValidations: function () {
          this.resetFieldValidation(Object.keys(this.fields));
        },
        validate: function (e) {
          var t = this,
            i = (void 0 === e ? {} : e).fields,
            r = void 0 === i ? Object.keys(this.fields) : i,
            a = n(7).defer(),
            l = r.filter(function (e) {
              return !!t.fields[e];
            });
          switch (s.call(this, l)) {
            case n(50).INVALID:
              a.resolve(!1);
              break;
            case n(50).VALID:
              a.resolve(!0);
              break;
            case n(50).UNKNOWN:
              var c = n(0)
                .chain(l)
                .filter(function (e) {
                  return t.fields[e].validity === n(50).UNKNOWN;
                })
                .reduce(u.bind(this), {})
                .map(function (e, i) {
                  var r = t.isConstraintEnabledForField.bind(t, i),
                    a = n(0).partition(e, r),
                    s = a[0],
                    u = a[1];
                  n(0).invoke(u, "disable");
                  var l = n(0).invoke(s, "validate", t, t.get(i));
                  if (l.length) return n(7).settled(l).always(o.bind(t, i));
                  t.setFieldValidation(i, n(50).VALID);
                })
                .compact()
                .value();
              n(7)
                .all(c)
                .always(function () {
                  a.resolve(s.call(t, l) === n(50).VALID);
                });
          }
          return (
            l.length === Object.keys(this.fields).length &&
              a.done(function (e) {
                t.trigger("validation", e);
              }),
            a
          );
        },
        getValidFieldValues: function (e) {
          var t = this,
            i = n(7).defer();
          return (
            this.validate({
              fields: e,
            }).then(function (n) {
              if (n) {
                var r = e.map(function (e) {
                  return t.get(e);
                });
                i.resolve.apply(i, r);
              } else i.reject();
            }),
            i
          );
        },
        isConstraintEnabledForField: function (e, t) {
          var i = this,
            r = this.fields[e];
          if (!r) return !1;
          var o = this.constraintConditions[e],
            a = o ? o.fields.map(this.get, this) : [];
          return (
            !r.disabled &&
            n(0)
              .chain(l.call(this, e))
              .filter(function (e) {
                return f(e, t);
              })
              .any(function (e) {
                return (
                  !o ||
                  !(function (e, t) {
                    return (
                      !e.constraints ||
                      n(0).any(e.constraints, n(0).partial(f, t))
                    );
                  })(o, e) ||
                  Boolean(o.check.apply(i, a))
                );
              })
              .value()
          );
        },
        getInvalidFields: function () {
          return n(0).compact(
            n(0).map(this.fields, function (e, t) {
              if (e.validity === n(50).INVALID) return t;
            })
          );
        },
      });
      function i() {
        var e = this,
          t = (this.constraints = n(332).hydrateConstraintDefinitions.call(
            this,
            this.constraints
          ));
        (t.FORM = t.FORM || []),
          (this.constraintConditions = this.constraintConditions || {}),
          n(0).each(this.fields, function (t, i) {
            var r = e.hasConstraintsOwnedBy(i);
            (t.validity = r ? n(50).UNKNOWN : n(50).VALID),
              (t.message = ""),
              (t.isValid = !0);
          }),
          this.on("change", function () {
            r.call(e, Object.keys(e.changed));
          }),
          this.on("disabledChange", function (t) {
            r.call(e, [t]);
          });
      }
      function r(e) {
        var t = this,
          i = Object.keys(e.reduce(u.bind(this), {})),
          r = [];
        n(0).each(this.constraintConditions, function (t, i) {
          n(0).intersection(t.fields, e).length && r.push(i);
        }),
          n(0).uniq(i.concat(r)).forEach(a, this),
          n(0)
            .uniq(r)
            .forEach(function (e) {
              t.trigger("syncRequired:" + e);
            });
      }
      function o(e) {
        var t,
          i = n(50).VALID;
        c.call(this, e).some(function (e) {
          switch (e.state) {
            case n(50).INVALID:
              return (t = e.getLastError()), (i = e.state), !0;
            case n(50).UNKNOWN:
              return (i = e.state), !0;
          }
          return !1;
        }),
          this.setFieldValidation(e, i, t);
      }
      function a(e) {
        var t = this;
        (this.fields[e].validity = n(50).UNKNOWN),
          c.call(this, e).forEach(function (e) {
            e.reset(t),
              e.getOwnerField &&
                (t.fields[e.getOwnerField()].validity = n(50).UNKNOWN);
          });
      }
      function s(e) {
        var t = this,
          i = !0;
        return e.every(function (e) {
          var r = t.fields[e];
          return (
            (i = i && r.validity === n(50).VALID), r.validity !== n(50).UNKNOWN
          );
        })
          ? i
            ? n(50).VALID
            : n(50).INVALID
          : n(50).UNKNOWN;
      }
      function u(e, t) {
        return (
          l.call(this, t).forEach(function (i) {
            var r = n(0).result(i, "getOwnerField") || t,
              o = e[r];
            o || (o = e[r] = []), -1 === o.indexOf(i) && o.push(i);
          }),
          e
        );
      }
      function l(e) {
        return d.call(this, e, "affected");
      }
      function c(e) {
        return d.call(this, e, "owned");
      }
      function d(e, t) {
        var n = (this.constraints[e] || []).slice(),
          i =
            "owned" === t
              ? function (t) {
                  return t.getOwnerField() === e;
                }
              : function (t) {
                  return t.affectsField(e);
                };
        return n.push.apply(n, this.constraints.FORM.filter(i)), n;
      }
      function f(e, t) {
        return (
          e === t || e.constructor === t || e.constructor === t.constructor
        );
      }
    },
    1186: function (e, t, n) {
      e.exports = new (n(16))({
        before: {
          initialize: function () {
            (this._submodels = this._submodels || []), o.call(this);
          },
        },
        fields: null,
        getFieldMetadata: function (e) {
          return this.fields[e] || {};
        },
        setFieldDatasource: function (e, t) {
          var n = this;
          [].concat(e).forEach(function (e) {
            var i = n.getFieldMetadata(e);
            t !== i.datasource &&
              ((i.datasource = t), n.trigger("datasourceChange:" + e, i));
          });
        },
        setFieldDisabled: function (e, t) {
          var n = this;
          (e = [].concat(e)).reduce(function (e, i) {
            var r = n.getFieldMetadata(i);
            return t !== r.disabled
              ? ((r.disabled = t),
                n.trigger("disabledChange:" + i, r),
                n.trigger("disabledChange", i, r),
                !0)
              : e;
          }, !1) &&
            this.validate({
              fields: e,
            });
        },
        hasDefaultValue: function () {
          var e = this,
            t = arguments[0]
              ? n(0).flatten(arguments)
              : Object.keys(this.fields);
          return !t.some(function (t) {
            var n = e.fields[t];
            return n && n.defaultValue !== e.get(t);
          });
        },
        isDirty: function () {
          var e = arguments[0]
            ? n(0).flatten(arguments)
            : Object.keys(this.fields);
          return e.some(function (e) {
            return this[e] && this[e].isDirty;
          }, this.fields);
        },
        markFieldsClean: function () {
          for (
            var e = this, t = arguments.length, i = new Array(t), r = 0;
            r < t;
            r++
          )
            i[r] = arguments[r];
          this.isDirty() &&
            ((i = i.length > 0 ? n(0).flatten(i) : Object.keys(this.fields))
              .map(function (t) {
                return e.fields[t];
              })
              .filter(function (e) {
                return e && e.isDirty;
              })
              .forEach(function (t) {
                (t.isDirty = !1),
                  e.trigger("field:clean", {
                    field: t,
                  });
              }),
            this.isDirty() || this.trigger("form:clean"));
        },
        markFieldsDirty: function () {
          for (
            var e = this, t = arguments.length, i = new Array(t), r = 0;
            r < t;
            r++
          )
            i[r] = arguments[r];
          var o = !this.isDirty();
          (i = i.length > 0 && n(0).flatten(i)) &&
            (i
              .map(function (t) {
                return e.fields[t];
              })
              .filter(function (e) {
                return e && !e.isDirty;
              })
              .forEach(function (t) {
                (t.isDirty = !0),
                  e.trigger("field:dirty", {
                    field: t,
                  });
              }),
            o && this.trigger("form:dirty"));
        },
        triggerApplyAll: function (e) {
          var t = this;
          (e = "string" == typeof e ? [e] : e).forEach(function (e) {
            return t.trigger("applyAll", e, t.get(e));
          });
        },
        getModel: function () {
          throw new Error("Form.getModel is not defined");
        },
        syncForm: function () {
          for (
            var e = this, t = arguments.length, r = new Array(t), o = 0;
            o < t;
            o++
          )
            r[o] = arguments[o];
          var a = i.call(this, r),
            s = this.getModel(),
            u = a.reduce(function (t, i) {
              var r =
                e.fields[i] &&
                n(0).isFunction(e.fields[i].toFormValue) &&
                e.fields[i].toFormValue;
              if (r) {
                var o,
                  a = r.call(null, s, e);
                return n(0).assign(t, (((o = {})[i] = a), o));
              }
              return t;
            }, {});
          this.set(u);
        },
        syncModel: function () {
          for (
            var e = this, t = arguments.length, o = new Array(t), a = 0;
            a < t;
            a++
          )
            o[a] = arguments[a];
          var s = i.call(this, o),
            u = this.getModel(),
            l = s.reduce(function (t, i) {
              var o =
                e.fields[i] &&
                n(0).isFunction(e.fields[i].toModelValue) &&
                e.fields[i].toModelValue;
              if (o) {
                var a,
                  s = o.call(null, e, u);
                return n(0).assign(t, r(s) ? s : (((a = {})[i] = s), a));
              }
              return t;
            }, {});
          u.set(l);
        },
      });
      function i(e) {
        return e.length > 0 ? n(0).flatten(e) : n(0).keys(this.fields);
      }
      function r(e) {
        return n(0).isObject(e) && !n(0).isArray(e);
      }
      function o() {
        (this.fields = n(0).reduce(this.fields, a, {}, this)),
          this.set(
            n(0).assign(n(0).reduce(this.fields, u, {}, this), this.attributes),
            {
              silent: !0,
            }
          ),
          this.resetChanges();
      }
      function a(e, t, i) {
        return (
          (e[i] = n(0).defaults(n(0).reduce(t, s, {}, this), {
            isDirty: !1,
          })),
          e
        );
      }
      function s(e, t, i) {
        var r;
        return (
          "function" == typeof t &&
            !1 === n(0).includes(["toFormValue", "toModelValue"], i) &&
            (t = t.call(this)),
          (r = t) && r.hold && r.release && this._submodels.push(t),
          (e[i] = t),
          e
        );
      }
      function u(e, t, n) {
        return (e[n] = t.defaultValue), e;
      }
    },
    1187: function (e, t, n) {
      e.exports = new (n(16))({
        before: {
          initialize: function () {
            i.call(this);
          },
        },
        actions: null,
        performAction: function (e) {
          var t,
            n = this,
            i = this.actions[e];
          if ("default" === e) {
            if (!i) return;
            "string" == typeof i && ((e = i), (i = this.actions[e]));
          }
          if ("enabled" === i.state)
            return (
              (t = i.fn.apply(
                this,
                Array.prototype.slice.call(arguments, 1)
              )) &&
                "function" == typeof t.state &&
                ("pending" === t.state() &&
                  (this.setActionState(e, "pending"),
                  t.always(function () {
                    "pending" === n.getActionState(e) &&
                      n.setActionState(e, "enabled");
                  })),
                t.then(
                  function (t) {
                    n.trigger("complete:action:" + e, t);
                  },
                  function (t) {
                    n.trigger("fail:action:" + e, t);
                  }
                )),
              t
            );
        },
        getActionState: function (e) {
          return this.actions[e].state;
        },
        setActionState: function (e, t) {
          var i = this.actions[e];
          i.state !== t &&
            (this.trigger("change:action:" + e, t, i.state),
            (i.state = t),
            this.buttons &&
              n(0).each(
                this.buttons,
                function (n, i) {
                  n.action === e &&
                    this.setButtonConfig(i, {
                      state: t,
                    });
                },
                this
              ));
        },
      });
      function i() {
        this.actions = n(0).reduce(
          this.actions,
          function (e, t, i) {
            return (
              "default" === i
                ? (e.default = t)
                : n(0).isFunction(t)
                ? (e[i] = {
                    fn: t,
                    state: "enabled",
                  })
                : (e[i] = n(0).assign(
                    {
                      state: "enabled",
                    },
                    t
                  )),
              e
            );
          },
          {}
        );
      }
    },
    1188: function (e, t, n) {
      e.exports = new (n(16))({
        before: {
          initialize: function () {
            i.call(this);
          },
        },
        buttons: null,
        setButtonConfig: function (e, t) {
          var i,
            r = this.buttons[e],
            o = {};
          n(0).each(t, function (e, t) {
            r[t] !== e && ((i = !0), (o[t] = r[t] = e));
          }),
            i && this.trigger("change:button:" + e, o);
        },
      });
      function i() {
        var e = this.buttons;
        (this.buttons = {}),
          n(0).each(
            e,
            function (e, t) {
              this.buttons[t] = n(0).clone(e);
              var i = r.call(this, t);
              this.setButtonConfig(t, {
                state: (i && i.state) || "enabled",
              });
            },
            this
          );
      }
      function r(e) {
        var t = this.buttons[e];
        return n(0).find(this.actions, function (e, n) {
          return n === t.action;
        });
      }
    },
    1189: function (e, t, n) {
      var i = [
        {
          rule: /^(?![_-])/,
          errorMessage: n(1).Lingua.t(
            "Profile URLs must not start with an underscore or hyphen."
          ),
        },
        {
          rule: /^(?!.*[-_]$)/,
          errorMessage: n(1).Lingua.t(
            "Profile URLs must not end with an underscore or hyphen."
          ),
        },
        {
          rule: /^(?!.*[\-_]{2,})/,
          errorMessage: n(1).Lingua.t(
            "Profile URLs must not have two consecutive underscores or hyphens."
          ),
        },
        {
          rule: /^[a-z0-9_-]*$/,
          errorMessage: n(1).Lingua.t(
            "Use only numbers, lowercase letters, underscores, or hyphens."
          ),
        },
        {
          rule: /^.{3,25}$/,
          errorMessage: n(1).Lingua.t(
            "Profile URLs must be between 3 and 25 characters."
          ),
        },
        {
          rule: new RegExp(
            "^(?!(" +
              [
                "101",
                "accounts",
                "activate",
                "activity",
                "admin",
                "android",
                "announcements",
                "api",
                "apple-app-site-association",
                "apps",
                "artworks",
                "assets",
                "blog",
                "charts",
                "checkout",
                "comments",
                "community-guidelines",
                "connect",
                "customize",
                "creativecommons",
                "creator",
                "creators",
                "dashboard",
                "dropbox",
                "emails",
                "errors",
                "events",
                "explore",
                "facebook",
                "faqs",
                "favorites",
                "feedbacks",
                "feeds",
                "for",
                "forums",
                "genres",
                "gifts",
                "go",
                "google_plus",
                "go-terms-of-use",
                "groups",
                "guestlist",
                "help",
                "hot",
                "invite",
                "imprint",
                "iphone",
                "ipad",
                "ipod",
                "jobs",
                "latest",
                "law-enforcement-guidelines",
                "login",
                "logout",
                "mac",
                "manage",
                "me",
                "messages",
                "mobile",
                "music",
                "newsletters",
                "notifications",
                "oauth",
                "oauth2",
                "orders",
                "oembed",
                "pages",
                "partners",
                "people",
                "player",
                "playlists",
                "popular",
                "posts",
                "press",
                "pro",
                "press_release",
                "recommended",
                "revshare",
                "search",
                "session",
                "sets",
                "settings",
                "signin",
                "sign-in",
                "signup",
                "sign-up",
                "sitemap",
                "sound",
                "sounds",
                "stations",
                "stats",
                "stream",
                "student",
                "subscription",
                "tags",
                "terms-of-use",
                "terms-of-use-pro",
                "tour",
                "tracks",
                "track-manager",
                "turn_off_notifications",
                "upload",
                "users",
                "videos",
                "waveform",
                "welcome",
                "widgets",
                "you",
              ].join("|") +
              ")$)"
          ),
          errorMessage: n(1).Lingua.t(
            "This permalink is reserved. Enter another one."
          ),
        },
      ];
      e.exports = n(74).extend({
        initialize: function () {
          n(74).prototype.initialize.apply(this, arguments),
            (this.constraints = i);
        },
        checkExisting: !0,
        check: function (e, t) {
          var i = this;
          if ("" !== e) {
            var r = n(0).find(this.constraints, function (t) {
              return (t.rule.lastIndex = 0), !t.rule.test(e);
            });
            r || !this.checkExisting
              ? ((this.message = r && r.errorMessage), t(!r))
              : this.resolvePermalink(e)
                  .done(function () {
                    (i.message = n(1).Lingua.t(
                      "This profile URL is already in use. Try a different one."
                    )),
                      t(!1);
                  })
                  .fail(function () {
                    t(!0);
                  });
          } else t(!0);
        },
        resolvePermalink: function (e) {
          var t = this.getResource.call(this._form);
          return t && e === t.get("permalink")
            ? n(7).reject()
            : n(32).resolve(e);
        },
      });
    },
    1190: function (e, t, n) {
      e.exports = new (n(16))({
        requires: ["getAudible"],
        merge: {
          fields: {
            geoblocking: {
              defaultValue: !1,
            },
            availableCountries: {
              defaultValue: function () {
                return n(51).countryCodes();
              },
            },
          },
          requiredModelAttributes: ["geo_blockings"],
        },
        before: {
          setup: function () {
            var e = this;
            this.listenTo(this, "change:geoblocking", function (t, i) {
              i || e.set("availableCountries", n(51).countryCodes());
            });
          },
        },
        around: {
          getAttributesToBeSaved: function (e) {
            for (
              var t = this.get("availableCountries"),
                i = arguments.length,
                r = new Array(i > 1 ? i - 1 : 0),
                o = 1;
              o < i;
              o++
            )
              r[o - 1] = arguments[o];
            return n(0).assign(
              {
                geo_blockings: t ? n(51).complement(t) : [],
              },
              e.apply(this, r)
            );
          },
          getAttributesFromModel: function (e) {
            for (
              var t = this.getAudible(),
                i = arguments.length,
                r = new Array(i > 1 ? i - 1 : 0),
                o = 1;
              o < i;
              o++
            )
              r[o - 1] = arguments[o];
            return n(0).assign(
              {
                geoblocking: t.isGeoblocked(),
                availableCountries: t.getAvailableCountries
                  ? t.getAvailableCountries()
                  : [],
              },
              e.apply(this, r)
            );
          },
        },
      });
    },
    1191: function (e, t, n) {
      e.exports = new (n(16))(n(1192), {
        requires: ["requiredModelAttributes"],
        applyTo: function (e) {
          this.merge(e, {
            requiredModelAttributes: e.getScheduledAttributes(),
          });
        },
        around: {
          getAttributesToBeSaved: function (e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              i[r - 1] = arguments[r];
            return n(0).assign(
              e.apply(this, i),
              this.getScheduledAttributesToBeSaved()
            );
          },
          getAttributesFromModel: function (e) {
            for (
              var t = this,
                r = function (e, i) {
                  return (
                    void 0 === i && (i = n(0).identity),
                    i(t.getAudible().get(e))
                  );
                },
                o = arguments.length,
                a = new Array(o > 1 ? o - 1 : 0),
                s = 1;
              s < o;
              s++
            )
              a[s - 1] = arguments[s];
            return n(0).assign(e.apply(this, a), {
              scheduledPublic: r("scheduled_public_date", Boolean),
              scheduledPublicDate: r("scheduled_public_date", i),
              scheduledTimezone: r("scheduled_timezone"),
              availability: r("scheduled_public_date")
                ? "scheduled"
                : r("sharing"),
            });
          },
        },
      });
      function i(e) {
        return e && new Date(e);
      }
    },
    1192: function (e, t, n) {
      (function (t) {
        var i = {
          scheduledTimezone: {
            defaultValue: null,
          },
          scheduledPublic: {
            defaultValue: !1,
          },
          scheduledPublicLocalDate: {
            defaultValue: null,
          },
          scheduledPublicDate: {
            defaultValue: null,
          },
          availability: {
            defaultValue: "public",
            datasource: [
              {
                value: "public",
                label: n(1).Lingua.t("Public"),
                sublabel: n(1).Lingua.t(
                  "Anyone will be able to listen to this track."
                ),
              },
              {
                value: "private",
                label: n(1).Lingua.t("Private"),
                sublabel: n(1).Lingua.t(
                  "Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this track.",
                  {
                    linkStart:
                      '<a href="https://help.soundcloud.com/hc/en-us/articles/115003450427-Sharing-a-private-track-or-playlist-within-SoundCloud" class="sc-link-dark" rel="noopener noreferrer" target="_blank">',
                    linkEnd: "</a>",
                  }
                ),
              },
              {
                value: "scheduled",
                label: n(1).Lingua.t("Scheduled"),
                sublabel: n(1).Lingua.t(
                  "Select a date and time for your track to become public."
                ),
              },
            ],
          },
        };
        e.exports = new (n(16))({
          applyTo: function (e) {
            t.extend(!0, e, {
              fields: i,
              constraints: {
                scheduledPublicDate: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Select a date and time."),
                    },
                  ],
                  n(335),
                  n(442),
                ],
                scheduledTimezone: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Select a time zone."),
                    },
                  ],
                ],
              },
              constraintConditions: {
                scheduledPublicDate: {
                  fields: ["scheduledPublicDate", "scheduledPublic"],
                  check: function (e, t) {
                    return (
                      t &&
                      (!e ||
                        this.getFieldMetadata("scheduledPublicDate").isDirty)
                    );
                  },
                },
                scheduledTimezone: {
                  fields: ["scheduledPublic"],
                  check: function (e) {
                    return e;
                  },
                },
              },
            });
          },
          after: {
            setup: function () {
              this.listenTo(this, "change:scheduledPublic", a),
                this.listenTo(this, "change:availability", r);
            },
          },
          getScheduledAttributes: function () {
            return ["scheduled_public_date", "scheduled_timezone", "sharing"];
          },
          getScheduledAttributesToBeSaved: function () {
            var e = this.get("scheduledPublic"),
              t = {};
            return (
              n(4).get("features").has("scheduled_releases") &&
                (e
                  ? ((t.scheduled_public_date = +this.get(
                      "scheduledPublicDate"
                    )),
                    (t.scheduled_timezone = this.get("scheduledTimezone")))
                  : !1 === e &&
                    ((t.scheduled_public_date = null),
                    (t.scheduled_timezone = null))),
              t
            );
          },
        });
        function r() {
          var e = this.get("availability");
          e &&
            this.set({
              sharing: o(e),
              scheduledPublic: "scheduled" === e,
            });
        }
        function o(e) {
          switch (e) {
            case "public":
              return "public";
            case "private":
            case "scheduled":
              return "private";
          }
        }
        function a() {
          var e = this.get("scheduledPublic"),
            t = this.get("sharing");
          if (null !== e) {
            var n = !e && "public" === t;
            this.set({
              sharing: n ? "public" : "private",
              availability: e ? "scheduled" : t,
            });
          }
        }
      }.call(this, n(15)));
    },
    1193: function (e, t, n) {
      var i = /\W+/g,
        r = /^\w\d{10}$/;
      e.exports = n(74).extend({
        message: n(1).Lingua.t("This is an invalid ISWC."),
        check: function (e, t) {
          t(!(e = e.replace(i, "")).length || r.test(e));
        },
      });
    },
    1194: function (e, t, n) {
      var i = /\W+/g,
        r = /^\w{5}\d{7}$/;
      e.exports = n(74).extend({
        message: n(1).Lingua.t("This is an invalid ISRC."),
        check: function (e, t) {
          t(!(e = e.replace(i, "")).length || r.test(e));
        },
      });
    },
    1195: function (e, t, n) {
      var i = /\s+/g,
        r = /^\d{6,18}$/;
      e.exports = n(74).extend({
        message: n(1).Lingua.t("This is an invalid barcode."),
        check: function (e, t) {
          t(!(e = e.replace(i, "")).length || r.test(e));
        },
      });
    },
    1197: function (e, t, n) {
      e.exports = n(74).extend({
        nullable: !1,
        message: n(1).Lingua.t("Enter at least one territory."),
        check: function (e, t) {
          t(e && e.length > 0);
        },
      });
    },
    1198: function (e, t, n) {
      e.exports = n(74).extend({
        nullable: !1,
        message: n(1).Lingua.t(
          "You need to select the correct rightsholder for each territory you want to earn money in."
        ),
        check: function (e, t) {
          t(n(0).every(e || [], i));
        },
      });
      function i(e) {
        var t = n(4).get("me").hasOnlyOneRightsholderLink();
        return n(0).has(e, "rightsholder_urn") || !t
          ? Boolean(e.territory && e.rightsholder_urn)
          : Boolean(e.territory);
      }
    },
    1199: function (e, t, n) {
      e.exports = n(1200).extend({
        check: function (e, t, n) {
          n(!(e[0] && e[1]) || e[0] < e[1]);
        },
      });
    },
    12: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = {};
      function o(e) {
        var t = n(4).get("me"),
          i = e && e.args;
        return i && t.id && t.hasPermalink(i.userPermalink);
      }
      function a() {
        return n(4).get("me").id || null;
      }
      function s(e, t) {
        return (t = t || "subpage"), e && e[t] ? e[t] : "main";
      }
      function u(e) {
        return e && e.attribution
          ? n(0).extend({}, e, {
              attribution: n(0).pick(e.attribution, "queryUrn", "position"),
            })
          : e;
      }
      function l(e, t, n) {
        return t || (n && "pause" === e ? "pause" : null);
      }
      var c,
        d,
        f,
        h,
        p = {
          listen: "sounds",
          "listen-network": "sounds",
          activity: "stream",
          stream: "stream",
          user: "users",
          "user-network": "users",
          tags: "tags",
          search: "search",
          you: "you",
          explore: "explore",
          home: "homepage",
          front: "homepage",
          people: "people",
          upload: "upload",
          inbox: "messages",
          oscp: "premier",
          "track-manager": "track-manager",
          collection: "collection",
          "personal-recommended": "personal-recommended",
          history: "history",
          charts: "charts",
          station: "station",
        },
        g = !1,
        m = (e.exports = {
          initialize: function (e, t, i) {
            void 0 === i && (i = !0),
              n(124).initialize(),
              v(e, i, !0),
              (c = e),
              (d = t);
          },
          dispose: function () {
            n(124).dispose(), v(c, !0, !1), (c = null);
          },
          trackClick: function (e, t) {
            t && t.click_category ? w(t) : b(e, t);
          },
          trackV1Click: w,
          trackV0Click: b,
          trackV0ClickWithPromotedParams: function (e, t) {
            b(e, y(t));
          },
          trackAuthEvent: function (e, t) {
            var i = void 0 === t ? {} : t,
              r = i.target,
              o = void 0 === r ? "" : r,
              a = i.object;
            w({
              click_category: "authentication",
              click_name: e,
              click_target: o,
              click_object: void 0 === a ? "" : a,
            }),
              e === n(301).sign_up_success &&
                n(42).trackEvent({
                  category: n(42).EventCategory.userFunnel,
                  action: n(42).EventAction.signUp,
                }),
              e === n(301).sign_in_success &&
                n(42).trackEvent({
                  category: n(42).EventCategory.userFunnel,
                  action: n(42).EventAction.signInSuccessful,
                  label: o,
                });
          },
          trackAuthFunnel: function (e) {
            k({
              impression_category: "auth_funnel",
              impression_object: e,
              impression_name: e,
            });
          },
          trackFrontPageClick: function (e) {
            w(
              n(0).defaults(
                {
                  click_category: "frontpage",
                },
                e
              )
            );
          },
          trackShareClick: function (e) {
            b(
              null,
              n(0).defaults(
                {
                  click_name: "share",
                },
                e
              )
            );
          },
          trackUploadFunnel: function (e) {
            var t = e.chapter,
              i = e.uploadId,
              r = e.event;
            b(["upload_funnel"].concat(t), r),
              (function (e, t) {
                var i = [].concat(e),
                  r = i[0],
                  o = i[1],
                  a = (function () {
                    switch (r) {
                      case "start":
                        return n(42).EventAction.uploadStarted;
                      case "save":
                        return n(42).EventAction.uploadSaved;
                      case "complete":
                        return n(42).EventAction.transcodingSucceeded;
                      case "upload_done":
                        return n(42).EventAction.uploadSucceeded;
                      case "failed":
                        switch (o) {
                          case "transcoding":
                            return n(42).EventAction.transcodingFailed;
                          case "uploading":
                            return n(42).EventAction.uploadFailed;
                          case "save":
                            return n(42).EventAction.uploadSaveFailed;
                        }
                    }
                  })();
                a &&
                  n(42).trackEvent({
                    category: n(42).EventCategory.track,
                    action: a,
                    label: t,
                  });
              })(t, i);
          },
          trackClickThrough: function (e) {
            var t = e.context;
            b(
              null,
              y(
                n(0).defaults(
                  {
                    click_name: "item_navigation",
                    click_object: t.urn,
                    click_target: e.target || t.urn,
                  },
                  e
                )
              )
            );
          },
          trackAudioEvent: function (e) {
            var t = e.type,
              r = e.playerType,
              o = e.position,
              a = e.duration,
              s = e.appState,
              u = e.audioQualityMode,
              c = e.quality,
              d = void 0 === c ? "" : c,
              h = e.preset,
              p = void 0 === h ? "" : h,
              m = e.sound,
              v = e.ad_attributes,
              _ = e.userInitiated,
              b = e.pauseReason,
              w = e.isRepeating,
              k = e.currentMetadata,
              A = e.rawEGOverrides,
              S = void 0 === A ? {} : A;
            if (!m.isAd()) {
              var E = n(4).get("router").getLayoutInfo(),
                C = (E && E.tracking) || {},
                T = k.originalModel,
                x = k.queryPosition,
                I = k.contextSnapshot,
                L =
                  I && I.sourceInfo
                    ? n(0).defaults({}, I.sourceInfo, k.sourceInfo)
                    : k.sourceInfo;
              m.systemPlaylist &&
                (L.type = m.systemPlaylist.get("tracking_feature_name"));
              var P = (function (e) {
                  return e &&
                    n(0).isFunction(e.get) &&
                    /repost$/.test(e.get("type"))
                    ? n(24).generate("user", e.get("user").id)
                    : null;
                })(T),
                M = n(73).extractPromotedAttrs(T),
                D = {
                  position: x,
                  queryUrn: L.queryUrn,
                },
                O = m.attrExists(["duration", "monetization_model", "policy"]),
                R = m.attrExists(["user_id"]),
                U = m.playlist || m.systemPlaylist,
                F = m.playlist ? U.getUrn() : null,
                N = U ? U.getSoundIndex(m) : null;
              if (
                (f !== m.id && ((f = m.id), (g = !1)), "play" === t && !g && _)
              ) {
                var z = !!m.systemPlaylist;
                n(587).trackAudioEvent({
                  event: "play",
                  artistUrn: n(24).generate("user", m.get("user_id")),
                  playlistUrn: z && m.systemPlaylist.getUrn(),
                  genre: m.get("genre"),
                  trackUrn: m.get("urn"),
                  isInSystemPlaylist: z,
                }),
                  (g = !0);
              }
              n(124).trackAudioEvent(
                n(7)
                  .all([!O && m.fetch(), !R && m.fetch()].filter(Boolean))
                  .then(function () {
                    var e = {
                      action: t,
                      attribution: D,
                      id: m.id,
                      in_playlist: F,
                      monetization_model: m.get("monetization_model"),
                      page_name: C.pageName,
                      page_urn: C.pageUrn,
                      pause_reason: l(t, b, _),
                      playheadPosition: Math.round(o),
                      playlist_position: N,
                      policy: m.get("policy"),
                      reposted_by: P,
                      source: L.type || null,
                      sourceVersion: L.version || null,
                      track_length: Math.round(a),
                      player_type: r,
                      app_state: s,
                      quality: d,
                      audio_quality_mode: u,
                      preset: p,
                      trackOwnerId: m.get("user_id"),
                      trigger: _ ? "manual" : w ? "repeat" : "auto",
                    };
                    return (
                      M
                        ? (y(e, M), "play" === t && n(73).trackEvent("play", M))
                        : v &&
                          ((e.ad_urn = v.audio_ad_urn),
                          (e.monetization_type = "audio_ad"),
                          (e.monetized_object = v.monetized_sound_urn),
                          (e.policy = null)),
                      i({}, e, S)
                    );
                  })
              );
            }
          },
          trackV1PageView: function (e) {
            var t = n(4).get("router").getLayoutInfo(),
              r = (null == t ? void 0 : t.tracking) || {};
            (e = i(
              {
                page_name: r.pageName,
                page_urn: r.pageUrn,
              },
              e
            )),
              n(124).trackPageView("1.27.6", e);
          },
          trackPageView: function (e, t, i) {
            var r = n(4).get("router").getLayoutInfo(),
              o = n(4).get("router").getNavigationType(),
              s = (r && r.tracking) || {},
              u = n(0).compact(t || []),
              l = a(),
              c = {};
            (c.page_name = s.pageName),
              (c.page_urn = s.pageUrn),
              (c.locale = n(13).LinguaLib.getLocale()),
              (c.navigation_type = o);
            var f = d.getCurrentSound();
            (c.currently_playing = !(!f || !f.isPlaying())),
              i && i.queryUrn
                ? (c.query_urn = i.queryUrn)
                : s.queryUrn && (c.query_urn = s.queryUrn),
              i &&
                i.pageviewAttributes &&
                (c.pageview_attributes = i.pageviewAttributes),
              u.length < 1 && c.page_name && (u = c.page_name.split(":")),
              n(124).trackV0PageView(e, u, l, c);
          },
          trackAppLoad: function (e) {
            var t = e.latency,
              i = n(4).get("router").getLayoutInfo(),
              r = (i && i.layoutName) || "user",
              s = o(i) ? "you" : r,
              u = p[s],
              l = a();
            n(124).trackAppLoad(u, l, t);
          },
          trackImpression: k,
          trackStatsClick: function (e) {
            var t = a(),
              i = [e],
              r = {
                context: {
                  scope: [
                    "stats",
                    {
                      stats: "main",
                      "track-stats": "track",
                    }[n(4).get("router").getLayoutInfo().layoutName],
                  ],
                },
              };
            n(124).trackV0Click("stats", i, t, r);
          },
          trackAudioError: function (e) {
            n(124).trackAudioError(e);
          },
        }),
        v =
          ((h = n(0).map(
            {
              ".header__logoLink": ["header", "logo"],
              ".header__mainMenu-home": ["header", "home"],
              ".header__mainMenu-stream": ["header", "stream"],
              ".header__mainMenu-explore": ["header", "explore"],
              '.moreMenu__link[href$="/community-guidelines"]': [
                "header",
                "community_guidelines",
              ],
              '.moreMenu__link[href$="/terms-of-use"]': [
                "header",
                "terms_of_use",
              ],
              '.moreMenu__link[href$="/creators"]': ["header", "creators"],
              '.moreMenu__link[href$="/pages/privacy"]': [
                "header",
                "privacy_policy",
              ],
              '.moreMenu__link[href$="/pages/copyright"]': [
                "header",
                "copyright_information",
              ],
              '.moreMenu__link[href$="/imprint"]': [
                "header",
                "company_information",
              ],
              '.moreMenu__link[href$="/pages/contact"]': ["header", "about_us"],
              '.moreMenu__link[href="http://blog.soundcloud.com"]': [
                "header",
                "blog",
              ],
              '.moreMenu__link[href="http://soundcloud.com/jobs"]': [
                "header",
                "jobs",
              ],
              '.moreMenu__link[href="http://developers.soundcloud.com"]': [
                "header",
                "developers",
              ],
              '.moreMenu__link[href="https://help.soundcloud.com"]': [
                "header",
                "help",
              ],
              ".moreMenu__keyboard": ["header", "keyboard_shortcuts"],
              ".profileMenu__profile": ["header", "you", "profile"],
              ".profileMenu__likes": ["header", "you", "likes"],
              ".profileMenu__following": ["header", "you", "following"],
              ".profileMenu__sets": ["header", "you", "sets"],
              ".profileMenu__stats": ["header", "you", "stats"],
              ".profileMenu__friends": ["header", "you", "who_to_follow"],
              ".profileMenu__settings": ["header", "you", "settings"],
              ".profileMenu__logout": ["header", "you", "logout"],
              ".playbackTitle": ["play_controls", "title"],
              ".playControls .playControl:not(.playing)": [
                "play_controls",
                "pause",
              ],
              ".playControls .playControl.playing": ["play_controls", "play"],
              ".playControls .skipControl__previous": [
                "play_controls",
                "skip_back",
              ],
              ".playControls .skipControl__next": [
                "play_controls",
                "skip_forward",
              ],
              ".header__inner a.outgoing-messages": ["outgoing", "messages"],
              ".profileMenu a.outgoing-settings": ["outgoing", "settings"],
              ".profileMenu a.outgoing-stats": ["outgoing", "you_stats"],
              ".statsModule a.outgoing-stats-module": ["outgoing", "all_stats"],
              ".userInfo a.sc-button-message": ["outgoing", "new_message"],
              ".whoToFollowModule a.refresh-wtf": [
                "outgoing",
                "who_to_follow_refresh",
              ],
              ".soundActions__edit": ["edit", "main"],
              ".latestActivities__viewAll": ["header", "activity", "view_all"],
              ".headerMessages__viewAll": ["header", "messages", "view_all"],
              ".listenContent__inner .listenContent__parentLink a": [
                "sets",
                "trackview",
                "set_button",
              ],
              ".listenContent__inner a.listenContent__prevLink": [
                "sets",
                "trackview",
                "previous_track",
              ],
              ".listenContent__inner a.listenContent__nextLink": [
                "sets",
                "trackview",
                "next_track",
              ],
              ".explore__bucket .carousel__next": ["explore", "skip_next"],
              ".explore__bucket .carousel__prev": ["explore", "skip_prev"],
              ".signupButton": ["signup", "start"],
              ".loginButton": ["login", "start"],
              ".signupTeaser .signupButton": ["signup-teaser", "signup"],
            },
            function (e, t) {
              return [
                "click",
                t,
                function (t) {
                  m.trackClick(e, t);
                },
              ];
            }
          )),
          function (e, t, i) {
            var r = i ? "on" : "off";
            (i && !t) || n(8)[r]("all", _),
              e &&
                h.forEach(function (t) {
                  e[r].apply(e, t);
                });
          });
      function y(e, t) {
        return (
          t &&
            "promoted" === t.campaign &&
            ((e.ad_urn = t.ad_urn),
            (e.monetization_type = "promoted"),
            (e.promoted_by = t.promoted_by_urn)),
          e
        );
      }
      function _(e, t) {
        var i, r, o, a, u, l, c;
        switch (e) {
          case "connect:logout":
            !0 === t.isOriginator
              ? m.trackAuthEvent("sign_out")
              : !1 === t.isOriginator &&
                m.trackV0Click(["header", "you_log_out"]);
            break;
          case "connect:loginInitiate":
            m.trackAuthEvent("initiate", {
              target: t.target,
              object: t.object,
            });
            break;
          case "tracking:search":
            m.trackPageView("search", ["search", "search/" + t.category], {
              queryUrn: t.queryUrn,
            });
            break;
          case "tracking:charts":
            m.trackPageView("charts", ["charts"], {
              queryUrn: t.queryUrn,
            });
            break;
          case "tracking:discover":
            m.trackPageView("discover", ["discover"], {
              queryUrn: t.queryUrn,
            });
            break;
          case "tracking:userLayout":
            (u = (function (e) {
              return n(4).get("me").attributes.permalink === e.userPermalink
                ? ["you", ["you", "you/" + s(e)]]
                : ["users", ["users", "users/" + s(e)]];
            })(
              (t = (function (e) {
                var t = e.user;
                return (
                  (e.type = "user"),
                  (e.userPermalink = t.get("permalink")),
                  (e.userId = t.id),
                  e
                );
              })(t))
            )),
              m.trackPageView(u[0], u[1]);
            break;
          case "tracking:listenLayout":
            (l = (function (e, t) {
              var i = ["sounds"];
              return (
                n(26).getQueryParam("in", t)
                  ? i.push(["sets", "sets/track_page"])
                  : e.playlistPermalink
                  ? i.push(["sets", "sets/" + s(e)])
                  : i.push(["sounds", "sounds/" + s(e)]),
                i
              );
            })(
              (t = (function (e) {
                var t = e.audible;
                if (!t) return e;
                var n = "sound" === t.resource_type;
                return (
                  (e.type = t.resource_type),
                  (e.userId = t.get("user_id")),
                  n
                    ? (e.soundId = t.id)
                    : ((e.playlistId = t.id),
                      (e.playlistPermalink = t.get("permalink"))),
                  e
                );
              })(t))
            )),
              m.trackPageView(l[0], l[1]);
            break;
          case "tracking:front:genre":
            (t.click_category = "frontpage"),
              (t.click_name = "genre_grid"),
              (t.click_target = t.genreUrn),
              m.trackClick(null, t);
            break;
          case "layout:change":
            switch ((n(1014).include(), (i = t.args), t.layoutName)) {
              case "stream":
              case "activity":
                m.trackPageView("stream", [
                  "stream",
                  "stream/" +
                    ("stream" === t.layoutName ? "main" : t.layoutName),
                ]);
                break;
              case "collection":
                m.trackPageView("collection", ["collection", i.subpage]);
                break;
              case "discover":
              case "user":
              case "user-network":
                break;
              case "listen":
              case "listen-network":
                break;
              case "tags":
                m.trackPageView("tags", ["tags", "tags/main"], {
                  pageviewAttributes: {
                    tag: i.tag,
                  },
                });
                break;
              case "search":
              case "charts":
                break;
              case "explore":
                m.trackPageView("explore", [
                  "explore",
                  "explore/" + s(i, "category"),
                ]);
                break;
              case "upload":
                m.trackPageView("upload", ["upload", "upload/main"]);
                break;
              case "people":
                (c = s(i, "tab")),
                  m.trackPageView("people_" + c, ["people", "people/" + c]);
                break;
              case "home":
              case "front":
                m.trackPageView("homepage", ["home", "home/main"]);
                break;
              case "inbox":
                m.trackPageView("messages", [
                  "messages",
                  s(i, "conversationId"),
                ]);
                break;
              case "stats":
              case "track-stats":
                m.trackPageView("stats", ["default", window.location]);
                break;
              case "track-manager":
                m.trackPageView("track-manager", ["track-manager", "main"]);
                break;
              case "error":
                m.trackPageView("error", ["error"]);
                break;
              case "logout":
                m.trackPageView("logout");
                break;
              case "static-page":
                m.trackPageView("static", ["static", s(i, "pageName")]);
                break;
              case "mobile":
                m.trackPageView("static", ["static", "mobile/main"]);
                break;
              case "oscp":
                m.trackPageView("premier", ["premier", i.subpage]);
                break;
              case "settings":
                m.trackPageView("settings", ["settings", i.subpage]);
                break;
              default:
                m.trackPageView("default", ["default", window.location]);
            }
            break;
          case "exception":
            (r = t.get("streamInfo")) &&
              ((o = t.get("errorCode")),
              (a = {
                protocol: r.protocol || "undefined-protocol",
                browser: n(427).getBrowser(),
                flash: n(427).getFlashPlugin(),
                os: n(427).getOperatingSystem(),
                bitrate: r.bitrate || "undefined-bitrate",
                format: r.extension || "undefined-extension",
                url: r.url || "undefined-url",
              }),
              o && (a.error_code = o),
              m.trackAudioError(a));
            break;
          case "tracking:appLoad":
            m.trackAppLoad(t);
        }
      }
      function b(e, t) {
        var i = n(4).get("router").getLayoutInfo(),
          r = a(),
          s = n(0).compact(e),
          l = (i && i.layoutName) || "user",
          c = (i && i.tracking) || {},
          d = c.pageName,
          f = c.pageUrn,
          h = o(i) ? "you" : l,
          g = p[h],
          m = n(0).defaults(
            {
              page_name: d,
              page_urn: f,
            },
            u(t || {})
          );
        s.length < 1 && m.page_name && (s = m.page_name.split(":")),
          n(124).trackV0Click(g, s, r, m);
      }
      function w(e) {
        var t = n(4).get("router").getLayoutInfo(),
          i = (t && t.tracking) || {},
          r = i.pageName,
          o = i.pageUrn,
          a = n(0).defaults(
            {
              page_name: r,
              page_urn: o,
            },
            u(e || {})
          ),
          s = a.context && a.context.scope && a.context.scope.join(":");
        n(124).trackClick(
          "1.27.6",
          n(0).extend(
            {
              page_context: s,
            },
            n(0).omit(a, "context")
          )
        );
      }
      function k(e) {
        var t = n(4).get("router").getLayoutInfo(),
          i = (t && t.tracking) || {},
          o = a(),
          s = e.urn,
          u = e.originView;
        if (
          ((e.page_name = i.pageName),
          (e.page_urn = i.pageUrn),
          e.useAudioFinishHandler)
        ) {
          if ((r[u] || (r[u] = {}), !r[u][s])) {
            (r[u][s] = !0),
              n(8).on("audio:finish", function t(i) {
                parseInt(e.urn.split(":").pop(), 10) === i.sound.id &&
                  (delete r[u][s], n(8).off("audio:finish", t));
              }),
              n(124).trackImpression(o, e);
          }
        } else
          e.context &&
            "promoted" === e.context.campaign &&
            ((e.ad_urn = e.context.ad_urn),
            (e.monetization_type = "promoted"),
            (e.impression_object = e.context.urn),
            (e.promoted_by = e.context.promoted_by_urn)),
            n(124).trackImpression(o, e);
      }
    },
    120: function (e, t, n) {
      "use strict";
      n.r(t);
      var i,
        r = n(0),
        o = n.n(r),
        a = n(34),
        s = n.n(a),
        u = n(4),
        l = n.n(u),
        c = n(18),
        d = n.n(c),
        f = n(65),
        h = n.n(f),
        p = n(8),
        g = n.n(p),
        m = n(153),
        v = n.n(m),
        y = n(149),
        _ = n(23),
        b = [];
      function w() {
        (
          _.isOneTrustEnabled()
            ? _.isCategoryEnabled(_.CookieCategory.Communications)
            : Object(y.isOneTrustScanner)() ||
              l.a.get("privacy_settings").isOptedInToCommunications()
        )
          ? k()
          : A();
      }
      function k() {
        window.appboy ||
          ((_.isOneTrustEnabled()
            ? d.a.isLoggedIn() &&
              _.isCategoryEnabled(_.CookieCategory.Communications)
            : Object(y.isOneTrustScanner)() ||
              (d.a.isLoggedIn() &&
                l.a.get("privacy_settings").isOptedInToCommunications())) &&
            (h.a.insertScript(
              "https://js.appboycdn.com/web-sdk/3.1/appboy.min.js",
              {
                onload: function () {
                  var e = window.appboy;
                  e &&
                    l.a
                      .get("me")
                      .getOrFetch(["id"])
                      .then(function () {
                        e.initialize("2c0ba43c-af74-488e-9dfd-b87280e02a92", {
                          appVersion: l.a.get("app_version"),
                          minimumIntervalBetweenTriggerActionsInSeconds: 0,
                          doNotLoadFontAwesome: !0,
                          enableHtmlInAppMessages: !0,
                          baseUrl: "sdk.iad-01.braze.com",
                        }),
                          e.display.automaticallyShowNewInAppMessages(),
                          e.changeUser(window.btoa(l.a.get("me").getUrn())),
                          e.openSession(),
                          b.forEach(function (e) {
                            return e();
                          }),
                          (b = []);
                      });
                },
                removeAfterLoad: !0,
              }
            ),
            s.a.on("all", S),
            g.a.on("all", S)));
      }
      function A() {
        var e = window.appboy;
        e && (e.destroy(), delete window.appboy),
          s.a.off("all", S),
          g.a.off("all", S),
          (b = []);
      }
      function S(e, t) {
        var n;
        switch (e) {
          case "createPlaylist":
            E("create_playlist", {
              playlist_title: (n = t).object.get("title"),
              playlist_urn: n.object.getUrn(),
            });
            break;
          case "repost":
            if ((n = t).state) {
              var r = n.targetModel;
              E("repost", {
                playable_type:
                  "playlist" === r.resource_type ? "playlist" : "track",
                playable_urn: r.getUrn(),
                playable_title: r.get("title"),
                creator_user_urn: r.get("user").urn,
                creator_display_name: r.get("user").username,
              });
            }
            break;
          case "like":
            if ((n = t).state && "system-playlist" !== n.targetType) {
              var o = n.targetModel;
              E("like", {
                playable_type:
                  "playlist" === o.resource_type ? "playlist" : "track",
                playable_urn: o.getUrn(),
                playable_title: o.get("title"),
                creator_urn: o.get("user").urn,
                creator_display_name: o.get("user").username,
              });
            }
            break;
          case "follow":
            n = t;
            var a = l.a.get("me").id;
            if (n.state && n.origin === a && n.target !== a && i) {
              var s = new i({
                resource_id: n.target,
              });
              E("follow", {
                creator_display_name: s.get("username"),
                creator_user_urn: s.getUrn(),
              }),
                s.release();
            }
            break;
          case "tracking:userLayout":
            l.a.get("me").id === t.user.id
              ? E("visit_profile")
              : E("visit_another_profile", {
                  profile_urn: t.user.getUrn(),
                });
            break;
          case "profile:saved":
            var u = t.previousAttributes,
              c = t.attributes;
            u.username !== c.username &&
              (E("display_name_updated", {
                creator_display_name: c.username,
                creator_urn: l.a.get("me").getUrn(),
              }),
              C("display_name", c.username)),
              u.permalink !== c.permalink &&
                (E("profile_url_updated", {
                  creator_display_name: c.username,
                  creator_urn: l.a.get("me").getUrn(),
                }),
                C("permalink", c.permalink));
            break;
          case "mastering:view_landing_page":
            E("mastering_view_landing_page");
            break;
          case "mastering:track_loaded":
            E("mastering_track_loaded");
            break;
          case "mastering:track_previewed":
            E("mastering_track_previewed");
            break;
          case "mastering:purchased_master":
            E("mastering_purchased_master");
            break;
          case "mastering:finished":
            E("mastering_track_mastered"),
              (function (e, t) {
                void 0 === t && (t = 1);
                var n = window.appboy;
                n && n.getUser().incrementCustomUserAttribute(e, t);
              })("mastering_num_tracks_mastered", 1);
            break;
          case "signup:successful":
            var d = l.a.get("me").get("username");
            E("user_registered_client", {
              creator_display_name: d,
            }),
              C("display_name", d);
        }
      }
      function E(e, t) {
        void 0 === t && (t = {});
        var n = window.appboy;
        n
          ? n.logCustomEvent(
              e,
              o.a.extend(
                {
                  platform: "web",
                },
                t
              )
            )
          : b.push(function () {
              return E(e, t);
            });
      }
      function C(e, t) {
        var n = window.appboy;
        n
          ? n.getUser().setCustomUserAttribute(e, t)
          : b.push(function () {
              return C(e, t);
            });
      }
      t.default = {
        include: function (e) {
          var t = e.User;
          (i = t),
            g.a.on("connect:login", k),
            g.a.on("connect:logout", A),
            _.isOneTrustEnabled()
              ? _.onChange(function () {
                  return w();
                })
              : l.a
                  .get("privacy_settings")
                  .on("change:" + v.a.COMMUNICATIONS_OPT_IN, w),
            k();
        },
        trackUserEvent: E,
        setUserAttribute: C,
        logCardImpressions: function (e, t) {
          var n = window.appboy;
          n && n.logCardImpressions(e, t);
        },
        logCardClick: function (e, t) {
          var n = window.appboy;
          n && n.logCardClick(e, t);
        },
        fetchContentCards: function e(t) {
          var n = window.appboy;
          if (n) {
            var i = n.subscribeToContentCardsUpdates(function (e) {
              t(e), n.removeSubscription(i);
            });
            n.requestContentCardsRefresh();
          } else
            b.push(function () {
              e(t);
            });
        },
      };
    },
    1200: function (e, t, n) {
      var i = (e.exports = n(140).extend({
        fields: null,
        nullable: !0,
        validate: function (e) {
          var t = n(7).defer(),
            i = this.fields.map(e.get, e);
          return (
            i.every(r)
              ? this.result(t, this.nullable)
              : this.check(i, this.fields, this.result.bind(this, t)),
            t
          );
        },
        affectsField: function (e) {
          return this.fields.indexOf(e) > -1;
        },
        getOwnerField: function () {
          return this.fields[0];
        },
      }));
      function r(e) {
        return null == e;
      }
      n(332).applyTo(i.prototype);
    },
    1201: function (e, t, n) {
      (function (t) {
        var i = n(615).prototype.model,
          r = {
            rawTracklist: {
              defaultValue: "",
            },
            tracklist: {
              defaultValue: function () {
                return new (n(631))();
              },
            },
          },
          o = {
            addRawTracklist: function () {
              var e = this,
                t = this.get("rawTracklist"),
                i = n(273).detectFormat(t);
              return i === n(273).TracklistFormats.Unsupported
                ? (n(190).userCanBeRecorded() &&
                    n(161).trackEvent("tracklist_error_import_from_text"),
                  n(7).reject())
                : (this.setFieldDisabled("rawTracklist", !0),
                  n(273)
                    .parseTracklist(t, i)
                    .then(function (e) {
                      return (
                        (t = e.tracks),
                        (i = t
                          .map(function (e) {
                            if (e.userPermalink && e.trackPermalink) {
                              var t = e.userPermalink,
                                i = e.trackPermalink,
                                r = e.secretToken;
                              return n(17)
                                .resolve(t, i, r)
                                .then(function (e) {
                                  return {
                                    artist: e.get("user").username,
                                    title: e.get("title"),
                                    urn: e.getUrn(),
                                    url: e.get("permalink_url"),
                                  };
                                });
                            }
                            if (!e.userPermalink && !e.trackPermalink)
                              return n(7).resolve(e);
                          })
                          .filter(Boolean)),
                        (r = n(7).defer()),
                        n(7)
                          .settled(i)
                          .always(function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            var i = t
                              .map(function (e) {
                                var t = e[0];
                                return t.artist ? t : void 0;
                              })
                              .filter(Boolean);
                            r.resolve(i);
                          }),
                        r
                      );
                      var t, i, r;
                    })
                    .then(function (t) {
                      e.get("tracklist").addParsedTracklistTracks(t);
                    })
                    .always(function () {
                      e.setFieldDisabled("rawTracklist", !1);
                    }));
            },
          },
          a = {
            addRawTracklist: {
              label: n(1).Lingua.t("Convert tracklist"),
              action: "addRawTracklist",
            },
          };
        var s = {
          rawTracklist: [
            [
              n(1203),
              {
                message: n(1).Lingua.tPending(
                  "The format of this tracklist is not supported."
                ),
              },
            ],
          ],
          tracklist: [n(1204)],
        };
        e.exports = new (n(16))(
          n(213).withOptions({
            action: {
              addRawTracklist: ["rawTracklist"],
            },
          }),
          {
            requirePrototype: n(78).prototype,
            applyTo: function (e) {
              (e.fields = t.extend(!0, {}, r, e.fields || {})),
                (e.constraints = t.extend(!0, {}, s, e.constraints || {})),
                (e.actions = t.extend(!0, {}, o, e.actions || {})),
                (e.buttons = t.extend(!0, {}, a, e.buttons || {}));
            },
            requires: [
              "getAttributesToBeSaved",
              "getAttributesFromModel",
              "isDjMix",
            ],
            around: {
              getAttributesFromModel: function (e) {
                var t = this.getAudible(),
                  i = new (n(631))();
                i.populateFromTrackSegmentCollection(t.getTracklist().segments);
                var r = {
                  track_format: t.get("track_format"),
                  tracklist: i,
                };
                return n(0).assign(r, e());
              },
              getAttributesToBeSaved: function (e) {
                var t = this.get("tracklist").map(function (e) {
                    return i.fromSegmentForm(e).toJSON();
                  }),
                  r = {
                    track_format: this.get("track_format"),
                    tracklist: this.isDjMix()
                      ? {
                          segments: t,
                        }
                      : {
                          segments: [],
                        },
                  };
                return n(0).assign(r, e());
              },
            },
            after: {
              setToModelAttributes: function () {
                this.set("rawTracklist", "");
              },
            },
          }
        );
      }.call(this, n(15)));
    },
    1202: function (e, t, n) {
      var i = /^(\d{1,2}:){1,2}\d{1,2}$/;
      e.exports = n(74).extend({
        allowEmpty: !0,
        check: function (e, t) {
          return this.allowEmpty && n(0).isEmpty(e) ? t(!0) : t(i.test(e));
        },
      });
    },
    1203: function (e, t, n) {
      e.exports = n(74).extend({
        check: function (e, t) {
          if (!e) return t(!0);
          t(n(273).detectFormat(e) !== n(273).TracklistFormats.Unsupported);
        },
      });
    },
    1204: function (e, t, n) {
      e.exports = n(74).extend({
        check: function (e, t) {
          n(7)
            .all(
              e.map(function (e) {
                return n(7).promise(function (t, n) {
                  return e.validate().then(function (e) {
                    return e ? t() : n();
                  });
                });
              })
            )
            .then(function () {
              return t(!0);
            })
            .fail(function () {
              return t(!1);
            });
        },
      });
    },
    121: function (e, t, n) {
      var i = Array.isArray,
        r = function (e, t) {
          return e === t;
        };
      e.exports = {
        rotateArray: function (e, t) {
          var n = Array.prototype.slice.call(e);
          (t %= n.length) < 0
            ? n.push.apply(n, n.splice(0, -t))
            : n.unshift.apply(n, n.splice(-t));
          return n;
        },
        splitArray: function (e, t, n) {
          void 0 === n && (n = 0);
          var i = e.slice(0, t),
            r = e.slice(t);
          return r.length >= n ? [i, r] : [i.concat(r), []];
        },
        multisetCompare: function (e, t) {
          return !(!i(e) || !i(t)) && (e === t || (o(e, t) && o(t, e)));
        },
        equal: function (e, t, n) {
          void 0 === n && (n = r);
          if (!i(e) || !i(t)) return !1;
          if (e === t) return !0;
          var o = e.length;
          if (t.length !== o) return !1;
          for (var a = 0; a < o; ++a)
            if (e[a] !== t[a] && !n(e[a], t[a])) return !1;
          return !0;
        },
        isSubset: o,
        sliceAround: function (e, t, i, r) {
          var o = n(71).clamp(t - i, 0, Math.max(e.length - r, 0)),
            a = o + r;
          return {
            items: e.slice(o, a),
            position: t - o,
          };
        },
        removeElement: function (e, t) {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        },
        chunk: function (e, t) {
          var n = [];
          if (t >= 1)
            for (var i = 0; i < e.length; ) n.push(e.slice(i, (i += t)));
          return n;
        },
        shiftItem: function (e, t, n) {
          var i = e.slice(),
            r = i.splice(t, 1)[0];
          return i.splice(n, 0, r), i;
        },
        insertAtIndex: function (e, t, n) {
          e.splice(n, 0, t);
        },
        sortedLastIndex: function (e, t, i) {
          void 0 === i && (i = n(0).identity);
          var r = 0,
            o = e.length;
          for (; r < o; ) {
            var a = Math.floor((r + o) / 2);
            i(e[a]) <= i(t) ? (r = a + 1) : (o = a);
          }
          return r;
        },
      };
      function o(e, t) {
        for (var n = 0; n < e.length; ++n)
          if (-1 === t.indexOf(e[n])) return !1;
        return !0;
      }
    },
    122: function (e, t, n) {
      (function (t) {
        var i,
          r,
          o,
          a,
          s = 30 * n(29).MS_IN_SECOND,
          u = "inst_" + Date.now(),
          l = new RegExp("inst_\\d{13}$");
        function c() {
          i.current.dispose();
        }
        function d(e) {
          var t, n, s, u;
          e.key &&
            (t = l.exec(e.key)) &&
            ((s = a.getItem(e.key)),
            (n = t[0]),
            (u = o[n]) && null === s
              ? u === i.current
                ? u.store.write()
                : (u.dispose(), delete o[n])
              : !u && s && (o[n] = new r(n)));
        }
        function f() {
          if (n(177).visible() && i.size() > 1) {
            var e = ("0000" + (1679616 * Math.random()).toString(36)).substr(
              -4
            );
            n(8).broadcast(
              {
                excludeThis: !0,
              },
              "instances:ping",
              e
            ),
              n(0).delay(function () {
                n(177).visible() &&
                  i.each(function (t, n) {
                    n !== u &&
                      t.get("pong") !== e &&
                      (t.dispose(), delete o[n]);
                  });
              }, n(29).MS_IN_SECOND);
          }
        }
        function h(e) {
          i.current.set("pong", e);
        }
        n(75).localStorage
          ? ((i = e.exports = {
              initialize: function () {
                var e,
                  i,
                  p,
                  g,
                  m = this;
                for (
                  a = window.localStorage,
                    o = {},
                    this.current = o[u] = new r(u),
                    o[u].store.write(),
                    ["each", "some", "every", "map", "filter", "find"].forEach(
                      function (e) {
                        m[e] = n(0)[e].bind(n(0), o);
                      }
                    ),
                    e = 0,
                    i = a.length;
                  e < i;
                  ++e
                )
                  (p = a.key(e)) !== this.current.store.keyName &&
                    (g = l.exec(p)) &&
                    (o[g[0]] = new r(g[0]));
                window.setInterval(f, s),
                  n(8).on("broadcast:instances:ping", h),
                  t(window).on("unload", c),
                  window.addEventListener("storage", d, !1);
              },
              size: function () {
                return Object.keys(o || {}).length;
              },
            }),
            (r = function (e) {
              (this.store = new (n(57))(e)),
                e === u && (this.set = this.store.set.bind(this.store));
            }),
            n(0).assign(r.prototype, {
              get: function (e) {
                return this.store.get(e);
              },
              dispose: function () {
                return this.store.dispose();
              },
            }))
          : (i = e.exports = null);
      }.call(this, n(15)));
    },
    124: function (e, t, n) {
      e.exports = {
        initialize: function () {
          var e,
            t = function (e) {
              return n(4).get(e);
            },
            r = t("me").id;
          e = n(23).isOneTrustEnabled()
            ? n(23).isCategoryEnabled(n(23).CookieCategory.Performance)
            : n(68).usageAllowed();
          var o =
              window.matchMedia &&
              window.matchMedia("(display-mode: minimal-ui)").matches,
            a = t("app_version").replace(/!$/, ""),
            s = /^[0-9]+$/.test(a) ? a : "",
            u = o && s ? "9" + s : s;
          n(84).initialize({
            id: t("client_application_id"),
            appVersion: u,
            trackingUrl: t("eventlogger_tracking_url"),
            user: r,
            batchTimeout: n(75).sendBeacon ? 5e3 : 1e3,
            useCookies: e,
            logEvents: t("features").has("debug_events"),
            eventVersions: {
              impression: "1.27.29",
            },
            requestTransport: void 0,
            authToken: n(18).getAuthToken(),
            anonymousId: n(1004)(),
          }),
            n(8).on("connect:login connect:logout", function () {
              var e = n(18).isLoggedIn() ? n(18).getAuthToken() : null;
              n(84).setAuthToken(e);
            }),
            r ||
              n(8).once("connect:hasUserData", function () {
                n(84).setUser(t("me").id);
              }),
            e
              ? i()
              : n(23).isOneTrustEnabled()
              ? (n(23)
                  .waitForCategory(n(23).CookieCategory.Performance)
                  .then(function () {
                    return n(84).useCookies(!0);
                  }),
                n(23)
                  .waitForAnyCategory([
                    n(23).CookieCategory.Communications,
                    n(23).CookieCategory.Functional,
                    n(23).CookieCategory.Performance,
                    n(23).CookieCategory.SocialMedia,
                    n(23).CookieCategory.Targeting,
                    n(23).CookieCategory.StrictlyNecessary,
                  ])
                  .then(function () {
                    return i();
                  }))
              : n(8).once("cookies:allowed", function () {
                  n(84).useCookies(!0), i();
                });
        },
        dispose: function () {
          n(84).flush(!0);
        },
        trackV0PageView: function (e, t, i, r) {
          n(84).pageview(i, e, t, r), n(42).trackPageView();
        },
        trackPageView: function (e, t) {
          n(84).logEvent("pageview", e, t);
        },
        trackAudioEvent: function (e) {
          n(84).audio(e);
        },
        trackAppLoad: function (e, t, i) {
          n(84).appLoad(t, {
            level: e,
            latency: i,
          });
        },
        trackClick: function (e, t) {
          n(84).logEvent("click", e, t);
        },
        trackV0Click: function (e, t, i, r) {
          n(84).click(i, e, t, r);
        },
        trackImpression: function (e, t) {
          n(84).impression(e, t);
        },
        trackAudioError: function (e) {
          n(1005).log(e);
        },
      };
      function i() {
        var e = n(4).get("privacy_settings"),
          t = n(23).isOneTrustEnabled();
        (n(149).isOneTrustScanner() ||
          t ||
          (!t && e.isOptedInToCommunications())) &&
          n(23)
            .waitForAnyCategory([
              n(23).CookieCategory.Performance,
              n(23).CookieCategory.Targeting,
            ])
            .then(function () {
              n(587).include();
            }),
          (n(149).isOneTrustScanner() ||
            t ||
            (!t && e.isOptedInToAnalytics())) &&
            (n(23)
              .waitForCategory(n(23).CookieCategory.Performance)
              .then(function () {
                return n(42).include();
              })
              .then(function () {
                return n(1009).include();
              }),
            n(23)
              .waitForCategories([
                n(23).CookieCategory.Performance,
                n(23).CookieCategory.Targeting,
              ])
              .then(function () {
                return n(1010).include();
              })),
          (n(149).isOneTrustScanner() ||
            t ||
            (!t && e.isOptedInToTargetedAdvertising())) &&
            (n(23)
              .waitForCategory(n(23).CookieCategory.Targeting)
              .then(function () {
                return n(1011).include();
              })
              .then(function () {
                return n(588).initialize();
              }),
            (n(149).isOneTrustScanner() ||
              n(154).isCountryUK() ||
              n(4).get("features").has("dax_tester")) &&
              n(23)
                .waitForCategory(n(23).CookieCategory.Targeting)
                .then(function () {
                  return n(589).initialize();
                }));
      }
    },
    1244: function (e, t) {
      function n(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length
                ? {
                    done: !0,
                  }
                : {
                    done: !1,
                    value: e[r++],
                  };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var r = function (e) {
        return e;
      };
      e.exports = {
        align: function (e) {
          for (
            var t = e.source,
              n = e.target,
              i = e.add,
              o = e.remove,
              s = e.getKeyFn,
              u = a({
                source: t,
                target: n,
                getKeyFn: void 0 === s ? r : s,
              }),
              l = u.inserts,
              c = u.removes,
              d = c.length - 1;
            d >= 0;
            d--
          )
            o(c[d].value, c[d].index);
          for (var f = 0; f < l.length; f++) i(l[f].value, l[f].index);
        },
        getAlignInstructions: function (e, t, n) {
          void 0 === n && (n = r);
          var i = a({
              source: e,
              target: t,
              getKeyFn: n,
            }),
            o = i.inserts;
          return i.removes.concat(o);
        },
      };
      function o(e, t, n) {
        return e.has(t) ? e.get(t) : (e.set(t, n), n);
      }
      function a(e) {
        for (
          var t,
            i = e.source,
            r = e.target,
            a = e.getKeyFn,
            u = 0,
            l = new Map(),
            c = new Array(i.length),
            d = new Array(r.length),
            f = n(r);
          !(t = f()).done;

        ) {
          var h = o(l, a(t.value), {});
          (h.NC = (h.NC || 0) + 1), (d[u] = h), u++;
        }
        for (var p, g = 0, m = n(i); !(p = m()).done; ) {
          var v = o(l, a(p.value), {});
          (v.OC = (v.OC || 0) + 1), (v.OLNO = g), (c[g] = v), g++;
        }
        for (u = 0; u < d.length; ++u)
          1 === d[u].OC &&
            1 === d[u].NC &&
            ((d[u] = {
              ref: d[u].OLNO,
            }),
            (c[d[u].ref] = {
              ref: u,
            }));
        c.push({
          ref: d.length,
          token: "eof",
        });
        for (var y = 0, _ = 0, b = 0, w = 0, k = [], A = []; y < c.length; ) {
          for (b = y; void 0 === c[b].ref; ) b++;
          if ((w = c[b].ref) < _) {
            for (; y < b; ) {
              var S = i[y];
              k.push({
                op: "del",
                value: S,
                index: y++,
              });
            }
            var E = i[y];
            k.push({
              op: "del",
              value: E,
              index: y++,
            });
          } else {
            for (var C = s(b, y, w, _), T = w - 1; C > 0 && T >= _; T--)
              if (void 0 !== d[T].ref && !(d[T].ref < y)) {
                var x = s(d[T].ref, y, T, _);
                x < C && ((C = x), (w = T), (b = d[T].ref));
              }
            for (; y < b; ) {
              var I = i[y];
              k.push({
                op: "del",
                value: I,
                index: y++,
              });
            }
            for (; _ < w; ) {
              var L = r[_];
              A.push({
                op: "ins",
                value: L,
                index: _++,
              });
            }
            if ("eof" === c[y].token) break;
            y++, _++;
          }
        }
        return {
          inserts: A,
          removes: k,
        };
      }
      function s(e, t, n, i) {
        return e - t + (n - i) + Math.abs(e - t - (n - i));
      }
    },
    126: function (e, t, n) {
      var i = "no-rights-reserved",
        r = {
          attribution: "by",
          nonCommercial: "nc",
          nonDerivative: "nd",
          shareAlike: "sa",
        },
        o = (e.exports = {
          ALL_RIGHTS: "all-rights-reserved",
          NO_RIGHTS: i,
          COMMONS: "commons",
          DEFAULT_CC: "cc-by",
          ccFields: r,
          parse: function (e) {
            var t = {
              license:
                "all-rights-reserved" === e
                  ? "all-rights-reserved"
                  : e === i
                  ? i
                  : "commons",
            };
            return e
              ? ("commons" === t.license &&
                  n(0).each(r, function (n, i) {
                    t[i] = e.indexOf(n) > -1;
                  }),
                t)
              : t;
          },
          toURL: function (e) {
            var t = "string" == typeof e ? o.parse(e) : e;
            return "commons" === t.license
              ? "http://creativecommons.org/licenses/" +
                  o.serializeCCAttributes(t).replace(/^cc-/, "") +
                  "/3.0/"
              : "";
          },
          serializeCCAttributes: function (e) {
            var t = Object.keys(r)
              .map(function (t) {
                return e[t] && r[t];
              }, this)
              .filter(n(0).identity)
              .join("-");
            return t ? "cc-" + t : "cc-by";
          },
        });
    },
    1262: function (e, t, n) {
      var i = 15 * n(29).MS_IN_MINUTE;
      e.exports = n(39).extend({
        defaults: {
          pollingInterval: i,
        },
        url: function () {
          return n(0).result(this, "baseUrl");
        },
        parse: function (e) {
          return e;
        },
        fetch: function (e) {
          return (e && e.url) || n(0).result(this, "url")
            ? n(31).Collection.prototype.fetch.call(this, e)
            : n(7)
                .defer()
                .done(e && e.success)
                .resolve([]);
        },
        bulkFetch: function () {
          return this.fetch();
        },
        setLimit: n(0).noop,
        isFullyPopulated: function () {
          return !1;
        },
        startPolling: function () {
          this.isPolling() ||
            (this._pollingId = window.setInterval(
              this.fetch.bind(this),
              this.options.pollingInterval
            ));
        },
        stopPolling: function () {
          window.clearInterval(this._pollingId), (this._pollingId = null);
        },
        isPolling: function () {
          return !!this._pollingId;
        },
      });
    },
    1306: function (e, t, n) {
      (function (t) {
        e.exports =
          (n(1307),
          n(1308),
          t.datepicker.setDefaults(n(13).LinguaLib.getDatePickerLocaleData()),
          t.extend(t.datepicker, {
            _updateDatepickerOriginalMethod: t.datepicker._updateDatepicker,
            _updateDatepicker: function (e) {
              this._updateDatepickerOriginalMethod(e);
              var n = t.datepicker._get(e, "onAfterRender");
              n && n.apply(this, [e]);
            },
            _updatePosition: function (e) {
              if (e) {
                t.datepicker._lastInput = null;
                var i = t.datepicker._setDateFromField;
                (t.datepicker._setDateFromField = n(0).noop),
                  t.datepicker._showDatepicker(e),
                  (t.datepicker._setDateFromField = i);
              }
            },
          }),
          t.datepicker);
      }.call(this, n(15)));
    },
    135: function (e, t, n) {
      var i = (e.exports = {
        genreLabel: function (e) {
          return n(263).genreLabels[e];
        },
        genres: function (e) {
          return n(0).where(n(109).genres, {
            category: e,
          });
        },
        getGenre: r,
        genreUrn: function (e) {
          return "soundcloud:genres:" + e;
        },
        regionUrn: function (e) {
          return "soundcloud:regions:" + e;
        },
        chartKindLabel: function (e) {
          return o[e];
        },
        chartKinds: function () {
          return n(109).kinds;
        },
        chartCountryLabel: function (e) {
          return a[e];
        },
        chartCountries: function () {
          return n(109).countries;
        },
        getChartCountry: function (e, t, r) {
          return e && (t || (t = r), i.chartCountryLabel(t))
            ? t
            : n(109).defaultCountry;
        },
        userGenreToChartGenre: function (e) {
          return (
            (e &&
              r(
                (function (e) {
                  return e
                    .toLowerCase()
                    .replace(/[^a-z]/g, "")
                    .replace(/^(drumnbass|dn?b)$/, "drumbass")
                    .replace(/^(rn?b|soul)$/, "rbsoul")
                    .replace(/^(rap|hiphop)$/, "hiphoprap")
                    .replace(/^folk$/, "folksingersongwriter")
                    .replace(/^(jazz|blues)$/, "jazzblues")
                    .replace(/^(dance|edm)$/, "danceedm");
                })(e)
              )) ||
            r("all-music")
          );
        },
        isGenreLabel: function (e) {
          var t = n(0).escape(e);
          return e && n(263).isSupportedGenre(t);
        },
        getTranslationFromEnglish: function (e) {
          var t = n(0).escape(e),
            i = n(0).findKey(n(263).englishLabels, function (e) {
              return e === t;
            });
          return n(263).genreLabels[i];
        },
        getUnescapedTranslationFromEnglish: function (e) {
          return n(0).unescape(this.getTranslationFromEnglish(e).toString());
        },
        getEnglishGenreLabel: function (e) {
          return e && n(263).englishLabels[e];
        },
        taglines: function (e, t) {
          var r = i.genreLabel(t),
            o = i.getGenre(t);
          switch (o.category + "-" + e + "-" + o.content) {
            case "all-trending-music":
              return {
                short: n(1).Lingua.t("New &amp; hot tracks"),
                long: n(1).Lingua.t("Up-and-coming tracks on SoundCloud"),
              };
            case "all-trending-audio":
              return {
                short: n(1).Lingua.t("New &amp; hot audio"),
                long: n(1).Lingua.t("Up-and-coming audio on SoundCloud"),
              };
            case "all-top-music":
              return {
                short: n(1).Lingua.t("Top 50 tracks"),
                long: n(1).Lingua.t(
                  "The most played tracks on SoundCloud this week"
                ),
              };
            case "all-top-audio":
              return {
                short: n(1).Lingua.t("Top 50 audio"),
                long: n(1).Lingua.t(
                  "The most played audio on SoundCloud this week"
                ),
              };
            case "music-trending-music":
              return {
                short: n(1).Lingua.t("New &amp; hot in [[[genreLabel]]]", {
                  genreLabel: r,
                }),
                long: n(1).Lingua.t(
                  "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud",
                  {
                    genreLabel: r,
                  }
                ),
              };
            case "music-top-music":
              return {
                short: n(1).Lingua.t("Top 50 in [[[genreLabel]]]", {
                  genreLabel: r,
                }),
                long: n(1).Lingua.t(
                  "The most played tracks in [[[genreLabel]]] on SoundCloud this week",
                  {
                    genreLabel: r,
                  }
                ),
              };
            case "audio-trending-audio":
              return {
                short: n(1).Lingua.t("New &amp; hot in [[[genreLabel]]]", {
                  genreLabel: r,
                }),
                long: n(1).Lingua.t(
                  "Up-and-coming in [[[genreLabel]]] on SoundCloud",
                  {
                    genreLabel: r,
                  }
                ),
              };
            case "audio-top-audio":
              return {
                short: n(1).Lingua.t("Top 50 in [[[genreLabel]]]", {
                  genreLabel: r,
                }),
                long: n(1).Lingua.t(
                  "The most played in [[[genreLabel]]] on SoundCloud this week",
                  {
                    genreLabel: r,
                  }
                ),
              };
            default:
              0;
          }
        },
      });
      function r(e) {
        return n(0).findWhere(n(109).genres, {
          id: e,
        });
      }
      var o = {
          trending: n(1).Lingua.t("New &amp; hot"),
          top: n(1).Lingua.t("Top 50"),
        },
        a = {
          "all-countries": n(1).Lingua.t("All countries"),
          AU: n(1).Lingua.t("Australia"),
          CA: n(1).Lingua.t("Canada"),
          DE: n(1).Lingua.t("Germany"),
          FR: n(1).Lingua.t("France"),
          GB: n(1).Lingua.t("United Kingdom"),
          IE: n(1).Lingua.t("Ireland"),
          NL: n(1).Lingua.t("Netherlands"),
          NZ: n(1).Lingua.t("New Zealand"),
          US: n(1).Lingua.t("USA"),
        };
    },
    136: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "INSIGHTS_ROLLOUT", function () {
          return a;
        }),
        n.d(t, "insightsSwitchedOn", function () {
          return u;
        }),
        n.d(t, "hasUploads", function () {
          return l;
        }),
        n.d(t, "toggleInsights", function () {
          return c;
        }),
        n.d(t, "enableInsights", function () {
          return d;
        }),
        n.d(t, "disableInsights", function () {
          return f;
        });
      var i = n(4),
        r = n.n(i),
        o = n(57),
        a = "v2_can_see_insights",
        s = new (n.n(o).a)("insights");
      function u() {
        return s.get("enabled");
      }
      function l() {
        return r.a.get("me").hasUploads();
      }
      function c(e) {
        void 0 === e && (e = !s.get("enabled")), s.set("enabled", e);
      }
      function d() {
        c(!0);
      }
      function f() {
        c(!1);
      }
      void 0 === s.get("enabled") && d();
    },
    139: function (e, t, n) {
      var i,
        r = ["K", "M", "B"];
      i = {
        max: null,
        suffix: "+",
        useSIUnits: !1,
        precision: null,
      };
      e.exports = {
        render: function (e, t) {
          if ("number" != typeof e) return e;
          var o = 0,
            a = "",
            s = 0;
          if (((t = t || {}), n(0).defaults(t, i), t.max && e > t.max))
            (e = t.max), (a = t.suffix);
          else if (t.useSIUnits) {
            if (null === t.precision && e < 1e4)
              return n(13).LinguaLib.numberHelper.format(e);
            for (; e >= 1e3 && o < r.length; ) (e /= 1e3), (a = r[o++]);
            s =
              null !== t.precision
                ? t.precision
                : (function (e) {
                    var t = 0;
                    t = e < 10 ? 2 : e < 100 ? 1 : 0;
                    return t;
                  })(e);
          }
          return (
            n(13).LinguaLib.numberHelper.format(e, {
              precision: s,
              roundingFn: Math.floor,
            }) + a
          );
        },
      };
    },
    14: function (e, t, n) {
      e.exports = n(576)();
    },
    140: function (e, t) {
      var n, i;
      e.exports =
        ((n = !1),
        ((i = function () {}).extend = function e(t, i) {
          var r, o, a, s, u;
          for (
            n = !0,
              u = new this(),
              n = !1,
              s =
                "[object Array]" !== Object.prototype.toString.call(t)
                  ? [t]
                  : t,
              o = 0,
              a = s.length;
            o < a;
            ++o
          )
            for (r in (t = s[o])) u[r] = t[r];
          var l = function () {
            if (!n && this.initialize)
              return this.initialize.apply(this, arguments);
          };
          return (
            i &&
              Object.keys(i).reduce(function (e, t) {
                return (e[t] = i[t]), e;
              }, l),
            ((l.prototype = u).constructor = l),
            (l.extend = e),
            l
          );
        }),
        i);
    },
    1419: function (e, t, n) {
      var i = /^[]/,
        r = {
          de: "Deutsch",
          en: "English (US)",
          es: "Español",
          fr: "Français",
          it: "Italiano",
          nl: "Nederlands",
          pl: "Polski",
          pt_BR: "Português (Brasil)",
          sv: "Svenska",
        },
        o = {
          asterisk: "Asterisk",
          lengthy: "lengthy",
        },
        a = n(0).extend({}, r, o),
        s = n(0).keys(r),
        u = n(0).keys(a),
        l = n(0).keys(o);
      e.exports = {
        defaultLocale: "en",
        publicLanguages: r,
        publicLanguageCodes: s,
        experimentalLanguages: o,
        experimentalLanguageCodes: l,
        experimentalAndPublicLanguages: a,
        experimentalAndPublicLanguageCodes: u,
        isLocaleExperimental: function (e) {
          return i.test(e) || l.indexOf(e) > -1;
        },
        normalizeLocale: function (e) {
          var t = e.split("_")[0];
          return n(0).contains(u, t) ? t : e;
        },
      };
    },
    1422: function (e, t, n) {
      var i = window.performance && window.performance.timing,
        r = !0;
      e.exports = i
        ? new (n(16))({
            defaults: {
              performanceSelector: null,
            },
            around: {
              dispose: o("Layout#dispose"),
              switchLayout: o("Layout#switchLayout"),
            },
            after: {
              render: function () {
                var e,
                  t = this;
                r &&
                  ((r = !1),
                  (e = this.performanceSelector) &&
                    (function (e, t, n) {
                      var i = window,
                        r = i.setTimeout(a, t),
                        o = i.setInterval(s, 50);
                      function a() {
                        i.clearTimeout(o), i.clearTimeout(r);
                      }
                      function s() {
                        e() && (a(), n());
                      }
                      s();
                    })(
                      function () {
                        return t.$(e).length;
                      },
                      2e4,
                      function () {
                        var e = Date.now() - i.fetchStart;
                        n(8).trigger("tracking:appLoad", {
                          latency: e,
                        });
                      }
                    ));
              },
            },
          })
        : new (n(16))({});
      function o(e) {
        return function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          e.apply(this, n);
        };
      }
    },
    1423: function (e, t, n) {
      (t = n(10)(!1)).push([
        e.i,
        ".l-fluid-fixed{position:relative}.l-fluid-fixed .l-sidebar-right{position:absolute;top:30px;bottom:0;right:0;width:330px}.sc-classic .l-fluid-fixed .l-sidebar-right{width:300px}.l-fluid-fixed .l-sidebar-right .l-fixed{width:330px}.sc-classic .l-fluid-fixed .l-sidebar-right .l-fixed{width:300px}.l-fluid-fixed .l-sidebar-right .l-footer{position:relative;padding-bottom:80px}.l-fluid-fixed .l-sidebar-right .sidebarModule.mobileApps{margin-bottom:0;border-bottom:none}.l-fluid-fixed .l-main{padding:30px 48px 0 0;margin:0 330px 0 0}.sc-classic .l-fluid-fixed .l-main{padding:30px 30px 0 0}@media (max-width:1079px){.l-fluid-fixed .l-main{padding-right:38px}.sc-classic .l-fluid-fixed .l-main{padding-right:20px;margin-right:320px}}",
        "",
      ]),
        (e.exports = t);
    },
    1424: function (e, t, n) {
      var i = n(11);
      e.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, n, i, r) {
          return '<div class="l-fluid-fixed">\n  <div class="l-main sc-border-light-right">\n\n  </div>\n  <div class="l-sidebar-right">\n\n  </div>\n</div>\n';
        },
        useData: !0,
      });
    },
    1425: function (e, t, n) {
      var i = n(9),
        r = n(1426);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    1426: function (e, t, n) {
      (t = n(10)(!1)).push([
        e.i,
        ".l-fixed-fluid{position:relative}.l-fixed-fluid .l-sidebar-left{position:absolute;top:30px;bottom:0;left:0;width:200px}.l-fixed-fluid .l-sidebar-left .l-fixed{width:200px}.l-fixed-fluid .l-main{margin:0 0 0 230px;padding-top:30px}.l-fixed-fluid .l-sidebar-left>.l-footer{position:fixed;bottom:0;width:200px}@media (max-width:1079px){.l-fixed-fluid .l-main{margin-left:220px}}",
        "",
      ]),
        (e.exports = t);
    },
    1427: function (e, t, n) {
      var i = n(11);
      e.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, n, i, r) {
          return '<div class="l-fixed-fluid">\n  <div class="l-sidebar-left">\n\n  </div>\n  <div class="l-main">\n\n  </div>\n</div>\n';
        },
        useData: !0,
      });
    },
    1433: function (e, t, n) {
      function i(e) {
        var t,
          i = e.name.replace(/\.[a-z0-9]{2,}$/, "");
        return (
          (t = i.replace(/_/g, " ").replace(/(\S)-(\S)/g, "$1 - $2")),
          (t = n(324).capitalize(t).trim()) || i.trim()
        );
      }
      function r(e) {
        for (var t = e.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = String.fromCharCode(e[i]);
        return window.btoa(n.join(""));
      }
      e.exports = {
        getTitleFromFile: i,
        getDataFromFile: function (e) {
          var t = n(7).defer();
          return (
            n(1434).read(e, {
              onSuccess: function (o) {
                var a = o.tags,
                  s = n(0).pick(
                    {
                      title: a.title || i(e),
                      publisherArtist: a.artist,
                      publisherAlbumTitle: a.album,
                      tags: n(0).compact([a.genre]),
                      artwork_data: a.picture
                        ? "data:" +
                          a.picture.format +
                          ";base64," +
                          r(a.picture.data)
                        : void 0,
                    },
                    n(0).identity
                  );
                t.resolve(s);
              },
              onError: function (n) {
                t.resolve({
                  title: i(e),
                });
              },
            }),
            t
          );
        },
      };
    },
    145: function (e, t, n) {
      var i = {
          explicit: !1,
          contextSnapshot: null,
          originalModel: null,
          queryPosition: null,
          sound: null,
          sourceInfo: null,
          index: null,
          order: null,
          castId: null,
        },
        r = n(0).partial(n(0).pick, n(0), Object.keys(i)),
        o = (e.exports = n(21).extend(
          n(0).assign({}, i, {
            resource_type: "queue-item",
            setup: function (e, t) {
              n(0).assign(this, r(t));
              var i = t.sound;
              (this._preloadingEnabled = !1),
                i.hold(),
                i.playlist && (i.playlist.hold(), this.addSubmodel(i.playlist)),
                i.systemPlaylist &&
                  (i.systemPlaylist.hold(), this.addSubmodel(i.systemPlaylist)),
                this.addSubmodel(i),
                this.listenTo(i, "error", a);
            },
            makeExplicit: function () {
              this.explicit ||
                ((this.explicit = !0),
                this.trigger("change:explicit", !0, this));
            },
            enablePreloading: function () {
              this._preloadingEnabled ||
                ((this._preloadingEnabled = !0),
                this.sound.requestPreloading());
            },
            disablePreloading: function () {
              this._preloadingEnabled &&
                ((this._preloadingEnabled = !1),
                this.sound.unrequestPreloading());
            },
            associateCastId: function (e) {
              this.castId = e;
            },
            clone: function (e) {
              return new o({}, n(0).assign(r(this), e));
            },
          }),
          {
            onCleanup: function (e) {
              e.disablePreloading();
            },
          }
        ));
      function a(e, t) {
        this.trigger("error", this, t);
      }
    },
    1470: function (e, t, n) {
      var i = function () {
        this.setup.apply(this, arguments);
      };
      (i.extend = n(31).Model.extend),
        n(0).assign(i.prototype, n(31).Events, {
          constructor: i,
          currentComment: null,
          activeTimestamp: null,
          currentTimestamp: null,
          commentQuotaTimeout: null,
          commentQuotaExceeded: !0,
          commentIntervalTimeout: null,
          commentIntervalExceeded: !0,
          currentState: n(44).INITIAL,
          interactingWithComments: !1,
          setup: function (e, t, i) {
            (this.collection = new (n(460))(null, {
              sound_id: e,
              secret_token: i,
            })),
              this.listenTo(this, n(44).INITIAL, this.onInitialState)
                .listenTo(this, n(44).CURRENT_COMMENT, this.onCurrentComment)
                .listenTo(
                  this,
                  n(44).CURRENT_TIMESTAMP,
                  this.onCurrentTimestamp
                )
                .listenTo(this, n(44).ACTIVE_TIMESTAMP, this.onActiveTimestamp),
              (this.sound = new (n(17))({
                id: e,
                resource_id: t,
              })),
              this.listenTo(this.sound, "time", this.onAudioTime);
          },
          dispose: function () {
            this.stopListening(),
              this.sound.release(),
              this.collection.release();
          },
          onInitialState: function () {
            (this.activeTimestamp = null),
              (this.currentComment = null),
              (this.currentTimestamp = null);
          },
          onCurrentComment: function (e, t) {
            (this.activeTimestamp = null),
              (this.currentComment = t),
              (this.currentTimestamp = null);
          },
          onCurrentTimestamp: function (e) {
            (this.activeTimestamp = null),
              (this.currentComment = null),
              (this.currentTimestamp = e);
          },
          onActiveTimestamp: function (e) {
            (this.activeTimestamp = e),
              (this.currentComment = null),
              (this.currentTimestamp = null);
          },
          goToState: function (e) {
            var t = this.canGoToState.apply(this, arguments);
            return (
              t &&
                ((this.currentState = e), this.trigger.apply(this, arguments)),
              t
            );
          },
          canGoToState: function (e) {
            var t =
              this.activeTimestamp &&
              this.currentState === n(44).ACTIVE_TIMESTAMP;
            switch (e) {
              case n(44).CURRENT_TIMESTAMP:
                return !t;
              case n(44).CURRENT_COMMENT:
                return (
                  this.commentIntervalExceeded &&
                  arguments[1] !== this.currentComment &&
                  !t
                );
              case n(44).INITIAL:
                return !0;
              case n(44).ACTIVE_TIMESTAMP:
                var i = arguments[1];
                return i !== this.activeTimestamp &&
                  i <= this.sound.isPlayable()
                  ? this.sound.getMediaDuration()
                  : this.sound.getFixedDuration();
              default:
                return !1;
            }
          },
          onAudioTime: n(0).throttle(function (e) {
            var t = this;
            if (!this.disposed) {
              var i,
                r = e.sound.currentTime(),
                o = window;
              !this.interactingWithComments &&
                this.sound.isPlaying() &&
                ((i = this.collection.getCommentAtTimestamp(r, 300))
                  ? this.goToState(n(44).CURRENT_COMMENT, r, i) &&
                    (o.clearTimeout(this.commentIntervalTimeout),
                    (this.commentIntervalExceeded = !1),
                    o.setTimeout(function () {
                      t.commentIntervalExceeded = !0;
                    }, 1e3),
                    o.clearTimeout(this.commentQuotaTimeout),
                    (this.commentQuotaExceeded = !1),
                    (this.commentQuotaTimeout = o.setTimeout(function () {
                      (t.commentQuotaExceeded = !0), t.onAudioTime(e);
                    }, 3e3)))
                  : this.commentQuotaExceeded &&
                    this.goToState(n(44).CURRENT_TIMESTAMP, r));
            }
          }, 300),
        }),
        (e.exports = n(320).applyTo(i, {
          onCleanup: function (e) {
            e.dispose();
          },
          cleanupInstantly: !0,
          hashFn: function (e) {
            return e;
          },
        }));
    },
    1480: function (e, t, n) {
      e.exports = n(140).extend([
        n(31).Events,
        {
          _layers: null,
          _raf: null,
          initialize: function () {
            (this._layers = []), (this.update = this.update.bind(this));
          },
          teardown: function () {
            var e;
            for (
              window.cancelAnimationFrame(this._raf), this._raf = null;
              (e = this._layers.pop());

            )
              this.stopListening(e);
          },
          getLayers: function () {
            return this._layers;
          },
          addLayer: function (e) {
            this._layers.push(e),
              this.listenTo(e, "dirty", i),
              e.isDirty && r.call(this);
          },
          update: function () {
            var e, t;
            for (this._raf = null, e = 0; (t = this._layers[e]); ++e)
              t.isDirty && t.update();
          },
        },
      ]);
      function i() {
        r.call(this);
      }
      function r() {
        this._raf || (this._raf = window.requestAnimationFrame(this.update));
      }
    },
    1481: function (e, t, n) {
      e.exports = n(391).extend({
        className: "g-box-full sceneLayer",
        addNode: function (e) {
          var t = new (0, e[0])(
            n(0).assign(
              {
                el: this.el,
                scale: this.scale,
              },
              e[1]
            )
          );
          t.className && this.$el.addClass(t.className),
            this.addSubview(t).on("dirty", i, this).render();
        },
        onCanvasResize: function () {
          n(0).invoke(this.subviews, "onResize");
        },
        setDirty: function (e) {
          (this.isDirty = e) && this.trigger("dirty");
        },
        update: function () {
          if (!this.disposed && this.isDirty) {
            var e,
              t,
              n = !1;
            for (
              this.context.clearRect(0, 0, this.el.width, this.el.height),
                e = 0;
              (t = this.subviews[e]);
              ++e
            )
              t.draw(), (n = n || t.isDirty);
            this.setDirty(n);
          }
        },
      });
      function i() {
        this.setDirty(!0);
      }
    },
    149: function (e, t, n) {
      var i = !1;
      e.exports = {
        initializeOneTrustScan: function () {
          try {
            var e = n(68).get("onetrust");
            e && "a7c02a899fe843dfbea609e8cfb420f0" === n(1006)(e) && (i = !0);
          } catch (e) {
            i = !1;
          }
        },
        isOneTrustScanner: function () {
          return i;
        },
      };
    },
    152: function (e, t, n) {
      e.exports = n(39).extend(
        {
          sources: null,
          sourceOptions: null,
          _sourceModelCounts: null,
          _sourceModels: null,
          filters: null,
          _map: null,
          _dupes: null,
          _ignore: null,
          _bulkFetchDeferred: null,
          _ignoredCollections: null,
          setup: function () {
            C.call(this),
              this.sources.forEach(o.bind(this, !0)),
              (this._sourceModels = []),
              (this._dupes = []),
              (this.filters = n(0).clone(this.filters || {})),
              a.call(this),
              (this._ignore = []),
              (this._ignoredCollections = []),
              (this.fetch = (function (e) {
                function t() {
                  i.cache = {};
                }
                var i = n(0).memoize(
                  function () {
                    return e.apply(this, arguments).always(t);
                  },
                  function (e) {
                    return JSON.stringify(e);
                  }
                );
                return i;
              })(A)),
              f.call(this, this.options.limit, !0);
          },
          setupSources: function () {
            0;
          },
          setLimit: function (e) {
            this.options.limit = e;
          },
          setFilter: function (e, t) {
            (t || this.filters[e]) &&
              (t
                ? (this.filters[e] ||
                    (this._map[e] = L(this._sourceModels.length)),
                  (this.filters[e] = t))
                : (delete this.filters[e], delete this._map[e]),
              this.recalculateFilters());
          },
          bulkFetch: function (e, t) {
            var i = this,
              r = this.options.limit,
              o = e - this.length,
              a = this._bulkFetchDeferred;
            return a && !t
              ? a
              : (a ||
                  (a = this._bulkFetchDeferred = n(7)
                    .defer()
                    .always(function () {
                      (i._bulkFetchDeferred = null), (i.options.limit = r);
                    })),
                o <= 0 || this.isFullyPopulated()
                  ? a.resolve()
                  : ((this.options.limit = o),
                    this.fetch({
                      reset: !0,
                    })
                      .done(function () {
                        i.bulkFetch(e, !0);
                      })
                      .fail(a.reject),
                    a));
          },
          audibleAt: function (e) {
            var t = m.call(this, e);
            if (t) {
              var n = t.source,
                i = t.index;
              if (n.audibleAt) return n.audibleAt(i);
              var r = this.at(e);
              return "sound" === r.resource_type ||
                "playlist" === r.resource_type
                ? r
                : null;
            }
          },
          extractModel: null,
          remove: function (e, t) {
            var i = this;
            void 0 === t && (t = {});
            var r = t._propagateToSource;
            return (
              void 0 === r || r
                ? (Array.isArray(e) || (e = [e]),
                  e.forEach(function (e) {
                    var t = m.call(i, i.indexOf(e));
                    t && t.source.remove(t.model);
                  }))
                : n(39).prototype.remove.call(
                    this,
                    e,
                    n(0).defaults(
                      {
                        _propagateToSource: !1,
                      },
                      t
                    )
                  ),
              this
            );
          },
          isFullyPopulated: function () {
            return !i.call(this);
          },
          getNumSourceModels: function () {
            return this._sourceModels.length;
          },
          recalculateFilters: function () {
            var e = this,
              t = this._ignore;
            n(0).each(this.filters, function (t, n) {
              e._sourceModels.forEach(function (i, r) {
                e._map[n].set(r, t.call(e, i, r));
              });
            }),
              b.call(this),
              n(121).multisetCompare(t, this._ignore) ||
                (this.trigger("filterChanged"), w.call(this));
          },
          getPlaySource: function () {
            var e,
              t,
              i = this.constructor.getNewInstance(null, this.options);
            return (
              i.release(),
              (e = this),
              (t = i),
              n(0).each(e.filters, function (e, n) {
                t.filters[n] || (t._map[n] = L(t._sourceModels.length)),
                  (t.filters[n] = e);
              }),
              n(0).each(t.filters, function (n, i) {
                e.filters || (delete t.filters[i], delete t._map[i]);
              }),
              t.recalculateFilters(),
              i
            );
          },
        },
        {
          onCleanup: function (e) {
            for (var t; (t = e.sources.pop()); ) t.release(), o.call(e, !1, t);
            this._sourceModels = this._map = null;
          },
        }
      );
      function i() {
        return n(0).find(this.sources, r, this);
      }
      function r(e, t) {
        if (this._ignoredCollections.indexOf(t) > -1) return !1;
        var n = e.isFullyPopulated(),
          i = h.call(this, e);
        return (!n || i < e.length) && !p.call(this, e);
      }
      function o(e, t) {
        var n = e ? "on" : "off";
        t[n]("all", d, this)
          [n]("add", l, this)
          [n]("reset", u, this)
          [n]("remove", c, this);
      }
      function a() {
        this._map = n(0).mapObject(this.filters, function () {
          return new (n(446))();
        });
      }
      function s(e) {
        var t = this,
          n = 0;
        return (
          this.sources.some(function (i, r) {
            if (i === e) return !0;
            n += t._sourceModelCounts[r];
          }),
          n
        );
      }
      function u(e, t) {
        var n = this,
          i = 0 === this._sourceModels.length;
        t &&
          t.previousModels &&
          t.previousModels.length &&
          t.previousModels.reduceRight(function (t, i, r) {
            c.call(n, i, e, {
              index: r,
            });
          }, null);
        var r = this._sourceModels.length;
        e.models.forEach(function (t) {
          l.call(n, t, e, {
            silent: i,
          });
        });
        var o = this._sourceModels.length,
          a = o > r,
          s = (i && a) || (0 === o && this.isFullyPopulated());
        (s || a) && (this.lastFetchTime = Date.now()),
          s && this.trigger("reset", this, {});
      }
      function l(e, t, n) {
        var i = t.indexOf(e);
        if (x.call(this, i, t, !0)) {
          var r = i + s.call(this, t);
          (this.lastFetchTime = Date.now()),
            0 !== this._sourceModels.length ||
              n.silent ||
              this.trigger("reset", this, {}),
            y.call(this, e, t, r, n),
            b.call(this),
            w.call(this, n);
        }
      }
      function c(e, t, n) {
        var i = n.index;
        if (x.call(this, i, t, !1)) {
          var r = i + s.call(this, t);
          _.call(this, e, t, r);
        }
      }
      function d(e) {
        switch (e) {
          case "add":
          case "remove":
          case "reset":
          case "destroy":
            return;
          default:
            this.trigger.apply(this, arguments);
        }
      }
      function f(e, t) {
        var i = this,
          r = this.length,
          o = r + e,
          a = {
            silent: t,
          },
          s = !this.lastFetchTime,
          u = 0;
        return (
          this.sources.every(function (t, r) {
            var l, c, d;
            if (n(0).contains(i._ignoredCollections, r)) return !0;
            for (
              var f = i._sourceModelCounts[r];
              !p.call(i, t) &&
              i.length < o &&
              0 !== (l = t.models.slice(f, f + e)).length;

            ) {
              for (
                i.lastFetchTime = t.lastFetchTime || Date.now(),
                  s && ((s = !1), i.trigger("reset", i, {})),
                  d = i.length;
                (c = l.shift());

              )
                y.call(i, c, t, u + f, a), f++, b.call(i), w.call(i, a);
              e -= i.length - d;
            }
            return (
              (u += f), i.length < o && (t.isFullyPopulated() || p.call(i, t))
            );
          }),
          !this.lastFetchTime &&
            this.sources.every(function (e) {
              return e.isFullyPopulated();
            }) &&
            (this.lastFetchTime = Date.now()),
          this.length > r
        );
      }
      function h(e) {
        return this._sourceModelCounts[this.sources.indexOf(e)];
      }
      function p(e) {
        var t = this.sourceOptions[this.sources.indexOf(e)];
        if (null == t.maxModels) return !1;
        var i,
          r,
          o,
          a,
          u,
          l = this._ignore,
          c = h.call(this, e),
          d = s.call(this, e),
          f =
            c -
            ((i = l),
            (r = d),
            (o = d + c),
            (a = n(0).sortedIndex(i, r)),
            (u = n(0).sortedIndex(i, o)) - a + (i[u] === o ? 1 : 0));
        return t.maxModels <= f;
      }
      function g(e) {
        for (
          var t = e, n = 0, i = this._ignore.length;
          n < i && this._ignore[n] <= t;
          ++n
        )
          ++t;
        return t;
      }
      function m(e) {
        var t = g.call(this, e);
        if (e > -1)
          for (var n = 0, i = this.sources.length; n < i; ++n) {
            var r = this.sources[n],
              o = h.call(this, r);
            if (!(t >= o))
              return {
                source: r,
                index: t,
                model: r.at(t),
              };
            t -= o;
          }
      }
      function v(e) {
        var t = this.sources.indexOf(e);
        t > -1 &&
          t < this.sources.length - 1 &&
          this._ignoredCollections.push(t);
      }
      function y(e, t, i, r) {
        var o = this;
        function a(e, t, n) {
          e > i && n[t]++;
        }
        var s =
          i === this._sourceModels.length
            ? function (e, t) {
                e.push(t);
              }
            : function (e, t) {
                e.splice(i, 0, t);
              };
        if ((e instanceof this.model || (e = this.extractModel(e, i)), e)) {
          this._sourceModelCounts[this.sources.indexOf(t)]++;
          var u = this.indexesOfEquivalentModels(e, this._sourceModels);
          u.forEach(function (e) {
            e >= i && o._dupes[e].push(i);
          }),
            s(this._sourceModels, e),
            s(
              this._dupes,
              u.filter(function (e) {
                return e < i;
              })
            ),
            this._dupes.slice(i).forEach(function (e, t) {
              var n = t + i;
              o._dupes[n].forEach(a);
            }),
            n(0).each(this.filters, function (t, n) {
              o._map[n].insert(i, !!t.call(o, e, i));
            });
        }
      }
      function _(e, t, i) {
        var r = this;
        function o(e, t, n) {
          e > i && n[t]--;
        }
        var a =
          i === this._sourceModels.length - 1
            ? function (e) {
                e.pop();
              }
            : function (e) {
                e.splice(i, 1);
              };
        a(this._sourceModels),
          a(this._dupes),
          n(0).each(this._map, function (e) {
            e.remove(i);
          }),
          this._dupes.slice(i).forEach(function (e, t) {
            var a = t + i;
            (r._dupes[a] = n(0).without(r._dupes[a], i)),
              r._dupes[a].forEach(o);
          }),
          this._sourceModelCounts[this.sources.indexOf(t)]--,
          b.call(this),
          w.call(this);
      }
      function b() {
        for (
          var e = 0,
            t = n(0).isEmpty(this._map)
              ? L(this._sourceModels.length)
              : n(446).combine(n(0).values(this._map)),
            i = function (e, n) {
              return e && !t.get(n);
            },
            r = 0;
          r < this.sources.length;
          ++r
        ) {
          var o = this.sourceOptions[r].maxModels,
            a = h.call(this, this.sources[r]);
          if (null != o) {
            var s = T(t, !0, o, e, e + a - 1);
            s < e + a && t.clearRange(s, e + a - 1);
          }
          e += a;
        }
        for (var u = 0; u < this._sourceModels.length; ++u)
          t.get(u) &&
            t.set(
              u,
              0 === this._dupes[u].length || this._dupes[u].reduce(i, !0)
            );
        this._ignore = t.getIndexes(!1);
      }
      function w(e) {
        var t = this;
        n(1244).align({
          source: this.models,
          target: this._sourceModels.filter(k, this),
          comparator: this.compareModels,
          add: function (i, r) {
            t.add(
              i,
              n(0).defaults(
                {
                  at: r,
                  parse: !1,
                },
                e
              )
            );
          },
          remove: function (e, n) {
            t.remove(t.at(n), {
              _propagateToSource: !1,
            });
          },
        });
      }
      function k(e, t) {
        var i = n(0).sortedIndex(this._ignore, t);
        return this._ignore[i] !== t;
      }
      function A(e) {
        var t;
        return (
          (e = n(0).clone(e) || {}),
          f.call(this, this.options.limit, e.silent) || (t = i.call(this)),
          t ? S.call(this, t, e) : n(7).resolve({})
        );
      }
      function S(e, t) {
        var i = this,
          r = this.options.limit,
          o = this._sourceModels.length + r,
          a = e.options.limit;
        return (
          (t.reset = !this.isPopulated()),
          (t.remove = !1),
          e.setLimit(Math.max(r, 10)),
          e
            .fetchUntilResults(t)
            .always(function () {
              e.setLimit(a);
            })
            .then(function () {
              return E.call(i, t, o);
            })
            .then(null, function () {
              if (!(e === n(0).last(i.sources)))
                return v.call(i, e), E.call(i, t, o);
            })
        );
      }
      function E(e, t) {
        var i = this;
        if (this._sourceModels) {
          var r = this.options.limit,
            o = t - this._sourceModels.length;
          return o > 0
            ? ((this.options.limit = o),
              A.call(this, n(0).omit(e, "url")).always(function () {
                i.options.limit = r;
              }))
            : void 0;
        }
      }
      function C() {
        var e = this.setupSources();
        (this.sources = e.map(function (e) {
          return [].concat(e)[0];
        })),
          (this.sourceOptions = e.map(function (e) {
            return [].concat(e)[1] || {};
          })),
          (this._sourceModelCounts = e.map(function () {
            return 0;
          }));
      }
      function T(e, t, n, i, r) {
        void 0 === i && (i = 0), void 0 === r && (r = e.length - 1);
        var o,
          a = 0;
        for (o = i; o <= r && a < n; ++o) e.get(o) === t && ++a;
        return o;
      }
      function x(e, t, n) {
        var i = this.sources.indexOf(t),
          o = this._sourceModelCounts[i];
        return (
          e < o || (!(!n || e !== o) && !this.sources.slice(0, i).some(r, this))
        );
      }
      var I = function () {
        return !0;
      };
      function L(e) {
        return new (n(446))(n(0).times(e, I));
      }
    },
    154: function (e, t, n) {
      e.exports = {
        getLongBlockMessage: function () {
          var e = r();
          return e
            ? "This track is not available in " + e
            : n(1).Lingua.t("This track is not available in your country");
        },
        getShortBlockMessage: function () {
          var e = r();
          return e
            ? "Not available in " + e
            : n(1).Lingua.t("Not available in your country");
        },
        getCountryCode: i,
        isInCountries: function (e) {
          var t = i();
          return e.some(function (e) {
            return e === t;
          });
        },
        isCountryUS: function () {
          return "US" === i();
        },
        isCountryGermany: function () {
          return "DE" === i();
        },
        isCountryUK: function () {
          return "GB" === i();
        },
      };
      function i() {
        var e = n(4).get("geoip");
        return e && e.get("country_code");
      }
      function r() {
        if (/^en/.test(n(13).LinguaLib.getLocale())) {
          var e = n(4).get("geoip");
          return n(51).codeToCountry(e.get("country_code"));
        }
      }
    },
    1545: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__assign) ||
        Object.assign ||
        function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = n(1546),
        o = n(1548),
        a = n(670),
        s = n(671),
        u = n(1551),
        l = n(1552),
        c = n(1553),
        d = n(343),
        f = {
          barWidth: 3,
          gapWidth: 1,
          fadeInSteps: 10,
          timeIndicatorScale: 1.5,
          upperPartHeight: 0.7,
          pauseEffect: {
            kind: "none",
          },
          theme: a.LightTheme,
          showTimeIndicators: !0,
        },
        h = (function () {
          function e(e, t, n, o) {
            if (!s.isInserted(n))
              throw new Error("Waveform should be inserted into the document");
            (this.data = e),
              (this.config = i({}, f, o)),
              (this.scene = new r.Scene()),
              (this.el = document.createElement("div")),
              this.el.setAttribute("style", d.container),
              this.el.appendChild(this.scene.el),
              n.appendChild(this.el),
              this.addNodes([u.BackgroundNode, l.ProgressNode]),
              this.config.showTimeIndicators &&
                this.addNodes([c.TimeIndicatorNode]),
              this.update(t);
          }
          return (
            (e.prototype.dispose = function () {
              this.scene.dispose();
            }),
            (e.prototype.addNodes = function (e) {
              var t = this;
              if (e.length) {
                var n = new o.SceneLayer();
                this.scene.addLayer(n),
                  e.forEach(function (e) {
                    return n.addNode(new e(t, n));
                  });
              }
            }),
            (e.prototype.update = function (e) {
              this.scene.update(e);
            }),
            (e.prototype.setTheme = function (e) {
              this.config.theme !== e &&
                ((this.config.theme = e), this.scene.forceUpdate());
            }),
            e
          );
        })();
      t.Waveform = h;
    },
    1546: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(343),
        r = (function () {
          function e() {
            var e = this;
            (this.onDirtyLayer = function () {
              e.queueUpdate();
            }),
              (this.raf = null),
              (this.layers = []),
              (this.disposed = !1),
              (this.el = document.createElement("div")),
              this.el.setAttribute("style", i.box);
          }
          return (
            (e.prototype.addLayer = function (e) {
              this.layers.indexOf(e) > -1 ||
                (this.el.appendChild(e.canvas.el),
                e.canvas.updateCanvasDimensions(),
                this.layers.push(e),
                e.onDirty(this.onDirtyLayer),
                e.isDirty && this.queueUpdate());
            }),
            (e.prototype.dispose = function () {
              var e;
              for (
                this.raf &&
                (window.cancelAnimationFrame(this.raf), (this.raf = null));
                this.layers.length;

              )
                (e = this.layers.pop()) && e.dispose();
              this.disposed = !0;
            }),
            (e.prototype.update = function (e) {
              (this.raf = null),
                this.layers.forEach(function (t) {
                  return t.update(e);
                });
            }),
            (e.prototype.forceUpdate = function () {
              this.layers.forEach(function (e) {
                e.nodes.forEach(function (e) {
                  e.reset(), e.setDirty(!0);
                });
              });
            }),
            (e.prototype.queueUpdate = function () {
              var e = this;
              this.raf ||
                (this.raf = window.requestAnimationFrame(function () {
                  return e.update();
                }));
            }),
            e
          );
        })();
      t.Scene = r;
    },
    1547: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getStyleString = function (e) {
          var t = document.createElement("div"),
            n = t.style;
          return (
            Object.keys(e).forEach(function (t) {
              n.setProperty(t, String(e[t]));
            }),
            t.getAttribute("style") || ""
          );
        });
    },
    1548: function (e, t, n) {
      "use strict";
      var i,
        r =
          (this && this.__extends) ||
          ((i =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o = n(1549),
        a = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.onCanvasResize = function () {
                t.nodes.forEach(function (e) {
                  e.reset(), e.setDirty(!0);
                });
              }),
              (t.onDirtyNode = function () {
                t.setDirty(!0);
              }),
              (t.nodes = []),
              (t.currentState = null),
              (t.disposed = !1),
              (t.canvas = new o.Canvas()),
              t.canvas.onResize(t.onCanvasResize),
              t
            );
          }
          return (
            r(t, e),
            (t.prototype.update = function (e) {
              if (
                (void 0 === e && (e = this.currentState),
                !this.disposed && e && this.shouldLayerUpdate(e))
              ) {
                (this.currentState = e),
                  this.canvas.context.clearRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  );
                var t = this.nodes.reduce(function (t, n) {
                  return n.update(e), t || n.isDirty;
                }, !1);
                this.setDirty(t);
              }
            }),
            (t.prototype.addNode = function (e) {
              this.disposed ||
                (this.nodes.push(e), e.onDirty(this.onDirtyNode));
            }),
            (t.prototype.dispose = function () {
              this.nodes.forEach(function (e) {
                return e.dispose();
              }),
                (this.nodes = []),
                (this.disposed = !0);
            }),
            (t.prototype.setDirty = function (t) {
              this.disposed || e.prototype.setDirty.call(this, t);
            }),
            (t.prototype.shouldLayerUpdate = function (e) {
              var t = this;
              return this.nodes.some(function (n) {
                return (
                  (e && n.shouldUpdate(e, t.currentState || void 0)) ||
                  n.isDirty
                );
              });
            }),
            t
          );
        })(n(669).CanBeDirty);
      t.SceneLayer = a;
    },
    1549: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(462),
        r = n(206),
        o = n(668),
        a = n(343),
        s = (function () {
          function e() {
            var e = this;
            (this._onResize = new o.EventDispatcher()),
              (this.onWindowResize = function () {
                e.updateCanvasDimensions(), e._onResize.dispatch(void 0);
              }),
              (this.el = document.createElement("canvas")),
              this.el.setAttribute("style", a.box),
              this.el.setAttribute("aria-hidden", "true");
            var t = this.el.getContext("2d");
            if (null === t)
              throw new Error("Could not get 2d context for canvas");
            (this.context = t),
              (this.scale = i.getPixelRatio()),
              (this.disposed = !1),
              (this.width = 0),
              (this.height = 0),
              this.updateCanvasDimensions(),
              window.addEventListener("resize", this.onWindowResize);
          }
          return (
            (e.prototype.onResize = function (e) {
              this._onResize.subscribe(e);
            }),
            (e.prototype.dispose = function () {
              window.removeEventListener("resize", this.onWindowResize),
                (this.disposed = !0);
            }),
            (e.prototype.getCanvasGradient = function (e, t) {
              return e.reduce(function (e, n) {
                var i = n.color,
                  o = n.offset;
                return (
                  e.addColorStop(o, r.colorToString(r.cloneColor(i, t))), e
                );
              }, this.createLinearGradient());
            }),
            (e.prototype.updateCanvasDimensions = function () {
              this.disposed ||
                ((this.el.width = this.width =
                  this.el.offsetWidth * this.scale),
                (this.el.height = this.height =
                  this.el.offsetHeight * this.scale),
                i.isHiDPI() &&
                  1 !== this.scale &&
                  this.context.scale(this.scale, this.scale));
            }),
            (e.prototype.createLinearGradient = function () {
              return this.context.createLinearGradient(
                0,
                0,
                0,
                this.height / this.scale
              );
            }),
            e
          );
        })();
      t.Canvas = s;
    },
    155: function (e, t, n) {
      var i = {
        URGENT: 1,
        HIGH: 2,
        MEDIUM: 3,
        LOW: 4,
      };
      e.exports = {
        addAjaxScheduling: function (e, t) {
          void 0 === t && (t = !1);
          return function (t, o) {
            var a = n(0).isObject(t) ? n(0).clone(t) : o;
            t = n(0).isString(t) ? t : a.url;
            var s,
              u = a.priority || i.MEDIUM,
              l = n(26).parse(t),
              c = l.host,
              d =
                (l.path,
                (function (e) {
                  r.has(e) || r.set(e, new (n(508).AsyncTasksQueue)(6));
                  return r.get(e);
                })(c).addTask(function () {
                  0;
                  return (s = e(t, a));
                }, u));
            return n(0).assign({}, d.defer, {
              abort: function () {
                s && s.abort();
                d.cancel();
              },
            });
          };
        },
        RequestPriorities: i,
      };
      var r = new Map();
    },
    1550: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.clamp = function (e, t, n) {
          return Math.min(n, Math.max(t, e));
        });
    },
    1554: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      (t.timecode = function (e) {
        var t = [],
          n = Math.floor(e / 36e5),
          i = Math.floor((e / 6e4) % 60),
          r = Math.floor((e / 1e3) % 60);
        return (
          n > 0 && t.push(n),
          t.push(i < 10 && n > 0 ? "0" + i : i),
          t.push(r < 10 ? "0" + r : r),
          t.join(":")
        );
      }),
        (t.ms2sec = function (e) {
          return Math.floor(e / 1e3);
        });
    },
    1556: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(462),
        r = function (e, t, n) {
          var r;
          (this.maxHeight = e),
            (this.samples = t.reduce(function (t, n, i) {
              return (
                (t[i] = (function (e, t) {
                  return Math.round(Math.pow((e - t) / e, 1 / 1.5) * e);
                })(e, n)),
                t
              );
            }, ((r = t.length),
            i.supportsTypedArrays() ? new Uint8Array(r) : new Array(r)))),
            (this.duration = n);
        };
      t.WaveformData = r;
    },
    1557: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.BASE_THEME = void 0);
      var i = n(206),
        r = n(463),
        o = i.rgb(68, 68, 68),
        a = i.rgb(140, 140, 140);
      t.BASE_THEME = {
        backgroundGradient: [
          i.colorStop(0, a),
          i.colorStop(0.7, a),
          i.colorStop(0.701, i.cloneColor(a, 0.5)),
          i.colorStop(1, i.cloneColor(a, 0.5)),
        ],
        gapGradient: [
          i.colorStop(0, i.cloneColor(r.WHITE, 0)),
          i.colorStop(0.28, i.cloneColor(r.WHITE, 0.3)),
          i.colorStop(0.7, i.cloneColor(r.WHITE, 0.5)),
          i.colorStop(0.701, i.cloneColor(r.WHITE, 0.125)),
          i.colorStop(1, i.cloneColor(r.WHITE, 0)),
        ],
        progressGradient: [
          i.colorStop(0, o),
          i.colorStop(0.7, o),
          i.colorStop(0.701, i.cloneColor(o, 0.5)),
          i.colorStop(1, i.cloneColor(o, 0.5)),
        ],
        durationIndicatorBg: i.cloneColor(r.BLACK, 0.8),
        durationIndicatorColor: r.ASH,
      };
    },
    156: function (e, t, n) {
      var i = function (e, t) {
          return {
            id: e,
            userId: n(18).currentUserId(),
          };
        },
        r = function (e, t) {
          return null;
        };
      e.exports = n(21).extend(
        {
          readEndpoint: null,
          createEndpoint: null,
          deleteEndpoint: null,
          getReadEndpointPathParams: function () {
            return {
              userId: n(18).currentUserId(),
            };
          },
          getReadEndpointQueryParams: function () {
            return {
              limit: 5e3,
              linked_partitioning: 1,
            };
          },
          getCreateEndpointPathParams: i,
          getCreateEndpointQueryParams: r,
          getDeleteEndpointPathParams: i,
          getDeleteEndpointQueryParams: r,
          maxResults: null,
          readOnly: !1,
          _currentRequests: null,
          next_href: null,
          _fetchDefer: null,
          setup: function () {
            this._currentRequests = new (n(201))();
          },
          url: function () {
            return null === this.next_href
              ? n(35).getUrlForEndpoint(
                  this.readEndpoint,
                  this.getReadEndpointPathParams(),
                  this.getReadEndpointQueryParams()
                )
              : this.next_href;
          },
          get: function (e) {
            return n(21).prototype.get.call(this, e) || !1;
          },
          fetch: function () {
            var e = this;
            return this._fetchDefer
              ? this._fetchDefer
              : ((this._fetchDefer = n(18).isLoggedIn()
                  ? o.call(this)
                  : n(7).promise(function (t, i) {
                      e.listenToOnce(n(8), "connect:hasUserData", function () {
                        o.call(e)
                          .fail(function () {
                            e._fetchDefer = null;
                          })
                          .then(t, i);
                      });
                    })),
                this._fetchDefer.fail(function () {
                  e._fetchDefer = null;
                }));
          },
          parse: function (e) {
            var t = e.next_href,
              n = e.collection;
            return (
              (this.next_href = t || !1),
              n.reduce(function (e, t) {
                return (e[t] = !0), e;
              }, {})
            );
          },
          toggle: function (e, t) {
            var n = this.get(e),
              i = "boolean" == typeof t ? t : !n;
            i !== n && (i ? this.set(e, !0) : this.unset(e));
          },
          setRemote: function (e, t, i) {
            var r = this;
            if (this.readOnly) return n(7).resolve();
            if (!this._currentRequests.get(e)) {
              var o = t
                  ? [
                      this.createEndpoint,
                      this.getCreateEndpointPathParams(e, i),
                      this.getCreateEndpointQueryParams(e, i),
                    ]
                  : [
                      this.deleteEndpoint,
                      this.getDeleteEndpointPathParams(e, i),
                      this.getDeleteEndpointQueryParams(e, i),
                    ],
                a = n(35).callEndpoint.apply(n(35), o);
              return (
                this._currentRequests.set(e, a),
                a
                  .always(function () {
                    r._currentRequests.unset(e);
                  })
                  .done(function () {
                    var n = r.get(e);
                    t !== n && r.setRemote(e, n);
                  })
                  .fail(n(189).ajaxNonFatal("Could not toggle value"))
              );
            }
          },
          hasDataForView: function () {
            return !!this.lastFetchTime;
          },
        },
        {
          neverRelease: !0,
          hashFn: function () {
            return 1;
          },
        }
      );
      function o(e) {
        var t = this;
        return (
          void 0 === e && (e = n(155).RequestPriorities.LOW),
          this.maxResults &&
            Object.keys(this.attributes).length >= this.maxResults &&
            (this.next_href = !1),
          !1 === this.next_href
            ? n(7).resolve()
            : n(21)
                .prototype.fetch.call(this, {
                  priority: e,
                })
                .then(function () {
                  o.call(t, e);
                })
        );
      }
    },
    157: function (e, t, n) {
      e.exports = new (n(16))({
        applyTo: function (e, t) {
          e.getTitleAttribute = function () {
            return t.attr;
          };
        },
      });
    },
    16: function (e, t, n) {
      (n(574).Mixin.debug = !1), (e.exports = n(574).Mixin);
    },
    161: function (e, t, n) {
      function i() {
        var e, t, n, i, r, o, a, s;
        window.__FullStory__ ||
          ((window._fs_debug = !1),
          (window._fs_host = "fullstory.com"),
          (window._fs_org = "M1AMT"),
          (window._fs_namespace = "__FullStory__"),
          (e = window),
          (t = window.document),
          (n = window._fs_namespace),
          (i = "script"),
          (r = "user"),
          n in e
            ? e.console &&
              e.console.log &&
              e.console.log(
                'FullStory namespace conflict. Please set window["_fs_namespace"].'
              )
            : (((a = e[n] = function (e, t, n) {
                a.q ? a.q.push([e, t, n]) : a._api(e, t, n);
              }).q = []),
              ((o = t.createElement(i)).async = 1),
              (o.crossOrigin = "anonymous"),
              (o.src = "https://" + window._fs_host + "/s/fs.js"),
              (s = t.getElementsByTagName(i)[0]).parentNode.insertBefore(o, s),
              (a.identify = function (e, t, n) {
                a(
                  r,
                  {
                    uid: e,
                  },
                  n
                ),
                  t && a(r, t, n);
              }),
              (a.setUserVars = function (e, t) {
                a(r, e, t);
              }),
              (a.event = function (e, t, n) {
                a(
                  "event",
                  {
                    n: e,
                    p: t,
                  },
                  n
                );
              }),
              (a.shutdown = function () {
                a("rec", !1);
              }),
              (a.restart = function () {
                a("rec", !0);
              }),
              (a.consent = function (e) {
                a("consent", !arguments.length || e);
              }),
              (a.identifyAccount = function (e, t) {
                (o = "account"), ((t = t || {}).acctId = e), a(o, t);
              }),
              (a.clearUserCookie = function () {})),
          window.__FullStory__.shutdown());
      }
      e.exports = n(0).mapObject(
        {
          start: function () {
            return window.__FullStory__.restart();
          },
          stop: function () {
            return window.__FullStory__.shutdown();
          },
          trackEvent: function (e, t) {
            return window.__FullStory__.event(e, t);
          },
        },
        function (e) {
          return function () {
            if (
              n(23).isOneTrustEnabled()
                ? n(23).isCategoryEnabled(n(23).CookieCategory.Performance)
                : n(4).get("privacy_settings").isOptedInToAnalytics()
            )
              return i(), e.apply(void 0, arguments);
          };
        }
      );
    },
    1621: function (e, t, n) {
      e.exports = function () {
        return n(0).assign({}, n(31).Events, {
          adPodController: null,
          beginAdBreak: function (e, t) {
            var r = this,
              o = n(7).defer();
            return this.isAdBreakActive()
              ? o.reject()
              : this.doesAdBreakExist()
              ? (this.dismissLeaveBehind()
                  .fail(function () {
                    o.reject();
                  })
                  .done(function () {
                    i.call(r, e, t, o);
                  }),
                o)
              : (i.call(this, e, t, o), o);
          },
          requestSkipCurrentAd: function (e) {
            return (
              void 0 === e && (e = {}),
              this.doesAdBreakExist()
                ? this.adPodController.requestSkipCurrentAd(e)
                : n(7).resolve()
            );
          },
          requestSkipAdBreak: function (e) {
            return (
              void 0 === e && (e = {}),
              this.doesAdBreakExist()
                ? this.adPodController.requestSkip(e)
                : n(7).resolve()
            );
          },
          setCanSkipImmediately: function (e) {
            var t = this.getCurrentAdController();
            t && t.setCanSkipImmediately(e);
          },
          dismissLeaveBehind: function () {
            return this.doesAdBreakExist()
              ? this.adPodController.dismissLeaveBehind()
              : n(7).resolve();
          },
          doesAdBreakExist: function () {
            return !!this.adPodController;
          },
          isAdBreakActive: function () {
            return this.doesAdBreakExist() && this.adPodController.isActive();
          },
          isAllowedToSkipCurrentAd: function () {
            return (
              this.doesAdBreakExist() &&
              this.adPodController.isAllowedToSkipCurrentAd()
            );
          },
          isAllowedToSkipAdBreak: function () {
            return (
              this.doesAdBreakExist() && this.adPodController.isAllowedToSkip()
            );
          },
          getCurrentAdController: function () {
            return this.doesAdBreakExist()
              ? this.adPodController.getCurrentAdController()
              : null;
          },
          getCurrentAd: function () {
            var e = this.getCurrentAdController();
            return e ? e.audioAd : null;
          },
          getCurrentAdSound: function () {
            var e = this.getCurrentAd();
            return e ? e.sound : null;
          },
          getCurrentAdVisualController: function () {
            if (!this.doesAdBreakExist()) return null;
            if (!this.isAdBreakActive())
              return this.adPodController.getLeaveBehindController();
            var e = this.getCurrentAdController();
            return e ? e.getCompanionController() : null;
          },
          getUpcomingSound: function () {
            return this.doesAdBreakExist()
              ? this.adPodController.getUpcomingSound()
              : null;
          },
          getCurrentAdIndex: function () {
            return this.doesAdBreakExist()
              ? this.adPodController.getCurrentAdIndex()
              : null;
          },
          getAdBreakSize: function () {
            return this.doesAdBreakExist()
              ? this.adPodController.getSize()
              : null;
          },
        });
      };
      function i(e, t, i) {
        var o = this;
        (this.adPodController = new (n(1622))()),
          this.listenTo(
            this.adPodController,
            n(82).CHANGE_CURRENT_AD_SOUND,
            function (e) {
              return o.trigger(n(82).CHANGE_CURRENT_AD_SOUND, e);
            }
          ).listenTo(
            this.adPodController,
            n(82).CHANGE_AD_SKIPPABILITY,
            function (e) {
              return o.trigger(n(82).CHANGE_AD_SKIPPABILITY, e);
            }
          ),
          this.adPodController.getActiveDeferred().always(function () {
            o.trigger(n(82).END_AD_BREAK);
          }),
          this.adPodController.getLifetimeDeferred().always(r.bind(this)),
          this.adPodController
            .begin(e, t)
            .fail(function () {
              i.reject();
            })
            .done(function () {
              i.resolve(o.adPodController);
            });
      }
      function r() {
        this.stopListening(this.adPodController), (this.adPodController = null);
      }
    },
    1622: function (e, t, n) {
      function i(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return r(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0;
            return function () {
              return i >= e.length
                ? {
                    done: !0,
                  }
                : {
                    done: !1,
                    value: e[i++],
                  };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var o = 15 * n(29).MS_IN_SECOND;
      e.exports = function () {
        return n(0).assign({}, n(31).Events, {
          adPod: null,
          audioAdControllers: null,
          currentAdIndex: 0,
          activeDeferred: n(7).defer(),
          lifetimeDeferred: n(7).defer(),
          adSoundOptions: null,
          leaveBehindController: null,
          upcomingTrackSound: null,
          circuitBreaker: new (n(193))({
            tolerance: 2,
            giveUp: 30,
          }),
          begin: function (e, t) {
            var i = this,
              r = n(7).defer();
            return e && e.isMonetized() && this.circuitBreaker.enabled
              ? (a.call(this, e),
                (this.adSoundOptions = t),
                (this.adPod = new (n(1623))(
                  {
                    id: e.id,
                    urn: e.attributes.urn,
                  },
                  {
                    defaultSkipOffset: o,
                  }
                )),
                this.adPod
                  .fetch()
                  .fail(function () {
                    i.circuitBreaker.failed(), g.call(i), r.reject();
                  })
                  .done(function () {
                    if ((i.circuitBreaker.succeeded(), i.adPod.isMalformed()))
                      return g.call(i), void r.reject();
                    r.resolve(), u.call(i), l.call(i);
                  }),
                r)
              : (g.call(this), r.reject());
          },
          isActive: function () {
            return "pending" === this.activeDeferred.state();
          },
          isAllowedToSkipCurrentAd: function () {
            var e = this.getCurrentAdController();
            return e && e.isAllowedToSkip();
          },
          isAllowedToSkip: function () {
            return this.isAllowedToSkipCurrentAd();
          },
          getCurrentAdController: function () {
            return this.audioAdControllers
              ? this.audioAdControllers[this.currentAdIndex]
              : null;
          },
          getLifetimeDeferred: function () {
            return this.lifetimeDeferred;
          },
          getActiveDeferred: function () {
            return this.activeDeferred;
          },
          requestSkipCurrentAd: function (e) {
            void 0 === e && (e = {});
            var t = n(7).defer(),
              i = this.getCurrentAdController();
            return i
              ? i.isAllowedToSkip()
                ? ((this.leaveBehindController = null), i.skip(e))
                : t.reject()
              : t.resolve();
          },
          requestSkip: function (e) {
            void 0 === e && (e = {});
            var t = n(7).defer(),
              i = this.getCurrentAdController();
            return i
              ? i.isAllowedToSkip()
                ? ((this.leaveBehindController = null),
                  (this.currentAdIndex = 1 / 0),
                  i.skip(e))
                : t.reject()
              : t.resolve();
          },
          getLeaveBehindController: function () {
            return this.leaveBehindController;
          },
          dismissLeaveBehind: function () {
            return (
              this.isActive() ||
                ((this.leaveBehindController = null),
                this.lifetimeDeferred.resolve(),
                m.call(this)),
              n(7).resolve()
            );
          },
          getCurrentAdIndex: function () {
            return this.currentAdIndex;
          },
          getSize: function () {
            return this.adPod.getSize();
          },
          getUpcomingSound: function () {
            return this.upcomingTrackSound;
          },
        });
      };
      function a(e) {
        e && ((this.upcomingTrackSound = e), this.upcomingTrackSound.hold());
      }
      function s() {
        this.upcomingTrackSound &&
          (this.upcomingTrackSound.release(), (this.upcomingTrackSound = null));
      }
      function u() {
        var e = this.adPod.getAudioAds();
        e &&
          (this.audioAdControllers = e.map(function (e) {
            return new (n(1625))(e, new (n(1626))(e));
          }));
      }
      function l() {
        (this.currentAdIndex = 0),
          this.getCurrentAdController()
            ? (d.call(this), h.call(this))
            : p.call(this);
      }
      function c() {
        f.call(this),
          this.currentAdIndex++,
          this.getCurrentAdController()
            ? (d.call(this), h.call(this))
            : this.leaveBehindController
            ? this.activeDeferred.resolve()
            : p.call(this);
      }
      function d() {
        var e = this;
        this.listenTo(
          this.getCurrentAdController(),
          n(82).CHANGE_AD_SKIPPABILITY,
          function (t) {
            return e.trigger(n(82).CHANGE_AD_SKIPPABILITY, t);
          }
        );
      }
      function f() {
        this.stopListening(this.getCurrentAdController());
      }
      function h() {
        var e = this,
          t = this.getCurrentAdController();
        t.getLifetimeDeferred().always(function () {
          c.call(e);
        }),
          t
            .begin(this.getUpcomingSound(), this.adSoundOptions)
            .always(function () {
              e.trigger(n(82).CHANGE_CURRENT_AD_SOUND);
            }),
          (this.leaveBehindController = t.getLeaveBehindController());
      }
      function p() {
        this.activeDeferred.resolve(),
          this.lifetimeDeferred.resolve(),
          m.call(this);
      }
      function g() {
        this.activeDeferred.reject(),
          this.lifetimeDeferred.reject(),
          m.call(this);
      }
      function m() {
        if (this.audioAdControllers)
          for (var e, t = i(this.audioAdControllers); !(e = t()).done; ) {
            e.value.dispose();
          }
        s.call(this);
      }
    },
    1625: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      e.exports = function (e, t) {
        return n(0).assign({}, n(31).Events, {
          audioAd: e,
          lifetimeDeferred: n(7).defer(),
          companionController: null,
          leaveBehindController: null,
          audioAdTracker: t,
          upcomingTrackSound: null,
          adSoundOptions: null,
          canSkipImmediately: !1,
          lastEmittedSkippability: null,
          begin: function (e, t) {
            var i = n(7).defer();
            return this.audioAd.isError()
              ? (p.call(this), this.lifetimeDeferred.reject(), i.reject())
              : f.call(this)
              ? (this.lifetimeDeferred.reject(), i.reject())
              : (h.call(this),
                c.call(this, e),
                u.call(this),
                l.call(this),
                (this.adSoundOptions = t),
                r.call(this),
                i.resolve());
          },
          skip: function (e) {
            return (
              void 0 === e && (e = {}),
              g.call(this, e),
              a.call(this),
              n(7).resolve()
            );
          },
          isAllowedToSkip: function () {
            return !m.call(this) || this.canSkipImmediately;
          },
          getMsUntilCanSkip: function () {
            return Math.max(v.call(this), 0);
          },
          isSkipTimerEntireDuration: function () {
            return (
              this.audioAd.getSound().getMediaDuration() -
                this.audioAd.getRequiredListenPeriod() <
              1e3
            );
          },
          setCanSkipImmediately: function (e) {
            (this.canSkipImmediately = e), S.call(this);
          },
          getLifetimeDeferred: function () {
            return this.lifetimeDeferred;
          },
          getCompanionController: function () {
            return this.companionController;
          },
          getLeaveBehindController: function () {
            return this.leaveBehindController;
          },
          getUpcomingSound: function () {
            return this.upcomingTrackSound;
          },
          processWhyAdsClick: function (e) {
            void 0 === e && (e = {}),
              this.audioAdTracker.track(
                n(45).AudioAdTrackingEvents.WHY_ADS_CLICK,
                e
              );
          },
          dispose: function () {
            d.call(this);
          },
        });
      };
      function r() {
        var e = this.audioAd.getSound();
        e.hold(),
          this.listenTo(e, "finish", y.bind(this))
            .listenTo(e, "playerError", _.bind(this))
            .listenTo(e, "pause", b.bind(this))
            .listenTo(e, "play", w.bind(this))
            .listenTo(e, "playStart", k.bind(this))
            .listenTo(e, "time", A.bind(this))
            .listenTo(e, "buffering:start buffering:end", E.bind(this)),
          this.audioAdTracker.track(n(45).AudioAdTrackingEvents.IMPRESSION),
          e.play(this.adSoundOptions);
      }
      function o() {
        var e = this.audioAd.getSound();
        this.stopListening(e), e.pause(), e.release();
      }
      function a() {
        this.lifetimeDeferred.resolve(), o.call(this);
      }
      function s() {
        this.lifetimeDeferred.reject(), o.call(this);
      }
      function u() {
        if (!this.audioAd.hasCompanion()) return null;
        var e = this.audioAd.getCompanion();
        this.companionController = new (n(676))(
          e,
          new (n(677))(this.audioAd, e)
        );
      }
      function l() {
        if (!this.audioAd.hasLeaveBehind()) return null;
        var e = this.audioAd.getLeaveBehind();
        this.leaveBehindController = new (n(676))(
          e,
          new (n(677))(this.audioAd, e)
        );
      }
      function c(e) {
        e && ((this.upcomingTrackSound = e), this.upcomingTrackSound.hold());
      }
      function d() {
        this.upcomingTrackSound &&
          (this.upcomingTrackSound.release(), (this.upcomingTrackSound = null));
      }
      function f() {
        var e = this.audioAd.getSound();
        return e && n(678).has(e.resource_id);
      }
      function h() {
        var e = this.audioAd.getSound();
        e && n(678).add(e.resource_id);
      }
      function p() {
        this.audioAdTracker.track(
          n(45).AudioAdTrackingEvents.UNFILLED_IMPRESSION
        );
      }
      function g(e) {
        void 0 === e && (e = {}),
          this.audioAdTracker.track(n(45).AudioAdTrackingEvents.SKIP, e);
      }
      function m() {
        return v.call(this) > 0;
      }
      function v() {
        return (
          Math.min(
            this.audioAd.getRequiredListenPeriod(),
            this.audioAd.getSound().getMediaDuration()
          ) - this.audioAd.getSound().currentTime()
        );
      }
      function y() {
        this.audioAdTracker.track(n(45).AudioAdTrackingEvents.FINISH),
          a.call(this);
      }
      function _(e) {
        void 0 === e && (e = {}),
          this.audioAdTracker.track(
            n(45).AudioAdTrackingEvents.ERROR,
            i({}, e, {
              errorCode:
                e.error &&
                e.error.message.indexOf("SCAUDIO.NOT_SUPPORTED_ERROR") > -1
                  ? n(230).VAST_ERROR_CODE_NOT_SUPPORTED_LINEAR_ERROR
                  : n(230).VAST_ERROR_CODE_GENERAL_LINEAR_ERROR,
            })
          ),
          s.call(this),
          n(64).isAdBlockEnabled() ||
            n(196).notify(
              new Error("AdManager: Error from player. " + e.error)
            );
      }
      function b() {
        this.audioAdTracker.track(n(45).AudioAdTrackingEvents.PAUSE);
      }
      function w() {
        this.audioAdTracker.track(n(45).AudioAdTrackingEvents.PLAY),
          S.call(this);
      }
      function k() {
        this.audioAdTracker.track(n(45).AudioAdTrackingEvents.PLAY_START);
      }
      function A() {
        this.audioAdTracker.trackQuartile(),
          this.audioAdTracker.trackProgress(),
          S.call(this);
      }
      function S() {
        var e = this.isAllowedToSkip();
        e !== this.lastEmittedSkippability &&
          ((this.lastEmittedSkippability = e),
          this.trigger(n(82).CHANGE_AD_SKIPPABILITY));
      }
      function E(e) {
        this.getUpcomingSound().trigger("ad:" + e.type, e);
      }
    },
    1626: function (e, t, n) {
      var i = 0.25,
        r = 0.5,
        o = 0.75,
        a = 1,
        s = (function () {
          "use strict";
          function e(e) {
            (this.audioAd = e),
              (this.firedEvents = new Set()),
              (this.unfiredProgressTrackers = e.getProgressTrackers() || []);
          }
          var t = e.prototype;
          return (
            (t.track = function (e, t) {
              if (
                (void 0 === t && (t = {}),
                this.audioAd &&
                  (!this.firedEvents.has(e) ||
                    e === n(45).AudioAdTrackingEvents.PLAY ||
                    e === n(45).AudioAdTrackingEvents.PAUSE))
              ) {
                var i = this.audioAd.getSound(),
                  r = this.audioAd.getUrn(),
                  o = this.audioAd.getTracking(),
                  a = this.audioAd.getCompanion(),
                  s = this.audioAd.getUpcomingSoundUrn(),
                  u = a ? a.getUrn() : void 0,
                  l = a
                    ? a.getFormat() === n(64).AudioAdVisualFormats.html
                      ? "html"
                      : a.getContent()
                    : void 0,
                  c = 0;
                i && i.player && (c = Math.floor(i.player.getPosition()));
                var d = this.firedEvents.has(
                    n(45).AudioAdTrackingEvents.PLAY_START
                  ),
                  f = this.firedEvents.has(n(45).AudioAdTrackingEvents.PAUSE),
                  h = {
                    context: {
                      scope: ["playControls", "playControlsPanel"],
                    },
                    contextName: "playControlsPanel",
                  };
                switch (e) {
                  case n(45).AudioAdTrackingEvents.PLAY_START:
                    n(118).logEvent("play", {
                      trackerUrlsByAdEvent: o,
                      contentPlayheadInMs: c,
                    });
                    break;
                  case n(45).AudioAdTrackingEvents.PLAY:
                    d &&
                      f &&
                      n(118).logEvent("resume", {
                        trackerUrlsByAdEvent: o,
                        contentPlayheadInMs: c,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.PAUSE:
                    d &&
                      n(118).logEvent("pause", {
                        trackerUrlsByAdEvent: o,
                        contentPlayheadInMs: c,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.IMPRESSION:
                    n(118).logEvent("adImpression", {
                      trackerUrlsByAdEvent: o,
                      contentPlayheadInMs: c,
                    }),
                      n(12).trackImpression({
                        ad_urn: r,
                        impression_name: "audio_ad_impression",
                        impression_object: r,
                        context: h.context,
                        monetization_type: "audio_ad",
                        monetized_object: s,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.UNFILLED_IMPRESSION:
                    n(118).log(this.audioAd.getErrorTrackers(), {
                      errorCode: n(230).VAST_ERROR_CODE_UNDEFINED_ERROR,
                      contentPlayheadInMs: c,
                    }),
                      this.audioAd.isEmpty() &&
                        n(12).trackImpression({
                          ad_urn: r,
                          impression_name: "error_ad",
                          impression_object: r,
                          context: h.context,
                          monetization_type: "error_ad",
                          monetized_object: s,
                        });
                    break;
                  case n(45).AudioAdTrackingEvents.SKIP:
                    n(118).logEvent("skip", {
                      trackerUrlsByAdEvent: o,
                      contentPlayheadInMs: c,
                    }),
                      n(12).trackV0Click(null, {
                        ad_urn: r,
                        click_name: "ad::skip",
                        click_object: r,
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: s,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.FINISH:
                    n(118).logEvent("finish", {
                      trackerUrlsByAdEvent: o,
                      contentPlayheadInMs: c,
                    }),
                      n(12).trackV0Click(null, {
                        ad_urn: r,
                        click_name: "ad::finish",
                        click_object: r,
                        external_media: l,
                        context: h.context,
                        monetization_type: "audio_ad",
                        monetized_object: s,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.FIRST_QUARTILE:
                  case n(45).AudioAdTrackingEvents.SECOND_QUARTILE:
                  case n(45).AudioAdTrackingEvents.THIRD_QUARTILE:
                    var p = e.split(":")[1];
                    n(118).logEvent(p, {
                      trackerUrlsByAdEvent: o,
                      contentPlayheadInMs: c,
                    }),
                      n(12).trackV1Click({
                        ad_urn: r,
                        click_name: e.replace("audio_ad:", "ad::"),
                        click_category: "monetization",
                        click_object: r,
                        external_media: l,
                        monetization_type: "audio_ad",
                        monetized_object: s,
                      });
                    break;
                  case n(45).AudioAdTrackingEvents.WHY_ADS_CLICK:
                    n(12).trackV0Click(null, {
                      click_name: "companion_display::why_ads",
                      click_object: r,
                      click_target: null,
                      external_media: null,
                      ad_urn: u,
                      context: t.context,
                      monetization_type: "audio_ad",
                      monetized_object: s,
                    });
                    break;
                  case n(45).AudioAdTrackingEvents.ERROR:
                    n(118).log(this.audioAd.getErrorTrackers(), {
                      errorCode:
                        t.errorCode ||
                        n(230).VAST_ERROR_CODE_GENERAL_LINEAR_ERROR,
                      contentPlayheadInMs: c,
                    });
                    break;
                  default:
                    0;
                }
                this.firedEvents.add(e);
              }
            }),
            (t.trackQuartile = function () {
              if (this.audioAd) {
                var e = this.audioAd.getSound().progress();
                e >= a ||
                  (e >= i &&
                    !this.firedEvents.has(
                      n(45).AudioAdTrackingEvents.FIRST_QUARTILE
                    ) &&
                    this.track(n(45).AudioAdTrackingEvents.FIRST_QUARTILE),
                  e >= r &&
                    !this.firedEvents.has(
                      n(45).AudioAdTrackingEvents.SECOND_QUARTILE
                    ) &&
                    this.track(n(45).AudioAdTrackingEvents.SECOND_QUARTILE),
                  e >= o &&
                    !this.firedEvents.has(
                      n(45).AudioAdTrackingEvents.THIRD_QUARTILE
                    ) &&
                    this.track(n(45).AudioAdTrackingEvents.THIRD_QUARTILE));
              }
            }),
            (t.trackProgress = function () {
              var e = this.audioAd.getSound(),
                t = e.player ? e.player.getPosition() : 0;
              if (
                !(
                  0 === this.unfiredProgressTrackers.length ||
                  this.unfiredProgressTrackers[0].offset_in_ms > t
                )
              ) {
                var i = n(0).partition(
                    this.unfiredProgressTrackers,
                    function (e) {
                      return e.offset_in_ms <= t;
                    }
                  ),
                  r = i[0],
                  o = i[1];
                r.forEach(function (e) {
                  return n(118).log(e.urls, {
                    contentPlayheadInMs: t,
                  });
                }),
                  (this.unfiredProgressTrackers = o);
              }
            }),
            e
          );
        })();
      e.exports = s;
    },
    163: function (e, t, n) {
      var i = n(423)({
        label: "scaudio",
        enabled: !0,
        buffer: !0,
      });
      e.exports = {
        debug: i.log,
        info: i.info,
        warn: i.warn,
        error: i.error,
      };
    },
    171: function (e, t, n) {
      var i,
        r = [
          "3ga",
          "3gp",
          "aac",
          "aif",
          "aiff",
          "aifc",
          "amr",
          "caf",
          "flac",
          "m4a",
          "mp2",
          "mp3",
          "mp4",
          "ogg",
          "wav",
          "wma",
        ],
        o = [".DS_Store"],
        a = (e.exports = n(39).extend(
          {
            next_href: !1,
            model: n(262),
            transferStatus: null,
            transcodingStatus: null,
            uploadQueue: null,
            setup: function () {
              (this.transferStatus = new (n(331))()),
                (this.transcodingStatus = new (n(331))()),
                (this.uploadQueue = new (n(508).AsyncTasksQueue)(3)),
                this.listenTo(this, "change:status", v)
                  .listenTo(this, "remove", m)
                  .listenTo(this, "change:hasBeenSaved", h, this);
            },
            addFiles: function (e, t) {
              var i = this;
              return (
                void 0 === t && (t = {}),
                (function (e) {
                  var t = e.length && s(e[0]);
                  if (!t) return n(7).resolve(n(0).toArray(e));
                  return u(
                    n(0).map(e, function (e) {
                      return e[t]();
                    })
                  ).then(function (e) {
                    return e.map(function (e) {
                      return e.file;
                    });
                  });
                })(e).then(function (e) {
                  var r = i.getValidFiles(e),
                    o = n(4).get("me"),
                    a = !o.hasTrackLimit() || r.length <= o.getTracksLeft(),
                    s = [];
                  return r && r.length && a
                    ? (s = i.addFilesAsUploads(
                        r,
                        t.replaceSoundUploadId
                          ? {
                              resource_id: t.replaceSoundUploadId,
                            }
                          : null
                      ))
                    : (a || n(8).trigger("upload:over-track-quota"), s);
                })
              );
            },
            getValidFiles: function (e) {
              var t = this;
              void 0 === e && (e = []);
              var i = e.filter(function (e) {
                  return n(0).contains(o, e.name);
                }),
                r = n(0).without.apply(n(0), [e].concat(i)).map(f),
                a = n(0).flatten(n(0).pluck(r, "errors"));
              return (
                n(0).each(n(0).countBy(a), function (e, n) {
                  t.trigger("error", {
                    type: n,
                    count: e,
                  });
                }),
                n(0).pluck(
                  r.filter(function (e) {
                    return !e.errors.length;
                  }),
                  "file"
                )
              );
            },
            addFilesAsUploads: function (e, t) {
              return n(0)
                .chain(e)
                .map(function (e) {
                  return (function (e, t) {
                    var i = new (n(262))(
                      {
                        file: e,
                      },
                      t
                    );
                    return i.release(), i;
                  })(e, t);
                })
                .map(d, this)
                .compact()
                .value();
            },
            addUploadsAsAggregate: function (e) {
              return c(e);
            },
            addUploadsToAggregate: function (e, t) {
              var n = c(null, {
                resource_id: t,
              });
              return n.addUploads(e), n;
            },
            numToUpload: function () {
              return this.uploadsByStatus(n(53).QUEUED + n(53).UPLOADING)
                .length;
            },
            numUploading: function () {
              return this.uploadsByStatus(n(53).UPLOADING).length;
            },
            numTransoding: function () {
              return this.uploadsByStatus(n(53).TRANSCODING).length;
            },
            hasUnsaved: function () {
              return this.some(function (e) {
                return !1 === e.get("hasBeenSaved");
              });
            },
            uploadsByStatus: function (e) {
              return this.getSoundUploads().filter(function (t) {
                return t.get("status") & e;
              });
            },
            getSoundUploads: function () {
              return this.models;
            },
            pause: function () {
              this.uploadQueue.pause();
            },
            resume: function () {
              this.uploadQueue.resume();
            },
            hasDataForView: function () {
              return !0;
            },
            extractFolderName: function (e) {
              var t = 1 === e.length && s(e[0]);
              if (t) {
                var n = e[0][t]();
                return n.isDirectory ? n.name : void 0;
              }
              return;
            },
          },
          {
            MAX_FILE_SIZE: 5368709120,
            SIMULTANEOUS_UPLOADS: 3,
            ErrorTypes: {
              FILE_SIZE_TOO_SMALL: "invalid-file:size-too-small",
              FILE_SIZE_TOO_LARGE: "invalid-file:size-too-large",
              FILE_TYPE_UNSUPPORTED: "invalid-file:type-unsupported",
            },
            neverRelease: !0,
            hashFn: function () {
              return 1;
            },
          }
        ));
      function s(e) {
        return "function" == typeof e.webkitGetAsEntry
          ? "webkitGetAsEntry"
          : "function" == typeof e.getAsEntry
          ? "getAsEntry"
          : void 0;
      }
      function u(e, t, n) {
        return (
          void 0 === t && (t = 3),
          void 0 === n && (n = 0),
          e
            .filter(Boolean)
            .reduce(function (e, i) {
              return e.then(function (e) {
                return (i.isDirectory
                  ? n < t
                    ? (function (e, t, n) {
                        return new Promise(function (i) {
                          return e.createReader().readEntries(function (e) {
                            return i(u(e, t, n));
                          });
                        });
                      })(i, t, n + 1)
                    : Promise.resolve([])
                  : ((r = i),
                    new Promise(function (e) {
                      return r.file(function (t) {
                        return e({
                          file: t,
                          path: r.fullPath,
                        });
                      });
                    }))
                ).then(function (t) {
                  return e.concat(t);
                });
                var r;
              });
            }, Promise.resolve([]))
            .then(l)
        );
      }
      function l(e) {
        return e.sort(function (e, t) {
          return e.path < t.path ? -1 : e.path > t.path ? 1 : 0;
        });
      }
      function c(e, t) {
        var i = new (n(439))(
          {
            uploads: e,
          },
          t
        );
        return i.release(), i;
      }
      function d(e) {
        var t = this.length,
          i = this.uploadQueue;
        if (
          (this.add(e, {
            at: 0,
          }),
          this.length !== t)
        ) {
          g.call(this, !0, e);
          var r = i.addTask(function () {
            return e.upload();
          });
          return (
            e.on("remove", function () {
              return i.removeTask(r);
            }),
            n(12).trackUploadFunnel({
              chapter: "start",
              uploadId: e.getTrackingId(),
            }),
            e
          );
        }
      }
      function f(e) {
        var t = e.name,
          i = e.size,
          o = e.type,
          s = [];
        !i || i <= 0
          ? s.push(a.ErrorTypes.FILE_SIZE_TOO_SMALL)
          : i > a.MAX_FILE_SIZE && s.push(a.ErrorTypes.FILE_SIZE_TOO_LARGE);
        var u = n(203).getExtension(t),
          l = !u || n(0).contains(r, u.toLowerCase()),
          c = o && 0 === o.indexOf("audio/");
        return (
          l || c || s.push(a.ErrorTypes.FILE_TYPE_UNSUPPORTED),
          {
            file: e,
            errors: s,
          }
        );
      }
      function h(e) {
        !this.numUploading() && e.get("hasBeenSaved") && p();
      }
      function p() {
        i && (n(4).get("router").removeNavigationBlock(i), (i = null));
      }
      function g(e, t) {
        this.transferStatus[e ? "addTransfer" : "removeTransfer"](
          t.get("transfer")
        ),
          this.transcodingStatus[e ? "addTransfer" : "removeTransfer"](
            t.get("transcoding")
          );
      }
      function m(e) {
        g.call(this, !1, e), this.numUploading() || this.hasUnsaved() || p();
      }
      function v(e) {
        var t = e.get("status"),
          r = e.previous("status");
        t !== n(53).UPLOADING ||
          1 !== this.numUploading() ||
          i ||
          (i = n(4)
            .get("router")
            .addNavigationBlock(
              n(1).Lingua.t(
                "You still have incomplete uploads. If you leave the page now, these will be canceled."
              )
            )),
          t === n(53).COMPLETE && this.trigger("complete"),
          r === n(53).UPLOADING &&
            this.transferStatus.removeTransfer(e.get("transfer")),
          r === n(53).TRANSCODING &&
            this.transcodingStatus.removeTransfer(e.get("transcoding"));
      }
    },
    177: function (e, t, n) {
      var i,
        r = window.document,
        o = !0,
        a = (e.exports = n(0).assign({}, n(31).Events, {
          visible: function () {
            return o;
          },
          focused: function () {
            return o && (!r.hasFocus || r.hasFocus());
          },
        }));
      (i = function () {
        var e = !r.hidden;
        o !== e && ((o = e), a.trigger("change:visibility", o));
      })(),
        r.addEventListener("visibilitychange", i, !1);
    },
    179: function (e, t, n) {
      (function (t) {
        e.exports = new (n(16))({
          _imageFile: null,
          _imageSource: null,
          _imageDataURI: null,
          applyTo: function (e, t) {
            (e.imageProperties = n(0).pick(t, "read", "write")),
              (e.useFormData = null == t.useFormData || t.useFormData);
          },
          defaults: {
            getImageSaveUrl: function () {
              return this.saveUrl();
            },
          },
          getImageUrl: function (e) {
            return this._imageDataURI || n(43).urlFrom(this.attributes, e);
          },
          hasOwnImage: function () {
            return (
              !!this._imageDataURI ||
              !n(43).isDefaultImage(this.get(this.imageProperties.read))
            );
          },
          hasNewImage: function () {
            return !!this._imageFile;
          },
          getPlaceholderUrl: function (e) {
            return (
              !this._imageDataURI &&
              n(43).getPlaceholderUrl(this.getImageUrl(), e)
            );
          },
          getImageFileInfo: function () {
            return {
              file: this._imageFile,
              source: this._imageSource,
            };
          },
          setImageFile: function (e, t) {
            var i = this;
            (this._imageSource = t),
              (this._imageFile = e),
              (function (e, t) {
                var i = n(7).defer();
                return (
                  n(43)
                    .readImageFile(e)
                    .done(function (e) {
                      var n,
                        r,
                        o,
                        a = window.document.createElement("canvas"),
                        s = a.getContext("2d"),
                        u =
                          ((n = e.width),
                          (r = e.height),
                          (o = n - r) > 0
                            ? {
                                x: Math.floor(o / 2),
                                y: 0,
                                w: r,
                                h: r,
                              }
                            : {
                                x: 0,
                                y: Math.floor(-o / 2),
                                w: n,
                                h: n,
                              });
                      (a.width = a.height = t),
                        s &&
                          ((s.imageSmoothingEnabled = s.mozImageSmoothingEnabled = s.oImageSmoothingEnabled = s.webkitImageSmoothingEnabled = !0),
                          (s.imageSmoothingEnabled = !0),
                          s.drawImage(e, u.x, u.y, u.w, u.h, 0, 0, t, t)),
                        i.resolve(a.toDataURL("image/png"));
                    })
                    .fail(i.reject),
                  i
                );
              })(e, 500).done(function (n) {
                (i._imageDataURI = n),
                  i.trigger("imageDataChanged", {
                    file: e,
                    source: t,
                  });
              });
          },
          unsetImageFile: function (e) {
            (e = e || {}),
              (this._imageFile = this._imageSource = null),
              e.force && this.unsetImageDataURI(),
              e.silent ||
                this.trigger("imageDataChanged", {
                  file: null,
                  source: null,
                });
          },
          unsetImageDataURI: function () {
            this._imageDataURI = null;
          },
          uploadBase64Image: function (e) {
            var t = this,
              r = n(7).defer(),
              a = o(this.imageProperties.write, e);
            return (
              i(this.getImageSaveUrl(), a)
                .fail(function (e, t) {
                  return r.reject(t);
                })
                .done(function (e) {
                  return r.resolve(e[t.imageProperties.read]);
                }),
              r
            );
          },
          uploadImage: function () {
            var e = this,
              t = n(7).defer(),
              o = this.getImageFileInfo(),
              u = o.file,
              l = o.source,
              c = this.useFormData;
            if (u && this.imageProperties.write)
              return (
                n(12).trackV0Click(["upload", "image", "upload_started", l]),
                this.unsetImageFile(),
                r
                  .call(this, u, c)
                  .then(function (t) {
                    return i(e.getImageSaveUrl(), t);
                  })
                  .done(function (e) {
                    n(12).trackV0Click([
                      "upload",
                      "image",
                      "upload_success",
                      l,
                    ]),
                      t.resolve(e);
                  })
                  .done(a.bind(this))
                  .fail(t.reject)
                  .fail(s.bind(this, l)),
                t
              );
          },
          canDeleteImage: function () {
            return !!this.getImageDeleteEndpoint;
          },
          deleteImage: function () {
            var e = this;
            return this.canDeleteImage()
              ? n(35)
                  .callEndpoint(this.getImageDeleteEndpoint())
                  .then(function () {
                    e.unsetImageFile({
                      force: !0,
                    }),
                      e.set(e.imageProperties.read, null);
                  })
              : n(7).reject();
          },
        });
        function i(e, n) {
          return n instanceof window.FormData
            ? t.ajax({
                url: e,
                type: "PUT",
                data: n,
                processData: !1,
                contentType: !1,
                dataType: "json",
              })
            : t.ajax({
                url: e,
                type: "PUT",
                data: JSON.stringify(n),
                dataType: "json",
                contentType: "application/json",
              });
        }
        function r(e, t) {
          var i = this.imageProperties.write,
            r = t ? this.get("kind") + "[" + i + "]" : i;
          return t
            ? n(7).resolve(
                (function (e, t) {
                  if (!n(75).formData || !e) return;
                  var i = new window.FormData();
                  return i.append(t, e), i;
                })(e, r)
              )
            : (function (e, t) {
                return n(203)
                  .readAsDataURL(e)
                  .then(function (e) {
                    return o(t, e);
                  });
              })(e, r);
        }
        function o(e, t) {
          var n,
            i = t.split(",")[1];
          return ((n = {})[e] = i), n;
        }
        function a(e) {
          var t = n(7).defer(),
            i = n(43).setFormat(e[this.imageProperties.read], 20),
            r = this,
            o = new (n(193))({
              tolerance: 1,
              baseDelay: 2e3,
              maxDelay: 8e3,
              backoffRate: 1.5,
              giveup: 6,
              enabled: !1,
            }),
            a = new window.Image();
          return (
            (a.onload = function () {
              var n = r.imageProperties.read;
              r.get(n) === e[n] && r.forceChange(n), r.set(e), t.resolve(e);
            }),
            (a.onerror = function () {
              o.failed();
            }),
            o
              .on("enabled", function () {
                a.src = i + "?" + Date.now();
              })
              .on("giveup", t.reject),
            this.trigger("imageUrlChanged", i),
            t
              .done(this.trigger.bind(this, "imageTranscodingDone", e))
              .fail(this.trigger.bind(this, "imageTranscodingFail", e))
          );
        }
        function s(e, t) {
          n(34).trigger("error", {
            action: "upload_image",
            xhr: t,
          }),
            n(12).trackV0Click(["upload", "image", "upload_failure", e]);
        }
      }.call(this, n(15)));
    },
    1792: function (e, t, n) {
      var i,
        r = new (n(57))("persistentFormFields", "session");
      i = {
        fields: [],
        storeKey: null,
        saveOnceIn: 3e3,
        restoreAndStoreOnSetup: !1,
      };
      e.exports = new (n(16))({
        _isStoringFields: !1,
        _onFieldsChange: null,
        after: {
          setup: function () {
            (this.serialization = n(0).assign({}, i, this.serialization)),
              this.serialization.restoreAndStoreOnSetup &&
                (this.restoreFields(), this.startStoringFields());
          },
        },
        applyTo: function (e) {
          e.constructor.onCleanup = function (e) {
            e.stopStoringFields();
          };
        },
        restoreFields: function () {
          var e = r.get(this.serialization.storeKey);
          e && this.set(e);
        },
        startStoringFields: function () {
          u.call(this) && ((this._isStoringFields = !0), o.call(this, !0));
        },
        stopStoringFields: function () {
          this._isStoringFields &&
            ((this._isStoringFields = !1),
            o.call(this, !1),
            (this._onFieldsChange = null));
        },
        clearStoredValues: function () {
          r.set(this.serialization.storeKey, null);
        },
        _getStore: function () {
          return r;
        },
      });
      function o(e) {
        var t = e ? "on" : "off";
        (this._onFieldsChange =
          this._onFieldsChange ||
          n(0).throttle(a.bind(this), this.serialization.saveOnceIn, {
            leading: !1,
          })),
          this[t](s.call(this), this._onFieldsChange);
      }
      function a() {
        var e = this,
          t = this.serialization.fields.reduce(function (t, n) {
            return (t[n] = e.get(n)), t;
          }, {});
        r.set(this.serialization.storeKey, t);
      }
      function s() {
        return "change:" + this.serialization.fields.join(" change:");
      }
      function u() {
        return (
          !this._isStoringFields &&
          this.serialization.storeKey &&
          this.serialization.fields &&
          this.serialization.fields.length
        );
      }
    },
    18: function (e, t, n) {
      (function (t) {
        var i,
          r,
          o = {
            name: "oauth_token",
            secure: !0,
            domainStrict: !0,
          },
          a = new (n(57))("anonymous-user"),
          s = null;
        n(8).on("broadcast:authentication:tokenChange", function (e) {
          e
            ? ((s = e), n(8).trigger("connect:login", "login"))
            : n(8).trigger("connect:logout", {
                isOriginator: !1,
              });
        });
        var u = (e.exports = n(0).assign({}, n(31).Events, {
          _redirectAfterSignupRoute: null,
          setAuthToken: function (e, t) {
            var i,
              r = (void 0 === t ? {} : t).excludeThis,
              a = void 0 === r || r;
            n(8).broadcast(
              {
                excludeThis: a,
              },
              "authentication:tokenChange",
              e
            ),
              (i = e),
              n(68).set(
                n(0).assign({}, o, {
                  value: i,
                  expirationInDays: 365,
                })
              );
          },
          getAuthToken: function () {
            return (s = s || n(68).get("oauth_token"));
          },
          isLoggedIn: function () {
            return !!this.getAuthToken();
          },
          setAuthModalOpener: function (e) {
            i = e;
          },
          clearLegacyCookie: function () {
            n(68).get("legacy_clean") ||
              n(35).callEndpoint("connectCleanLegacy");
          },
          login: function (e) {
            var t,
              o = !(e = e || {}).implicitAction;
            if (
              !n(350).isOneTrustEnabled(
                n(4).get("features"),
                n(4).get("geoip").get("country_code")
              )
            ) {
              var a = n(4).get("privacy_settings");
              t = {
                wasOptedInToTargetedAdvertising: a.isOptedInToTargetedAdvertising(),
                wasOptedInToAnalytics: a.isOptedInToAnalytics(),
                wasOptedInToCommunications: a.isOptedInToCommunications(),
              };
            }
            ((this._redirectAfterSignupRoute = e.redirectRoute),
            e.implicitAction
              ? n(8).trigger("connect:loginInitiate", {
                  target: "implicit:" + e.implicitAction,
                  object: e.implicitTarget,
                })
              : n(8).trigger("connect:loginInitiate", {
                  target:
                    "explicit:" + (e.signup ? "create_account" : "sign_in"),
                }),
            r) ||
              ((r = n(7)
                .defer()
                .fail(function () {
                  r = null;
                })),
              this.isLoggedIn()
                ? ((o = !1), r.resolve())
                : i({
                    authViewArgs: {
                      onToken: function (e) {
                        u.setAuthToken(e, {
                          excludeThis: !1,
                        });
                      },
                      onComplete: function (e) {
                        r && ((o = !e), r.resolve()), e && u.hasSignedUp();
                      },
                    },
                    onModalClosed: function () {
                      r.reject();
                    },
                  }));
            return r.then(function () {
              var e,
                i,
                r,
                a,
                s,
                u = n(14).getCurrentSound(),
                l = u && u.isPlaying(),
                c = o && !l;
              return (
                (e = n(350).isOneTrustEnabled(
                  n(4).get("features"),
                  n(4).get("geoip").get("country_code")
                )
                  ? (e = n(7).resolve(!1))
                  : (function (e) {
                      var t = n(4).get("privacy_settings");
                      return t.fetch().then(function () {
                        return (
                          (e.wasOptedInToTargetedAdvertising &&
                            !t.isOptedInToTargetedAdvertising()) ||
                          (e.wasOptedInToAnalytics &&
                            !t.isOptedInToAnalytics()) ||
                          (e.wasOptedInToCommunications &&
                            !t.isOptedInToCommunications())
                        );
                      });
                    })(t)),
                n(7)
                  .anyTruthy([
                    e,
                    c
                      ? ((s = n(4).get("me")),
                        s
                          .fetch({
                            attrs: ["locale"],
                          })
                          .then(function () {
                            var e = s.get("locale"),
                              t = n(13).LinguaLib.getLocale();
                            return e !== t;
                          }))
                      : n(7).resolve(!1),
                    c
                      ? ((i = "v2_listening"),
                        (r = "web_new_home_default"),
                        (a = n(4).get("experiments").get(i, r)),
                        n(35)
                          .callEndpoint(
                            "experiments",
                            {
                              anonUserId: n(84).getAnonymousId(),
                            },
                            {
                              layers: n(1015).join(","),
                            }
                          )
                          .then(function (e) {
                            var t = e.body,
                              o = n(0).findWhere(t, {
                                experiment_name: r,
                                layer_name: i,
                              });
                            return o ? o.variant_name !== a : Boolean(a);
                          }))
                      : n(7).resolve(!1),
                  ])
                  .then(function (e) {
                    var t = "/" === window.location.pathname,
                      n = "/logout" === window.location.pathname;
                    e &&
                      (t || n
                        ? window.location.assign("/")
                        : window.location.reload(!0));
                  })
              );
            });
          },
          hasSignedUp: function () {
            var e = this._redirectAfterSignupRoute;
            e &&
              n(4).get("router").navigateToRoute(e, null, {
                trigger: !0,
              }),
              (function () {
                var e = n(4).get("me"),
                  t = n(7).defer();
                e.lastFetchTime
                  ? t.resolve()
                  : n(8).once("connect:hasUserData", function () {
                      t.resolve();
                    });
                return t;
              })().then(function () {
                return n(8).trigger("signup:successful");
              }),
              (this._redirectAfterSignupRoute = null);
          },
          loginWithFacebook: function (e) {
            return u.login({
              facebook: !0,
              fb_token: e,
            });
          },
          _logoutFuture: null,
          logout: function () {
            return (
              this._logoutFuture ||
                (this._logoutFuture = n(35)
                  .callEndpoint("v2SignOut")
                  .always(function () {
                    window.document.cookie =
                      "connect_session=;max-age=0;domain=.soundcloud.com;path=/";
                  })
                  .always(function () {
                    u.clearUserData(),
                      n(8).trigger("connect:logout", {
                        isOriginator: !0,
                      });
                  })),
              this._logoutFuture
            );
          },
          clearUserData: function () {
            n(68).unset(o),
              n(8).broadcast(
                {
                  excludeThis: !0,
                },
                "authentication:tokenChange",
                ""
              );
          },
          currentUserId: function () {
            return n(4).get("me").id;
          },
          getUserIdentifier: function () {
            return u.isLoggedIn()
              ? u.currentUserId()
              : u.getAnonymousUserIdentifier();
          },
          getAnonymousUserIdentifier: function () {
            for (var e = a.get("id"); !e || e < 1e3; )
              (e = Math.floor(1e9 * Math.random())), a.set("id", e);
            return e;
          },
          loginWithCookies: function () {
            return "1" === n(68).get("connect_session") || l()
              ? n(35)
                  .callEndpoint("connectTokenExchange")
                  .promise()
                  .then(function (e) {
                    var t = e.body;
                    return t.session && t.session.access_token
                      ? t.session.access_token
                      : n(7).reject(new Error("no token returned"));
                  })
                  .then(function (e) {
                    u.setAuthToken(e);
                  })
              : n(7).reject();
          },
          loginToSoundCloudConnect: function () {
            n(35).callEndpoint("connectLogin", null, null, null, {
              session: {
                access_token: u.getAuthToken(),
              },
            });
          },
          loginToClassicSoundCloud: function () {
            l() ||
              t.ajax({
                type: "post",
                url: "https://soundcloud.com/session",
                data: {
                  access_token: u.getAuthToken(),
                  format: "json",
                },
              });
          },
        }));
        function l() {
          return ["auth_token", "p", "v"].some(function (e) {
            return void 0 !== n(68).get(e);
          });
        }
      }.call(this, n(15)));
    },
    184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "PlayerType", function () {
          return i;
        });
      var i;
      n(69), n(83), n(421), n(235), n(91), n(609);
      !(function (e) {
        (e.GENERAL = "GENERAL"), (e.AD = "AD");
      })(i || (i = {}));
    },
    185: function (e, t, n) {
      (function (t) {
        e.exports = {
          normalizeEvent: function (e) {
            if (void 0 === e.offsetX || void 0 === e.offsetY) {
              var n = t(e.target).offset(),
                i = (function (e) {
                  var t,
                    n,
                    i = e.eventType;
                  i && 0 === i.indexOf("mouse")
                    ? ((t = e.clientX + window.pageXOffset),
                      (n = e.clientY + window.pageYOffset))
                    : e.changedTouches
                    ? ((t = e.changedTouches[0].pageX),
                      (n = e.changedTouches[0].pageY))
                    : ((t = e.x), (n = e.y));
                  return {
                    x: t,
                    y: n,
                  };
                })(e.originalEvent);
              (e.pageX = i.x),
                (e.pageY = i.y),
                (e.offsetX = i.x - (n ? n.left : 0)),
                (e.offsetY = i.y - (n ? n.top : 0));
            }
            return e;
          },
        };
      }.call(this, n(15)));
    },
    188: function (e, t, n) {
      e.exports = new (n(16))({
        applyTo: function (e, t) {
          var n = t.events;
          var i = [];
          this.after(e, {
            setup: function () {
              var e = this.constructor;
              -1 === i.indexOf(e) &&
                (i.push(e),
                n.forEach(function (t) {
                  var n = t.emitter,
                    i = t.event,
                    r = t.getInstance,
                    o = t.handler;
                  n.on(i, function () {
                    for (
                      var t = arguments.length, n = new Array(t), i = 0;
                      i < t;
                      i++
                    )
                      n[i] = arguments[i];
                    var a = e.instances.find(function (e) {
                      return r.apply(void 0, [e].concat(n));
                    });
                    a && o.apply(a, n);
                  });
                }));
            },
          });
        },
      });
    },
    190: function (e, t, n) {
      e.exports = {
        baseSensitiveElements: [
          ".baseFields__image",
          ".baseFields__permalink",
          ".baseFields__title",
          ".baseFields__description",
          ".editMetadataTab",
          ".editAccessTab",
          ".editMonetizationTab",
        ],
        userCanBeRecorded: function () {
          return n(4).get("features").has("tracklists_edit");
        },
      };
    },
    192: function (e, t, n) {
      var i = [
          "declined.generic",
          "declined.insufficient_balance",
          "declined.invalid_card",
          "declined.expired_card",
          "declined.invalid_cvc",
          "declined.processing_problem",
        ],
        r = [].concat(i, ["declined.paypal.generic", "failed"]);
      function o(e, t) {
        if (!a(t)) return !1;
        var i = t.last_payment;
        return i && "failed" === i.state && n(0).contains(e, i.failure_reason);
      }
      function a(e) {
        return "in_renewal" === e.state;
      }
      e.exports = {
        isLapsed: function (e) {
          if (!e) return !1;
          var t = e.termination_reason,
            n = e.actual_end_date,
            i = new Date(n),
            r = new Date().getTime() - i.getTime(),
            o = Math.round(r / 864e5);
          return "renewal_failed" === t && o <= 14;
        },
        hasCreditCardError: function (e) {
          return o(i, e);
        },
        isFailed: function (e) {
          return o(r, e);
        },
        hasUpdatedPaymentMethod: function (e) {
          var t = a(e),
            n = e.last_payment.state;
          return t && "authorised" === n;
        },
        isInRenewal: a,
        errorCodes: r,
        RENEWAL_STATE: "in_renewal",
        RECAPTURE_PERIOD_IN_DAYS: 14,
      };
    },
    193: function (e, t, n) {
      var i = (e.exports = n(140).extend({
        enabled: !0,
        _breakCount: 0,
        _failCount: 0,
        _maxBreaks: 0,
        _timeoutId: null,
        defaults: {
          tolerance: 1,
          baseDelay: 1e3,
          maxDelay: 3e4,
          backoffRate: 2,
          giveUp: null,
          enabled: !0,
        },
        initialize: function (e) {
          n(0).bindAll(this, "failed", "succeeded"), this.setup(e);
        },
        setup: function (e) {
          this.options = n(0).assign({}, this.options || this.defaults, e);
          var t =
            (e = n(0).defaults(this.options, this.defaults)).maxDelay /
            e.baseDelay;
          if (e.backoffRate > 1)
            for (; t > 1; ) ++this._maxBreaks, (t /= e.backoffRate);
          else this._maxBreaks = 1 / 0;
          e.enabled || this.disable();
        },
        dispose: function () {
          this.off(), this.clearTimeout();
        },
        clearTimeout: function () {
          this._timeoutId &&
            (window.clearTimeout(this._timeoutId), (this._timeoutId = null));
        },
        failed: function () {
          ++this._failCount >= this.options.tolerance && this.disable();
        },
        succeeded: function () {
          this._breakCount = this._failCount = 0;
        },
        disable: function (e) {
          if (this.enabled) {
            var t = !e || !1 !== e.autoEnable;
            (this.enabled = !1),
              ++this._breakCount,
              t &&
              (!this.options.giveUp || this._breakCount < this.options.giveUp)
                ? (this._timeoutId = window.setTimeout(
                    this.enable.bind(this),
                    this.currentDelay()
                  ))
                : this.trigger("giveup"),
              this.trigger("disabled");
          }
        },
        enable: function () {
          this.enabled ||
            ((this.enabled = !0),
            (this._failCount = 0),
            this.trigger("enabled"));
        },
        currentDelay: function () {
          var e = this.options;
          return Math.min(
            e.baseDelay *
              Math.pow(
                e.backoffRate,
                Math.floor(
                  Math.random() * Math.min(this._maxBreaks, this._breakCount)
                )
              ),
            e.maxDelay
          );
        },
      }));
      n(0).assign(i.prototype, n(31).Events);
    },
    1943: function (e, t, n) {
      e.exports = {
        checkoutPremierCallback: function () {
          n(8).broadcast("checkout:creator_subscription_purchased");
        },
      };
    },
    1948: function (e, t, n) {
      e.exports = function (e) {
        var t = new (n(197))(e);
        n(4).set("features", t),
          (null == e ? void 0 : e.features) && (t.lastFetchTime = Date.now());
      };
    },
    1949: function (e, t, n) {
      e.exports = function (e) {
        n(4).get("experiments") || n(4).set("experiments", n(1950)(e));
      };
    },
    196: function (e, t, n) {
      var i = /\/\/(a2\.soundcloud\.test|a-v2\.sndcdn\.com)/,
        r = [],
        o = null,
        a = !1,
        s = ("undefined" !== window.navigator
          ? window.navigator.userAgent
          : ""
        ).toLowerCase(),
        u = s.indexOf("firefox/69") >= 0,
        l = s.indexOf("firefox/70") >= 0;
      e.exports = {
        initialize: function () {
          if (a) return;
          try {
            (o = new (n(2120).Notifier)({
              projectId: n(4).get("airbrake_project_id"),
              projectKey: n(4).get("airbrake_project_key"),
              environment: "production",
            })).addFilter(function (e) {
              if (
                (((u || l) &&
                  e.errors.some(function (e) {
                    return (
                      "AbortError" === e.type &&
                      "The operation was aborted. " === e.message
                    );
                  })) ||
                  (!n(4).get("features").has("v2_count_frontend_errors") &&
                    !n(4).get("features").has("internal_qa")) ||
                  h(),
                !(n(23).isOneTrustEnabled()
                  ? n(23).isCategoryEnabled(n(23).CookieCategory.Performance)
                  : n(4).get("privacy_settings").isOptedInToAnalytics()))
              )
                return null;
              try {
                return (function (e) {
                  return (
                    (n(4).get("features").has("v2_airbrake") ||
                      n(4).get("features").has("internal_qa")) &&
                    !n(4).get("versionOutOfDate") &&
                    e.errors.some(function (e) {
                      return e.backtrace.some(function (e) {
                        var t = e.file;
                        return i.test(t);
                      });
                    })
                  );
                })(e)
                  ? e
                  : null;
              } catch (t) {
                return e;
              }
            }),
              o.addFilter(function (e) {
                var t = e.context;
                return (
                  (t.environment = "production"),
                  (t.version = n(4).get("app_version")),
                  (t.user = t.user || {}),
                  (t.user.id = String(n(4).get("me").id || "anonymous")),
                  t.component || (t.component = "unknown"),
                  e
                );
              }),
              r.forEach(function (e) {
                return o.notify(e);
              });
          } catch (e) {
            window.console.error("Could not initialize airbrake", e);
          }
          (a = !0), (r = []);
        },
        notify: function (e) {
          o ? o.notify(e) : a || r.push(e);
        },
      };
      var c,
        d,
        f,
        h =
          ((c = 0),
          (d = !0),
          (f = n(0).throttle(function () {
            d &&
              (n(35)
                .callEndpoint("countFrontendErrors", null, {
                  errors: c,
                  app_version: n(4).get("app_version"),
                })
                .then(function (e) {
                  var t = e.status;
                  d = 204 === t;
                }),
              (c = 0));
          }, 3e4)),
          function () {
            c++, f();
          });
    },
    1962: function (e, t, n) {
      var i = (e.exports = n(0).assign({}, n(31).Events, {
        initialize: function () {
          n(34).bindErrorHandler(i.onActionError);
        },
        onActionError: function (e) {
          if ("follow" === e.action) {
            var t = i.getErrorFromXhr(e.xhr) || {};
            switch (t.error_message) {
              case "DENY_AGE_RESTRICTED":
                return (
                  n(8).trigger("error:followDeniedAge", {
                    errorType: "DENY_AGE_RESTRICTED",
                    requiredAge: t.age,
                  }),
                  !1
                );
              case "DENY_AGE_UNKNOWN":
                return (
                  n(8).trigger("error:followDeniedAge", {
                    errorType: "DENY_AGE_UNKNOWN",
                    context: e.context,
                    followeeId: e.target,
                  }),
                  !1
                );
            }
          }
        },
        getErrorFromXhr: function (e) {
          if (e && 403 === e.status && e.responseJSON)
            return n(0).find(e.responseJSON.errors, function (e) {
              return (
                "DENY_AGE_RESTRICTED" === e.error_message ||
                "DENY_AGE_UNKNOWN" === e.error_message
              );
            });
        },
      }));
    },
    1963: function (e, t, n) {
      var i = !1;
      e.exports = {
        register: function () {
          if (
            !i &&
            ((i = !0),
            void 0 !== window.navigator && "mediaSession" in window.navigator)
          ) {
            var e = window.navigator.mediaSession;
            e.setActionHandler("nexttrack", function () {
              return n(14).playNext({
                userInitiated: !0,
              });
            }),
              e.setActionHandler("previoustrack", function () {
                return n(14).playPrev({
                  userInitiated: !0,
                });
              });
          }
        },
      };
    },
    1964: function (e, t, n) {
      e.exports = {
        401: function (e) {
          n(18).isLoggedIn() && n(18).logout();
        },
        429: function (e) {
          var t = n(189).fromSpamWarning(e);
          t && (n(8).trigger("spam-warning", t), t.release());
        },
        422: function (e) {
          var t;
          try {
            t = JSON.parse(e.responseText).errors[0].error_message;
          } catch (e) {
            t = null;
          }
          n(8).trigger("error:ajax", t, e);
        },
      };
    },
    1966: function (e, t, n) {
      e.exports = {
        listen: function (e, t) {
          if ("playlist" === (e = i(e)).kind)
            return this.getRoute("playlist", e, t);
          var o,
            a = {};
          return (
            (t = t ? "/comment-" + t : ""),
            e._playlist &&
              e._playlist.id &&
              ((o = n(432).removeSecretTokenFromUrl(e._playlist.permalink_url)),
              (a.query = {
                in:
                  r(o).substr(1) +
                  (this.includeSecretTokenForPlaylist(e._playlist)
                    ? "/" + e._playlist.secret_token
                    : ""),
              })),
            e._systemPlaylist &&
              (a.query = {
                in_system_playlist: e._systemPlaylist.permalink,
              }),
            (a.path = e.user
              ? "/" +
                e.user.permalink +
                "/" +
                e.permalink +
                t +
                (this.includeSecretTokenForSound(e) ? "/" + e.secret_token : "")
              : r(e.permalink_url + t)),
            n(59).stringify(a)
          );
        },
        listenNetwork: function (e, t, o) {
          e = i(e);
          var a = {};
          return (
            "related" === t && (t = "recommended"),
            (a.path = e.user
              ? "/" +
                e.user.permalink +
                "/" +
                e.permalink +
                (this.includeSecretTokenForSound(e) ? "/" + e.secret_token : "")
              : r(e.permalink_url)),
            (a.path += "/" + t + ("comments" === t && o ? "/" + o : "")),
            n(59).stringify(a)
          );
        },
        playlistEdit: function (e) {
          return (
            (e = i(e)),
            "/" +
              n(59).stringify({
                path: [e.user.permalink, "sets", e.permalink, "edit"],
              })
          );
        },
        playlist: function (e) {
          return (e = i(e)).user
            ? "/" +
                e.user.permalink +
                "/sets/" +
                e.permalink +
                (this.includeSecretTokenForPlaylist(e)
                  ? "/" + e.secret_token
                  : "")
            : r(e.permalink_url);
        },
        systemPlaylist: function (e) {
          return "/discover/sets/" + (e = i(e)).permalink;
        },
        playlistNetwork: function (e, t) {
          e = i(e);
          var o = {};
          return (
            (o.path = e.user
              ? "/" +
                e.user.permalink +
                "/sets/" +
                e.permalink +
                (this.includeSecretTokenForPlaylist(e)
                  ? "/" + e.secret_token
                  : "")
              : r(e.permalink_url)),
            (o.path += "/" + t),
            n(59).stringify(o)
          );
        },
        user: function (e, t) {
          return "/" + (e = i(e)).permalink + (t ? "/" + t : "");
        },
        userNetwork: function (e, t) {
          return "/" + (e = i(e)).permalink + "/" + t;
        },
        root: function () {
          return "/";
        },
        explore: function (e) {
          return (
            (e = (e || "").toLowerCase()),
            "/" +
              n(59).stringify({
                path: ["explore", e],
              })
          );
        },
        charts: function (e, t, i) {
          return (
            "/" +
            n(59).stringify({
              path: [
                "charts",
                n(0).findWhere(n(109).kinds, {
                  id: e || n(109).defaultKind,
                }).urlPart,
              ],
              query: {
                genre: t,
                country: i,
              },
            })
          );
        },
        people: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: ["people", e],
            })
          );
        },
        peopleDirectory: function (e) {
          return "/people/directory" + (e ? "/" + e : "");
        },
        popularSearches: function (e) {
          return "/popular/searches" + (e ? "/" + e : "");
        },
        pages: function (e) {
          return "/" + e;
        },
        embedPage: function () {
          return "/pages/embed";
        },
        emailUnsubscribedPage: function () {
          return "/pages/unsubscribed";
        },
        pagesPages: function (e) {
          return "/pages/" + e;
        },
        tags: function (e, t) {
          return n(59).stringify({
            path: "/tags/" + e.toLowerCase() + (t ? "/" + t : ""),
          });
        },
        search: function (e, t, i) {
          var r = {
            sounds: "sounds",
            high_tier: "go",
            sets: "sets",
            playlists: "sets",
            albums: "albums",
            people: "people",
          }[e];
          return (
            "/" +
            n(59).stringify({
              path: ["search", r],
              query: n(0).assign(
                {
                  q: t,
                },
                i
              ),
            })
          );
        },
        activity: function () {
          return "/notifications";
        },
        stream: function () {
          return "/stream";
        },
        logout: function () {
          return "/logout";
        },
        mobile: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: ["mobile", e || ""],
            })
          );
        },
        upload: function () {
          return "/upload";
        },
        mastering: function (e, t) {
          var i = void 0 === t ? {} : t,
            r = i.fragment,
            o = i.query;
          return (
            "/" +
            n(59).stringify({
              path: n(0).compact(["you", "mastering", e && "tracks", e]),
              fragment: r,
              query: o,
            })
          );
        },
        youNetwork: function (e, t, i) {
          return (
            "/" +
            n(59).stringify({
              path: ["you", t],
              query: {
                ref: i,
              },
            })
          );
        },
        trackManager: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: "you/tracks",
              fragment: e || "",
            })
          );
        },
        reports: function () {
          return "/you/reports";
        },
        messages: function (e) {
          return "/messages" + (e ? "/" + e : "");
        },
        settings: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: ["settings", e],
            })
          );
        },
        premier: function (e, t) {
          return (
            "/" +
            n(59).stringify({
              path: ["you/premier", e],
              query: {
                ref: t,
              },
            })
          );
        },
        developerApps: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: ["you/apps", e],
            })
          );
        },
        signin: function (e) {
          return (
            "/" +
            n(59).stringify({
              path: ["signin"],
              query: {
                redirect_url: e,
              },
            })
          );
        },
        v1: function (e, t) {
          return "/" + e + (t = t || "");
        },
        station: function (e) {
          return "/stations/" + i(e).permalink;
        },
        stations: function () {
          return "/you/stations";
        },
        stats: function (e) {
          var t = [n(4).get("me").get("permalink"), "stats"];
          return "/" + n(59).joinPath(o(t, e));
        },
        "track-stats": function (e, t) {
          var r = [(e = i(e)).user.permalink, e.permalink, "stats"];
          return "/" + n(59).joinPath(o(r, t));
        },
        recommended: function () {
          return "/discover";
        },
        home: function () {
          return "/home";
        },
        reportCopyright: function (e) {
          var t = {
            path: "/pages/copyright/report/form",
          };
          return (
            e &&
              ((e = i(e)),
              (t.query = {
                track: e.permalink,
                user: e.user.permalink,
              })),
            n(59).stringify(t)
          );
        },
        orders: function (e) {
          return "/subscription/orders/" + e;
        },
        insights: function () {
          return "/you/insights/overview";
        },
      };
      function i(e) {
        return n(0).isFunction(e.toJSON) ? e.toJSON() : e;
      }
      function r(e) {
        return e.replace(/^https?:.+?\w\//, "/");
      }
      function o(e, t) {
        return (
          t &&
            (t.metric &&
              (e.push(t.metric), t.from && t.to && e.push(t.from, t.to)),
            t.expanded && e.push("expanded")),
          e
        );
      }
    },
    1967: function (e, t, n) {
      var i = {};
      e.exports = {
        loadLayout: function (e) {
          var t,
            r = i[e];
          return (
            r ||
            ((t = n(7).defer()),
            n(1968)("./" + e.replace("layouts/", "")).then(function (e) {
              t.resolve(e.default || e);
            }, t.reject),
            (r = i[e] = t.promise()))
          );
        },
      };
    },
    1969: function (e, t, n) {
      e.exports = {
        initialize: function () {
          n(116)
            .getInstance()
            .then(function (e) {
              return (
                n(8).on("googleCast:start", i),
                {
                  dispose: function () {
                    n(8).off("googleCast:start", i);
                  },
                }
              );
            });
        },
      };
      function i(e) {
        var t = n(14).getQueue();
        function i() {
          t.length > 0 &&
            e.isRemoteQueueEmpty() &&
            (n(14).setRepeatMode(n(67).none), s());
        }
        function a(i) {
          var a,
            s,
            u = r().queue;
          if (
            ((a = u),
            (s = i.queue),
            n(121).equal(a, s, function (e, t) {
              return e.urn === t.urn;
            }))
          ) {
            t.forEach(function (e, t) {
              e.associateCastId(i.queue[t].id);
            });
            var l = t.at(i.currentIndex);
            l.sound.createPlayer(),
              n(14).setCurrentItem(l, {
                pause: e.isPaused(),
              });
          } else if (!o(u, i.queue)) {
            var c = i.queue.map(function (e, t) {
              var i,
                r,
                o,
                a,
                s,
                u,
                l,
                c,
                d = e.urn,
                f = e.id,
                h = n(24).toComponents(d),
                p = new (n(17))({
                  id: h.id,
                }),
                g = p.getQueueMetadataAt(0),
                m = g.sourceInfo,
                v = g.queryPosition,
                y = g.originalModel,
                _ = new (n(145))(
                  {},
                  {
                    sound: p,
                    sourceInfo: m,
                    queryPosition: v,
                    originalModel: y,
                    index: t,
                    castId: f,
                    restoreUrl: null,
                    explicit: !1,
                    layoutInfo:
                      ((i = n(4).get("router").getLayoutInfo()),
                      (r = i.args),
                      (o = i.layoutName),
                      (a = window.location),
                      (s = a.pathname),
                      (u = a.search),
                      (l = a.hash),
                      (c = s.slice(1) + u + l),
                      {
                        args: r,
                        layoutName: o,
                        url: c,
                      }),
                  }
                );
              return _.release(), p.release(), _;
            });
            n(14).replaceQueue(c, i.currentIndex, {
              pause: e.isPaused(),
            });
          }
        }
        function s() {
          var t = r(),
            i = t.queue,
            a = t.currentIndex,
            s = n(121).sliceAround(i, a, 5, 100),
            u = e.getLastRemoteQueue(),
            l = n(14).getCurrentSound(),
            c = !u || s.position !== u.currentIndex || !o(s.items, u.queue);
          a > -1 &&
            c &&
            e.loadQueue(
              s.items,
              s.position,
              n(18).getAuthToken(),
              l.isPlaying(),
              l.currentTime()
            );
        }
        function u(t) {
          e.setRepeatMode(t);
        }
        e.on("queue:update", a),
          e.once("queue:ready", i),
          t.on("add remove reset", s),
          n(14).on("change:currentSound", s),
          n(14).on("change:repeatMode", u),
          n(8).once("googleCast:end", function () {
            t.forEach(function (e, t) {
              e.associateCastId(null);
            }),
              e.off("queue:update", a),
              e.off("queue:ready", i),
              t.off("add remove reset", s),
              n(14).off("change:currentSound", s),
              n(14).off("change:repeatMode", u);
          });
      }
      function r() {
        return {
          currentIndex: n(14).getQueueState().currentIndex,
          queue: n(14)
            .getQueue()
            .map(function (e) {
              var t = e.castId,
                n = e.sound.getUrn();
              return t
                ? {
                    id: t,
                    urn: n,
                  }
                : {
                    urn: n,
                  };
            }),
        };
      }
      function o(e, t) {
        return n(121).equal(e, t, function (e, t) {
          return e.id && e.id === t.id;
        });
      }
    },
    1970: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(120),
        r = n(32),
        o = n.n(r);
      t.default = {
        initialize: function () {
          i.default.include({
            User: o.a,
          });
        },
      };
    },
    1971: function (e, t, n) {
      var i = {
        name: "ja",
        domainStrict: !1,
        secure: !1,
      };
      e.exports = {
        _subsCookie: null,
        initialize: function () {
          var e = this;
          n(18).isLoggedIn() && (this._subsCookie = r()),
            n(8).once("connect:hasUserData", function () {
              e._subsCookie = r();
            }),
            n(8).once("connect:logout", function () {
              n(68).unset(i), (e._subsCookie = null);
            });
        },
      };
      function r() {
        var e = n(4).get("me"),
          t = o(e.getConsumerPlan()),
          r = o(e.getCreatorPlan()),
          a = n(1972).or(t, r);
        return (
          "number" == typeof a &&
            n(68).set(
              n(0).assign({}, i, {
                value: a,
                expirationInDays: 30,
              })
            ),
          a
        );
      }
      function o(e) {
        var t = 0;
        switch (e) {
          case n(27).CREATOR_SUBSCRIPTION_PRO:
            t = 16;
            break;
          case n(27).CREATOR_SUBSCRIPTION_PRO_UNLIMITED:
            t = 32;
            break;
          case n(27).CONSUMER_SUBSCRIPTION_HIGH_TIER:
            t = 64;
            break;
          case n(27).CONSUMER_SUBSCRIPTION_FREE:
          case n(27).CREATOR_SUBSCRIPTION_FREE:
            t = 0;
        }
        return t;
      }
    },
    1972: function (e, t) {
      e.exports = {
        or: function (e, t) {
          return e | t;
        },
      };
    },
    1973: function (e, t, n) {
      e.exports = function (e) {
        var t = n(4).get("me");
        t
          ? t.set(e, {
              parse: !0,
            })
          : ((t = new (n(115))(e, {
              isMe: !0,
              parse: !0,
            })),
            n(4).set("me", t)),
          e && (t.lastFetchTime = Date.now());
      };
    },
    1989: function (e, t, n) {
      var i = n(472),
        r = n(473),
        o = n(706),
        a = {
          0: "connecting",
          1: "open",
          2: "closed",
        };
      e.exports = function (e) {
        var t = e.eventUrl,
          n = e.withCredentials,
          s = e.json,
          u = e.log,
          l = void 0 === u ? function () {} : u,
          c = !1,
          d = 0,
          f = null,
          h = i({}, r, {
            dispose: function () {
              f && (f.close(), (f = null));
              c = !0;
            },
            getEventSourceReadyState: function () {
              return f && a[f.readyState];
            },
          });
        return p(), h;
        function p() {
          c ||
            (((f = new EventSource(t, {
              withCredentials: n,
            })).onopen = m),
            (f.onerror = v),
            (f.onmessage = y));
        }
        function g() {
          c || (2 === f.readyState && p());
        }
        function m() {
          c || ((d = 0), h.trigger(o.OPEN));
        }
        function v(e) {
          if (!c) {
            if (++d > 1) {
              var t = (function (e) {
                var t = e / 1,
                  n = 2e3 * Math.pow(2, t);
                return Math.min(1e4, n);
              })(d);
              l(
                "More than 1 errors in a row. Will use back-off timeout to reconnect in " +
                  t +
                  " ms"
              ),
                window.setTimeout(g, t);
            } else l("Will try to reconnect ASAP"), g();
            h.trigger(o.ERROR, e);
          }
        }
        function y(e) {
          if (!c) {
            var t = e.data;
            if (s)
              try {
                t = JSON.parse(t);
              } catch (n) {
                (t = {}),
                  l("syntax error parsing data to object", n.message, e);
              }
            h.trigger(o.DATA, t);
          }
        }
      };
    },
    1991: function (e, t, n) {
      var i = n(472),
        r = n(473),
        o = n(707),
        a = (e.exports = i({}, r, {
          broadcast: function (e, t) {
            o.set("trinity-broadcast", {
              event: e,
              data: t,
              now: Date.now(),
            });
          },
        }));
      o.on("trinity-broadcast", function (e) {
        var t = e.event,
          n = e.data;
        t && a.trigger(t, n);
      });
    },
    1994: function (e, t) {
      var n = {
        STOP: "stop",
        HEARTBEAT: "heartbeat",
      };
      e.exports = {
        events: {
          PLAY: "play",
        },
        actions: n,
        createMessage: function (e) {
          return {
            version: 0,
            timestamp: Math.floor(Date.now() / 1e3),
            registration_id: e,
          };
        },
        parseAction: function (e) {
          return e &&
            e.action &&
            n[((t = e.action), t.toUpperCase().replace(/-/g, "_"))]
            ? e.action
            : null;
          var t;
        },
      };
    },
    1995: function (e, t, n) {
      (function (e) {
        var t,
          n,
          i = ["exports", "get"];
        (t = i),
          (n = 238),
          (function (e) {
            for (; --e; ) t.push(t.shift());
          })(++n);
        var r = function (e, t) {
          return i[(e -= 0)];
        };
        e[r("0x0")] = function (e) {
          return (
            !e[r("0x1")]("no_pub") ||
            !e[r("0x1")]("features").has("is_acc_test")
          );
        };
      }.call(this, n(317)(e)));
    },
    201: function (e, t, n) {
      e.exports = n(140).extend([
        [
          "forEach",
          "each",
          "map",
          "collect",
          "reduce",
          "foldl",
          "inject",
          "reduceRight",
          "foldr",
          "find",
          "detect",
          "filter",
          "select",
          "reject",
          "every",
          "all",
          "some",
          "any",
          "include",
          "contains",
          "invoke",
          "max",
          "min",
          "toArray",
          "size",
          "isEmpty",
          "chain",
          "sample",
        ].reduce(function (e, t) {
          return (
            (e[t] = function () {
              var e = [this._asMap()];
              return e.push.apply(e, arguments), n(0)[t].apply(n(0), e);
            }),
            e
          );
        }, {}),
        {
          initialize: function (e) {
            (this._store = Object.create(null)),
              (this.length = 0),
              (this._final = !1),
              (this.maxLength = (e && e.maxLength) || !1),
              this.maxLength && (this._keys = []);
          },
          maxLength: 0,
          get: function (e) {
            return this._store[e];
          },
          set: function (e, t) {
            return (
              this.has(e)
                ? this.maxLength && this._keys.splice(this._keys.indexOf(e), 1)
                : (++this.length,
                  this.maxLength &&
                    this.length > this.maxLength &&
                    this.unset(this._keys[0])),
              this.maxLength && this._keys.push(e),
              (this._store[e] = t),
              this
            );
          },
          unset: function (e) {
            return (
              this.has(e) &&
                (--this.length,
                this._final
                  ? (this._store[e] = void 0)
                  : (delete this._store[e],
                    this.maxLength &&
                      this._keys.splice(this._keys.indexOf(e), 1))),
              this
            );
          },
          reset: function () {
            return (
              (this._store = Object.create(null)),
              this.maxLength && (this._keys = []),
              (this._final = !1),
              (this.length = 0),
              this
            );
          },
          has: function (e) {
            return n(0).has(this._store, e);
          },
          keys: function () {
            return Object.keys(this._store);
          },
          prune: function (e) {
            return (
              n(0).difference(this.keys(), e).forEach(this.unset, this), this
            );
          },
          _asMap: function () {
            return this._store;
          },
          finalize: function () {
            this._final = !0;
          },
        },
      ]);
    },
    203: function (e, t, n) {
      var i = /(aif|aiff|m4a|caf|flac|wav|pcm.*)$/i;
      e.exports = {
        readAsDataURL: function (e) {
          return n(7).promise(function (t, n) {
            var i = new window.FileReader();
            (i.onload = function () {
              return t(i.result);
            }),
              (i.onerror = i.onabort = n),
              i.readAsDataURL(e);
          });
        },
        getExtension: function (e) {
          void 0 === e && (e = "");
          var t = e.split(/[\\/]/).pop(),
            n = t.lastIndexOf(".");
          return "" === t || n < 1 ? "" : t.slice(n + 1);
        },
        isHQ: function (e) {
          return void 0 === e && (e = ""), i.test(e);
        },
      };
    },
    204: function (e, t) {
      e.exports = {
        KNOWN_CONTENT_MONETIZATION: "can_sign_premier_known_content_contract",
        UNKNOWN_CONTENT_PAYOUTS: "can_sign_premier_unknown_content_contract",
      };
    },
    205: function (e, t, n) {
      var i = !1,
        r = (e.exports = {
          toggle: function () {
            i ? r.hide() : r.show();
          },
          show: function () {
            i || ((i = !0), n(8).trigger("queue:toggle", !0));
          },
          hide: function () {
            i && ((i = !1), n(8).trigger("queue:toggle", !1));
          },
          isVisible: function () {
            return i;
          },
        });
    },
    206: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(1550);
      (t.cloneColor = function (e, t) {
        void 0 === t && (t = 1);
        var n = e.r,
          r = e.g,
          o = e.b,
          a = e.a;
        return {
          r: n,
          g: r,
          b: o,
          a: (void 0 === a ? 1 : a) * i.clamp(t, 0, 1),
        };
      }),
        (t.colorToString = function (e) {
          var t = e.r,
            n = e.g,
            i = e.b,
            r = e.a;
          return (
            "rgba(" +
            t +
            ", " +
            n +
            ", " +
            i +
            ", " +
            (void 0 === r ? 1 : r) +
            ")"
          );
        }),
        (t.rgb = function (e, t, n) {
          return {
            r: e,
            g: t,
            b: n,
          };
        }),
        (t.colorStop = function (e, t) {
          return {
            color: t,
            offset: e,
          };
        });
    },
    207: function (e, t, n) {
      var i = {
          like: u(_(f, h)),
          repost: u(_(f, h, y(p))),
          addToPlaylist: u(_(f, c, b(h, p))),
          addToNextUp: b(d, f),
          removeFromQueue: _(
            d,
            y(function (e) {
              return n(14).getCurrentQueueItem() === e;
            })
          ),
          buy: u(
            _(g, function (e) {
              return l(e) && !!e.get("purchase_url");
            })
          ),
          share: u(_(f, g, b(h, p))),
          download: u(
            b(
              _(v("v2_hq_file_storage_release"), c, p, y(m)),
              _(f, function (e) {
                return c(e) && n(4).get("me").canDownload(e);
              })
            )
          ),
          delete: u(_(p, y(m))),
          edit: u(
            _(
              p,
              y(function (e) {
                return l(e) && e.isDisabled();
              })
            )
          ),
          startStation: u(_(f, c, h, y(m))),
          goToStats: _(y(m), p, c, b(f, _(v("v2_hq_file_storage_release"), p))),
          report: _(c, y(p)),
        },
        r = [
          "like",
          "repost",
          "share",
          "edit",
          "addToNextUp",
          "removeFromQueue",
          "addToPlaylist",
          "buy",
          "goToStats",
          "download",
          "startStation",
          "delete",
          "report",
        ],
        o = ["edit", "delete"],
        a = (e.exports = {
          getActionSet: function (e, t) {
            return a
              .getOrderedActions()
              .filter(t)
              .filter(n(0).partial(s, n(0), e));
          },
          isOwnerAction: function (e) {
            return o.indexOf(e) > -1;
          },
          getOwnerActions: function () {
            return o;
          },
          getOrderedActions: function () {
            return r;
          },
        });
      function s(e, t) {
        return i[e](t);
      }
      function u(e) {
        return function (t) {
          return e(d(t) ? t.sound : t);
        };
      }
      function l(e) {
        return (
          c(e) ||
          (function (e) {
            return e instanceof n(48);
          })(e)
        );
      }
      function c(e) {
        return e instanceof n(17);
      }
      function d(e) {
        return e instanceof n(145);
      }
      function f(e) {
        return (
          (function (e) {
            return l(e) && !e.isDisabled();
          })(e) &&
          !(function (e) {
            return l(e) && e.isProcessing();
          })(e)
        );
      }
      function h(e) {
        return l(e) && e.isPublic();
      }
      function p(e) {
        return l(e) && n(4).get("me").owns(e);
      }
      function g(e) {
        return l(e) && e.getNumSounds() > 0;
      }
      function m(e) {
        return l(e) && e.isBlacklisted();
      }
      function v(e) {
        return function () {
          return n(4).get("features").has(e);
        };
      }
      function y(e) {
        return function () {
          return !e.apply(void 0, arguments);
        };
      }
      function _() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return function () {
          for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
            i[r] = arguments[r];
          return n(0).every(t, function (e) {
            return e.apply(void 0, i);
          });
        };
      }
      function b() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return function () {
          for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
            i[r] = arguments[r];
          return n(0).any(t, function (e) {
            return e.apply(void 0, i);
          });
        };
      }
    },
    208: function (e, t, n) {
      var i = null,
        r = n(348).SCMessages.actions,
        o = n(348).SCMessages.events,
        a = (e.exports = n(0).assign({}, n(31).Events, {
          actions: r,
          events: o,
          activate: n(0).once(function e() {
            if (!n(18).isLoggedIn()) return void n(8).once("connect:login", e);
            var t = n(18).getAuthToken(),
              o = n(425).generate(),
              u = n(35).getUrlForEndpoint(
                "trinitySubscribe",
                {},
                {
                  registrationID: o,
                  oauth: t,
                }
              ),
              l = n(35).getUrlForEndpoint("trinityPublish");
            (i = n(348).getInstance(l, u, {
              connected: !1,
              debug: s(),
              authorization: t,
              withCredentials: !1,
              json: !0,
              singleConnection: !0,
              registrationId: o,
              heartbeatTimeoutMs: 2e4,
            })).on(n(348).Events.ACTION, function (e) {
              if (e !== r.HEARTBEAT) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    i = 1;
                  i < t;
                  i++
                )
                  n[i - 1] = arguments[i];
                a.trigger.apply(a, [e].concat(n));
              }
            });
          }),
          publishEvent: function (e) {
            i && i.publishEvent(e);
          },
          disconnect: function () {
            i && i.disconnect();
          },
          reconnect: function () {
            i && i.reconnect();
          },
        })),
        s = function () {
          return n(4).get("features").has("internal_qa");
        };
    },
    21: function (e, t, n) {
      var i = n(31).Model.extend(
        n(958),
        {
          resource_type: null,
          lastFetchTime: null,
          _submodels: null,
          submodelMap: null,
          getEndpointUrl: n(35).getUrlForEndpoint,
          getEndpointForMethod: function (e) {
            return null;
          },
          initialize: function (e, t) {
            var i = this;
            (this._submodels = this._submodels || []),
              (this.options = t || {}),
              n(0).each(this.submodelMap, function (e, t) {
                i.on("change:" + t, function () {
                  i.get(t) && i.createSubmodel(e, t);
                });
              }),
              this.setup.apply(this, arguments),
              n(0).each(this.submodelMap, function (e, t) {
                i.get(t) && i.createSubmodel(e, t);
              });
          },
          setup: n(0).noop,
          getSubmodelOptions: function (e) {
            return null;
          },
          createSubmodel: function (e, t) {
            var n = this,
              i = this.getSubmodelOptions(t);
            [].concat(this.get(t)).forEach(function (t) {
              var r = new e(t, i);
              (r.lastFetchTime = Date.now()), n.addSubmodel(r);
            });
          },
          addSubmodel: function () {
            for (
              var e = this, t = arguments.length, i = new Array(t), r = 0;
              r < t;
              r++
            )
              i[r] = arguments[r];
            i.forEach(function (t) {
              n(0).contains(e._submodels, t)
                ? t.release()
                : e._submodels.push(t);
            });
          },
          getAttributesToBeSaved: function () {
            return this.toJSON();
          },
          save: function (e, t) {
            var i,
              r = this,
              o = "json" === n(0).result(this, "saveFormat"),
              a = n(0).result(this, "saveWithWrapper"),
              s = o ? "application/json" : void 0,
              u = this.getAttributesToBeSaved(),
              l = e ? n(0).pick(u, Object.keys(e)) : u,
              c = a
                ? (((i = {})[n(575).toAPIResource(this.resource_type)] = l), i)
                : l,
              d = o ? JSON.stringify(c) : n(26).param(c);
            return n(31)
              .Model.prototype.save.call(
                this,
                e,
                n(0).assign(
                  {
                    url: this.saveUrl(e, t),
                    data: d,
                    contentType: s,
                  },
                  t
                )
              )
              .done(function (e) {
                r.set(e), r.updateResourceId();
              });
          },
          set: function (e, t, i) {
            var r, o, a, s, u;
            if (null == e) return this;
            "object" == typeof e
              ? ((r = e), (i = t))
              : (((a = {})[e] = t), (r = a));
            return (
              (s = this.attributes),
              (u = r),
              s &&
              s.last_modified &&
              u &&
              u.last_modified &&
              Date.parse(s.last_modified) > Date.parse(u.last_modified) &&
              ((r = n(0).pick(
                r,
                n(0).difference(n(0).keys(r), n(0).keys(this.attributes))
              )),
              n(0).isEmpty(r))
                ? this
                : ((o = this.constructor.normalize
                    ? this.constructor.normalize(n(0).clone(r))
                    : r),
                  n(0).each(this.submodelMap, function (e, t) {
                    var i = r[t];
                    i &&
                      e &&
                      e.normalize &&
                      !n(0).isArray(i) &&
                      (o[t] = e.normalize(n(0).clone(i)));
                  }),
                  n(31).Model.prototype.set.call(this, o, i))
            );
          },
          saveUrl: function () {
            return n(0).result(this, "baseUrl");
          },
          saveFormat: "param",
          saveWithWrapper: !0,
          destroy: function (e) {
            var t = n(31).Model.prototype.destroy.call(
              this,
              n(0).assign(
                {
                  url: this.isNew() ? null : this.destroyUrl(),
                },
                e
              )
            );
            return this.constructor.removeInstance(this), t;
          },
          destroyUrl: function () {
            return n(0).result(this, "baseUrl");
          },
          baseUrl: n(0).noop,
          url: function (e) {
            return void 0 === e && (e = "baseUrl"), n(0).result(this, e);
          },
          toJSON: function () {
            return n(0).extend(
              n(31).Model.prototype.toJSON.apply(this, arguments),
              {
                _resource_id: this.resource_id,
                _resource_type: this.resource_type,
              }
            );
          },
          toString: function () {
            return this.resource_type
              ? this.resource_type +
                  " (" +
                  (this.isNew() ? "new" : this.resource_id) +
                  "): " +
                  (this.attributes.permalink ||
                    this.attributes.title ||
                    this.attributes.name)
              : Object.prototype.toString.call(this);
          },
          hasDataForView: function (e) {
            return this.attrExists(e);
          },
          updateResourceId: function () {
            var e = this.constructor.hashFn(this.attributes),
              t = this.resource_id;
            e &&
              ((this.resource_id = e),
              this.constructor.instances.changeKey(t, e));
          },
          attrExists: function (e) {
            var t = Object.prototype.hasOwnProperty;
            return n(0).isArray(e)
              ? e.every(t, this.attributes)
              : t.call(this.attributes, e);
          },
          getEquivalencyKey: function () {
            return this;
          },
          getRequestEquivalencyUrl: n(0).identity,
          getUrn: function () {
            if ("urn" === this.idAttribute) return this.id;
            var e = this.urnPrefix,
              t = this.id;
            return e && t ? e + ":" + t : void 0;
          },
          isPopulated: function () {
            return !!this.lastFetchTime;
          },
          getOrFetch: function (e) {
            var t = this,
              i = n(7).defer();
            return (
              this.attrExists(e)
                ? i.resolve(this.pick.apply(this, e))
                : this.fetch()
                    .then(function () {
                      if (!t.attrExists(e))
                        throw new Error(
                          "After fetching some of the requested attributes are still missing."
                        );
                      return t.pick.apply(t, e);
                    })
                    .then(i.resolve, i.reject),
              i
            );
          },
          forceChange: function (e) {
            var t = this.get(e);
            return (
              this.unset(e, {
                silent: !0,
              }),
              this.set(e, t),
              this
            );
          },
        },
        {
          _resolve: function (e, t, i) {
            var r = e.instances.find(i);
            if (r) return n(7).resolve(r);
            var o = n(26).stringify({
              scheme: "https",
              host: n(4)
                .get("public_api_host")
                .replace(/^https?:\/\/api\./, ""),
              path: t,
            });
            return n(35)
              .callEndpoint(
                "resolve",
                {},
                {
                  url: o,
                }
              )
              .then(function (t) {
                var n = t.body,
                  i = new e(n);
                return i.release(), i;
              });
          },
        }
      );
      e.exports = n(320).applyTo(i, {
        hashFn: function (e) {
          return (e && (e[this.idAttribute || "id"] || e.resource_id)) || null;
        },
        onCleanup: function (e) {
          var t = e._submodels;
          t && t.length && (n(0).invoke(t, "release"), (t.length = 0));
        },
        prepareArgs: function (e, t) {
          return (
            (e = e || {}),
            (t = t || {}).parse &&
              ((e = this.parse(e)), ((t = n(0).clone(t)).parse = !1)),
            [e, t]
          );
        },
        prepareInstance: function (e, t) {
          return (
            (t = t || {}).collection && (this.lastFetchTime = Date.now()),
            n(0).isEmpty(e) || this.set(e),
            delete this.attributes.resource_id,
            this
          );
        },
        getIncrementValue: function (e, t) {
          var n = t && t.collection;
          return n ? n.constructor.instances.countFor(n.resource_id) : 1;
        },
      });
    },
    2104: function (e, t, n) {
      (t = n(10)(!1)).push([e.i, ".l-one-column>.l-main{padding:30px 0}", ""]),
        (e.exports = t);
    },
    2107: function (e, t, n) {
      e.exports = n(716).extend({
        template: n(2113),
        css: n(2114),
        element2selector: {
          bubble: ".compact__bubble",
        },
        positionBubble: function () {
          var e = this.getElement("bubble");
          e.length &&
            e.position({
              my: "left-50 bottom-8",
              at: "left center",
              of: this.options.$targetEl,
              offset: "0 -45px",
            });
        },
      });
    },
    2108: function (e, t, n) {
      var i = n(9),
        r = n(2109);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    2109: function (e, t, n) {
      (t = n(10)(!1)).push([
        e.i,
        '.callout{position:absolute;top:0;left:0;bottom:0;right:0;display:none}.callout.m-active{display:block}.callout__bubble{position:absolute;background-color:#fff;padding:25px;box-sizing:border-box;border-radius:4px;transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.callout.m-hidden .callout__bubble{opacity:0;-webkit-transform:translateY(-8px);transform:translateY(-8px)}.callout__bubble:before{content:"";position:absolute;bottom:-8px;left:40px;padding:10px;border-radius:2px;width:0;background-color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.callout__button{float:right}.callout__title{margin-bottom:10px}.callout__bubble.ui-flipped-bottom:before{bottom:auto;top:-8px}.callout__bubble.ui-flipped-left:before{left:auto;right:40px}.callout.m-hidden .callout__bubble.ui-flipped-bottom{-webkit-transform:translateY(8px);transform:translateY(8px)}.callout__bubble.ui-flipped-bottom{-webkit-transform:translateY(0);transform:translateY(0)}',
        "",
      ]),
        (e.exports = t);
    },
    211: function (e, t, n) {
      e.exports = new (n(16))(n(607), {
        _audioCursor: -1,
        applyTo: function (e, t) {
          var n = (void 0 === t ? {} : t).loop;
          this.extend(e, {
            isLooping: !!n,
          });
        },
        defaults: {
          getQueryPosition: function (e) {
            return e;
          },
        },
        after: {
          setup: function () {
            this.listenTo(n(14), "change:currentSound", r);
          },
        },
        getCurrentSound: function () {
          var e = i(this, this._audioCursor);
          return e && e.getCurrentSound();
        },
        setAudioCursor: function (e) {
          this._audioCursor !== e &&
            ((this._audioCursor = e), this.trigger("change:currentSound"));
        },
        getAudioCursor: function () {
          return this._audioCursor;
        },
        getSoundIndex: function (e) {
          var t = this,
            n = -1;
          return (
            this.some(function (r, o) {
              var a = i(t, o);
              if (a && (a === e || a.containsSound(e))) return (n = o), !0;
            }),
            n
          );
        },
        getQueueMetadataAt: function (e) {
          return {
            originalModel: this.at(e),
            queryPosition: this.getQueryPosition(e),
            sourceInfo: this.getSourceInfo(e),
          };
        },
        containsSound: function (e) {
          return this.getSoundIndex(e) > -1;
        },
      });
      function i(e, t) {
        return e.audibleAt ? e.audibleAt(t) : e.at(t);
      }
      function r(e) {
        var t = e.current;
        if (n(14).isSourceActive(this)) {
          var i = this.getSoundIndex(t);
          i > -1 && this.setAudioCursor(i);
        }
      }
    },
    2110: function (e, t, n) {
      var i = n(11);
      e.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, i, r, o) {
          var a,
            s = null != t ? t : e.nullContext || {},
            u = e.hooks.helperMissing,
            l = e.escapeExpression,
            c = e.lambda,
            d =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            l(
              (n(5) || (t && d(t, "$view")) || u).call(s, n(717), {
                name: "$view",
                hash: {
                  fixed:
                    null != (a = null != t ? d(t, "_options") : t)
                      ? d(a, "fixed")
                      : a,
                  delay:
                    null != (a = null != t ? d(t, "_options") : t)
                      ? d(a, "delay")
                      : a,
                  $targetEl:
                    null != (a = null != t ? d(t, "_options") : t)
                      ? d(a, "$targetEl")
                      : a,
                  key: "background",
                },
                data: o,
                loc: {
                  start: {
                    line: 1,
                    column: 0,
                  },
                  end: {
                    line: 6,
                    column: 2,
                  },
                },
              })
            ) +
            '\n\n<div class="callout__bubble">\n  <h2 class="callout__title">' +
            l(
              c(
                null != (a = null != t ? d(t, "_options") : t)
                  ? d(a, "title")
                  : a,
                t
              )
            ) +
            '</h2>\n  <p class="sc-type-small">' +
            l(
              c(
                null != (a = null != t ? d(t, "_options") : t)
                  ? d(a, "body")
                  : a,
                t
              )
            ) +
            '</p>\n  <div class="callout__button">\n    <button type="button" class="sc-button sc-button-cta sc-button-medium">' +
            l(
              (n(3) || (t && d(t, "$t")) || u).call(s, "OK, got it", {
                name: "$t",
                hash: {},
                data: o,
                loc: {
                  start: {
                    line: 12,
                    column: 75,
                  },
                  end: {
                    line: 12,
                    column: 94,
                  },
                },
              })
            ) +
            "</button>\n  </div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    2111: function (e, t, n) {
      var i = n(9),
        r = n(2112);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    2112: function (e, t, n) {
      (t = n(10)(!1)).push([
        e.i,
        ".calloutBackground{position:fixed;top:0;left:0;bottom:0;right:0}.calloutBackground.m-hidden{opacity:0}",
        "",
      ]),
        (e.exports = t);
    },
    2113: function (e, t, n) {
      var i = n(11);
      e.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, i, r, o) {
          var a,
            s = e.escapeExpression,
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            s(
              (n(5) || (t && u(t, "$view")) || e.hooks.helperMissing).call(
                null != t ? t : e.nullContext || {},
                n(717),
                {
                  name: "$view",
                  hash: {
                    fixed:
                      null != (a = null != t ? u(t, "_options") : t)
                        ? u(a, "fixed")
                        : a,
                    delay:
                      null != (a = null != t ? u(t, "_options") : t)
                        ? u(a, "delay")
                        : a,
                    $targetEl:
                      null != (a = null != t ? u(t, "_options") : t)
                        ? u(a, "$targetEl")
                        : a,
                    key: "background",
                  },
                  data: o,
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 6,
                      column: 2,
                    },
                  },
                }
              )
            ) +
            '\n\n<div class="compact__bubble g-flex-row">\n  <span class="big__orange__at"></span>\n    <p class="compact__callout__text sc-type-small">' +
            s(
              e.lambda(
                null != (a = null != t ? u(t, "_options") : t)
                  ? u(a, "body")
                  : a,
                t
              )
            ) +
            "</p>\n</div>\n\n"
          );
        },
        useData: !0,
      });
    },
    2114: function (e, t, n) {
      var i = n(9),
        r = n(2115);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    2115: function (e, t, n) {
      var i = n(10),
        r = n(33),
        o = n(2156);
      t = i(!1);
      var a = r(o);
      t.push([
        e.i,
        '.compact__bubble{position:absolute;background-color:#fff;padding:0;box-sizing:border-box;border-radius:4px;max-width:360px;transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.compact__bubble:before{content:"";position:absolute;left:50%;bottom:-8px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.compact__callout__text{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;margin-bottom:0;padding:9px 6px}.big__orange__at{border-bottom-left-radius:2px;border-top-left-radius:2px;content:"";display:block;background:#f50;background-image:url(' +
          a +
          ");background-repeat:no-repeat;background-size:24px;background-position:50%;margin:2px;width:64px;padding-left:8px;padding-right:8px}",
        "",
      ]),
        (e.exports = t);
    },
    213: function (e, t, n) {
      var i = (e.exports = new (n(16))({
        applyTo: function (e, t) {
          var a = (void 0 === t ? {} : t).action,
            s = void 0 === a ? "default" : a;
          this.before(e, {
            setup: function () {
              var e = this;
              this.disableAction(s),
                "string" == typeof s || n(0).isArray(s)
                  ? (this.listenTo(this, "form:clean", this.disableAction),
                    this.listenTo(this, "form:dirty", this.enableAction))
                  : "object" == typeof s &&
                    null !== s &&
                    this.listenTo(this, "field:clean field:dirty", function () {
                      o(s).forEach(function (t) {
                        var i =
                          n(0).isArray(s[t]) && s[t].length > 0 ? s[t] : null;
                        (i ? e.isDirty(i) : e.isDirty())
                          ? e.enableAction(t)
                          : e.disableAction(t);
                      });
                    });
            },
          }),
            this.defaults(e, {
              enableAction: function (e) {
                var t = this;
                void 0 === e && (e = s),
                  o(e).forEach(function (e) {
                    t.setActionState(r.call(t, e), i.ENABLED);
                  });
              },
              disableAction: function (e) {
                var t = this;
                void 0 === e && (e = s),
                  o(e).forEach(function (e) {
                    t.setActionState(r.call(t, e), i.DISABLED);
                  });
              },
            });
        },
      }));
      function r(e) {
        return "default" === e ? this.actions[e] : e;
      }
      function o(e) {
        return "string" == typeof e
          ? [e]
          : n(0).isArray(e)
          ? e
          : "object" == typeof e && null !== e
          ? Object.keys(e)
          : [];
      }
      (i.ENABLED = "enabled"), (i.DISABLED = "disabled");
    },
    2133: function (e, t, n) {
      e.exports = n(279).extend({
        includeFooter: ".l-one-column",
        css: n(759),
        template: n(846),
      });
    },
    215: function (e, t) {
      var n = /(\w+)\:(\w+)=(.+)/,
        i = (e.exports = {
          extract: function (e, t) {
            var n = e.tag_list || "",
              r = [];
            return r.push.apply(r, i.parse(n, t)), r;
          },
          parse: function (e, t) {
            return (e.match(/[^\s"']+|"([^"]*)"/g) || [])
              .map(function (e) {
                return e.replace(/"/g, "");
              })
              .filter((t || {}).includeMachineTags ? o : r);
          },
          serialize: function (e) {
            var t = /\s/;
            return e
              .map(function (e) {
                return t.test(e) ? '"' + e + '"' : e;
              })
              .join(" ");
          },
        });
      function r(e) {
        return !n.test(e);
      }
      function o() {
        return !0;
      }
    },
    2153: function (e, t, n) {
      e.exports = new (n(16))({
        requirePrototype: n(31).View.prototype,
        _callout: null,
        applyTo: function (e, t) {
          var r = Array.isArray(t) ? t : [t];
          this.extend(e, {
            showCallout: function () {
              var e = this,
                t = n(0).find(r, function (t) {
                  var i = t.id,
                    r = t.displayCondition,
                    o =
                      void 0 === r
                        ? function () {
                            return !0;
                          }
                        : r;
                  return n(715).shouldDisplay(i) && o.call(e);
                });
              if (t) {
                var o = t.id,
                  a = t.elSelector,
                  s = t.viewOptions,
                  u = void 0 === s ? {} : s,
                  l = a ? this.$(a) : this.$el;
                if (l.length) {
                  var c = n(0).isFunction(u) ? u.call(this) : u;
                  (this._callout = n(715).display(o, l, {
                    viewOptions: c,
                  })),
                    this.listenTo(this._callout, "closed overlay:closed", i);
                }
              }
            },
          });
        },
        after: {
          renderDecorate: function () {
            this.showCallout();
          },
          dispose: function () {
            this._callout &&
              (this._callout.disposed || this._callout.close(), i.call(this));
          },
        },
      });
      function i() {
        var e = this._callout;
        e && (this.stopListening(e), (this._callout = null));
      }
    },
    2158: function (e, t, n) {
      e.exports = new (n(16))({
        requires: ["adZone"],
        around: {
          parse: function (e, t) {
            var i = n(73).parseResponse(t),
              r = i.data,
              o = [];
            return (
              r &&
                o.push({
                  ad_urn: i.ad_urn,
                  campaign: "promoted",
                  kind: r.kind,
                  origin: r,
                  promoted_by: i.promoted_by_user,
                  promoted_by_urn: i.promoted_by_urn,
                  tracking: i.tracking,
                }),
              e(o)
            );
          },
        },
        defaults: {
          parse: function (e) {
            return e;
          },
        },
        override: {
          url: function () {
            return null !== this.next_href
              ? this.next_href
              : n(73).getAdUrl(this.adZone, n(0).result(this, "adZoneParams"));
          },
        },
      });
    },
    216: function (e, t) {
      e.exports = {
        HQ: "hq",
        SQ: "sq",
      };
    },
    2181: function (e, t, n) {
      var i = [
          ".header__userNavUsernameButton",
          ".playControls__soundBadge",
          ".queue__scrollable",
          ".notifications__list",
          "#searchMenuList",
        ],
        r =
          ((e.exports = new (n(16))({
            requireProto: n(279).proto,
            applyTo: function (e, t) {
              var a = void 0 === t ? {} : t,
                u = a.sensitiveElements,
                l = void 0 === u ? [] : u,
                c = (a.debug, a.isAllowedToRecord),
                d =
                  void 0 === c
                    ? function () {
                        return !0;
                      }
                    : c,
                f = window.document.body,
                h = n(714).whenElementAdded(l.concat(i), s),
                p = (function (e) {
                  e &&
                    !r.textContent &&
                    (r.textContent =
                      "\n      .sc-block-debug-input {\n        background-image: repeating-linear-gradient(-45deg, transparent 0 4px, red 4px 8px);\n      }\n      .sc-block-debug-container:after {\n        content: '';\n        opacity: 1;\n        background: repeating-linear-gradient(-45deg, transparent 0 4px, red 4px 8px);\n        position: absolute;\n        pointer-events: none;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    ");
                  return r;
                })(!1),
                g = !1;
              this.before(e, {
                setup: function () {
                  d.call(this) &&
                    (h.observe(f, {
                      childList: !0,
                      subtree: !0,
                    }),
                    f.appendChild(p),
                    o(i, !1),
                    n(161).start(),
                    (g = !0));
                },
                dispose: function () {
                  g &&
                    (h.disconnect(),
                    n(161).stop(),
                    o(i, !0),
                    f.removeChild(p),
                    (g = !1));
                },
              });
            },
          })),
          new WeakMap(),
          window.document.createElement("style"));
      function o(e, t) {
        n(714)
          .toArray(window.document.querySelectorAll(e.join(",")))
          .forEach(function (e) {
            return a(e, t);
          });
      }
      function a(e, t) {
        HTMLInputElement;
        ["fs-block", null].filter(Boolean).forEach(function (n) {
          return e.classList.toggle(n, !t);
        });
      }
      function s(e) {
        a(e, !1);
      }
    },
    220: function (e, t, n) {
      e.exports = {
        getIcon: function (e, t) {
          var i = e.getTitle(),
            r = e.id;
          return r === n(27).CREATOR_SUBSCRIPTION_PRO ||
            r === n(27).CREATOR_SUBSCRIPTION_PRO_UNLIMITED
            ? ((t = n(0).assign({}, t, {
                prefix: "sc-status-icon",
                title: i || "",
                type: "creator",
              })),
              n(444).render(t))
            : "";
        },
        getIconLink: function (e, t) {
          var i = this.getIcon(e, t);
          if (!i) return i;
          var r = e.getTitle(),
            o = n(72).getCreatorLink(t && t.referral);
          return (
            '<a class="premiumIconLink" href="' +
            o.link +
            '" target="' +
            o.target +
            '" title="' +
            n(1).Lingua.t("[[planName]] user", {
              planName: r,
            }) +
            '">' +
            i +
            "</a>"
          );
        },
        getNextLevelProductId: function (e) {
          var t = e.getCreatorPlan();
          return t === n(27).CREATOR_SUBSCRIPTION_FREE ||
            "lite" === t ||
            void 0 === t
            ? n(27).CREATOR_SUBSCRIPTION_PRO
            : n(27).CREATOR_SUBSCRIPTION_PRO_UNLIMITED;
        },
        getQuotaInfo: function (e) {
          var t = e.getUploadSecondsLeft(),
            n = e.getUploadSecondsUsed(),
            i = e.getUploadMinutesLeft(),
            r = e.getUploadMinutesUsed(),
            o = e.isOverQuota();
          if (e.hasUnlimitedUpload()) return !1;
          var a = t + n,
            s = Math.round(a / 60),
            u = Math.round(a),
            l = s / 60,
            c = r - s,
            d = e.getTracksUploaded(),
            f = e.getTracksLeft() + d,
            h = e.hasTrackLimit(),
            p = Math.floor((100 * d) / f),
            g = Math.floor((100 * n) / u),
            m = h && p > g ? p : g;
          return {
            minutesLeft: i,
            minutesUsed: r,
            limitInMinutes: s,
            limitInHours: l,
            isOverQuota: o,
            minutesOver: c,
            percentageUsed: m,
            percentageTime: g,
            percentageTracks: p,
            limitInTracks: f,
            isNearingQuota: m >= 50,
          };
        },
      };
    },
    226: function (e, t) {
      e.exports = {
        QUEUE_RESET: "queueReset",
        CHANGE_CURRENT_SOUND: "change:currentSound",
        CHANGE_REPEAT_MODE: "change:repeatMode",
      };
    },
    227: function (e, t, n) {
      (function (t) {
        var i = (e.exports = {
          parseOtherId: function (e) {
            var t,
              i = String(n(4).get("me").id);
            if ("string" == typeof e)
              return (t = e.split(":"))[0] === i ? t[1] : t[0];
          },
          baseUrl: function () {
            var e = [].slice.call(arguments);
            return n(26).stringify({
              host: n(4).get("api_v2_host"),
              path: ["users", n(4).get("me").id, "conversations"].concat(e),
            });
          },
          baseUrlWithId: function (e) {
            var t = n(0).tail(arguments);
            return i.baseUrl.apply(null, [i.parseOtherId(e)].concat(t));
          },
          post: function (e, n) {
            var r = i.baseUrl(e),
              o = {
                contents: n,
              };
            return t.ajax({
              type: "POST",
              url: r,
              dataType: "json",
              contentType: "application/json",
              data: JSON.stringify(o),
            });
          },
        });
      }.call(this, n(15)));
    },
    228: function (e, t) {
      e.exports = {
        FAILURE: "failure",
        FINISHED: "finished",
        NOT_FOUND: "not_found",
        PREPARING: "preparing",
        TRANSCODING: "transcoding",
        QUEUED: "queued",
      };
    },
    23: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "CookieCategory", function () {
          return i;
        }),
        n.d(t, "onChange", function () {
          return p;
        }),
        n.d(t, "initializeForTest", function () {
          return g;
        }),
        n.d(t, "isCategoryEnabled", function () {
          return m;
        }),
        n.d(t, "waitForCategory", function () {
          return v;
        }),
        n.d(t, "waitForAnyCategory", function () {
          return y;
        }),
        n.d(t, "isOneTrustEnabled", function () {
          return _;
        }),
        n.d(t, "waitForCategories", function () {
          return b;
        }),
        n.d(t, "matchPrivacySettings", function () {
          return w;
        }),
        n.d(t, "syncPrivacySettings", function () {
          return k;
        }),
        n.d(t, "initPrivacySettingsSync", function () {
          return A;
        }),
        n.d(t, "displayBanner", function () {
          return S;
        }),
        n.d(t, "displayBannerCallback", function () {
          return E;
        });
      var i,
        r = n(4),
        o = n.n(r),
        a = n(153),
        s = n.n(a),
        u = n(154),
        l = n.n(u),
        c = n(350),
        d = n.n(c);
      !(function (e) {
        (e.StrictlyNecessary = "C0001"),
          (e.Performance = "C0002"),
          (e.Functional = "C0003"),
          (e.Targeting = "C0004"),
          (e.SocialMedia = "C0005"),
          (e.Communications = "C0007");
      })(i || (i = {}));
      var f = {},
        h = function (e) {
          e.forEach(function (e) {
            e in f &&
              ((f[e] || []).forEach(function (e) {
                try {
                  e();
                } catch (e) {}
              }),
              delete f[e]);
          });
        };
      function p(e) {
        window.OptanonWrapper &&
          window.OptanonWrapper.callbacks &&
          window.OptanonWrapper.callbacks.push(e);
      }
      function g() {
        window.OptanonWrapper.callbacks.push(h);
      }
      function m(e) {
        return (
          !!window.OptanonActiveGroups &&
          window.OptanonActiveGroups.indexOf("," + e + ",") > -1
        );
      }
      function v(e) {
        return new Promise(function (t) {
          return _()
            ? m(e)
              ? t()
              : ((f[e] = f[e] || []), void f[e].push(t))
            : t();
        });
      }
      function y(e) {
        return new Promise(function (t) {
          if (!_()) return t();
          e.forEach(function (e) {
            return v(e).then(t);
          });
        });
      }
      function _() {
        return d.a.isOneTrustEnabled(o.a.get("features"), l.a.getCountryCode());
      }
      function b(e) {
        return Promise.all(e.map(v));
      }
      function w(e, t) {
        return e.isOptedInToAnalytics() === t.indexOf(i.Performance) > -1;
      }
      function k(e) {
        var t,
          n = o.a.get("privacy_settings");
        w(n, e) ||
          (n.set(
            (((t = {})[s.a.ANALYTICS_OPT_IN] = e.indexOf(i.Performance) > -1),
            t)
          ),
          n.save(n.changed));
      }
      function A() {
        _() &&
          window.OptanonWrapper &&
          window.OptanonWrapper.callbacks &&
          (window.OptanonWrapper.callbacks.push(k),
          k((window.OptanonActiveGroups || "").split(",")));
      }
      function S(e) {
        var t = o.a.get("privacy_settings"),
          n =
            !t.isOptedInToAnalytics() ||
            !t.isOptedInToCommunications() ||
            !t.isOptedInToTargetedAdvertising();
        (!e || !l.a.isCountryUS() || n) && p(E);
      }
      function E() {
        document.body.classList.remove("ot-hide-banner");
        var e = window.OptanonWrapper.callbacks,
          t = e.indexOf(E);
        t > -1 && e.splice(t, 1);
      }
      p(h);
    },
    230: function (e, t) {
      e.exports = {
        VAST_ERROR_CODE_GENERAL_LINEAR_ERROR: 400,
        VAST_ERROR_CODE_NOT_SUPPORTED_LINEAR_ERROR: 403,
        VAST_ERROR_CODE_GENERAL_COMPANION_ADS_ERROR: 600,
        VAST_ERROR_CODE_UNDEFINED_ERROR: 900,
      };
    },
    235: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Signal", function () {
          return i;
        });
      var i = (function () {
        function e() {
          var e, t, n;
          (n = []),
            (t = "_listeners") in (e = this)
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            (this.onSignal = this.onSignal.bind(this)),
            (this.trigger = this.trigger.bind(this)),
            (this.remove = this.remove.bind(this));
        }
        var t = e.prototype;
        return (
          (t.trigger = function () {
            this._listeners.forEach(function (e) {
              return e();
            });
          }),
          (t.onSignal = function (e) {
            this._listeners.push(e);
          }),
          (t.remove = function (e) {
            this._listeners = this._listeners.filter(function (t) {
              return t !== e;
            });
          }),
          e
        );
      })();
    },
    236: function (e, t, n) {
      var i = n(29).MS_IN_SECOND / 60;
      function r() {
        return (
          n(4).get("features").has("debug_playback") ||
          n(4).get("features").has("internal_qa")
        );
      }
      function o(e) {
        var t = e instanceof n(83).ProxyPlayer ? e.getPlayer() : e;
        return t instanceof n(69).Player ? t : null;
      }
      var a = [];
      function s(e) {
        Object.keys(window.__sc_players).some(function (t) {
          return (
            window.__sc_players[t] === e && (delete window.__sc_players[t], !0)
          );
        });
      }
      function u(e) {
        var t = e.trackUrn,
          i = void 0 === t ? "" : t,
          r = e.quality,
          o = void 0 === r ? "" : r,
          a = e.audioQualityMode,
          s = void 0 === a ? "" : a,
          u = e.preset,
          l = void 0 === u ? "" : u,
          c = e.entityType,
          d = e.bitrate,
          f = e.format,
          h = e.host,
          p = e.latency,
          g = e.playerType,
          m = e.protocol,
          v = e.preloaded,
          y = e.type,
          _ = e.appState,
          b = e.playerVariant;
        n(84).audioPerformance({
          track_urn: i,
          bitrate: d,
          format: f,
          host: h,
          latency: p,
          player_type: g,
          protocol: m,
          preloaded: v,
          type: y,
          app_state: _,
          player_variant: b,
          quality: o,
          preset: l,
          entity_type: c,
          player_version: "v" + n(69).version,
          player_build_number: n(69).buildNumber,
          audio_quality_mode: s,
        });
      }
      function l(e) {
        var t = e.trackUrn,
          i = void 0 === t ? "" : t,
          r = e.audioQualityMode,
          o = void 0 === r ? "" : r,
          a = e.quality,
          s = void 0 === a ? "" : a,
          u = e.preset,
          l = void 0 === u ? "" : u,
          c = e.bitrate,
          d = void 0 === c ? "" : c,
          f = e.format,
          h = void 0 === f ? "" : f,
          p = e.host,
          g = void 0 === p ? "" : p,
          m = e.playerType,
          v = e.protocol,
          y = void 0 === v ? "" : v,
          _ = e.url,
          b = void 0 === _ ? "" : _,
          w = e.entityType,
          k = e.appState,
          A = e.errorCode,
          S = e.playerVariant,
          E = e.log,
          C = e.logId,
          T = null;
        try {
          n(84).audioError({
            bitrate: d,
            format: h,
            host: g,
            player_type: m,
            protocol: y,
            quality: s,
            preset: l,
            url: b,
            app_state: k,
            entity_type: w,
            error_code: A,
            player_variant: S,
            track_urn: i,
            player_version: "v" + n(69).version,
            player_build_number: n(69).buildNumber,
            audio_quality_mode: o,
            log_id: C,
          });
        } catch (e) {
          T = e;
        }
        if (
          ((function (e) {
            return (
              "SCAUDIO.NOT_SUPPORTED_ERROR" === e ||
              "SCAUDIO.NO_STREAMS" === e ||
              0 ===
                e.indexOf(
                  "SCAUDIO.URL_RETRIEVER_ERROR.MediaPayload.INVALID_STATUS_"
                )
            );
          })(A) ||
            n(196).notify({
              error: {
                name: "SCAudio: " + A,
                message: A,
              },
              context: {
                component: "SCAudio",
                scaudioVersion: n(69).version,
                MaestroCoreVersion: n(83).version,
                HTML5ControllerVersion: n(162).version,
                HLSMSEControllerVersion: n(611).version,
                ChromecastControllerVersion: n(613).version,
                stringLoaderVersion: n(435).version,
                streamUrl: b,
                playerType: m,
                streamFormat: h,
                log: E.slice().reverse(),
                logId: C,
              },
            }),
          T)
        )
          throw T;
      }
      function c() {
        var e = n(98).getMuted() ? 0 : n(98).getVolume();
        n(69).setGlobalVolume(
          (function (e) {
            return Math.pow(e, 3);
          })(e)
        );
      }
      var d = n(1098).buildConnectionEventManager();
      function f(e, t) {
        var i = t.type,
          r = t.url,
          o = t.audioReporter,
          a = t.checkpointInterval;
        if ("AD" === i)
          return n(1101).buildPlayer({
            url: r,
            audioPerformanceReporter: u,
            errorReporter: l,
            audioReporter: o,
            checkpointInterval: a,
          });
        if ("GENERAL" === i)
          return (function (e, t) {
            var i = t.dataPromise,
              r = t.audioReporter,
              o = t.checkpointInterval,
              a = {},
              s = null,
              c = null,
              d = null,
              f = new (n(83).ProxyPlayer)({
                shouldPassThroughFatalErrors: !0,
                name: "General+ChromecastProxy-" + e,
                logger: n(163),
              });
            return (
              h(),
              n(8).on("googleCast:audioHijack", h),
              n(8).on("googleCast:audioRestored", h),
              f.onChange.subscribe(function (e) {
                e.dead &&
                  (n(8).off("googleCast:audioHijack", h),
                  n(8).off("googleCast:audioRestored", h),
                  d && (d.reject(a), (d = null)));
              }),
              f
            );
            function h() {
              var e = n(116).isCasting();
              if (!(("chromecast" === s && e) || ("general" === s && !e))) {
                if (s) {
                  var t = f.getPlayer();
                  t && (f.removePlayer(), t.kill()),
                    d && (d.reject(a), (d = null)),
                    (s = null);
                }
                e
                  ? ((s = c = "chromecast"),
                    (d = n(1099).buildPlayer({
                      dataPromise: i,
                      audioPerformanceReporter: u,
                      errorReporter: l,
                    })).then(function (e) {
                      f.providePlayer(e, {
                        syncPosition: f.isPlaying(),
                        syncVolume: !1,
                      });
                    }))
                  : (c && f.pause(),
                    (s = c = "general"),
                    (d = n(1100).buildPlayer({
                      dataPromise: i,
                      audioPerformanceReporter: u,
                      errorReporter: l,
                      audioReporter: r,
                      checkpointInterval: o,
                    })).then(function (e) {
                      f.providePlayer(e, {
                        syncPosition: !0,
                        syncVolume: !1,
                      });
                    })),
                  d.fail(function (e) {
                    e !== a && f.kill();
                  });
              }
            }
          })(e, t);
        throw new Error("Unknown player type: " + i);
      }
      c(), n(98).on("change:local", c);
      var h = n(320).applyTo(
        (function () {
          "use strict";
          function e(e, t) {
            var i = this;
            try {
              if (
                ((this.id = e),
                (this.config = t),
                (this.preloadingManager = n(1102).buildPreloadingManager()),
                (this.player = f(this.resource_id || this.id, t)),
                r() &&
                  (function (e, t) {
                    if (
                      ("__sc_players" in window || (window.__sc_players = {}),
                      a.indexOf(e) >= 0)
                    )
                      return a.splice(a.indexOf(e), 1), void a.push(e);
                    if (
                      ((window.__sc_players[t] = e), a.push(e), a.length > 10)
                    ) {
                      var n = a.shift();
                      n.isDead() && s(n);
                    }
                  })(this.player, this.resource_id || this.id),
                this.player.isDead())
              )
                throw this.player.getFatalError();
              this.player.onChange.subscribe(function (e) {
                e.dead && r() && s(i.player);
              }),
                (this.scaudioPlayer = o(this.player)),
                this.scaudioPlayer &&
                  (d.handleConnectionEvents(this.scaudioPlayer),
                  this.preloadingManager.registerPlayer(this.scaudioPlayer)),
                (this.killedByUser = !1);
            } catch (e) {
              throw (this.release(), e);
            }
          }
          var t = e.prototype;
          return (
            (t.isDead = function () {
              return this.player.isDead();
            }),
            (t.play = function () {
              r() && (window.__sc_players.current = this.player),
                this.player.isEnded() && this.player.seek(0),
                this.player.play();
            }),
            (t.pause = function () {
              return this.player.pause();
            }),
            (t.pauseAfterFade = function (e) {
              var t = o(this.player);
              t ? t.pauseAfterFade(e) : this.player.pause();
            }),
            (t.seek = function (e) {
              if ("number" != typeof e)
                throw new Error("Seek position must be a number.");
              this.player.seek(e);
            }),
            (t.getPosition = function () {
              return this.player.getPosition();
            }),
            (t.enablePreloading = function () {
              return this.preloadingManager.enablePreloading();
            }),
            (t.disablePreloading = function () {
              return this.preloadingManager.disablePreloading();
            }),
            (t.getMaxBufferLength = function () {
              return this.player.getMaxBufferLength();
            }),
            (t.isPlaying = function () {
              return this.player.isPlaying();
            }),
            (t.isLoading = function () {
              return this.player.isLoading();
            }),
            (t.isEnded = function () {
              return this.player.isEnded();
            }),
            (t.getCurrentBufferedTimeRange = function () {
              return this.player.getCurrentBufferedTimeRange();
            }),
            (t.getDuration = function () {
              return this.player.getDuration();
            }),
            (t.getListenTime = function () {
              return this.player.getListenTime();
            }),
            (t.registerMediaSessionActionHandlers = function () {
              return this.player.registerMediaSessionActionHandlers();
            }),
            (t.unregisterMediaSessionActionHandlers = function () {
              return this.player.unregisterMediaSessionActionHandlers();
            }),
            (t.getQuality = function () {
              var e = o(this.player);
              return e ? e.getQuality() : null;
            }),
            (t.kill = function () {
              (this.killedByUser = !0), this.player.kill();
            }),
            (t.addEventListener = function (e, t) {
              var n = this,
                r = this.player,
                o = function () {
                  return t();
                },
                a =
                  (function () {
                    switch (e) {
                      case "play":
                        return [
                          r.onPlayIntent.subscribe(o),
                          r.onPauseRejection.subscribe(o),
                        ];
                      case "pause":
                        return [
                          r.onPauseIntent.subscribe(o),
                          r.onPlayRejection.subscribe(o),
                        ];
                      case "playStart":
                        return r.onPlay.subscribe(o);
                      case "finish":
                        return r.onEnded.subscribe(o);
                      case "seeked":
                        return r.onPositionJumped.subscribe(o);
                      case "buffering:start":
                        return r.onLoadStart.subscribe(o);
                      case "buffering:end":
                        return r.onLoadEnd.subscribe(o);
                      case "qualityChanged":
                        return n.scaudioPlayer
                          ? n.scaudioPlayer.onQualityChanged.subscribe(
                              function (e) {
                                return t({
                                  quality: e,
                                });
                              }
                            )
                          : void 0;
                      case "time":
                        return (function (e, t) {
                          var n = function n() {
                              window.clearTimeout(r);
                              var a = e.getPosition();
                              a !== o && (t(), (o = a)),
                                e.isActuallyPlaying() &&
                                  !e.isEnded() &&
                                  (r = window.setTimeout(n, i));
                            },
                            r = 0,
                            o = null,
                            a = e.onChange.subscribe(function (e) {
                              var t = e.actuallyPlaying,
                                i = e.positionJumped,
                                o = e.ended;
                              e.dead
                                ? window.clearTimeout(r)
                                : (void 0 !== t || i || void 0 !== o) && n();
                            });
                          return (
                            (e.isActuallyPlaying() || 0 !== e.getPosition()) &&
                              n(),
                            {
                              remove: function () {
                                a.remove(), window.clearTimeout(r);
                              },
                            }
                          );
                        })(r, o);
                      case "playerError":
                        return r.onChange.subscribe(function (e) {
                          var i = e.dead,
                            r = e.fatalError;
                          r
                            ? t({
                                error: new Error(
                                  "SCAudio error: " + r.getCode()
                                ),
                              })
                            : i &&
                              !n.killedByUser &&
                              t({
                                error: new Error("Unexpected error."),
                              });
                        });
                      case "dead":
                        return r.onChange.subscribe(function (e) {
                          e.dead && t();
                        });
                      default:
                        0;
                    }
                  })() || [];
              return (
                Array.isArray(a) || (a = [a]),
                {
                  remove: function () {
                    a.forEach(function (e) {
                      return e.remove();
                    }),
                      (a = []);
                  },
                }
              );
            }),
            e
          );
        })(),
        {
          cleanupInstantly: !0,
          hashFn: function (e, t) {
            var n = (void 0 === t ? {} : t).soundContext;
            if (void 0 !== n) {
              var i = n.playlist_id,
                r = n.system_playlist_id,
                o = n.ad_target_id,
                a = n.sound_id;
              if (void 0 !== i && void 0 !== a) return [i, a].join("_");
              if (void 0 !== r && void 0 !== a) return [r, a].join("_");
              if (void 0 !== o) return ["ad", o].join("_");
              throw new Error("Invalid soundContext provided to the Player");
            }
            if (void 0 !== e) return String(e);
            throw new Error("Player instance is created without an id");
          },
        }
      );
      e.exports = {
        PlayerClass: h,
        scheduleMediaElementActivation: function () {
          window.addEventListener(
            "click",
            function e() {
              window.removeEventListener("click", e, !0),
                n(0)
                  .values(n(328))
                  .forEach(function (e) {
                    return e.activate();
                  });
            },
            !0
          );
        },
        createPlayer: function (e, t) {
          return new h(e, t);
        },
      };
    },
    238: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "FEATURE_ENABLE_ARTIST_SHORTCUTS", function () {
          return o;
        }),
        n.d(t, "getFirstStoryIndexOfUser", function () {
          return a;
        });
      var i = n(0),
        r = n.n(i),
        o = (n(41), "v2_artist_shortcuts"),
        a = function (e) {
          if (!e.last_read_story_timestamp) return 0;
          var t = r.a.findIndex(e.stories, function (t) {
            return (
              new Date(t.created_at) > new Date(e.last_read_story_timestamp)
            );
          });
          return t > -1 ? t : 0;
        };
    },
    24: function (e, t, n) {
      var i = {
          comments: "comment",
          playlists: "playlist",
          "system-playlists": "system-playlist",
          sounds: "track",
          tracks: "track",
          users: "user",
        },
        r = {
          comments: "comment",
          playlists: "playlist",
          "system-playlists": "system-playlist",
          sounds: "sound",
          tracks: "sound",
          users: "user",
          "artist-stations": "station",
          "track-stations": "station",
        },
        o = {
          comment: "comments",
          playlist: "playlists",
          "system-playlist": "system-playlists",
          sound: "tracks",
          track: "tracks",
          user: "users",
        },
        a = {
          sets: "playlists",
          sounds: "tracks",
          people: "users",
        },
        s = n(0).reduce(
          a,
          function (e, t, n) {
            return (
              (e[t] = e[t] || []),
              (e[n] = e[n] || []),
              c(e[t], n),
              c(e[n], t),
              e
            );
          },
          {}
        ),
        u = n(0).negate(RegExp.prototype.test.bind(/\D/)),
        l = (e.exports = {
          toComponents: function (e) {
            var t = e.split(":"),
              n = t[0],
              i = t[1],
              r = t.slice(2).join(":");
            return (
              u(r) && (r = parseInt(r, 10)),
              {
                domain: n,
                collection: i,
                id: r,
              }
            );
          },
          fromComponents: function (e) {
            var t = e.domain;
            return [void 0 === t ? "soundcloud" : t, e.collection, e.id].join(
              ":"
            );
          },
          getAsAttributes: function (e) {
            var t = l.toComponents(e),
              n = t.collection,
              o = t.id,
              a = r[n];
            return (
              "user" === a && "system" === o
                ? (o = 193)
                : "system-playlist" === a && (o = e),
              {
                id: o,
                kind: i[n],
                resource_type: a,
              }
            );
          },
          generate: function (e, t) {
            if ("station" === e || "system-playlist" === e) return t;
            var n = o[e];
            return n
              ? l.fromComponents({
                  collection: n,
                  id: t,
                })
              : null;
          },
          getAlternateUrns: function (e) {
            var t = l.toComponents(e),
              n = t.domain,
              i = t.collection,
              r = t.id,
              o = s[i];
            return o
              ? o.map(function (e) {
                  return l.fromComponents({
                    domain: n,
                    collection: e,
                    id: r,
                  });
                })
              : null;
          },
          getCanonicalUrn: function (e) {
            var t = l.toComponents(e),
              n = t.domain,
              i = t.collection,
              r = t.id,
              o = a[i];
            return o
              ? l.fromComponents({
                  domain: n,
                  collection: o,
                  id: r,
                })
              : e;
          },
        });
      function c(e, t) {
        e.indexOf(t) < 0 && e.push(t);
      }
    },
    250: function (e, t, n) {
      var i = ["email", "user_birthday", "user_gender"].join(","),
        r = n(4).get("fb_app_id"),
        o = null,
        a = null,
        s = n(7).defer();
      function u() {
        return "resolved" === s.state();
      }
      function l() {
        return (
          a ||
            (a = n(65).insertScript("//connect.facebook.net/en_US/sdk.js", {
              onerror: function () {
                s.reject(), (s = n(7).defer()), (a = null);
              },
            })),
          s.promise()
        );
      }
      function c(e) {
        var t = (void 0 === e ? {} : e).promptUser,
          r = void 0 === t || t,
          a = n(7).defer();
        return (
          p().then(function (e) {
            e
              ? d(a, window.FB.getAuthResponse())
              : o && !o.closed
              ? o.focus()
              : r
              ? (o = n(507).interceptPopup(function () {
                  window.FB.login(
                    function (e) {
                      return d(a, e.authResponse);
                    },
                    {
                      scope: i,
                    }
                  );
                }))
              : a.reject();
          }),
          a.promise()
        );
      }
      function d(e, t) {
        var n = t && t.accessToken;
        n ? e.resolve(n) : e.reject();
      }
      function f() {
        return p().then(function (e) {
          return e ? h("/me") : n(7).reject();
        });
      }
      function h(e, t) {
        void 0 === t && (t = {});
        var i = n(7).defer();
        return (
          c().then(function (r) {
            window.FB.api(
              e,
              n(0).extend(
                {
                  access_token: r,
                },
                t
              ),
              i.resolve
            );
          }, i.reject),
          i.promise()
        );
      }
      function p() {
        return ((e = n(7).defer()),
        u()
          ? window.FB.getLoginStatus(function (t) {
              return e.resolve(t.status);
            })
          : e.reject(),
        e.promise()).then(
          function (e) {
            return n(7).resolve("connected" === e);
          },
          function () {
            return n(7).resolve(!1);
          }
        );
        var e;
      }
      (e.exports = n(0).extend(
        {
          loadFacebookSDK: function () {
            return (n(23).isOneTrustEnabled()
              ? n(23).isCategoryEnabled(n(23).CookieCategory.Targeting)
                ? n(7).resolve()
                : n(7).reject()
              : n(68).whenAllowed()
            ).then(l);
          },
          isFacebookSDKReady: u,
        },
        n(0).mapObject(
          {
            parseXFBML: function (e) {
              window.FB.XFBML.parse(e);
            },
            getFacebookToken: c,
            getCurrentFacebookUser: function (e) {
              var t = (void 0 === e ? {} : e).size,
                i = void 0 === t ? 200 : t;
              return f().then(function (e) {
                var t = {
                  width: i,
                  height: i,
                  redirect: !1,
                };
                return h("/" + e.id + "/picture", t).then(function (t) {
                  return n(7).resolve({
                    name: e.name,
                    picture_url: t && t.data && t.data.url,
                  });
                });
              });
            },
            receiveBirthdayAndFacebookToken: function () {
              var e = n(7).defer(),
                t = function () {
                  return e.reject({
                    error: "age_not_provided",
                  });
                };
              return (
                f().then(
                  function (n) {
                    h("/" + n.id + "?fields=birthday,gender").then(function (
                      n
                    ) {
                      c().then(function (i) {
                        n && n.birthday
                          ? e.resolve({
                              token: i,
                              birthday: new Date(n.birthday),
                              gender: n.gender,
                            })
                          : t();
                      });
                    });
                  },
                  function () {
                    return t();
                  }
                ),
                e
              );
            },
          },
          function (e) {
            return function () {
              return e.apply(void 0, arguments);
            };
          }
        )
      )),
        (window.fbAsyncInit = function () {
          window.FB.init({
            appId: r,
            status: !1,
            cookie: !0,
            xfbml: !0,
            version: "v2.12",
          }),
            delete window.fbAsyncInit,
            s.resolve();
        });
    },
    259: function (e, t) {
      e.exports = {
        createAbortController: function () {
          var e = new Set();
          return {
            abort: function () {
              e.forEach(function (e) {
                return e();
              });
            },
            signal: {
              addAbortListener: function (t) {
                e.add(t);
              },
              removeAbortListener: function (t) {
                e.delete(t);
              },
            },
          };
        },
        listenToAbortSignal: function (e, t) {
          var n = function () {
            e.abort();
          };
          return (
            t.addAbortListener(n),
            e.always(function () {
              t.removeAbortListener(n);
            }),
            e
          );
        },
      };
    },
    26: function (e, t, n) {
      var i,
        r,
        o = n(75).pushState
          ? n(0).identity
          : function (e) {
              return e && e.replace(/#/, "");
            },
        a = (e.exports = n(0).defaults(
          {
            parse: function (e, t) {
              return (e = o(e)), n(59).parse(o(e), t);
            },
            getQueryParam: function (e, t) {
              return a.getQueryParams(t)[e];
            },
            getFragmentParam: function (e) {
              return n(75).pushState
                ? a.parseQueryString(window.location.hash.substring(1))[e]
                : void 0;
            },
            removeFragmentParam: function (e, t) {
              return (t = t || window.location.href)
                .replace(
                  new RegExp(
                    "#(?:(.+)&?)?" +
                      n(111).regexpEscape(e) +
                      "(?:=[^&]*(?:&|$))?"
                  ),
                  "#$1"
                )
                .replace(/#$/, "");
            },
            getQueryParams: function (e) {
              var t =
                e ||
                (n(75).pushState
                  ? window.location.search
                  : window.location.hash.replace(/^[^?]*/, ""));
              return t !== i && ((i = t), (r = a.parseQueryString(t))), r;
            },
            getQueryString: function (e) {
              return e
                ? e.replace(/^[^?#]*(\?[^#]*)?(?:#.*)?$/, "$1")
                : n(75).pushState
                ? window.location.search
                : window.location.hash.replace(/^[^?]*/, "");
            },
            getWindowOrigin: function () {
              var e = window.location,
                t = e.protocol,
                n = e.hostname,
                i = e.port;
              return t + "//" + n + (i ? ":" + i : "");
            },
          },
          n(59)
        ));
    },
    260: function (e, t) {
      function n() {
        var e = Error.apply(this, arguments);
        (e.name = this.name = "UnauthorizedViewerError"),
          (this.message = "User is unauthorized to view this resource."),
          (this.stack = e.stack);
      }
      (n.prototype = Object.create(Error.prototype)), (e.exports = n);
    },
    261: function (e, t) {
      e.exports = {
        EARNINGS_DASHBOARD: "can_see_earnings_dashboard",
        REVSHARE_PREMIER_AGREEMENT: "can_see_revshare_premier_agreement",
        REVSHARE_PRO_AGREEMENT: "can_see_revshare_pro_agreement",
      };
    },
    262: function (e, t, n) {
      var i = (e.exports = n(21).extend(
        {
          resource_type: "single-audio-upload",
          url: null,
          _uploadRequest: null,
          _transcodingStatus: null,
          _uploadId: null,
          hasDataForView: function () {
            return !0;
          },
          setup: function (e) {
            r.call(this, e.file),
              this.set({
                status: n(53).QUEUED,
                hasBeenSaved: !1,
                trackingId:
                  new Date().getTime() +
                  "_" +
                  Math.random().toString(36).substring(2),
              });
          },
          upload: function () {
            return (
              this._uploadRequest ||
                (this.set("status", n(53).UPLOADING),
                (this._uploadRequest = new (n(795))()
                  .upload(this.get("file"))
                  .done(a.bind(this))
                  .fail(s.bind(this))
                  .progress(u.bind(this)))),
              this._uploadRequest
            );
          },
          remove: function () {
            o.call(this), this.destroy(), i.removeInstance(this);
          },
          getUploadId: function () {
            return this._uploadId;
          },
          getTrackingId: function () {
            return this.get("trackingId");
          },
          getFileName: function () {
            return this.get("file").name;
          },
          isHQUpload: function () {
            return n(203).isHQ(this.getFileName());
          },
        },
        {
          hashFn: function (e, t) {
            return (
              (t && t.resource_id) ||
              (e && (e.file ? null : e.id || e.resource_id)) ||
              null
            );
          },
        }
      ));
      function r(e) {
        this.set(
          "transfer",
          new (n(438))({
            sampleSize: 50,
          })
        ),
          this.get("transfer").setTotal(e.size),
          this.set(
            "transcoding",
            new (n(438))({
              sampleSize: 10,
              totalSize: 100,
            })
          );
      }
      function o() {
        this._uploadRequest && this._uploadRequest.abort(),
          this._transcodingStatus && this._transcodingStatus.abort();
      }
      function a(e) {
        var t = this.get("transfer");
        (this._uploadId = e),
          this.set("status", n(53).TRANSCODING),
          t.add(t.getTotalSize()),
          n(12).trackUploadFunnel({
            chapter: "upload_done",
            uploadId: this.getTrackingId(),
          }),
          this.get("transcoding").setTotal(0),
          (this._transcodingStatus = new (n(1184))(e)
            .done(l.bind(this))
            .fail(c.bind(this))
            .progress(d.bind(this)));
      }
      function s() {
        this.set("status", n(53).FAILED),
          n(12).trackUploadFunnel({
            chapter: ["failed", "uploading"],
            uploadId: this.getTrackingId(),
          });
      }
      function u(e) {
        this.get("transfer").setTotal(e.total).add(e.loaded);
      }
      function l() {
        this.get("transcoding").setTotal(100).add(100),
          this.set("status", n(53).COMPLETE),
          n(12).trackUploadFunnel({
            chapter: "complete",
            uploadId: this.getTrackingId(),
          });
      }
      function c() {
        this.get("transcoding").setTotal(100),
          this.set("status", n(53).FAILED),
          n(12).trackUploadFunnel({
            chapter: ["failed", "transcoding"],
            uploadId: this.getTrackingId(),
          });
      }
      function d(e) {
        this.get("transcoding").setTotal(100).add(e);
      }
    },
    263: function (e, t, n) {
      var i = {
          "all-music": n(1).Lingua.t("All music genres"),
          "all-audio": n(1).Lingua.t("All audio genres"),
          alternativerock: n(1).Lingua.t("Alternative Rock"),
          ambient: n(1).Lingua.t("Ambient"),
          classical: n(1).Lingua.t("Classical"),
          country: n(1).Lingua.t("Country"),
          danceedm: n(1).Lingua.t("Dance &amp; EDM"),
          dancehall: n(1).Lingua.t("Dancehall"),
          deephouse: n(1).Lingua.t("Deep House"),
          disco: n(1).Lingua.t("Disco"),
          drumbass: n(1).Lingua.t("Drum &amp; Bass"),
          dubstep: n(1).Lingua.t("Dubstep"),
          electronic: n(1).Lingua.t("Electronic"),
          folksingersongwriter: n(1).Lingua.t("Folk &amp; Singer-Songwriter"),
          hiphoprap: n(1).Lingua.t("Hip-hop &amp; Rap"),
          house: n(1).Lingua.t("House"),
          indie: n(1).Lingua.t("Indie"),
          jazzblues: n(1).Lingua.t("Jazz &amp; Blues"),
          latin: n(1).Lingua.t("Latin"),
          metal: n(1).Lingua.t("Metal"),
          piano: n(1).Lingua.t("Piano"),
          pop: n(1).Lingua.t("Pop"),
          rbsoul: n(1).Lingua.t("R&amp;B &amp; Soul"),
          reggae: n(1).Lingua.t("Reggae"),
          reggaeton: n(1).Lingua.t("Reggaeton"),
          rock: n(1).Lingua.t("Rock"),
          soundtrack: n(1).Lingua.t("Soundtrack"),
          speech: n(1).Lingua.t("Speech"),
          techno: n(1).Lingua.t("Techno"),
          trance: n(1).Lingua.t("Trance"),
          trap: n(1).Lingua.t("Trap"),
          triphop: n(1).Lingua.t("Triphop"),
          world: n(1).Lingua.t("World"),
          audiobooks: n(1).Lingua.t("Audiobooks"),
          business: n(1).Lingua.t("Business"),
          comedy: n(1).Lingua.t("Comedy"),
          entertainment: n(1).Lingua.t("Entertainment"),
          learning: n(1).Lingua.t("Learning"),
          newspolitics: n(1).Lingua.t("News &amp; Politics"),
          religionspirituality: n(1).Lingua.t("Religion &amp; Spirituality"),
          science: n(1).Lingua.t("Science"),
          sports: n(1).Lingua.t("Sports"),
          storytelling: n(1).Lingua.t("Storytelling"),
          technology: n(1).Lingua.t("Technology"),
        },
        r = n(0)
          .chain(n(626))
          .values()
          .reduce(function (e, t) {
            return (e[t] = !0), e;
          }, {})
          .value();
      e.exports = {
        genreLabels: i,
        englishLabels: n(626),
        isSupportedGenre: function (e) {
          return !!r[e];
        },
      };
    },
    27: function (e, t) {
      e.exports = {
        CONSUMER_SUBSCRIPTION_MID_TIER: "consumer-mid-tier",
        CONSUMER_SUBSCRIPTION_HIGH_TIER: "consumer-high-tier",
        CONSUMER_SUBSCRIPTION_HIGH_DJ_TIER: "consumer-high-dj-tier",
        CONSUMER_SUBSCRIPTION_FREE: "free",
        CREATOR_SUBSCRIPTION_FREE: "free",
        CREATOR_SUBSCRIPTION_PRO: "creator-pro",
        CREATOR_SUBSCRIPTION_PRO_UNLIMITED: "creator-pro-unlimited",
      };
    },
    273: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return e in t && "string" == typeof t[e];
      }
      n.r(t),
        n.d(t, "ParseableTracklistFormats", function () {
          return p;
        }),
        n.d(t, "UnparseableTracklistFormats", function () {
          return g;
        }),
        n.d(t, "TracklistFormats", function () {
          return v;
        }),
        n.d(t, "detectFormat", function () {
          return y;
        }),
        n.d(t, "parseTracklist", function () {
          return _;
        });
      var r = n(367),
        o = n(7),
        a = n(29),
        s = /^(?=.*name)(?=.*start time)(?=.*end time)(?=.*artist).+/,
        u = /^(\d{2}):(\d{2}):(\d{2})/;
      var l = /.*Track Title.*Artist.*Time.*/;
      var c = /soundcloud.com(\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+[/[a-zA-Z0-9_-]*]*)/,
        d = /^([^\/\t\n\r]+)[-|–|—]([^\/\t\n\r]+)/;
      function f(e) {
        return (t = e), c.test(t) || d.test(t);
        var t;
      }
      var h, p, g;
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      !(function (e) {
        (e.ScFreeform = "ScFreeForm"),
          (e.Serato = "Serato"),
          (e.Rekordbox = "Rekordbox");
      })(p || (p = {})),
        (function (e) {
          e.Unsupported = "Unsupported";
        })(g || (g = {}));
      var v = m({}, p, g);
      function y(e) {
        if (!e || 0 === e.length) return g.Unsupported;
        var t,
          n = (function (e) {
            var t = e.indexOf("\n");
            return t > 0 ? e.substr(0, t) : e;
          })(e);
        return (
          (t = n),
          l.test(t)
            ? p.Rekordbox
            : (function (e) {
                return s.test(e);
              })(n)
            ? p.Serato
            : f(n)
            ? p.ScFreeform
            : g.Unsupported
        );
      }
      function _(e, t) {
        return b[t](e);
      }
      var b =
        (((h = {})[p.ScFreeform] = function (e) {
          var t = (function (e) {
            return e.split("\n");
          })(e).reduce(
            function (e, t, n) {
              if (c.test(t)) {
                var i = c.exec(t),
                  r = ((i && i[1]) || "").trim().split("/"),
                  o = r[1],
                  a = r[2],
                  s = r[3];
                o && a
                  ? e.tracks.push({
                      userPermalink: o,
                      trackPermalink: a,
                      secretToken: s,
                    })
                  : e.invalidEntries.push({
                      row: n,
                    });
              } else if (d.test(t)) {
                var u = d.exec(t),
                  l = u && u[1] && u[1].trim(),
                  f = u && u[2] && u[2].trim();
                l && f
                  ? e.tracks.push({
                      artist: l,
                      title: f,
                    })
                  : e.invalidEntries.push({
                      row: n,
                    });
              } else
                e.invalidEntries.push({
                  row: n,
                });
              return e;
            },
            {
              tracks: [],
              invalidEntries: [],
            }
          );
          return 0 === t.tracks.length ? o.reject() : o.resolve(t);
        }),
        (h[p.Rekordbox] = function (e) {
          var t = r.parse(e, {
              header: !0,
            }),
            n = t.data.reduce(function (e, t) {
              if (t && "object" == typeof t) {
                var n = i("Track Title", t) ? t["Track Title"] : void 0,
                  r = i("Artist", t) ? t.Artist : void 0;
                r &&
                  n &&
                  e.push({
                    artist: r,
                    title: n,
                  });
              }
              return e;
            }, []),
            a = t.errors.map(function (e) {
              return {
                row: e.row,
              };
            });
          return 0 === n.length
            ? o.reject()
            : o.resolve({
                tracks: n,
                invalidEntries: a,
              });
        }),
        (h[p.Serato] = function (e) {
          var t,
            n = r.parse(e, {
              header: !0,
            }),
            s = n.data.reduce(function (e, n, r) {
              if (r > 0 && n && "object" == typeof n) {
                var o = i("name", n) ? n.name : void 0,
                  s = i("artist", n) ? n.artist : void 0,
                  l = i("start time", n) ? n["start time"] : void 0;
                if (s && o) {
                  var c = {
                    artist: s,
                    title: o,
                  };
                  if (l && u.test(l)) {
                    var d = u.exec(l);
                    if (d) {
                      var f = d[1],
                        h = d[2],
                        p = d[3],
                        g =
                          parseInt(f, 10) * a.MS_IN_HOUR +
                          parseInt(h, 10) * a.MS_IN_MINUTE +
                          parseInt(p, 10) * a.MS_IN_SECOND;
                      void 0 === t && (t = g), (c.startMs = Math.max(0, g - t));
                    }
                  }
                  e.push(c);
                }
              }
              return e;
            }, []),
            l = n.errors.map(function (e) {
              return {
                row: e.row,
              };
            });
          return 0 === s.length
            ? o.reject()
            : o.resolve({
                tracks: s,
                invalidEntries: l,
              });
        }),
        h);
    },
    275: function (e, t, n) {
      var i = /^http:/,
        r = /default/,
        o = (e.exports = {
          tagOptions: {
            whitelist: [
              "alt",
              "class",
              "height",
              "itemprop",
              "src",
              "title",
              "width",
            ],
          },
          availableSizes: [
            [20, "t20x20"],
            [50, "t50x50"],
            [120, "t120x120"],
            [200, "t200x200"],
            [500, "t500x500"],
          ],
          availableVisualsSizes: [
            [1240, "t1240x260"],
            [2480, "t2480x520"],
          ],
          imageUrlRegex: /^.*\/(\w+)-([-a-zA-Z0-9]+)-([a-z0-9]+)\.(jpg|png|gif).*$/i,
          markup: function (e, t) {
            var i = this.getMarkupAttrs(e, t);
            return n(380).getMarkup("img", i, this.tagOptions);
          },
          getMarkupAttrs: function (e, t) {
            return (
              (e = a(e)),
              n(0).assign(
                {
                  src: this.urlFrom(e, t.size),
                  width: t.size,
                  height: t.size,
                  alt: this.getAltText(e),
                },
                t
              )
            );
          },
          urlFrom: function (e, t, n, r) {
            var s =
              (e = a(e)) &&
              (e.calculated_artwork_url ||
                e.artwork_url ||
                e.avatar_url ||
                (!r &&
                  (function (e) {
                    var t, n;
                    if (e)
                      for (t = 0, n = e.length; t < n; ++t)
                        if (!o.isDefaultImage(e[t].artwork_url))
                          return e[t].artwork_url;
                    return null;
                  })(e.tracks)) ||
                (e.user && e.user.avatar_url));
            return (
              (s = s ? s.replace(i, "https:") : ""), this.setFormat(s, t, n)
            );
          },
          setFormat: function (e, t, i) {
            if (this.isDefaultImage(e)) return "";
            var r = this.parseImageUrl(e);
            if (r) {
              var a = r[1],
                u = r[3],
                l = (function (e, t) {
                  var i =
                      "visuals" === e
                        ? o.availableVisualsSizes
                        : o.availableSizes,
                    r =
                      n(0).find(i, function (e) {
                        return e[0] >= t;
                      }) || n(0).last(i);
                  return "t20x20" === r[1] && "artworks" === e ? "tiny" : r[1];
                })(a, t);
              l && (e = e.replace(u, l)), i && (e = s.call(this, e));
            }
            return e;
          },
          getOriginalFormat: function (e, t) {
            if (this.isDefaultImage(e)) return "";
            var n = this.parseImageUrl(e);
            if (n) {
              var i = n[3];
              (e = e.replace(i, "original")), t && (e = s.call(this, e));
            }
            return e;
          },
          isDefaultImage: function (e) {
            return !e || r.test(e);
          },
          parseImageUrl: function (e) {
            return o.imageUrlRegex.exec(e);
          },
          getAltText: function (e) {
            return (e = a(e))
              ? e.username
                ? n(509).get(e, !0) + " avatar"
                : n(509).get(e)
              : "";
          },
          isSquare: function (e) {
            return e.width === e.height;
          },
        });
      function a(e) {
        return e && (e.attributes || e);
      }
      function s(e) {
        var t,
          n = this.parseImageUrl(e);
        return (
          n &&
            1 !== (t = (n[3].charCodeAt(0) % 4) + 1) &&
            (e = e.replace("//i1.", "//i" + t + ".")),
          e
        );
      }
    },
    277: function (e, t, n) {
      (function (t) {
        var i = n(75).typedArrays ? Uint8Array : Array,
          r = n(4).get("wisHost") + "/90GaSwazbrh1_m.png",
          o = new (n(201))({
            maxLength: 500,
          }),
          a = /\.png$/,
          s = (e.exports = {
            loadWaveformData: function (e) {
              var t = u(e),
                i = o.get(t);
              return (
                i ||
                  ((i = l(t).then(f, function () {
                    return n(7).resolve(d());
                  })),
                  o.set(t, i)),
                i
              );
            },
            loadWaveformDataRaw: function (e) {
              return l(u(e)).then(null, function () {
                return n(7).resolve(s.getFakeWaveformDataResponse());
              });
            },
            getFakeWaveformDataResponse: function () {
              var e = d();
              return {
                samples: e,
                width: e.length,
                height: Math.max.apply(Math, e),
              };
            },
          });
        function u(e) {
          return (!e || e.indexOf("/images/player-waveform-medium.png") > -1
            ? r
            : e
          ).replace(a, ".json");
        }
        function l(e) {
          return t.ajax({
            url: e,
            type: "GET",
            dataType: "json",
            timeout: 1e4,
            priority: n(155).RequestPriorities.LOW,
          });
        }
        var c = n(0).memoize(function (e) {
            return function (t, n, i) {
              return (t[i] = Math.round(Math.pow((e - n) / e, 1 / 1.5) * e)), t;
            };
          }),
          d = n(0).memoize(function () {
            for (var e = new i(1800), t = 0; t < 1800; ++t)
              e[t] = Math.round(15 * Math.sin((t / 1800) * Math.PI * 10) + 105);
            return e;
          }),
          f = function (e) {
            return e.samples.reduce(c(e.height), new i(e.samples.length));
          };
      }.call(this, n(15)));
    },
    278: function (e, t, n) {
      var i = [
          "q",
          "q[fulltext]",
          "filter.duration",
          "filter.created_at",
          "filter.license",
          "filter.genre",
          "filter.genre_or_tag",
          "filter.place",
          "query_urn",
        ],
        r = {
          "user-promoted": "user",
          "track-promoted": "track",
        };
      e.exports = {
        highlightText: function (e, t, i) {
          var r,
            o = n(0).assign(
              {
                start: "<b>",
                end: "</b>",
              },
              i
            ),
            a = e.split("");
          if (!t) return e;
          for (r = t.length; r--; )
            a.splice(t[r].end, 0, o.end), a.splice(t[r].start, 0, o.start);
          return a.join("");
        },
        getParams: function () {
          var e = n(26).parse(window.location.href);
          return this.getValidParams(e.query);
        },
        getValidParams: function (e) {
          return n(0).pick(e, i);
        },
        modifyParamsWith: function (e, t) {
          var i = {},
            r = this.getParams();
          return (
            void 0 === t && r.hasOwnProperty(e)
              ? delete r[e]
              : ((i[e] = t), n(0).assign(r, i)),
            n(26).stringify({
              query: r,
            })
          );
        },
        getFilters: function (e) {
          var t = {},
            i = /^filter\./;
          return (
            (e = e || this.getParams()),
            n(0).each(e, function (e, n) {
              i.test(n) && (t[n] = e);
            }),
            n(0).isEmpty(t) ? void 0 : t
          );
        },
        fuzzy: function (e, t, i) {
          var r,
            o = e.replace(/\W+/gi, "").split(""),
            a = new RegExp("\\b(" + o.join(").*?(") + ")", "i");
          return e
            ? ((r = t
                .map(function (t) {
                  var r,
                    o,
                    s = (i ? (t.get ? t.get(i) : t[i]) : t).toString(),
                    u = n(318)(s),
                    l = a.exec(u),
                    c = [];
                  if (l) {
                    for (r = l.index, o = 1; o < l.length; ++o)
                      (r = u.indexOf(l[o].toLowerCase(), r) + 1),
                        c.push({
                          start: r - 1,
                          end: r,
                        });
                    for (o = c.length; --o; )
                      c[o - 1].end === c[o].start &&
                        ((c[o - 1].end = c[o].end), c.splice(o, 1));
                    return {
                      item: t,
                      highlights: c,
                      score: e.length / l[0].length / s.length - c.length,
                    };
                  }
                })
                .filter(Boolean)).sort(function (e, t) {
                return t.score - e.score;
              }),
              r)
            : t.map(function (e) {
                return {
                  item: e,
                  highlights: [],
                  score: 1,
                };
              });
        },
        searchCategoryToFacet: function (e) {
          return {
            sounds: "sound",
            high_tier: "sound",
            sets: "set",
            playlists: "set",
            albums: "album",
            people: "person",
          }[e];
        },
        facetToSearchCategory: function (e) {
          return {
            sound: "sounds",
            set: "playlists",
            person: "people",
          }[e];
        },
        parseOrganicResults: function (e) {
          var t = e.collection,
            i = void 0 === t ? [] : t,
            r = e.total_results,
            o = void 0 === r ? 0 : r,
            s = n(0).compact(i);
          return {
            count: o - (i.length - s.length),
            records: s.map(function (e) {
              return a(e, null);
            }),
          };
        },
        parsePremiumResults: function (e) {
          var t = e.premium_content || {
            collection: [],
            total_results: 0,
          };
          return {
            count: t.total_results,
            records: t.collection.map(function (e) {
              return a(e, "high_tier");
            }),
          };
        },
        parsePromotedResults: function (e) {
          var t = [o(e.promoted_content)].filter(Boolean);
          return {
            count: t.length,
            records: t,
          };
        },
        parseResult: a,
      };
      function o(e) {
        if (!e) return null;
        var t = e.promoted,
          n = r[e.type];
        return n
          ? {
              ad_urn: t.ad_urn,
              campaign: "promoted",
              kind: n,
              origin: e[n],
              tracking: t.tracking,
            }
          : (window.console.warn("Unknown promoted type:", e.type), null);
      }
      function a(e, t) {
        return {
          kind: e.kind,
          origin: e,
          campaign: t,
        };
      }
    },
    279: function (e, t, n) {
      (function (t) {
        var i = (e.exports = n(31).View.extend({
          css: null,
          template: null,
          tracking: null,
          views: null,
          _currentViews: null,
          slots: null,
          includeFooter: null,
          displayHeader: !0,
          initialize: function () {
            (this.views = {}), (this._currentViews = {});
          },
          setArgs: function (e) {
            this.args = e || {};
          },
          setup: function () {
            var e = n(7).defer();
            return n(0).defer(e.resolve), e;
          },
          dispose: n(0).noop,
          _dispose: function () {
            var e, t, i;
            this.dispose(),
              r()
                ? ((t = (e = this).$el),
                  (i = e.el),
                  n(65).removeElement(i),
                  o(e),
                  n(596).scheduleIdleTask(function () {
                    return t.remove();
                  }))
                : (n(0).invoke(this._currentViews, "_dispose"),
                  n(0).invoke(this.views, "_dispose"),
                  this.$el.remove()),
              delete this.slots,
              delete this.views,
              delete this._currentViews;
          },
          switchLayout: function (e) {
            e &&
              (r()
                ? o(this)
                : (n(0).invoke(this._currentViews, "_dispose"),
                  n(0).invoke(this.views, "_dispose")),
              (this.template = e.template),
              (this.includeFooter = e.includeFooter),
              (this.slots = null),
              this.$el.empty());
          },
          getTemplateData: n(0).noop,
          render: function () {
            var e, i;
            this.includeFooter && (e = this.views["l-footer"]),
              "" === this.el.innerHTML &&
                (n(379).render(this.template, this.getTemplateData(), this.el),
                (this.slots = {}),
                n(0).each(
                  this.views,
                  function (e, t) {
                    this.slots[t] = this.$("." + t)[0];
                  },
                  this
                )),
              n(0).each(
                this.views,
                function (e, t) {
                  this._currentViews[t] !== e &&
                    (this._currentViews[t] &&
                      (r()
                        ? a(this._currentViews[t])
                        : this._currentViews[t]._dispose()),
                    e.render(),
                    "l-footer" !== t && this.slots[t].appendChild(e.el),
                    (this._currentViews[t] = e));
                },
                this
              ),
              (i = this.$(this.includeFooter)),
              e && !e.disposed && i[0] && i.append(e.$el),
              t(window.document.body).toggleClass(
                "m-hideHeader",
                !this.displayHeader
              );
            var o =
              window.history &&
              window.history.state &&
              window.history.state.scrollTop;
            return n(290).restoreScrollPosition(o), this.renderDecorate(), this;
          },
          renderDecorate: n(0).noop,
          setViews: function (e) {
            this.includeFooter && (e["l-footer"] = [n(735)]);
            var t = n(7).defer();
            return (
              n(0).each(
                e,
                function (e, t) {
                  var n = e[0],
                    i = e[1];
                  (this._currentViews[t] &&
                    this._currentViews[t].isEquivalentTo(n, i) &&
                    !this._currentViews[t].disposed) ||
                    (this.views[t] = new n(i));
                },
                this
              ),
              n(0).delay(t.resolve.bind(t)),
              t
            );
          },
          getChangeEventData: function (e) {
            return {
              layoutName: e,
              tracking: n(0).mapObject(
                this.tracking,
                function (e, t) {
                  return n(0).isFunction(e) ? e.call(this) : e;
                },
                this
              ),
              args: this.args,
            };
          },
          setTitle: function (e, t) {
            n(505).set(e, t);
          },
          t: n(1).Lingua.t,
          tp: n(1).Lingua.tp,
        }));
        function r() {
          return n(4).get("features").has("internal_qa");
        }
        function o(e) {
          n(0)
            .uniq([].concat(n(0).values(e._currentViews), n(0).values(e.views)))
            .forEach(a);
        }
        function a(e) {
          n(65).removeElement(e.el),
            (function e(t, n) {
              t &&
                ((t.subviews || []).forEach(function (t) {
                  return e(t, n);
                }),
                n(t));
            })(e, function (e) {
              return e.scheduleDisposal();
            });
        }
        n(1422).applyTo(i.prototype);
      }.call(this, n(15)));
    },
    28: function (e, t, n) {
      var i = (e.exports = {
        isVoidElement: n(0).memoize(function (e) {
          return -1 !== a.indexOf(e);
        }),
        isBoolAttribute: n(0).memoize(function (e) {
          return -1 !== o.indexOf(e);
        }),
        el: function (e, t, n) {
          return (
            void 0 === t && (t = {}),
            void 0 === n && (n = ""),
            i.isVoidElement(e)
              ? r(e, t)
              : r(e, t) +
                i.children(n) +
                (function (e) {
                  return "</" + e + ">";
                })(e)
          );
        },
        children: function (e) {
          return Array.isArray(e) ? e.filter(Boolean).join("") : e;
        },
        voidEl: function (e, t) {
          return void 0 === t && (t = {}), r(e, t);
        },
        subview: function (e, t) {
          return void 0 === t && (t = {}), n(429).registerSubview(e, t);
        },
        reactSubview: function (e, t) {
          return (
            void 0 === t && (t = {}),
            n(430).default.handlebarHelper(e, {
              hash: t,
            })
          );
        },
        toAttributesString: function (e) {
          var t,
            i,
            r = [];
          return (
            n(0).each(e, function (e, o) {
              (t = o + '="'),
                (i = []),
                n(0).isObject(e)
                  ? n(0).each(e, function (e, t) {
                      i.push(t + ":" + e);
                    })
                  : i.push(e),
                r.push(t + i.join(";") + '"');
            }),
            r.join(" ")
          );
        },
      });
      function r(e, t) {
        var r = (function (e) {
          return n(0)
            .map(e, function (e, t) {
              return i.isBoolAttribute(t) ? e && t : t + '="' + e + '"';
            })
            .filter(Boolean)
            .join(" ");
        })(t);
        return "<" + n(0).compact([e, r]).join(" ") + ">";
      }
      var o = [
          "allowfullscreen",
          "allowpaymentrequest",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "default",
          "defer",
          "disabled",
          "formnovalidate",
          "hidden",
          "ismap",
          "itemscope",
          "loop",
          "multiple",
          "muted",
          "nomodule",
          "novalidate",
          "open",
          "readonly",
          "required",
          "reversed",
          "selected",
          "typemustmatch",
        ],
        a = [
          "area",
          "base",
          "br",
          "col",
          "embed",
          "hr",
          "img",
          "input",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ];
    },
    285: function (e, t, n) {
      var i = new (n(57))("upload-settings");
      e.exports = {
        getUploadAsPlaylist: function () {
          var e = i.get("asPlaylist");
          return void 0 === e || e;
        },
        toggleUploadAsPlaylist: function () {
          i.set("asPlaylist", !this.getUploadAsPlaylist());
        },
        getDefaultAvailability: function () {
          switch (i.get("availability")) {
            case "private":
              return "private";
            case "public":
            default:
              return "public";
          }
        },
        setDefaultAvailability: function (e) {
          switch (e) {
            case "private":
              i.set("availability", "private");
              break;
            case "public":
              i.set("availability", "public");
              break;
            default:
              i.unset("availability");
          }
        },
        getDefaultTrackFormat: function () {
          var e = i.get("trackFormat");
          return "dj-mix" === e || "single-track" === e ? e : "single-track";
        },
        setDefaultTrackFormat: function (e) {
          i.set("trackFormat", e);
        },
      };
    },
    289: function (e, t, n) {
      function i() {
        return n(4).get("features").has("hq_audio");
      }
      e.exports = {
        STREAMING_QUALITY_SETTING: "streamingQuality",
        getCurrentQuality: function () {
          return n(92).get("streamingQuality") || n(216).SQ;
        },
        hqAllowed: i,
        initializeStreamingQuality: function () {
          n(92).get("streamingQuality") !== n(216).HQ ||
            i() ||
            n(92).set("streamingQuality", n(216).SQ);
        },
      };
    },
    29: function (e, t) {
      e.exports = {
        MS_IN_SECOND: 1e3,
        MS_IN_MINUTE: 6e4,
        MS_IN_HOUR: 36e5,
        MS_IN_DAY: 864e5,
        MS_IN_WEEK: 6048e5,
      };
    },
    290: function (e, t, n) {
      (function (t) {
        e.exports = {
          restoreScrollPosition: function (e) {
            var n,
              i,
              r = window.document,
              o = r.body,
              a = r.documentElement;
            if (null != e) {
              var s = function e() {
                i
                  ? (i = !1)
                  : (window.clearTimeout(n),
                    t(window).off("scroll", e),
                    (n = null));
              };
              !(function r() {
                (i = !0),
                  (a.scrollTop = o.scrollTop = e),
                  (a.scrollTop || o.scrollTop) === e
                    ? (t(window).off("scroll", s), (n = null))
                    : (n || t(window).on("scroll", s),
                      (n = window.setTimeout(r, 100)));
              })();
            } else a.scrollTop = o.scrollTop = 0;
          },
          findScrollableContainer: function (e) {
            var n = e.closest(".g-scrollable-inner"),
              i = e.closest(".modal");
            return n.length ? n : i.length ? i : t(window.document);
          },
        };
      }.call(this, n(15)));
    },
    293: function (e, t, n) {
      var i = /^[a-z-]+:\/\//,
        r = /^https?$/,
        o = /\.[a-z]{2,32}$/;
      e.exports = n(74).extend({
        message: n(1).Lingua.t("This URL is invalid."),
        strict: !1,
        check: function (e, t) {
          if (e) {
            if (!i.test(e)) {
              if (this.strict) return void t(!1);
              e = "http://" + e;
            }
            var a = n(26).parse(e);
            t(!a.userInfo && r.test(a.scheme) && o.test(a.host));
          } else t(!0);
        },
      });
    },
    294: function (e, t, n) {
      e.exports = {
        confirm: function (e) {
          var t = window.confirm(e);
          return n(7).defer()[t ? "resolve" : "reject"]();
        },
      };
    },
    298: function (e, t, n) {
      e.exports = {
        enabledAttributes: function (e) {
          return {
            isPrivate: i(e),
            isGeoblocked: r(e),
            hasMonetizationPolicy: o(e),
            isPendingMonetization: a(e),
            isMonetizable: s(e),
            hasMonetizationRestriction: u(e),
            isManagedByFeeds: l(e),
            isScheduled: c(e),
            isBlacklisted: f(e),
            isMastered: h(e),
          };
        },
        sharingDescription: function (e) {
          if (i(e))
            return d(e)
              ? n(1).Lingua.t("This track is private.")
              : n(1).Lingua.t("This playlist is private.");
        },
        managedByFeedsDescription: function (e) {
          if (l(e))
            return d(e)
              ? n(1).Lingua.t(
                  "This track is managed directly by its rightsholder."
                )
              : n(1).Lingua.t(
                  "This playlist cannot be edited or deleted, as it is managed directly by its rightsholder."
                );
        },
        monetizationDescription: function (e) {
          if (o(e)) {
            var t = e.get("monetization");
            if (!t)
              return d(e)
                ? n(1).Lingua.t("This track is monetizing.")
                : n(1).Lingua.t("This playlist is monetizing.");
            var i = t.start_timestamp,
              r = t.end_timestamp,
              a = p(i),
              s = p(r);
            return i && r
              ? d(e)
                ? n(1).Lingua.t(
                    "This track is monetizing between [[startDate]] and [[endDate]].",
                    {
                      startDate: a,
                      endDate: s,
                    }
                  )
                : n(1).Lingua.t(
                    "This playlist is monetizing between [[startDate]] and [[endDate]].",
                    {
                      startDate: a,
                      endDate: s,
                    }
                  )
              : i && !r
              ? d(e)
                ? n(1).Lingua.t(
                    "This track is monetizing from [[startDate]].",
                    {
                      startDate: a,
                    }
                  )
                : n(1).Lingua.t(
                    "This playlist is monetizing from [[startDate]].",
                    {
                      startDate: a,
                    }
                  )
              : !i && r
              ? d(e)
                ? n(1).Lingua.t("This track is monetizing until [[endDate]].", {
                    endDate: s,
                  })
                : n(1).Lingua.t(
                    "This playlist is monetizing until [[endDate]].",
                    {
                      endDate: s,
                    }
                  )
              : d(e)
              ? n(1).Lingua.t("This track is monetizing.")
              : n(1).Lingua.t("This playlist is monetizing.");
          }
        },
        monetizationPendingDescription: function (e) {
          if (a(e)) {
            var t = e.get("monetization");
            if (t) {
              var i = Date.now(),
                r = t.start_timestamp && new Date(t.start_timestamp),
                o = t.end_timestamp && new Date(t.end_timestamp),
                s = p(r),
                u = p(o);
              return r && i < r
                ? d(e)
                  ? n(1).Lingua.t(
                      "This track will start monetizing from [[startDate]].",
                      {
                        startDate: s,
                      }
                    )
                  : n(1).Lingua.t(
                      "This playlist will start monetizing from [[startDate]].",
                      {
                        startDate: s,
                      }
                    )
                : o && i > o
                ? d(e)
                  ? n(1).Lingua.t(
                      "This track is monetizing until [[endDate]].",
                      {
                        endDate: u,
                      }
                    )
                  : n(1).Lingua.t(
                      "This playlist is monetizing until [[endDate]].",
                      {
                        endDate: u,
                      }
                    )
                : n(97).isPremierMonetizationMember()
                ? d(e)
                  ? n(1).Lingua.t(
                      "Your request to monetize this track is being reviewed. It may take up to 24 hours."
                    )
                  : n(1).Lingua.t(
                      "Your request to monetize this playlist is being reviewed. It may take up to 24 hours."
                    )
                : n(1).Lingua.t(
                    "Your monetization request is pending. Refresh the page to update."
                  );
            }
          }
        },
        monetizableDescription: function (e) {
          if (s(e))
            return d(e)
              ? n(1).Lingua.t("This track could be monetized.")
              : n(1).Lingua.t("This playlist could be monetized.");
        },
        monetizationRestrictionDescription: function (e) {
          if (u(e))
            return d(e)
              ? n(1).Lingua.t(
                  "Tracks can only be monetized if they are between 30 seconds and 10 minutes long."
                )
              : n(1).Lingua.t(
                  "Playlists can only be monetized if they contain tracks that are between 30 seconds and 10 minutes long"
                );
        },
        schedulingDescription: function (e) {
          if (!c(e)) return null;
          var t = p(e.get("scheduled_public_date"), "readable_with_weekday");
          return t
            ? d(e)
              ? n(1).Lingua.t(
                  "This track is scheduled to become public on [[publicDate]].",
                  {
                    publicDate: t,
                  }
                )
              : n(1).Lingua.t(
                  "This playlist is scheduled to become public on [[publicDate]].",
                  {
                    publicDate: t,
                  }
                )
            : void 0;
        },
        geoblockingDescription: function (e) {
          if (r(e)) {
            var t = e.getAvailableCountries();
            return 1 === t.length
              ? d(e)
                ? n(1).Lingua.t(
                    "This track will only be playable in [[countryTitle]].",
                    {
                      countryTitle: n(51).country(t[0]).title,
                    }
                  )
                : n(1).Lingua.t(
                    "This playlist will only be playable in [[countryTitle]].",
                    {
                      countryTitle: n(51).country(t[0]).title,
                    }
                  )
              : d(e)
              ? n(1).Lingua.tp(
                  "This track will only be playable in %d country.",
                  "This track will only be playable in %d countries.",
                  t.length
                )
              : n(1).Lingua.tp(
                  "This playlist will only be playable in %d country.",
                  "This playlist will only be playable in %d countries.",
                  t.length
                );
          }
        },
        masteredDescription: function (e) {
          if (d(e) && e.isMastered())
            return n(1).Lingua.t("This track is mastered.");
        },
      };
      function i(e) {
        return e.isPrivate();
      }
      function r(e) {
        return e.isGeoblocked();
      }
      function o(e) {
        return e.hasMonetizationPolicy();
      }
      function a(e) {
        return e.isPendingMonetization();
      }
      function s(e) {
        return n(4).get("me").hasMonetization() && e.isMonetizable();
      }
      function u(e) {
        return s(e) && e.hasMonetizationRestriction();
      }
      function l(e) {
        return e.isManagedByFeeds();
      }
      function c(e) {
        return e.isScheduled();
      }
      function d(e) {
        return "sound" === e.resource_type;
      }
      function f(e) {
        return e.isBlacklisted();
      }
      function h(e) {
        return d(e) && e.isMastered();
      }
      function p(e, t) {
        return (
          void 0 === t && (t = "default"),
          e ? n(13).LinguaLib.dateTimeHelper.format(new Date(e), t) : null
        );
      }
    },
    301: function (e, t) {
      e.exports = {
        start: "auth::start",
        abort: "auth::abort",
        initiate: "initiate",
        initiate_social: "auth::initiate_social",
        need_help: "auth::need_help",
        forgot_email: "auth::forgot_email",
        forgot_password: "auth::forgot_password",
        reset_email_continue: "auth::reset_email_continue",
        sign_in_error: "sign_in::error",
        sign_up_error: "sign_up::error",
        sign_in_success: "sign_in_success",
        sign_up_success: "sign_up_success",
        sign_out: "sign_out",
      };
    },
    302: function (e, t, n) {
      e.exports = new (n(16))({
        _editState: n(104).NONE,
        override: {
          isEditing: function () {
            return this._editState === n(104).EDITING;
          },
          isSaving: function () {
            return this._editState === n(104).SAVING;
          },
          isCanceling: function () {
            return this._editState === n(104).CANCELING;
          },
          getEditState: function () {
            return this._editState;
          },
        },
        setEditState: function (e, t) {
          var n = this._editState;
          return (
            n !== e &&
              ((this._editState = e),
              this.trigger("change:editState", this, e, n, t || {})),
            this
          );
        },
      });
    },
    303: function (e, t, n) {
      e.exports = new (n(16))({
        _resetOrder: null,
        _originalOrder: null,
        requires: ["getCurrentOrder", "reorder", "resetOrder", "saveOrder"],
        around: {
          saveOrder: function (e, t) {
            var i = n(7)
              .defer()
              .always(this.setEditState.bind(this, n(104).NONE));
            return (
              this.setEditState(n(104).SAVING),
              n(7)
                .all([e(t)])
                .done(i.resolve)
                .fail(i.reject),
              (this._originalOrder = null),
              i
            );
          },
          resetOrder: function (e, t) {
            var i = n(7)
              .defer()
              .always(this.setEditState.bind(this, n(104).NONE));
            return (
              this.setEditState(n(104).CANCELING),
              n(0).isEqual(this.getOriginalOrder(), this.getCurrentOrder())
                ? i.resolve()
                : (this instanceof n(39) && (this.next_href = null),
                  n(7)
                    .all([e(t)])
                    .done(i.resolve)
                    .fail(i.reject)),
              i
            );
          },
        },
        saveResetOrder: function () {
          (this._resetOrder = this.getCurrentOrder()),
            (this._originalOrder = this._originalOrder || this._resetOrder);
        },
        getResetOrder: function () {
          return this._resetOrder || [];
        },
        getOriginalOrder: function () {
          return this._originalOrder;
        },
      });
    },
    319: function (e, t) {
      e.exports = {
        COOKIE_CONSENT_NAME: "cookie_consent",
        COOKIE_CONSENT_VALUE: "1",
      };
    },
    320: function (e, t, n) {
      function i(e, t, n) {
        return (i = r()
          ? Reflect.construct
          : function (e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var r = new (Function.bind.apply(e, i))();
              return n && o(r, n.prototype), r;
            }).apply(null, arguments);
      }
      function r() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a,
        s = [];
      function u(e, t) {
        return (!t.neverRelease && t.sweep()) || e;
      }
      function l() {
        s.forEach(function (e) {
          e.beginSweep();
        });
        do {} while (s.reduce(u, !1));
        s.forEach(function (e) {
          e.endSweep(), e.mark();
        });
      }
      function c(e) {
        void 0 === e && (e = 6e4), d(), (a = window.setInterval(l, e));
      }
      function d() {
        a && (window.clearInterval(a), (a = null));
      }
      function f(e) {
        e.off && e.off(), e.stopListening && e.stopListening();
      }
      var h,
        p =
          ((h = 0),
          function () {
            return "f-" + ++h;
          });
      function g(e) {
        return e.__constructor__ || e;
      }
      c(),
        (e.exports = {
          GC_INTERVAL: 6e4,
          setStoreCleanupInterval: c,
          clearStoreCleanupInterval: d,
          applyTo: function e(t, r) {
            delete (r = n(0).assign(
              {
                neverRelease: !1,
                cleanupInstantly: !1,
                hashFn: function () {
                  return null;
                },
                prepareArgs: function () {
                  return arguments;
                },
                prepareInstance: function () {
                  return this;
                },
                getIncrementValue: function () {
                  return 1;
                },
                onHold: n(0).noop,
                onRelease: n(0).noop,
                onCleanup: null,
              },
              r,
              t
            )).prototype;
            var o,
              a = t.extend || n(31).Model.extend,
              u = r.neverRelease,
              c = new (n(577))({
                autoCleanup: r.cleanupInstantly,
                onCleanup:
                  ((o = r.onCleanup),
                  o
                    ? function (e) {
                        f(e), o.apply(e, arguments);
                      }
                    : f),
                onIncrement: r.onHold,
                onDecrement: r.onRelease,
                neverRelease: u,
              });
            s.push(c);
            var d = {
                hold: u
                  ? n(0).noop
                  : function (e) {
                      c.increment(this.resource_id, e);
                    },
                release: u
                  ? n(0).noop
                  : function (e) {
                      c.decrement(this.resource_id, e);
                    },
                _usageCount: function () {
                  return c.countFor(this.resource_id);
                },
                constructor: function () {
                  for (
                    var e = arguments.length, n = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    n[i] = arguments[i];
                  var r = h.prepareArgs.apply(this, n),
                    o = h.hashFn.apply(this, r) || p(),
                    a = h.neverRelease ? 1 : h.getIncrementValue.apply(null, r),
                    s = c.get(o);
                  if (s)
                    return (
                      this.constructor.neverRelease || s.hold(a),
                      h.prepareInstance.apply(s, r),
                      s
                    );
                  (s = this),
                    c.set(o, s),
                    s.constructor.neverRelease || s.hold(a - 1),
                    (s.resource_id = o),
                    g(t).apply(s, r),
                    h.prepareInstance.apply(s, r);
                },
              },
              h = a.call(t, d, r);
            return n(0).assign(h, {
              __constructor__: g(t),
              reset: function () {
                c.reset();
              },
              extend: function (t) {
                (t = t || {}),
                  n(0).isArray(t) &&
                    (t = n(0).assign.apply(null, [{}].concat(t)));
                var i = a.apply(h, arguments);
                i.extend = a;
                var r = e(i, h);
                return (
                  r.__super__ &&
                    (r.__super__ = r.__super__.constructor.__super__),
                  r
                );
              },
              instances:
                ((c.add = function (e) {
                  var t = h.hashFn(e.attributes);
                  (e.resource_id = t), t && this.set(t, e);
                }),
                c),
              getInstance: function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  c.get(
                    e.resource_id && !n(0).isObject(e.resource_id)
                      ? e.resource_id
                      : h.hashFn(e, t)
                  )
                );
              },
              getNewInstance: function () {
                var e = h.hashFn;
                h.hashFn = p;
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                var o = i(h, n);
                return (h.hashFn = e), o;
              },
              removeInstance: function (e) {
                c.decrement(e.resource_id, 1 / 0), l();
              },
            });
          },
        });
    },
    321: function (e, t, n) {
      e.exports = function (e, t, i, r, o, a) {
        var s = t || e.getCurrentSound(),
          u = e instanceof n(39) ? n(963)(e) : n(964)(e),
          l = n(965)(u),
          c = (n(56).shouldEnableSnippetUX() ? n(966) : n(967))(
            l,
            s,
            function (e) {
              var t = e.sound,
                r = e.index,
                o = e.metadata,
                a = o.originalModel,
                s = o.queryPosition,
                u = o.sourceInfo,
                l = new (n(145))(
                  {},
                  {
                    contextSnapshot: i,
                    originalModel: a,
                    queryPosition: s,
                    sound: t,
                    sourceInfo: u,
                    index: r,
                  }
                );
              return l.release(), l;
            },
            r,
            o,
            n(56).createSnippetUXSoundFilter({
              skipSnippetizedAndBlockedSounds: a,
            })
          ),
          d = c.next,
          f = c.prev,
          h = c.dispose,
          p = !1,
          g = !1;
        return (
          e.hold(),
          {
            dispose: m,
            next: {
              stream: d,
              dispose: function () {
                !p && g && m(), (p = !0);
              },
            },
            prev: {
              stream: f,
              dispose: function () {
                !g && p && m(), (g = !0);
              },
            },
          }
        );
        function m() {
          (p && g) || (e.release(), h(), (p = g = !0));
        }
      };
    },
    322: function (e) {
      e.exports = JSON.parse(
        '{"africa":{"DZ":"Algeria","AO":"Angola","AG":"Antigua And Barbuda","BJ":"Benin","BT":"Bhutan","BW":"Botswana","BF":"Burkina Faso","BI":"Burundi","CM":"Cameroon","CV":"Cape Verde","CF":"Central African Republic","TD":"Chad","KM":"Comoros","CG":"Congo","CD":"Democratic Republic of the Congo","CI":"Cote d\'Ivoire","EG":"Egypt","GQ":"Equatorial Guinea","ER":"Eritrea","ET":"Ethiopia","GF":"French Guiana","GA":"Gabon","GM":"Gambia","GH":"Ghana","GN":"Guinea","GW":"Guinea-Bissau","KE":"Kenya","LS":"Lesotho","LR":"Liberia","MW":"Malawi","ML":"Mali","MR":"Mauritania","YT":"Mayotte","MA":"Morocco","MZ":"Mozambique","NA":"Namibia","NE":"Niger","NG":"Nigeria","QA":"Qatar","RW":"Rwanda","ST":"Sao Tome And Principe","SN":"Senegal","SC":"Seychelles","SL":"Sierra Leone","SO":"Somalia","ZA":"South Africa","SD":"Sudan","SR":"Suriname","SZ":"Swaziland","TZ":"United Republic of Tanzania","TG":"Togo","TT":"Trinidad And Tobago","UG":"Uganda","EH":"Western Sahara","ZM":"Zambia","ZW":"Zimbabwe"},"asia":{"AF":"Afghanistan","BH":"Bahrain","BD":"Bangladesh","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","KH":"Cambodia","CN":"China","DJ":"Djibouti","HK":"Hong Kong","IN":"India","ID":"Indonesia","IR":"Islamic Republic of Iran","IQ":"Iraq","IL":"Israel","JP":"Japan","JO":"Jordan","KP":"Democratic People\'s Republic of Korea","KR":"Republic of Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LB":"Lebanon","LY":"Libyan Arab Jamahiriya","MO":"Macao","MY":"Malaysia","MN":"Mongolia","MM":"Myanmar","NP":"Nepal","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"State of Palestine","PH":"Philippines","SA":"Saudi Arabia","SG":"Singapore","SB":"Solomon Islands","SS":"South Sudan","LK":"Sri Lanka","SY":"Syrian Arab Republic","TW":"Taiwan, Province of China","TJ":"Tajikistan","TH":"Thailand","TL":"Timor-Leste","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","AE":"United Arab Emirates","UZ":"Uzbekistan","VN":"Viet Nam","YE":"Yemen"},"australasia":{"AS":"American Samoa","AU":"Australia","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CK":"Cook Islands","FJ":"Fiji","PF":"French Polynesia","HM":"Heard Island And McDonald Islands","KI":"Kiribati","MG":"Madagascar","MV":"Maldives","MH":"Marshall Islands","MU":"Mauritius","FM":"Federated States of Micronesia","NR":"Nauru","NC":"New Caledonia","NZ":"New Zealand","NU":"Niue","MP":"Northern Mariana Islands","PG":"Papua New Guinea","WS":"Samoa","TK":"Tokelau","TO":"Tonga","TV":"Tuvalu","VU":"Vanuatu","WF":"Wallis And Futuna","AQ":"Antarctica"},"europe":{"AX":"Aaland Islands","AL":"Albania","AD":"Andorra","AM":"Armenia","AT":"Austria","AZ":"Azerbaijan","BY":"Belarus","BE":"Belgium","BA":"Bosnia And Herzegovina","BV":"Bouvet Island","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FO":"Faroe Islands","FI":"Finland","FR":"France","TF":"French Southern Territories","GE":"Georgia","DE":"Germany","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GP":"Guadeloupe","GG":"Guernsey","VA":"Holy See (Vatican City State)","HU":"Hungary","IS":"Iceland","IE":"Ireland","IM":"Isle of Man","IT":"Italy","JE":"Jersey","KZ":"Kazakhstan","LV":"Latvia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MK":"North Macedonia","MT":"Malta","MQ":"Martinique","MD":"Republic of Moldova","MC":"Monaco","ME":"Montenegro","MS":"Montserrat","NL":"Netherlands","NF":"Norfolk Island","NO":"Norway","PL":"Poland","PT":"Portugal","RE":"Reunion","RO":"Romania","RU":"Russian Federation","SH":"Saint Helena, Ascension And Tristan Da Cunha","SM":"San Marino","RS":"Serbia","SX":"Sint Maarten (Dutch Part)","SK":"Slovakia","SI":"Slovenia","GS":"South Georgia And The South Sandwich Islands","ES":"Spain","SJ":"Svalbard And Jan Mayen","SE":"Sweden","CH":"Switzerland","UA":"Ukraine","GB":"United Kingdom","VG":"Virgin Islands, British"},"latin_america":{"AR":"Argentina","AW":"Aruba","BB":"Barbados","BZ":"Belize","BM":"Bermuda","BO":"Plurinational State of Bolivia","BQ":"Bonaire, Sint Eustatius And Saba","BR":"Brazil","CL":"Chile","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CW":"Curacao","EC":"Ecuador","SV":"El Salvador","FK":"Falkland Islands (Malvinas)","GD":"Grenada","GT":"Guatemala","GY":"Guyana","HN":"Honduras","JM":"Jamaica","MX":"Mexico","NI":"Nicaragua","PA":"Panama","PY":"Paraguay","PE":"Peru","PN":"Pitcairn","PR":"Puerto Rico","KN":"Saint Kitts And Nevis","LC":"Saint Lucia","UY":"Uruguay","VE":"Bolivarian Republic of Venezuela"},"north_america":{"AI":"Anguilla","BS":"Bahamas","CA":"Canada","KY":"Cayman Islands","DM":"Dominica","DO":"Dominican Republic","GU":"Guam","HT":"Haiti","BL":"Saint Barthelemy","MF":"Saint Martin (French Part)","PM":"Saint Pierre And Miquelon","VC":"Saint Vincent And The Grenadines","TC":"Turks And Caicos Islands","US":"United States","UM":"United States Minor Outlying Islands","VI":"Virgin Islands, U.S."}}'
      );
    },
    324: function (e, t) {
      e.exports = {
        plural: function (e, t, n) {
          return (n = "string" == typeof n ? n : t + "s"), 1 === e ? t : n;
        },
        possessive: function (e) {
          return e + "’s";
        },
        capitalize: function (e) {
          return "string" != typeof e
            ? ""
            : e
                .split(" ")
                .map(function (e) {
                  return e.charAt(0).toUpperCase() + e.substr(1);
                })
                .join(" ");
        },
      };
    },
    325: function (e, t, n) {
      e.exports = new (n(16))({
        requirePrototype: n(21).prototype,
        hasPermalink: function (e) {
          return (
            e &&
            this.has("permalink") &&
            this.get("permalink").toLowerCase() === e.toLowerCase()
          );
        },
      });
    },
    327: function (e, t, n) {
      e.exports = {
        oneline: {
          paragraphs: !1,
          whitelist: [],
          externalLinks: !1,
        },
        default: {
          redirectorPattern: "https://gate.sc?url=%s",
          addChecksum: n(1088).addChecksum,
        },
      };
    },
    328: function (e, t, n) {
      e.exports = {
        general: new (n(162).MediaElementManager)("audio", n(163)),
        fading: new (n(162).MediaElementManager)("audio", n(163)),
      };
    },
    329: function (e, t, n) {
      "use strict";
      var i;
      n.r(t),
        n.d(t, "EventType", function () {
          return i;
        }),
        (function (e) {
          (e.Undefined = "0"),
            (e.AccountLogin = "1"),
            (e.AccountCreation = "2"),
            (e.GenericFormFill = "9");
        })(i || (i = {}));
    },
    330: function (e, t, n) {
      (function (t) {
        var n;
        e.exports = {
          getScrollbarSize: function () {
            if (void 0 === n) {
              var e = t(
                '<div class="g-scrollable-inner" style="width:50px;height:50px;overflow:hidden; position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'
              );
              t("body").append(e);
              var i = t("div", e).innerWidth();
              e.css("overflow", "auto");
              var r = t("div", e).innerWidth();
              e.remove(), void 0 !== i && void 0 !== r && (n = i - r);
            }
            return n;
          },
        };
      }.call(this, n(15)));
    },
    331: function (e, t, n) {
      e.exports = n(438).extend({
        _statuses: null,
        initialize: function () {
          this._statuses = [];
        },
        add: n(0).noop,
        addTransfer: function (e) {
          this._statuses.push(e), i.call(this, "on", e), r.call(this);
        },
        removeTransfer: function (e) {
          var t = this._statuses.indexOf(e);
          t > -1 &&
            (this._statuses.splice(t, 1), i.call(this, "off", e), r.call(this));
        },
      });
      function i(e, t) {
        t[e]("data", r, this);
      }
      function r() {
        n(0).assign(
          this,
          this._statuses.reduce(a, {
            latest: 0,
            totalSize: 0,
          })
        ),
          this._statuses.length &&
            this.latest === this.totalSize &&
            o.call(this),
          this.trigger("data");
      }
      function o() {
        this._statuses.forEach(i.bind(this, "off")),
          (this._statuses.length = 0),
          r.call(this);
      }
      function a(e, t) {
        return (e.latest += t.latest), (e.totalSize += t.totalSize), e;
      }
    },
    332: function (e, t, n) {
      var i = (e.exports = new (n(16))({
        message: "",
        state: n(50).UNKNOWN,
        _lastError: null,
        _lastResult: null,
        _form: null,
        initialize: function (e, t) {
          n(0).assign(this, e), (this._form = t);
        },
        disable: function () {
          this.state = n(50).DISABLED;
        },
        reset: function () {
          (this.state = n(50).UNKNOWN),
            this._lastResult &&
              "pending" === this._lastResult.state() &&
              this._lastResult.reject(),
            (this._lastResult = null);
        },
        result: function (e, t) {
          return (
            (this.state = t ? n(50).VALID : n(50).INVALID),
            (this._lastError = t ? null : this.getMessage()),
            e.resolve({
              success: t,
              message: this._lastError,
            })
          );
        },
        getLastError: function () {
          return this._lastError;
        },
        around: {
          validate: function (e) {
            if (this.state === n(50).DISABLED)
              (this._lastError = null),
                (this._lastResult = n(7).resolve({
                  success: !0,
                  message: null,
                }));
            else if (this.state === n(50).UNKNOWN) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              this._lastResult = e.apply(this, i);
            }
            return this._lastResult;
          },
        },
        defaults: {
          check: n(0).noop,
          getMessage: function () {
            return (n(0).isFunction(this.message)
              ? this.message.call(this, this._form)
              : this.message || ""
            ).toString();
          },
        },
      }));
      (i.hydrateConstraintDefinition = function (e) {
        var t, n;
        return (
          Array.isArray(e) ? ((t = e[0]), (n = e[1])) : (t = e), new t(n, this)
        );
      }),
        (i.hydrateConstraintDefinitions = function (e) {
          var t = this;
          return n(0).reduce(
            e,
            function (e, n, r) {
              return (e[r] = n.map(i.hydrateConstraintDefinition, t)), e;
            },
            {}
          );
        });
    },
    333: function (e, t, n) {
      var i = [
          "description",
          "tags",
          "editing",
          "feedable",
          "genre",
          "artwork_url",
          "buyLink",
          "buyTitle",
          "sharing",
          "apiStreamable",
          "embeddableByAll",
          "downloadable",
          "license",
          "creativeCommonsLicense",
          "attribution",
          "nonCommercial",
          "nonDerivative",
          "shareAlike",
          "commentable",
          "publicComments",
          "stats",
          "geoblocking",
          "availableCountries",
          "labelName",
          "releaseDate",
          "monetizationEnabled",
          "monetizationTerritories",
          "monetizationStartTimezone",
          "monetizationStart",
          "monetizationStartLocalDate",
          "monetizationStartDate",
          "monetizationEndTimezone",
          "monetizationEnd",
          "monetizationEndLocalDate",
          "monetizationEndDate",
          "monetizationRightsholder",
          "offlineSyncEnabled",
        ],
        r = n(39).extend({
          model: n(93),
          url: null,
          isFullyPopulated: function () {
            return !0;
          },
          hasDataForView: function () {
            return !0;
          },
          uploadsWithoutErrors: function () {
            return this.filter(function (e) {
              return e.getAudible() && e.getAudible().id && !e.hasFailed();
            });
          },
        });
      e.exports = n(78).extend(
        n(624),
        n(628),
        n(303),
        n(630),
        n(633),
        n(629),
        {
          _soundUploads: null,
          _playlist: null,
          failedSaving: !1,
          resource_type: "playlist-upload",
          constraints: {
            title: [
              [
                n(62),
                {
                  message: "Enter a title.",
                },
              ],
              [
                n(87),
                {
                  maxLength: 100,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a title that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
            description: [
              [
                n(87),
                {
                  maxLength: 4e3,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a playlist description that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
            permalink: [
              [
                n(334),
                {
                  type: "playlist",
                  getResource: function () {
                    return this.getAudible();
                  },
                },
              ],
            ],
            customGenre: [
              [
                n(87),
                {
                  maxLength: 100,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a custom genre that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
          },
          actions: {
            save: function () {
              var e = this;
              return this.validate()
                .then(function (e) {
                  return e || n(7).reject();
                })
                .then(function () {
                  return (
                    e.set("editing", !1),
                    (t = e.getSoundUploads()),
                    (i = t
                      .map(function (e) {
                        return function () {
                          return e.set("editing", !1), e.saveEdits();
                        };
                      })
                      .reverse()),
                    n(7).sequential(i)
                  );
                  var t, i;
                })
                .then(this.saveEdits.bind(this))
                .fail(function () {
                  var t = e._soundUploads.uploadsWithoutErrors().length > 0;
                  return e.uploadsOverQuotaCount() > 0 && t
                    ? (e.set("sharing", "private"), e.saveEdits())
                    : n(7).reject();
                });
            },
          },
          getAttributesToBeSaved: function () {
            return {
              tracks: this._soundUploads
                .uploadsWithoutErrors()
                .map(function (e) {
                  return {
                    id: e.getAudible().id,
                  };
                }),
            };
          },
          getAttributesFromModel: function () {
            return {};
          },
          setup: function () {
            (this._soundUploads = new r()),
              this.listenTo(this._soundUploads, "remove", o)
                .listenTo(this, "imageDataChanged", a)
                .listenTo(this, "change", u);
          },
          addSoundForms: function (e) {
            this._soundUploads.add(e), s.call(this, e);
          },
          replaceUploads: function (e, t) {
            var n = this.getSoundUploads().slice();
            this.addSoundForms(t),
              n.forEach(function (e) {
                e.removeUpload(), e.collection.remove(e);
              }),
              this.get("fileUpload").addUploads(e);
          },
          validate: function (e) {
            void 0 === e && (e = {});
            var t = n(7).defer(),
              r = n(78).prototype.validate.apply(this, arguments),
              o = e,
              a = o.fields,
              s = a
                ? n(0).assign({}, e, {
                    fields: n(0).intersection(a, i),
                  })
                : e,
              u = this._soundUploads.map(function (e) {
                return e.validate.call(e, s);
              });
            return (
              u.push(r),
              n(7)
                .all(u)
                .done(function () {
                  var e = Array.prototype.slice.call(arguments);
                  t.resolve(e.every(n(0).identity));
                }),
              t
            );
          },
          setTitleFromFolder: function (e) {
            this.set("title", e);
          },
          onAudibleEdited: n(0).noop,
          onAudibleSaved: function () {
            (this.failedSaving = !1), l.call(this);
          },
          onSaveFailed: function (e) {
            (this.failedSaving = !0),
              this.setToFailed("save", e),
              this.set("editing", !0),
              this.setActionState("save", "enabled");
          },
          hasFailed: function () {
            return this.failedSaving;
          },
          cancel: function () {
            for (var e = this._soundUploads.length; e--; )
              this._soundUploads.at(e).cancel();
            this.destroy(), this._playlist && n(34).destroy(this._playlist);
          },
          resetOrder: n(0).noop,
          saveOrder: n(0).noop,
          getCurrentOrder: function () {
            return n(0).pluck(this.getSoundUploads(), "resource_id");
          },
          reorder: function (e) {
            this._soundUploads.sort({
              silent: !0,
              comparator: function (t) {
                return e.indexOf(t.resource_id);
              },
            });
          },
          getAudible: function () {
            return this._playlist;
          },
          createAudible: function () {
            return (this._playlist = new (n(48))()), this._playlist;
          },
          unsetAudible: function () {
            this._playlist = null;
          },
          getSoundUploadsCollection: function () {
            return this._soundUploads;
          },
          getSoundUploads: function () {
            return this._soundUploads.models;
          },
          uploadsOverQuotaCount: function () {
            return this.getSoundUploads().filter(function (e) {
              return e.failedDueToQuota();
            }).length;
          },
        },
        {
          neverRelease: !0,
        }
      );
      function o() {
        this._soundUploads.length || this.cancel();
      }
      function a(e) {
        this._soundUploads.invoke("setImageFile", e.file, e.source);
      }
      function s(e) {
        e.forEach(function (e) {
          e.set(n(0).pick(this.attributes, i));
        }, this);
      }
      function u(e) {
        e.changedAttributes() &&
          this._soundUploads.each(function (t) {
            t.set(n(0).pick(e.changedAttributes(), i));
          });
      }
      function l() {
        var e = this.getAudible();
        this._soundUploads.uploadsWithoutErrors().forEach(function (t) {
          var n = t.getAudible();
          e.addSound(n);
          var i = e.findSoundById(n.id);
          t.updateSound(i);
        });
      }
    },
    334: function (e, t, n) {
      var i = [
          {
            rule: /^(?![_-])/,
            errorMessage: n(1).Lingua.t(
              "A permalink must not start with an underscore or hyphen."
            ),
          },
          {
            rule: /^(?!.*[-_]$)/,
            errorMessage: n(1).Lingua.t(
              "A permalink must not end with an underscore or hyphen."
            ),
          },
          {
            rule: /^(?!.*[\-_]{2,})/,
            errorMessage: n(1).Lingua.t(
              "A permalink must not have consecutive underscores or hyphens."
            ),
          },
          {
            rule: /^[a-z0-9_-]*$/,
            errorMessage: n(1).Lingua.t(
              "Use only numbers, lowercase letters, underscores, or hyphens."
            ),
          },
          {
            rule: /[a-z]/,
            errorMessage: n(1).Lingua.t(
              "A permalink must contain at least one letter."
            ),
          },
          {
            rule: /^.{3,255}$/,
            errorMessage: n(1).Lingua.t(
              "A permalink must be between 3 and 255 characters."
            ),
          },
        ],
        r = {
          playlist: [],
          sound: [
            {
              rule: new RegExp(
                "^(?!(" +
                  [
                    "albums",
                    "comments",
                    "favorites",
                    "followers",
                    "following",
                    "likes",
                    "reposts",
                    "sets",
                    "spotlight",
                    "stats",
                    "tracks",
                  ].join("|") +
                  ")$)"
              ),
              errorMessage: n(1).Lingua.t(
                "This permalink is reserved. Enter another one."
              ),
            },
          ],
        };
      e.exports = n(74).extend({
        type: "sound",
        initialize: function () {
          n(74).prototype.initialize.apply(this, arguments),
            (this.constraints = i.concat(r[this.type]));
        },
        check: function (e, t) {
          var i = this;
          if ("" !== e) {
            var r = n(0).find(this.constraints, function (t) {
              return !t.rule.test(e);
            });
            r
              ? ((this.message = r.errorMessage), t(!1))
              : this.resolvePermalink(e)
                  .done(function (e) {
                    !1 === e &&
                      (i.message = n(1).Lingua.t(
                        "This permalink is already in use. Enter another one."
                      )),
                      t(e);
                  })
                  .fail(function (e) {
                    return t(!0);
                  });
          } else t(!0);
        },
        resolvePermalink: function (e) {
          var t = this.getResource.call(this._form),
            i = n(4).get("me").get("permalink");
          return t && e === t.get("permalink")
            ? n(7).resolve(!0)
            : "sound" === this.type
            ? n(35)
                .callEndpoint("trackPermalinkAvailability", null, {
                  permalink: e,
                })
                .then(function (e) {
                  return e.body.track_permalink_available;
                })
            : "playlist" === this.type
            ? n(48)
                .resolve(i, e)
                .then(function (e) {
                  return !1;
                })
            : void 0;
        },
      });
    },
    335: function (e, t, n) {
      e.exports = n(74).extend({
        message: n(1).Lingua.t("Enter a valid date."),
        check: function (e, t) {
          t(e instanceof Date && "number" == typeof +e && !isNaN(+e));
        },
      });
    },
    34: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = {
          blockings: new (n(388))(),
          followers: new (n(351))(),
          followings: new (n(284))(),
          likedStations: new (n(598))(),
          playlistLikes: new (n(352))(),
          playlistReposts: new (n(353))(),
          soundLikes: new (n(354))(),
          soundReposts: new (n(274))(),
          systemPlaylistLikes: new (n(355))(),
        },
        o = {
          playlist: r.playlistLikes,
          sound: r.soundLikes,
          "system-playlist": r.systemPlaylistLikes,
        },
        a = (e.exports = n(0).assign({}, n(31).Events, {
          bindErrorHandler: function (e) {
            return a._errHandlers.unshift(e), this;
          },
          unbindErrorHandler: function (e) {
            var t = a._errHandlers;
            return t.splice(t.indexOf(e), 1), this;
          },
          _errHandlers: [],
          notify: function (e, t) {
            var i = u(
              (t = n(0).defaults({}, t, {
                action: e,
                origin: n(18).currentUserId(),
                originType: "user",
                object: null,
                target: null,
                targetType: null,
                targetModel: null,
                state: !0,
              }))
            );
            switch (e) {
              case "comment":
                l(e, null, i);
                break;
              case "createPlaylist":
                l(
                  "playlist",
                  {
                    object: i.object.getUrn(),
                  },
                  i
                );
                break;
              case "addToPlaylist":
                l(
                  "track_to_playlist",
                  {
                    object: i.object.getUrn(),
                    target: n(24).generate(i.targetType, i.target),
                  },
                  i
                );
            }
            c(t);
          },
          follow: function (e, t, i) {
            var o = n(18).currentUserId(),
              a = (i = n(0).defaults({}, i, {
                action: "follow",
                origin: o,
                originType: "user",
                target: e,
                targetType: "user",
                state: t,
                persist: !0,
              })),
              c = a.origin,
              d = a.target,
              f = a.state;
            if (c === d) return n(7).resolve();
            if (d === o) {
              var h = n(7).defer(),
                p = r.followers;
              return (
                p.fetch().done(function () {
                  p.get(c) !== f &&
                    (p.toggle(c, f),
                    (i.state = p.get(c)),
                    s(i)
                      .done(function () {
                        l("follow", null, u(i)), h.resolve();
                      })
                      .fail(h.reject));
                }),
                h
              );
            }
            return (
              (i.list = c === o ? r.followings : null),
              l("follow", null, u(i)),
              c === o &&
                n(42).trackEvent({
                  category: n(42).EventCategory.profile,
                  action: t
                    ? n(42).EventAction.follow
                    : n(42).EventAction.unfollow,
                }),
              s(i)
            );
          },
          comment: function (e, t, r) {
            (r = i(
              {
                isReply: !1,
                object: e,
                state: t,
              },
              r
            )),
              a.notify("comment", r),
              t &&
                r.isReply &&
                n(12).trackV1Click({
                  context: r.context,
                  target: e.getUrn(),
                  click_name: "comment-reply-sent",
                });
          },
          destroy: function (e, t) {
            return (
              (function (e) {
                var t = u(e),
                  i = t.targetType;
                "comment" === i &&
                  ((t.target = t.targetModel.get("track_id")),
                  (t.targetType = "track"));
                ("comment" !== i && "playlist" !== i) ||
                  l(
                    i,
                    null,
                    n(0).assign({}, t, {
                      state: !1,
                    })
                  );
              })(
                (t = n(0).defaults({}, t, {
                  action: "destroy",
                  origin: n(18).currentUserId(),
                  originType: "user",
                  target: e.id,
                  targetType: e.resource_type,
                  targetModel: e,
                  state: !0,
                }))
              ),
              c(t),
              e.destroy()
            );
          },
          like: function (e, t, i) {
            var r = e.resource_type;
            return (
              l(
                "like",
                null,
                u(
                  (i = n(0).defaults({}, i, {
                    action: "like",
                    origin: n(18).currentUserId(),
                    originType: "user",
                    target: e.id,
                    targetType: r,
                    targetModel: e,
                    state: t,
                    persist: !0,
                    list: o[r],
                  }))
                )
              ),
              "system-playlist" !== r &&
                n(42).trackEvent({
                  category:
                    "playlist" === r
                      ? n(42).EventCategory.playlist
                      : n(42).EventCategory.track,
                  action: t ? n(42).EventAction.like : n(42).EventAction.unlike,
                  label: e.get("permalink_url"),
                }),
              s(i)
            );
          },
          addToPlayHistory: function (e, t, i) {
            if (n(18).isLoggedIn()) {
              var r = {
                  context: t,
                  targetType: "sound",
                  target: e,
                  state: i,
                },
                o = n(0).omit(
                  {
                    context_urn: t ? t.resourceUrn : null,
                    track_urn: "soundcloud:tracks:" + e,
                  },
                  n(0).isNull
                );
              a.notify("addToPlayHistory", r),
                n(35).callEndpoint("playHistoryAdd", null, null, null, o);
            }
          },
          clearPlayHistory: function () {
            n(18).isLoggedIn() &&
              (a.notify("clearPlayHistory"),
              n(35).callEndpoint("playHistoryClear"));
          },
          likeStation: function (e, t, i) {
            return (
              l(
                "like",
                null,
                u(
                  (i = n(0).defaults({}, i, {
                    action: "likeStation",
                    origin: n(18).currentUserId(),
                    originType: "user",
                    target: e,
                    targetType: "station",
                    object: e,
                    state: t,
                    persist: !0,
                    list: r.likedStations,
                  }))
                )
              ),
              s(i)
            );
          },
          repost: function (e, t, i) {
            var o = e.resource_type;
            return (
              l(
                "repost",
                null,
                u(
                  (i = n(0).defaults({}, i, {
                    action: "repost",
                    origin: n(18).currentUserId(),
                    originType: "user",
                    target: e.id,
                    targetType: o,
                    targetModel: e,
                    state: t,
                    persist: !0,
                    list: "playlist" === o ? r.playlistReposts : r.soundReposts,
                  }))
                )
              ),
              n(42).trackEvent({
                category:
                  "playlist" === o
                    ? n(42).EventCategory.playlist
                    : n(42).EventCategory.track,
                action: t
                  ? n(42).EventAction.repost
                  : n(42).EventAction.unrepost,
                label: e.get("permalink_url"),
              }),
              s(i)
            );
          },
          block: function (e, t, i, o, u) {
            i = !(!t || !i);
            var l = s(
              (u = n(0).defaults({}, u, {
                action: "block",
                origin: n(18).currentUserId(),
                originType: "user",
                target: e,
                targetType: "user",
                state: t,
                persist: !0,
                list: r.blockings,
                listOptions: {
                  reported: i,
                  remove_activities: o,
                },
              }))
            );
            return (
              t &&
                n(18).isLoggedIn() &&
                a.follow(n(18).currentUserId(), !1, {
                  origin: e,
                }),
              l
            );
          },
        }));
      function s(e) {
        var t = !1,
          i = e.state,
          r = e.list,
          o = e.target,
          u = e.origin,
          l = "user" !== e.originType || u === n(18).currentUserId(),
          d = n(7).defer();
        if (l && !n(18).isLoggedIn())
          n(18)
            .login({
              context: e.context,
              implicitAction: e.action,
              implicitTarget: n(24).generate(e.targetType, e.target),
            })
            .done(function () {
              (e.origin = n(18).currentUserId()),
                s(e).done(d.resolve).fail(d.reject);
            })
            .fail(d.reject);
        else {
          if (r && l) {
            r.fetch()
              .done(function () {
                if (r.get(o) !== i) {
                  if ((r.toggle(o, i), (e.state = i = r.get(o)), e.persist)) {
                    var u = r.setRemote(o, i, e.listOptions);
                    u &&
                      u.fail(function (t, r) {
                        "abort" !== r &&
                          (function (e) {
                            n(0).some(a._errHandlers, function (t) {
                              return !1 === t(e);
                            }) || a.trigger("error", e);
                          })(
                            n(0).assign(
                              {
                                xhr: t,
                              },
                              e
                            )
                          ),
                          s(
                            n(0).defaults(
                              {
                                persist: !1,
                                state: !i,
                              },
                              e
                            )
                          );
                      });
                  }
                } else t = !0;
              })
              .done(d.resolve)
              .fail(d.reject);
          } else d.resolve();
          d.done(function () {
            t || c(e);
          });
        }
        return d;
      }
      function u(e) {
        return {
          state: (e = e || {}).state,
          origin: e.origin,
          originType: e.originType,
          object: e.object,
          target: e.target,
          targetType: e.targetType,
          targetModel: e.targetModel,
          context: e.context,
          attribution: e.context && e.context.attribution,
          event_source: e.event_source,
        };
      }
      function l(e, t, i) {
        if ("user" === (r = i).originType && r.origin === n(4).get("me").id) {
          var r,
            o = !1 !== i.state,
            a = n(0).defaults(t || {}, {
              object: n(24).generate(i.targetType, i.target),
              target: null,
              clickNameOn: "add",
              clickNameOff: "remove",
            });
          (i.click_name = e + "::" + a[o ? "clickNameOn" : "clickNameOff"]),
            (i.click_object = a.object),
            (i.click_target = a.target),
            (i.click_attributes = {
              click_attributes_source: i.context
                ? i.context.event_source
                : i.event_source,
            }),
            n(12).trackV0ClickWithPromotedParams(null, i);
        }
      }
      function c(e) {
        var t = e.action,
          n = e.origin,
          i = e.target,
          r = e.originType,
          o = e.targetType;
        a.trigger(
          [
            t,
            t + ":origin:" + r + ":" + n,
            i ? t + ":target:" + o + ":" + i : "",
          ].join(" "),
          u(e)
        );
      }
    },
    344: function (e, t, n) {
      "use strict";
      var i,
        r =
          (this && this.__extends) ||
          ((i =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o = (function (e) {
        function t(t, n) {
          var i = e.call(this) || this;
          return (
            (i.disposed = !1), (i.layer = n), (i.waveform = t), i.setup(), i
          );
        }
        return (
          r(t, e),
          (t.prototype.update = function (e) {
            var t = this.draw(e);
            return this.setDirty(t), t;
          }),
          t
        );
      })(n(669).CanBeDirty);
      t.SceneNode = o;
    },
    347: function (e, t, n) {
      (function (t) {
        var i = ["altKey", "shiftKey", "ctrlKey", "metaKey"],
          r = 0,
          o = !1,
          a = !1,
          s = (e.exports = {
            chordStartKeyName: "G",
            shortcuts: {
              playPause: {
                keyCode: ["32", "13"],
                keyName: ["space"],
                description: n(1).Lingua.t("Play or pause"),
                className: "kbd-big",
                fn: function () {
                  n(14).toggleCurrent({
                    userInitiated: !0,
                  });
                },
              },
              search: {
                keyCode: ["83", "191"],
                keyName: ["S"],
                description: n(1).Lingua.t("Search"),
                fn: function () {
                  n(8).trigger("search:focus");
                },
              },
              load: {
                keyCode: [
                  "48",
                  "49",
                  "50",
                  "51",
                  "52",
                  "53",
                  "54",
                  "55",
                  "56",
                  "57",
                ],
                keyName: ["0…9"],
                className: "kbd-big",
                description: n(1).Lingua.t("Seek to position"),
                fn: function (e, t, i) {
                  if (!d(i)) {
                    n(14).seekCurrentTo(function (e) {
                      return (e.getMediaDuration() / 10) * (t - 48);
                    });
                  }
                },
              },
              seekBackward: {
                keyCode: ["37"],
                keyName: ["←"],
                description: n(1).Lingua.t("Seek backward"),
                allowKeyHold: !0,
                fn: function () {
                  c("prev");
                },
              },
              seekForward: {
                keyCode: ["39"],
                keyName: ["→"],
                description: n(1).Lingua.t("Seek forward"),
                allowKeyHold: !0,
                fn: function () {
                  c("next");
                },
              },
              repeat: {
                keyCode: ["shiftKey+76"],
                keyName: ["L", "⇧"],
                description: n(1).Lingua.t("Repeat playing track"),
                fn: function () {
                  n(14).cycleRepeatMode();
                },
              },
              prev: {
                keyCode: ["shiftKey+37", "75"],
                keyName: ["←", "⇧"],
                description: n(1).Lingua.t("Play previous track"),
                fn: function () {
                  n(14).playPrev({
                    userInitiated: !0,
                  });
                },
              },
              next: {
                keyCode: ["shiftKey+39", "74"],
                keyName: ["→", "⇧"],
                description: n(1).Lingua.t("Play next track"),
                fn: function () {
                  n(14).playNext({
                    userInitiated: !0,
                  });
                },
              },
              mute: {
                keyCode: ["77"],
                keyName: ["M"],
                description: n(1).Lingua.t("Mute volume"),
                fn: function () {
                  n(98).toggleMuted();
                },
              },
              volUp: {
                keyCode: ["shiftKey+38"],
                keyName: ["↑", "⇧"],
                description: n(1).Lingua.t("Increase volume"),
                allowKeyHold: !0,
                fn: function () {
                  n(98).changeVolume(0.1);
                },
              },
              volDown: {
                keyCode: ["shiftKey+40"],
                keyName: ["↓", "⇧"],
                description: n(1).Lingua.t("Decrease volume"),
                allowKeyHold: !0,
                fn: function () {
                  n(98).changeVolume(-0.1);
                },
              },
              like: {
                keyCode: ["76"],
                keyName: ["L"],
                description: n(1).Lingua.t("Like playing track"),
                fn: function (e) {
                  e && n(34).like(e);
                },
              },
              repost: {
                keyCode: ["82"],
                keyName: ["R"],
                description: n(1).Lingua.t("Repost playing track"),
                fn: function (e) {
                  e && n(34).repost(e);
                },
              },
              dialog: {
                keyCode: ["72", "shiftKey+191"],
                keyName: ["H"],
                description: n(1).Lingua.t("Show keyboard shortcuts"),
                fn: function () {
                  n(8).trigger("keyboard-shortcuts:toggle");
                },
              },
              gotoNowPlaying: {
                keyCode: ["80"],
                keyName: ["P"],
                description: n(1).Lingua.t("Navigate to playing track"),
                fn: function () {
                  n(14).restoreState();
                },
              },
              gotoLikes: {
                chorded: !0,
                keyCode: ["76"],
                keyName: ["L"],
                description: n(1).Lingua.t("Navigate to Likes"),
                fn: function () {
                  n(4)
                    .get("router")
                    .navigateToRoute("youNetwork", [null, "likes"], {
                      trigger: !0,
                      replace: !1,
                    });
                },
              },
              gotoCollection: {
                chorded: !0,
                keyCode: ["67"],
                keyName: ["C"],
                description: n(1).Lingua.t("Navigate to Library"),
                fn: function () {
                  n(4)
                    .get("router")
                    .navigateToRoute("youNetwork", [null, "library"], {
                      trigger: !0,
                      replace: !1,
                    });
                },
              },
              gotoStream: {
                chorded: !0,
                keyCode: ["83"],
                keyName: ["S"],
                description: n(1).Lingua.t("Navigate to Stream"),
                fn: function () {
                  n(4).get("router").navigateToRoute("stream", [], {
                    trigger: !0,
                    replace: !1,
                  });
                },
              },
              gotoProfile: {
                chorded: !0,
                keyCode: ["80"],
                keyName: ["P"],
                description: n(1).Lingua.t("Navigate to Profile"),
                fn: function () {
                  n(4).get("router").navigate("/you", {
                    trigger: !0,
                    replace: !1,
                  });
                },
              },
              gotoHistory: {
                chorded: !0,
                keyCode: ["72"],
                keyName: ["H"],
                description: n(1).Lingua.t("Navigate to History"),
                fn: function () {
                  n(4)
                    .get("router")
                    .navigateToRoute("youNetwork", [null, "history"], {
                      trigger: !0,
                      replace: !1,
                    });
                },
              },
              toggleQueue: {
                keyCode: ["81"],
                keyName: ["Q"],
                description: n(1).Lingua.t("Show Next up"),
                fn: function () {
                  n(205).toggle();
                },
              },
              toggleShuffle: {
                keyCode: ["shiftKey+83"],
                keyName: ["S", "⇧"],
                description: n(1).Lingua.t("Shuffle"),
                fn: function () {
                  n(14).toggleShuffle();
                },
              },
            },
            handleKeyDown: function (e) {
              var i = e.keyCode,
                a =
                  i === n(63).ENTER &&
                  !e.isDefaultPrevented() &&
                  t(e.target).is(":tabbable");
              e.isInput() ||
                a ||
                (s.processKey(i, e) && (e.preventDefault(), (o = !0)),
                (function (e) {
                  var t = e.keyCode;
                  return (
                    t === n(63).SHIFT ||
                    t === n(63).CTRL ||
                    t === n(63).ALT ||
                    t === n(63).META_LEFT ||
                    t === n(63).META_RIGHT ||
                    t === n(63).META_RIGHT_OSX ||
                    t === n(63).META_FIREFOX_OSX
                  );
                })(e) || ++r);
            },
            handleKeyUp: function (e) {
              (r = 0), o && (e.preventDefault(), (o = !1));
            },
            processKey: function (e, t) {
              if (!a && 71 === e)
                return h(), (f = window.setTimeout(h, 1500)), (a = !0), !0;
              var i,
                o,
                l =
                  ((i = u()[a ? "chorded" : "normal"][e]),
                  (o = function (n, i) {
                    if (i) {
                      if (t && t[i]) return 1;
                    } else if (
                      !d(t) ||
                      !/[a-z0-9%']/i.test(String.fromCharCode(e))
                    )
                      return 0;
                    return !1;
                  }),
                  (
                    (i &&
                      n(0).reduce(
                        i,
                        function (e, t, n) {
                          var i = o(t, n);
                          return !1 !== i && (!e || i > e.value)
                            ? {
                                item: t,
                                value: i,
                              }
                            : e;
                        },
                        void 0
                      )) ||
                    {}
                  ).item),
                c = l && s.shortcuts[l];
              return (
                !c ||
                  (r && !c.allowKeyHold) ||
                  c.fn(n(14).getCurrentSound(), e, t),
                h(),
                !!l
              );
            },
          }),
          u = n(0).memoize(function () {
            var e = {
                chorded: {},
                normal: {},
              },
              t = /^(?:(\w+)\+)?(\d+)$/;
            return (
              n(0).each(s.shortcuts, function (n, i) {
                var r = n.keyCode,
                  o = n.chorded,
                  a = e[o ? "chorded" : "normal"];
                r.forEach(function (e) {
                  var n = t.exec(e),
                    r = n[1],
                    o = void 0 === r ? "" : r,
                    s = n[2];
                  a[s] || (a[s] = {}), (a[s][o] = i);
                });
              }),
              e
            );
          }),
          l = n(0).throttle(function (e) {
            n(14).seekCurrentBy(function () {
              return e;
            });
          }, 200);
        function c(e) {
          l(1e3 * Math.max(5, r) * ("next" === e ? 1 : -1));
        }
        function d(e) {
          return e && i.some(n(0).propertyOf(e));
        }
        var f = null;
        function h() {
          f && (window.clearTimeout(f), (f = null)), (a = !1);
        }
      }.call(this, n(15)));
    },
    35: function (e, t, n) {
      (function (t) {
        var i = /^[^\/]/,
          r = /\/$/;
        function o(e, t, n) {
          return {
            body: e,
            status: n.status,
            headers: {},
          };
        }
        function a(e) {
          var t = void 0 === e ? {} : e,
            n = t.responseJSON;
          return {
            body: void 0 === n ? {} : n,
            status: t.status,
            headers: {},
          };
        }
        function s(e) {
          return e.replace(i, "/$&") || "/";
        }
        function u(e) {
          return e.replace(r, "");
        }
        e.exports = n(949)(
          {
            endpoints: n(951),
            services: n(952),
          },
          function (e) {
            var i = e.url,
              r = e.headers,
              o = e.method,
              a = e.timeout,
              s = e.dataType,
              u = e.includeCredentials,
              l = null !== e.data && void 0 !== e.data && "json" === s,
              c = "get" !== o,
              d =
                (e.data && e.data.priority) || n(155).RequestPriorities.MEDIUM,
              f = l && c ? JSON.stringify(e.data) : e.data,
              h = l ? "application/json" : null,
              p =
                Boolean(window.__sc_env && window.__sc_env.forceCredentials) ||
                !0 === u
                  ? {
                      withCredentials: !0,
                    }
                  : void 0;
            return t.ajax({
              url: i,
              headers: r,
              type: o,
              data: f,
              contentType: h,
              priority: d,
              processData: c,
              timeout: a,
              xhrFields: p,
            });
          },
          function (e, t, i, r, o) {
            return n(26).stringify({
              scheme: e,
              host: t,
              port: i,
              path: s(u(r)),
              query: o,
            });
          },
          function e(t) {
            var i = n(7).promise(t);
            return (i.constructor = e), i;
          }
        )
          .use(function (e, t) {
            return t(e).then(o, a);
          })
          .use(function (e, t) {
            var i = t(e),
              r = e.requestOptions.args;
            return r.abort ? n(259).listenToAbortSignal(i, r.abort) : i;
          });
      }.call(this, n(15)));
    },
    350: function (e, t) {
      e.exports = {
        isOneTrustEnabled: function (e, t) {
          return (
            e.has("v2_enable_onetrust") &&
            (("PL" === t && e.has("v2_use_onetrust_eu1")) ||
              ("DE" === t && e.has("v2_use_onetrust_eu2")) ||
              ("US" === t && e.has("v2_use_onetrust_us")) ||
              e.has("v2_use_onetrust_elsewhere") ||
              e.has("v2_use_onetrust_qa"))
          );
        },
      };
    },
    360: function (e, t, n) {
      e.exports = new (n(16))({
        canvas: null,
        context: null,
        isDirty: !1,
        isAnimating: !1,
        requires: ["draw"],
        applyTo: function (e) {
          e.defaults = n(0).assign(
            {
              scale: 1,
              $eventEl: null,
            },
            e.defaults
          );
        },
        after: {
          draw: function () {
            this.setDirty(this.isAnimating);
          },
          onResize: function () {
            this.setDirty(!0);
          },
        },
        before: {
          setup: function (e) {
            e.$eventEl || (e.$eventEl = this.$el),
              (this.canvas = this.el),
              (this.context = this.el.getContext("2d"));
          },
        },
        override: {
          render: function () {
            this.hasData()
              ? this.setDirty(!0)
              : (this.setDirty(!1), this.fetchData());
          },
          destroyElement: n(0).noop,
        },
        defaults: {
          onResize: n(0).noop,
        },
        setDirty: function (e) {
          (this.isDirty = e) && this.trigger("dirty");
        },
      });
    },
    368: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var i = n(34),
        r = n.n(i),
        o = n(49),
        a = n.n(o),
        s = n(24),
        u = n.n(s);
      function l(e, t, n) {
        var i = d(e);
        return r.a.like(i, t, n).always(function () {
          i.release();
        });
      }
      function c(e, t, n) {
        var i = d(e);
        return r.a.repost(i, t, n).always(function () {
          i.release();
        });
      }
      function d(e) {
        var t = u.a.toComponents(e),
          n = t.collection,
          i = t.id;
        return new a.a({
          id: i,
          resource_type: f[n],
        });
      }
      var f = {
        tracks: "sound",
        playlists: "playlist",
        "system-playlists": "system-playlist",
      };
    },
    369: function (e, t) {
      e.exports = {
        GET_VERSION_REQUEST: "GET_VERSION_REQUEST",
        GET_VERSION_RESPONSE: "GET_VERSION_RESPONSE",
      };
    },
    374: function (e, t, n) {
      e.exports = new (n(16))({
        requirePrototype: n(152).prototype,
        applyTo: function (e, t) {
          var i = !!t;
          i && Array.isArray(t.fields) && t.fields.length,
            i && n(0).isFunction(t.getFields);
          var r = n(445).makeFilterGenerator(t.fields || t.getFields);
          this.extend(e, {
            setUserInput: function (e) {
              this.setFilter("userInput", r(e));
            },
          });
        },
      });
    },
    378: function (e, t, n) {
      "use strict";
      var i;
      n.r(t),
        n.d(t, "CONTAINER_ID", function () {
          return o;
        }),
        n.d(t, "Experiment", function () {
          return r;
        }),
        n.d(t, "Variant", function () {
          return a;
        }),
        n.d(t, "initialize", function () {
          return l;
        }),
        n.d(t, "activateExperiment", function () {
          return c;
        });
      var r,
        o = "GTM-K94TRRL";
      !(function (e) {
        (e.EXAMPLE = "bQzwN5NyS1KZDPeIeoWmNw"),
          (e.QUOTA_METER = "gpssXNQXSEGbNFh0f07sIw"),
          (e.TOP_LISTENER = "qITKRQS6SYq7mHM1QBafkw");
      })(r || (r = {}));
      var a,
        s,
        u =
          (((i = {})[r.EXAMPLE] = "foo"),
          (i[r.QUOTA_METER] = "upload-quota-meter"),
          (i[r.TOP_LISTENER] = "top-listener-upsell"),
          i);
      function l(e) {
        void 0 === e && (e = 4e3),
          (s = new Promise(function (t) {
            var n,
              i = (window.dataLayer = window.dataLayer || []);
            (i.hide =
              (((n = {})[o] = !0),
              (n.start = Date.now()),
              (n.end = t),
              (n.timeout = e),
              n)),
              window.setTimeout(function () {
                t(), (i.hide.end = null);
              }, e);
          }));
      }
      function c(e) {
        return new Promise(function (t, n) {
          if (!s) return n();
          s.then(function () {
            (window.dataLayer = window.dataLayer || []).push({
              event: u[e],
            });
            var i = window.google_optimize && window.google_optimize.get(e);
            if (!i) return n();
            t(i);
          });
        }).catch(function () {
          return a.original;
        });
      }
      !(function (e) {
        (e.original = "0"), (e.one = "1"), (e.two = "2"), (e.three = "3");
      })(a || (a = {}));
    },
    379: function (e, t, n) {
      e.exports = {
        render: function (e, t, n) {
          var i = e(t || {});
          n && (n.innerHTML = i);
        },
        subviews: function (e) {
          n(429).replacePlaceholders(e), n(430).default.replacePlaceholders(e);
        },
      };
    },
    380: function (e, t, n) {
      var i = (e.exports = {
        getMarkup: function (e, t, r) {
          if (Array.isArray(t))
            return t
              .map(function (t) {
                return i.getMarkup(e, t, r);
              })
              .join("");
          var o = [],
            a = (r = r || {}).whitelist,
            s = "self" === r.closingTag ? "/" : "",
            u = !0 === r.closingTag ? "</" + e + ">" : "";
          return (
            n(0).each(
              t,
              function (e, t) {
                "style" === t &&
                  "object" == typeof e &&
                  (e = this.getStyleAttr(e)),
                  (a && -1 === a.indexOf(t)) ||
                    o.push(
                      " " + t + '="' + n(11).Utils.escapeExpression(e) + '"'
                    );
              },
              this
            ),
            "<" + e + o.join("") + s + ">" + u
          );
        },
        getStyleAttr: function (e) {
          return n(0)
            .map(e, function (e, t) {
              return null != e && "" !== e ? t + ":" + e + ";" : "";
            })
            .join("");
        },
      });
    },
    385: function (e, t, n) {
      var i,
        r = window.Notification;
      function o(e, t) {
        return new a(e, t);
      }
      function a(e, t) {
        s.call(this, e, t);
      }
      function s(e, t) {
        var n = this;
        switch (i.allowed()) {
          case !0:
            var o = (this.notification = new r(e, t));
            ["click", "error"].forEach(function (e) {
              n.notification["on" + e] = n.trigger.bind(n, e);
            }),
              t.duration &&
                (this._closeTimeout = window.setTimeout(function () {
                  o.close();
                }, t.duration));
            break;
          case null:
            i.requestPermission().then(function () {
              s.call(n, e, t);
            });
        }
      }
      (i = n(75).Notification
        ? (e.exports = {
            allowed: function () {
              return (
                "granted" === r.permission ||
                ("denied" !== r.permission && null)
              );
            },
            requestPermission: function () {
              return n(7).promise(function (e, t) {
                r.requestPermission(function (n) {
                  "granted" === n ? e() : t();
                });
              });
            },
            create: o,
          })
        : (e.exports = {
            allowed: n(0).constant(!1),
            requestPermission: n(0).constant(n(7).reject()),
            create: o,
          })),
        n(0).assign(a.prototype, n(31).Events, {
          notification: null,
          closed: !1,
          _closeTimeout: null,
          close: function () {
            return (
              this.notification &&
                !this.closed &&
                (this.notification.close(),
                (this.closed = !0),
                window.clearTimeout(this._closeTimeout)),
              this
            );
          },
        });
    },
    387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "isEnabled", function () {
          return I;
        }),
        n.d(t, "initialize", function () {
          return L;
        }),
        n.d(t, "getConsentString", function () {
          return P;
        }),
        n.d(t, "getTcfVersion", function () {
          return M;
        }),
        n.d(t, "openDialogue", function () {
          return D;
        });
      var i,
        r,
        o = n(4),
        a = n.n(o),
        s = n(65),
        u = n(8),
        l = n(153),
        c = n(7),
        d = n(13),
        f = n(68),
        h = n(12),
        p = n(426);
      function g() {
        return (g =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      !(function (e) {
        e[(e.Personalization = 4)] = "Personalization";
      })(i || (i = {})),
        (function (e) {
          (e[(e.OptIntoAll = 11)] = "OptIntoAll"),
            (e[(e.OpenPrivacyManager = 12)] = "OpenPrivacyManager"),
            (e[(e.OptOutOfAll = 13)] = "OptOutOfAll");
        })(r || (r = {}));
      var m,
        v = c.defer(),
        y = null,
        _ = !1,
        b = !1;
      function w(e) {
        var t,
          n = a.a.get("privacy_settings"),
          i = (((t = {})[l.TARGETED_ADVERTISING_OPT_IN] = e), t);
        n.set(i), n.save(i);
      }
      function k() {
        h.trackImpression({
          impression_name: "tcfv2-dialog",
        });
      }
      function A() {
        h.trackImpression({
          impression_name: "tcfv2-error",
        });
      }
      function S(e) {
        h.trackV1Click({
          click_name: "tcfv2-action::pmaction",
          click_attributes: {
            selection: e,
          },
        });
      }
      function E(e, t) {
        switch (t) {
          case r.OptIntoAll:
            (b = !0),
              w(!0),
              h.trackV1Click({
                click_name: "tcfv2-action::optinall",
              });
            break;
          case r.OptOutOfAll:
            (b = !0),
              w(!1),
              h.trackV1Click({
                click_name: "tcfv2-action::optoutall",
              });
            break;
          default:
            h.trackV1Click({
              click_name: "tcfv2-action::other::" + t,
            });
        }
      }
      function C(e, t) {
        if (((m = t), b)) b = !1;
        else {
          window.setTimeout(function () {
            (function () {
              if (!window.__tcfapi) return c.reject();
              var e = c.defer();
              try {
                window.__tcfapi("getTCData", 2, function (t, n) {
                  n ? e.resolve(t) : e.reject();
                });
              } catch (t) {
                window.console.error(t), e.reject();
              }
              return e.promise();
            })().then(function (e) {
              var t;
              (null == e || null == (t = e.purpose) ? void 0 : t.consents) &&
                w(!!e.purpose.consents[i.Personalization]);
            });
          }, 5e3);
        }
      }
      function T() {
        var e;
        return (
          y ||
            ((e = a.a.get("privacy_settings").getExternalConsentId() || ""),
            f.set({
              name: "authId",
              value: e,
              secure: !0,
            }),
            _ || (n(1013), (_ = !0)),
            (window._sp_ = g({}, window._sp_, {
              config: {
                mmsDomain: "https://message.sp-prod.net",
                accountId: 1258,
                wrapperAPIOrigin: "https://wrapper-api.sp-prod.net/tcfv2",
                privacyManagerId: "159632",
                siteId: "7646",
                targetingParams: {
                  tcfVersion: "2",
                  language: d.LinguaLib.getLocale(),
                  theme: "light",
                },
                events: {
                  onMessageReady: k,
                  onMessageChoiceError: A,
                  onMessageChoiceSelect: E,
                  onPrivacyManagerAction: S,
                  onConsentReady: C,
                },
              },
            })),
            (y = Object(s.insertScript)(
              "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              {
                onload: function () {
                  v.resolve();
                },
                onerror: function () {
                  v.reject(), (v = c.defer()), (y = null);
                },
              }
            ))),
          v.promise()
        );
      }
      function x() {
        !(function () {
          if (
            (f.unset("authId"),
            f.unset("resolvedId"),
            window._sp_ && window._sp_.deleteConsentCookies)
          )
            try {
              window._sp_.deleteConsentCookies();
            } catch (e) {
              window.console.error(e);
            }
        })(),
          (v = c.defer()),
          (y = null),
          (m = null);
      }
      function I() {
        return (
          a.a.get("features").has("v2_enable_sourcepoint") &&
          a.a
            .get("privacy_settings")
            .isUnderLegislation(p.legislationTypes.GDPR)
        );
      }
      function L() {
        I() &&
          T().then(function () {
            u.on("connect:logout", x);
          });
      }
      function P() {
        return m;
      }
      function M() {
        return "2";
      }
      function D() {
        if (window._sp_ && window._sp_.loadPrivacyManagerModal)
          try {
            window._sp_.loadPrivacyManagerModal("159632"),
              h.trackImpression({
                impression_name: "tcfv2-dialog-manual",
              });
          } catch (e) {
            window.console.error(e);
          }
      }
    },
    39: function (e, t, n) {
      var i = (e.exports = n(320).applyTo(
        n(31).Collection.extend({
          next_href: null,
          lastFetchTime: null,
          model: {},
          getEndpointUrl: n(35).getUrlForEndpoint,
          getEndpointForMethod: function (e) {
            return null;
          },
          defaults: {
            offset: 0,
            limit: 10,
            secret_token: null,
            maxPageSize: 100,
          },
          initialize: function (e, t) {
            (this.options = (function e(t, r) {
              if ((n(0).defaults(r, t.prototype.defaults), t === i)) return r;
              return e(t.__super__.constructor, r);
            })(this.constructor, t || {})),
              this.setup(this.options);
          },
          setup: n(0).noop,
          _prepareModel: function (e) {
            var t = e instanceof n(31).Model,
              i = n(31).Collection.prototype._prepareModel.apply(
                this,
                arguments
              );
            return i && i.hold(this._usageCount() - (t ? 0 : 1)), i;
          },
          _removeReference: function (e) {
            return (
              e.release(this._usageCount()),
              n(31).Collection.prototype._removeReference.apply(this, arguments)
            );
          },
          fetch: function (e) {
            var t = this,
              i = (e && e.url) || n(0).result(this, "url"),
              r = this.getRequestEquivalencyUrl(i) || i;
            return i
              ? (this._requests && this._requests[r]) ||
                  n(31)
                    .Collection.prototype.fetch.call(this, e)
                    .done(function () {
                      !t.isFullyPopulated() ||
                        0 !== t.length ||
                        (e && e.reset) ||
                        t.reset([]);
                    })
              : n(7)
                  .defer()
                  .done(e && e.success)
                  .resolve({});
          },
          fetchUntilResults: function (e) {
            var t = this;
            void 0 === e && (e = {});
            var i = this.options.limit,
              r = this.length,
              o = n(0).defaults(
                {
                  reset: !1,
                },
                e
              ),
              a = function (e) {
                return t.fetch(e).then(s);
              },
              s = function () {
                var e = t.length > r,
                  n = t.isFullyPopulated();
                if (!e && !n)
                  return (
                    t.setLimit(
                      Math.min(2 * t.options.limit, t.options.maxPageSize)
                    ),
                    a(o)
                  );
              };
            return a(e).always(function () {
              t.setLimit(i);
            });
          },
          fetchUntilLength: function (e) {
            var t = this,
              i = function () {
                return t.length < e && !t.isFullyPopulated();
              };
            if (!i()) return n(7).resolve();
            var r = this.options.limit,
              o = 0,
              a = function (e) {
                return t.fetch(e).then(s);
              },
              s = function () {
                if (i()) {
                  var r = e - t.length;
                  return (
                    t.setLimit(n(71).clamp(r, 20, t.options.maxPageSize)),
                    a({
                      reset: 0 == o++ && !t.isPopulated(),
                      add: !0,
                      remove: !1,
                    })
                  );
                }
              };
            return n(7)
              .resolve()
              .then(s)
              .always(function () {
                t.setLimit(r);
              });
          },
          bulkFetch: function (e) {
            var t,
              i,
              o = this,
              a = arguments[1],
              s = arguments[2];
            if (!a) {
              if (
                ((this._requests = this._requests || {}), this._requests.bulk)
              )
                return this._requests.bulk;
              (this._requests.bulk = a = n(7).defer()),
                a.always(function () {
                  delete o._requests.bulk;
                }),
                (s = this.length),
                (t = this.options.limit),
                this.next_href || (this.options.limit = e - this.length),
                a.always(function () {
                  (o.options.limit = t),
                    r.call(o, {
                      limit: t,
                    });
                });
            }
            return (
              this.length < e && this.url()
                ? ((i = this.lastFetchTime
                    ? {
                        add: !0,
                        reset: !1,
                        remove: !1,
                        silent: !0,
                      }
                    : {
                        reset: !0,
                        silent: !0,
                      }),
                  r.call(this, {
                    limit: e - this.length,
                  }),
                  this.fetch(i)
                    .done(function () {
                      o.bulkFetch(e, a, s);
                    })
                    .fail(a.reject))
                : (s
                    ? this.rest(s).forEach(function (e) {
                        o.trigger("add", e, o, {});
                      })
                    : this.trigger("reset", this, {}),
                  a.resolve()),
              a
            );
          },
          removeWhere: function (e) {
            var t = this.models.filter(e, this);
            return t.length && this.remove(t), t;
          },
          url: function () {
            if (null !== this.next_href) return this.next_href;
            var e = n(26).parse(n(0).result(this, "baseUrl"));
            return (
              n(0).assign(e.query, {
                limit: this.options.limit,
                offset: this.options.offset,
                linked_partitioning: 1,
              }),
              this.options.secret_token &&
                (e.query.secret_token = this.options.secret_token),
              n(26).stringify(e)
            );
          },
          parse: function (e) {
            return e.collection;
          },
          empty: function () {
            (this.next_href = null),
              (this.lastFetchTime = null),
              this.options.offset && (this.options.offset = 0),
              this.reset(null, {
                silent: !0,
              });
          },
          setToFullyPopulated: function () {
            (this.lastFetchTime = Date.now()), (this.next_href = !1);
          },
          unsetFullyPopulated: function () {
            this.next_href = null;
          },
          hasDataForView: function (e) {
            return (
              !!this.lastFetchTime &&
              (!e ||
                !e.minModels ||
                this.isFullyPopulated() ||
                this.length >= e.minModels)
            );
          },
          isPopulated: function () {
            return !!this.lastFetchTime;
          },
          getRequestEquivalencyUrl: n(0).identity,
          isFullyPopulated: function () {
            return !1 === this.next_href;
          },
          setLimit: function (e) {
            (this.options.limit = e),
              r.call(this, {
                limit: e,
              });
          },
          indexOfEquivalentModel: function (e, t, n) {
            var i = this;
            void 0 === t && (t = this.models), void 0 === n && (n = 0);
            var r = -1;
            return (
              n && (t = t.slice(n)),
              t.some(function (t, o) {
                if (i.compareModels(e, t)) return (r = o + n), !0;
              }),
              r
            );
          },
          indexesOfEquivalentModels: function (e, t) {
            for (
              var n = [], i = 0;
              -1 !== (i = this.indexOfEquivalentModel(e, t, i));

            )
              n.push(i), i++;
            return n;
          },
          getKeyForModel: function (e) {
            return e.getEquivalencyKey();
          },
          compareModels: function (e, t) {
            return this.getKeyForModel(e) === this.getKeyForModel(t);
          },
        }),
        {
          hashFn: function (e, t) {
            var n = (void 0 === t ? {} : t).resource_id;
            return void 0 === n ? null : n;
          },
          onHold: function (e, t, n) {
            e.length && e.at(0).hold && e.invoke("hold", n);
          },
          onRelease: function (e, t, n) {
            e.length && e.at(0).release && e.invoke("release", n);
          },
          prefetch: function (e) {
            var t = new this(null, e);
            t.isPopulated() || t.fetch(), t.release();
          },
        }
      ));
      function r(e) {
        this.next_href &&
          (this.next_href = n(26).modify(this.next_href, {
            query: e,
          }));
      }
    },
    394: function (e, t, n) {
      var i = !(!window.IntersectionObserver || !window.WeakMap),
        r = i
          ? function (e) {
              var t = e.isVisible,
                i = e.rootMargin,
                r = new WeakMap(),
                o = (function (e, t) {
                  return new window.IntersectionObserver(
                    (function (e) {
                      return function (t) {
                        t.forEach(function (t) {
                          var n = t.target;
                          e.has(n) &&
                            e.get(n).forEach(function (e) {
                              return e(t);
                            });
                        });
                      };
                    })(e),
                    {
                      threshold: [0, 0.25, 0.5, 0.75, 1],
                      rootMargin: t,
                    }
                  );
                })(r, i);
              return function (e) {
                return n(65)
                  .whenInserted(e)
                  .then(function () {
                    return n(7).promise(function (n) {
                      !(function (e, t, n, i) {
                        (function (e, t, n) {
                          n.has(e) ? n.get(e).push(t) : n.set(e, [t]);
                        })(e, i, n),
                          t.observe(e);
                      })(e, o, r, function (i) {
                        t(i) &&
                          (!(function (e, t, n) {
                            (function (e, t) {
                              t.delete(e);
                            })(e, n),
                              t.unobserve(e);
                          })(e, o, r),
                          n());
                      });
                    });
                  });
              };
            }
          : function () {
              return n(65).whenInserted;
            };
      e.exports = {
        makeWhenElementVisible: r,
        whenElementVisible: r({
          isVisible: function (e) {
            return e.intersectionRatio > 0;
          },
          rootMargin: "40px",
        }),
      };
    },
    396: function (e, t, n) {
      e.exports = n(39).extend(
        {
          notificationType: null,
          queue: null,
          defaults: {
            hasQueue: !1,
          },
          initialize: function (e, t) {
            var o,
              a = this.notificationType;
            n(39).prototype.initialize.apply(this, arguments),
              (o = n(142)[a]),
              (null == t ? void 0 : t.hasQueue) &&
                ((this.baseUrl = o.get("baseUrl")),
                (this.queue = new (n(618))({
                  type: a,
                })),
                this.queue.on("data", i, this).on("change:size", r, this));
          },
          fetchNewItems: function () {
            this.queue.fetchQueuedItems();
          },
          markAsRead: function (e) {
            var t = this.at(0);
            !e && t && (e = t.getUuid ? t.getUuid() : t.get("uuid")),
              e && this.queue.markAsRead(e);
          },
        },
        {
          onCleanup: function (e) {
            e.queue &&
              e.queue.off("data", i, e).off("change:size", r, e).release();
          },
        }
      );
      function i(e) {
        e.length &&
          (this.add(e, {
            at: 0,
          }),
          this.trigger("new-data", e));
      }
      function r(e, t) {
        this.trigger("change:queue-size", this, t);
      }
    },
    42: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "EventCategory", function () {
          return i;
        }),
        n.d(t, "EventAction", function () {
          return r;
        }),
        n.d(t, "include", function () {
          return v;
        }),
        n.d(t, "trackEvent", function () {
          return y;
        }),
        n.d(t, "trackPageView", function () {
          return _;
        });
      var i,
        r,
        o,
        a = n(0),
        s = n.n(a),
        u = n(65),
        l = n.n(u),
        c = n(378),
        d = n(97),
        f = n.n(d),
        h = n(18),
        p = n.n(h),
        g = n(4),
        m = n.n(g);
      function v() {
        (window.gtag =
          window.gtag ||
          function () {
            (window.dataLayer = window.dataLayer || []).push(arguments);
          }),
          window.gtag("js", new Date()),
          window.gtag("set", {
            anonymize_ip: !0,
            custom_map: w,
          }),
          window.gtag("config", "UA-2519404-44", {
            send_page_view: !1,
            optimize_id: c.CONTAINER_ID,
            user_id:
              m.a.get("privacy_settings").get("external_user_id") || null,
          }),
          c.initialize(),
          s.a.defer(
            l.a.insertScript,
            "https://www.googletagmanager.com/gtag/js?id=UA-2519404-44"
          );
      }
      function y(e) {
        var t = e.category,
          n = e.action,
          i = e.label,
          r = e.value;
        window.gtag &&
          window.gtag(
            "event",
            n,
            s.a.assign(
              {
                event_category: t,
                event_label: i,
                value: r,
              },
              b()
            )
          );
      }
      function _() {
        window.gtag &&
          window.gtag(
            "config",
            "UA-2519404-44",
            s.a.assign(
              {
                page_title: window.document.title,
                page_path: window.location.pathname + window.location.search,
                page_location: window.location.href,
              },
              b()
            )
          );
      }
      function b() {
        var e;
        return (
          ((e = {})[o.loginStatus] = p.a.isLoggedIn()
            ? "Logged In"
            : "Logged Out"),
          (e[o.premierEligibility] = f.a.isQualified()
            ? "Eligible"
            : "Not Eligible"),
          (e[o.premierMonetizationMembership] = f.a.isPremierVIPMember()
            ? "Premier VIP"
            : f.a.isPremierMonetizationMember()
            ? "Premier"
            : "Not a Member"),
          (e[o.externalUserId] =
            m.a.get("privacy_settings").get("external_user_id") || null),
          e
        );
      }
      !(function (e) {
        (e.userFunnel = "user-funnel"),
          (e.track = "track"),
          (e.playlist = "playlist"),
          (e.premier = "premier"),
          (e.callToAction = "call_to_action"),
          (e.profile = "profile"),
          (e.mastering = "mastering");
      })(i || (i = {})),
        (function (e) {
          (e.signUp = "sign-up"),
            (e.signInSuccessful = "sign_in_successful"),
            (e.comment = "comment"),
            (e.uploadStarted = "upload_started"),
            (e.uploadSaved = "upload_saved"),
            (e.uploadSaveFailed = "upload_save_failed"),
            (e.uploadSucceeded = "upload_succeeded"),
            (e.uploadFailed = "upload_failed"),
            (e.transcodingSucceeded = "transcoding_succeeded"),
            (e.transcodingFailed = "transcoding_failed"),
            (e.overTrackQuota = "overTrackQuota"),
            (e.overTimeQuota = "overTimeQuota"),
            (e.follow = "follow"),
            (e.unfollow = "unfollow"),
            (e.like = "like"),
            (e.unlike = "unlike"),
            (e.repost = "repost"),
            (e.unrepost = "unrepost"),
            (e.share = "share"),
            (e.navigateOnboarding = "navigate_onboarding"),
            (e.editsPersonalDetails = "edits_personal_details"),
            (e.editsPaymentDetails = "edits_payment_details"),
            (e.contractSigned = "contract_signed"),
            (e.premierCtaClick = "premier_cta_click"),
            (e.purchaseCtaClick = "purchase_cta_click"),
            (e.uploadCtaClick = "upload_cta_click"),
            (e.micrositeCtaClick = "microsite_cta_click"),
            (e.learnMoreCtaClick = "learn_more_cta_click"),
            (e.tryItFreeCtaClick = "try_it_free_cta_click"),
            (e.exploreTrendingPlaylistsClick =
              "explore_trending_playlists_click"),
            (e.createAccountCtaClick = "create_account_cta_click"),
            (e.signInCtaClick = "sign_in_cta_click"),
            (e.click = "click"),
            (e.impression = "impression");
        })(r || (r = {})),
        (function (e) {
          (e[(e.loginStatus = 0)] = "loginStatus"),
            (e[(e.premierEligibility = 1)] = "premierEligibility"),
            (e[(e.premierMonetizationMembership = 2)] =
              "premierMonetizationMembership"),
            (e[(e.externalUserId = 3)] = "externalUserId");
        })(o || (o = {}));
      var w = {
        dimension4: o.loginStatus,
        dimension7: o.premierEligibility,
        dimension8: o.premierMonetizationMembership,
        dimension11: o.externalUserId,
      };
    },
    420: function (e, t, n) {
      e.exports = new (n(16))({
        requires: ["trigger"],
        defaults: {
          states: null,
        },
        _states: null,
        toggleState: function (e, t, n) {
          var i, r, o, a;
          return !e || this.disposed
            ? this
            : (this._states || (this._states = {}),
              this.states || (this.states = {}),
              e in this.states
                ? (e in this._states || (this._states[e] = this.getState(e)),
                  (o = void 0 !== t ? !!t : !this._states[e]),
                  n || this._states[e] !== o
                    ? ((this._states[e] = o),
                      "string" ===
                      (a = typeof (i = (r = this.states[e]).handler
                        ? r.handler
                        : r))
                        ? this.$el[o ? "addClass" : "removeClass"](i)
                        : "function" === a
                        ? i.call(this, o)
                        : i &&
                          "function" == typeof i.setup &&
                          i[o ? "setup" : "teardown"].call(this),
                      this.trigger("state:" + e, o),
                      this)
                    : this)
                : this);
        },
        getState: function (e) {
          return this._states && e in this._states
            ? this._states[e]
            : !(!this.states || !(e in this.states)) &&
                !!this.states[e].initial;
        },
      });
    },
    422: function (e, t, n) {
      var i = null,
        r = null,
        o = null,
        a = {
          dontPersist: !0,
        },
        s = {
          id: 0,
          playTime: 1,
          userInitiated: 2,
          timestamp: 3,
        },
        u = {
          duration: 0,
          userId: 1,
        },
        l = {
          field: null,
          from: "global",
          id: null,
          unique: !1,
          playState: null,
          userInitiated: null,
          filter: null,
          newestFirst: !1,
          limit: !1,
        };
      n(8).on("connect:logout", function () {
        c._persistent.reset(), c._session.reset();
      });
      var c = (e.exports = {
        _persistent: new (n(57))("play-log"),
        _session: new (n(201))(),
        addSound: function (e, t) {
          i && this.writeToLog(),
            (i = e),
            (r = e.getListenTime()),
            (o = t || {}),
            e.on("pause", this.writeToLog, this).hold();
        },
        select: function (e) {
          var t = this[
              "session" === (e = n(0).assign({}, l, e)).from
                ? "_session"
                : "_persistent"
            ],
            i = t.get("log") || [];
          return (
            e.id
              ? (i = i.filter(d(e.id)))
              : e.userId &&
                (i = i.filter(function (n) {
                  return t.get(n[0])[1] === e.userId;
                })),
            e.unique &&
              (i = i.reduceRight(p, {
                map: {},
                result: [],
              }).result),
            (i = i.filter(function (n) {
              return (
                (null == e.userInitiated || n[2] == e.userInitiated) &&
                ("played" !== e.playState ||
                  ((i = n[1]), (r = t.get(n[0])[0]), i / r >= 0.25)) &&
                (!e.filter || (o = e).filter.apply(o, n))
              );
              var i, r, o;
            })),
            e.newestFirst && i.reverse(),
            e.limit && i.length > e.limit && (i = i.slice(0, e.limit)),
            (i = e.field ? n(0).pluck(i, s[e.field]) : i.map(g, t))
          );
        },
        count: function (e) {
          return this.select(e).length;
        },
        numSessionPlays: function () {
          return this.count({
            from: "session",
            unique: !0,
            playState: "played",
          });
        },
        getPlayedIds: function () {
          return this.select({
            field: "id",
            from: "persistent",
            unique: !0,
            playState: "played",
          });
        },
        writeToLog: function () {
          if (i) {
            var e = Math.floor(i.getListenTime() - r),
              t = c._persistent,
              n = c._session,
              a = i.id,
              s = i.getMediaDuration();
            if (e >= Math.min(s, 2e3)) {
              var u = t.get("log") || [],
                l = n.get("log") || [],
                d = i.get("user_id");
              h(t, a, s, d), h(n, a, s, d);
              var p = [a, e, o.userInitiated ? 1 : 0, Date.now()];
              u.push(p), l.push(p), f(u, t), f(l, n);
            }
            i.off("pause", this.writeToLog, this).release(), (i = r = null);
          }
        },
      });
      function d(e) {
        return function (t) {
          return t[0] === e;
        };
      }
      function f(e, t) {
        for (; e.length > 250; ) {
          var n = e.shift();
          e.some(d(n[0])) || t.unset(n[0], a);
        }
        t.set("log", e);
      }
      function h(e, t, n, i) {
        e.has(t) || e.set(t, [n, i], a);
      }
      function p(e, t) {
        var n = e.map[t[0]],
          i = e.result.length;
        if (void 0 !== n) {
          var r = e.result[i - n - 1];
          (r[1] += t[1]), (r[2] = r[2] || t[2]);
        } else (e.map[t[0]] = i), e.result.unshift(t.slice());
        return e;
      }
      function g(e) {
        var t = this.get(e[0]);
        return n(0).object(Object.keys(s).concat(Object.keys(u)), e.concat(t));
      }
    },
    424: function (e, t, n) {
      e.exports = {
        stream: n(0).assign(
          {
            shuffle: n(0).noop,
            unshuffle: function () {
              return [];
            },
            pause: n(0).noop,
            peek: n(0).noop,
            resume: n(0).noop,
            isEnded: n(0).constant(!0),
          },
          n(31).Events
        ),
        dispose: n(0).noop,
      };
    },
    425: function (e, t) {
      function n(e) {
        return (e ^ ((16 * Math.random()) >> (e / 4))).toString(16);
      }
      e.exports = {
        generate: function () {
          return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, n);
        },
      };
    },
    426: function (e, t) {
      e.exports = {
        legislationTypes: {
          CCPA: "CCPA",
          GDPR: "GDPR",
        },
      };
    },
    427: function (e, t) {
      var n = window.navigator;
      e.exports = {
        getFlashPlugin: function () {
          var e, t, i, r;
          if (void 0 !== window.ActiveXObject)
            try {
              (r = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) &&
                (e = r.GetVariable("$version"));
            } catch (e) {}
          else
            n.plugins &&
              n.plugins.length > 0 &&
              ((i = "application/x-shockwave-flash"),
              (t = n.mimeTypes) &&
                t[i] &&
                t[i].enabledPlugin &&
                t[i].enabledPlugin.description &&
                (e = t[i].enabledPlugin.description));
          return e;
        },
        getFlashVersion: function () {
          var e = this.getFlashPlugin()
            .match(/\d\S+/)[0]
            .replace(/,/g, ".")
            .split(".");
          return [e[0], e[1]].join(".");
        },
        getOperatingSystem: function () {
          var e = n.appVersion;
          return -1 !== e.indexOf("Win")
            ? "Windows"
            : -1 !== e.indexOf("Mac")
            ? "MacOS"
            : -1 !== e.indexOf("X11")
            ? "UNIX"
            : -1 !== e.indexOf("Linux")
            ? "Linux"
            : "undefined-OS";
        },
        getBrowser: function () {
          var e,
            t = n.userAgent,
            i = t.match(
              /(opera|chrome|safari|firefox|msie|applewebkit)\/?\s*(\.?\d+(\.\d+)*)/i
            ),
            r = t.match(/version\/([\.\d]+)/i);
          return (
            (e = null !== r ? r[1] : i ? i[2] : null),
            (i ? [i[1], e] : [n.appName, n.appVersion]).join()
          );
        },
      };
    },
    429: function (e, t, n) {
      var i = {},
        r = 0,
        o = (e.exports = {
          handlebarHelper: function (e, t) {
            var i = t.hash;
            return (
              i.args &&
                (n(0).isFunction(i.args) && (i.args = i.args(this)),
                (t.hash = i = n(0).assign({}, i.args, i))),
              delete i.args,
              t.fn && (i.blockContent = new (n(11).SafeString)(t.fn(this))),
              o.registerSubview(e, t.hash)
            );
          },
          registerSubview: function (e, t) {
            var n = r++;
            return (
              (t.__class = e),
              t.className &&
                (t.className = [e.prototype.className, t.className]
                  .filter(Boolean)
                  .join(" ")),
              (i[n] = t),
              '<view data-id="' + n + '"></view>'
            );
          },
          replacePlaceholders: function (e) {
            e.$("view").each(function () {
              !(function (e, t) {
                var r,
                  o,
                  a,
                  s = e.getAttribute("data-id"),
                  u = i[s];
                (o = u.__class), delete i[s], u.key && (a = u.key);
                (r = t.addSubview(
                  new o(n(0).omit(u, "__path", "__class", "key")),
                  a
                )).render(),
                  e.parentNode.replaceChild(r.el, e);
              })(this, e);
            });
          },
        });
    },
    43: function (e, t, n) {
      (function (t) {
        var i = Math.PI / 180,
          r = window,
          o = r.document,
          a = r.FileReader,
          s = r.Image,
          u = {},
          l = ["me-user", "user", "profile-settings"],
          c = ["user"],
          d = (e.exports = n(0).defaults(
            {
              tagOptions: {
                whitelist: [
                  "style",
                  "title",
                  "class",
                  "aria-label",
                  "aria-role",
                  "aria-hidden",
                ],
                closingTag: !0,
              },
              load: function (e, i) {
                var r = (void 0 === i ? {} : i).corsImg,
                  o = void 0 === r ? n(75).corsImg : r,
                  a = new s(),
                  u = t(a),
                  l = n(7).defer(),
                  c = n(0).uniqueId("ImageHelperLoad");
                return (
                  o &&
                    ((a.crossOrigin = window.location.host), (e += "?xd=true")),
                  u
                    .on("load." + c, function () {
                      l.resolve(this);
                    })
                    .on("error." + c, function () {
                      l.reject(this);
                    }),
                  l.always(function () {
                    u.off("." + c);
                  }),
                  (a.src = e),
                  l
                );
              },
              getPlaceholderUrl: function (e, t) {
                var i,
                  r,
                  o,
                  a = -1,
                  s = f(d.setFormat(e, t));
                if (s) {
                  if (
                    ((i = s.key), u[s.type] || (u[s.type] = {}), u[s.type][i])
                  )
                    for (
                      r = n(0).find(d.availableSizes, function (e, n) {
                        var i = e[0];
                        return (a = n), t <= i;
                      });
                      a >= 0;

                    ) {
                      if (u[s.type][i] & (1 << a)) {
                        o = d.availableSizes[a];
                        break;
                      }
                      --a;
                    }
                  if (r && o === r) return !1;
                  if (o) return d.setFormat(e, o[0]);
                }
                return null;
              },
              urlFrom: function (e, t, i) {
                return (
                  t && n(60).isHiDPI && (t *= 2),
                  n(275).urlFrom.call(this, e, t, i)
                );
              },
              markup: function (e, t) {
                e && e.attributes && (e = e.attributes);
                var i = t.src,
                  r = t.size,
                  o = t.stretch,
                  a = t.placeholderId,
                  s = t.placeholderType,
                  u = void 0 === s ? "gradient" : s,
                  l = t.forceSquare,
                  c = void 0 !== l && l,
                  d = t.forceCircle,
                  f = void 0 !== d && d,
                  h = t.useResourceUrl,
                  p = i || ((void 0 === h || h) && this.urlFrom(e, r));
                p = this.isDefaultImage(p) ? null : "url(" + p + ")";
                var g = this.getPlaceholderClass(e || a, {
                    placeholderType: u,
                    forceSquare: c,
                    forceCircle: f,
                  }),
                  m = o ? "100%" : r + "px",
                  v = n(0).assign(
                    {
                      style: {
                        "background-image": p,
                        width: m,
                        height: m,
                      },
                      class: "sc-artwork " + g + " " + (t.class || ""),
                      "aria-label": this.getAltText(e),
                      "aria-role": "img",
                    },
                    n(0).omit(t, "stretch", "size", "class")
                  );
                return n(380).getMarkup("span", v, this.tagOptions);
              },
              flagCachedImage: function (e) {
                var t = f(e);
                t &&
                  (function (e) {
                    u[e.type][e.key] |= 1 << e.index;
                  })(t);
              },
              isRounded: function (e) {
                var t = e._resource_type,
                  n = e.kind;
                return t
                  ? l.indexOf(t) > -1
                  : n
                  ? c.indexOf(n) > -1
                  : l.indexOf(e) > -1;
              },
              getPlaceholderClass: function (e, t) {
                var i = void 0 === t ? {} : t,
                  r = i.placeholderType,
                  o = void 0 === r ? "gradient" : r,
                  a = i.forceSquare,
                  s = void 0 !== a && a,
                  u = i.forceCircle,
                  l = void 0 !== u && u,
                  c = "number" == typeof e,
                  f = c ? e : (e && e.id) || 0,
                  h = "string" == typeof f ? n(71).quickHash(f) : f,
                  p =
                    (l || (!c && !s)) && (l || d.isRounded(e))
                      ? "image__rounded"
                      : "";
                return (
                  ((function () {
                    switch (o) {
                      case "gradient":
                        return "sc-artwork-placeholder-" + (h % 12);
                      case "blank":
                        return "sc-artwork-placeholder-blank";
                    }
                  })() || "") +
                  " " +
                  p
                );
              },
              getPlaceholderGradient: function (e) {
                var t = d.getPlaceholderClass(e),
                  i = n(0).find(t.split(" "), function (e) {
                    return e.indexOf("sc-artwork-placeholder") > -1;
                  });
                return n(599)[i];
              },
              getPlaceholderCanvas: function (e, t) {
                var n = o.createElement("canvas"),
                  i = n.getContext("2d"),
                  r = d.getPlaceholderGradient(e),
                  a = r[0],
                  s = r[1];
                if (((n.width = n.height = t), i)) {
                  var u = i.createLinearGradient(0, 0, t, t);
                  u.addColorStop(0, a),
                    u.addColorStop(1, s),
                    (i.fillStyle = u),
                    i.fillRect(0, 0, t, t);
                }
                return n;
              },
              readImageFile: function (e) {
                return n(203)
                  .readAsDataURL(e)
                  .then(function (e) {
                    return h(e);
                  });
              },
              readImageFileCorrected: function (e) {
                return (function (e) {
                  var t = new a(),
                    i = n(7).defer();
                  return (
                    (t.onerror = t.onabort = function () {
                      i.reject(-3);
                    }),
                    (t.onload = function (e) {
                      var t = new DataView(e.target.result);
                      if (65496 === t.getUint16(0, !1)) {
                        var n = t.byteLength,
                          r = 2;
                        try {
                          for (; r < n; ) {
                            var o = t.getUint16(r, !1);
                            if (((r += 2), 65505 === o)) {
                              var a = 18761 === t.getUint16((r += 8), !1);
                              r += t.getUint32(r + 4, a);
                              var s = t.getUint16(r, a);
                              r += 2;
                              for (var u = 0; u < s; u++)
                                if (274 === t.getUint16(r + 12 * u, a)) {
                                  var l = t.getUint16(r + 12 * u + 8, a);
                                  return void i.resolve(p[l]);
                                }
                            } else {
                              if (!g(o)) break;
                              r += t.getUint16(r, !1);
                            }
                          }
                        } catch (e) {
                          window.console.error("Error reading JPEG headers");
                        }
                        i.reject(-1);
                      } else i.reject(-2);
                    }),
                    t.readAsArrayBuffer(e.slice(0, 65536)),
                    i.promise()
                  );
                })(e).then(
                  function (t) {
                    return (function (e, t) {
                      var r = n(203).readAsDataURL(e),
                        a = t[0],
                        s = t[1];
                      if (0 === a && !s) return r;
                      return r.then(h).then(function (e) {
                        var n = o.createElement("canvas"),
                          r = n.getContext("2d"),
                          a = e.width,
                          s = e.height;
                        return (
                          (n.width = a),
                          (n.height = s),
                          (function (e, t) {
                            var n = t[0],
                              r = t[1],
                              o = e.canvas,
                              a = o.width,
                              s = o.height;
                            e.translate(a / 2, s / 2), r && e.scale(-1, 1);
                            e.rotate(n * i), e.translate(-a / 2, -s / 2);
                          })(r, t),
                          r.drawImage(e, 0, 0),
                          n.toDataURL("image/png")
                        );
                      });
                    })(e, t);
                  },
                  function () {
                    return n(203).readAsDataURL(e);
                  }
                );
              },
              convertToJpegBase64: function (e) {
                var t = window.document.createElement("canvas"),
                  n = t.getContext("2d");
                return n
                  ? ((t.width = e.width),
                    (t.height = e.height),
                    n.drawImage(e, 0, 0),
                    t.toDataURL("image/jpeg"))
                  : null;
              },
            },
            n(275)
          ));
        function f(e) {
          var t,
            i,
            r = -1;
          return (
            (t = e.replace(d.imageUrlRegex, function (e, t, o, a, s) {
              return (
                n(0).find(d.availableSizes, function (e, t) {
                  if (e[1] === s) return (r = t), !0;
                }),
                (i = t),
                o
              );
            })),
            i && r > -1
              ? {
                  index: r,
                  key: t,
                  type: i,
                }
              : null
          );
        }
        function h(e) {
          var t = n(7).defer(),
            i = new s();
          return (
            (i.onload = function () {
              t.resolve(i);
            }),
            (i.onerror = function () {
              t.reject();
            }),
            (i.src = e),
            t.promise()
          );
        }
        var p = {
          1: [0, !1],
          2: [0, !0],
          3: [180, !1],
          4: [180, !0],
          5: [90, !0],
          6: [90, !1],
          7: [270, !0],
          8: [270, !1],
        };
        function g(e) {
          return 65280 == (65280 & e);
        }
      }.call(this, n(15)));
    },
    430: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(2),
        o = n(480),
        a = n(61),
        s = new Map(),
        u = {
          handlebarHelper: function (e, t) {
            var n = Object(i.uniqueId)("react_view_"),
              r = t.hash;
            return (
              s.set(n, {
                ReactView: e,
                props: r,
              }),
              '<div data-react-view-id="' + n + '"></div>'
            );
          },
          replacePlaceholders: function (e) {
            var t = function () {
              return (function (e) {
                var t = e.getContextData();
                t.scope || (t.scope = []);
                return t;
              })(e);
            };
            Array.prototype.slice
              .call(e.el.querySelectorAll("div[data-react-view-id]"))
              .forEach(function (n) {
                var i = n.getAttribute("data-react-view-id"),
                  u = s.get(i),
                  l = u.props,
                  c = u.ReactView;
                o.render(
                  r.createElement(
                    a.a.Provider,
                    {
                      value: t,
                    },
                    r.createElement(c, l)
                  ),
                  n,
                  function () {
                    s.delete(i), e.addReactSubview(n);
                  }
                );
              });
          },
        };
      t.default = u;
    },
    431: function (e, t, n) {
      e.exports = new (n(16))({
        getVisual: function () {
          var e = this.get("visuals");
          return e && e.visuals && (e = e.visuals), (e && e[0]) || {};
        },
        getVisualURL: function () {
          var e = 1240 * (n(60).isHiDPI ? 2 : 1);
          return n(43).setFormat(this.getVisual().visual_url, e);
        },
        hasVisuals: function () {
          return !n(0).isEmpty(this.get("visuals"));
        },
      });
    },
    432: function (e, t, n) {
      var i = new RegExp("s-[a-zA-Z0-9]{5,15}$");
      function r(e) {
        var t = n(59).parse(e).path.split("/");
        return "sets" === t[2] ? i.test(t[4]) : i.test(t[3]);
      }
      e.exports = {
        urlContainsSecretToken: r,
        removeSecretTokenFromUrl: function (e) {
          return r(e) ? e.replace(i, "") : e;
        },
        secretTokenMatcher: "s-[a-zA-Z0-9]{5,15}",
      };
    },
    433: function (e, t, n) {
      e.exports = function (e, t, i) {
        var r,
          o = (i = n(0).defaults(i || {}, {
            maxRetries: 3,
          })).maxRetries,
          a = new (n(193))({
            giveUp: o,
          }),
          s = n(7).defer(),
          u = s.promise();
        function l() {
          r = e().done(s.resolve.bind(s)).progress(s.notify).fail(c);
        }
        function c(e) {
          0 === e.status || t(e)
            ? (!(function (e) {
                a.options.giveUp = 0 === e.status ? 1 / 0 : o;
              })(e),
              a.failed())
            : s.reject();
        }
        return (
          a.on("giveup", s.reject),
          a.on("enabled", l),
          s.always(function () {
            a.dispose();
          }),
          l(),
          (u.abort = function () {
            r.abort && r.abort(), s.reject();
          }),
          i.abort && n(259).listenToAbortSignal(u, i.abort),
          u
        );
      };
    },
    434: function (e, t, n) {
      e.exports = new (n(16))(n(607), n(1089), n(600), {
        requirePrototype: n(21).prototype,
        requires: [
          "getCurrentSound",
          "getSounds",
          "getNumSounds",
          "play",
          "pause",
          "isPlaying",
          "isProcessing",
          "isEditing",
          "isPublic",
          "isPrivate",
          "isNowPlaying",
          "duration",
        ],
        defaults: {
          getSourceInfo: function () {
            return {
              type: "single",
              resourceId: this.resource_id,
              resourceType: this.resource_type,
            };
          },
        },
        before: {
          setup: function () {
            this.listenTo(this, "destroy", this.pause);
          },
        },
        around: {
          destroy: function (e, t) {
            var i = this;
            return (
              void 0 === t && (t = {}),
              (t.statusCode = n(0).defaults(
                {
                  202: function () {
                    n(8).trigger("audible:delete-already-queued", i),
                      n(4).get("me").fetch();
                  },
                },
                t.statusCode
              )),
              e(n(0).clone(t))
            );
          },
        },
        getQueueMetadataAt: function (e) {
          return {
            sourceInfo: this.getSourceInfo(),
            queryPosition: 0,
            originalModel: this,
          };
        },
        onLike: function (e) {
          i.call(this, "likes_count", e.state);
        },
        onRepost: function (e) {
          i.call(this, "reposts_count", e.state);
        },
        onComment: function (e) {
          i.call(this, "comment_count", e.state);
        },
        onPlayRegistered: function () {
          n(4).get("me").owns(this) || i.call(this, "playback_count", !0);
        },
        getShareURL: function (e) {
          var t,
            i,
            r = !(!e || !e.permalinkUrl),
            o = r ? e.permalinkUrl : this.get("permalink_url");
          return (
            (t = {
              query: {
                in:
                  this.playlist && this.playlist.id
                    ? n(26)
                        .parse(this.playlist.getShareURL())
                        .relative.substr(1)
                    : null,
              },
            }),
            r || (t.scheme = "https"),
            e && e.time && (t.fragment = "t=" + e.time),
            (i = this.isPrivate() && !n(432).urlContainsSecretToken(o)),
            n(26).stringify(t, o + (i ? "/" + this.get("secret_token") : ""))
          );
        },
        resetSecretLink: function () {
          var e = this;
          return n(35)
            .callEndpoint("secretLinkReset", {
              urn: this.getUrn(),
            })
            .then(function (t) {
              e.set({
                secret_token: t.body.secret_token,
                permalink_url: t.body.permalink_url,
              });
            });
        },
        getPermalink: function () {
          return (this.get("permalink_url") || "").replace(
            /^https?:.+?\w\//,
            "/"
          );
        },
        isDisabled: function () {
          return !!this.get("disabled_reason");
        },
        isBlacklisted: function () {
          return "blacklisted" === this.get("disabled_reason");
        },
        isOverQuota: function () {
          return "quota" === this.get("disabled_reason");
        },
        toggle: function (e) {
          this[this.isPlaying() ? "pause" : "play"](e);
        },
        isPaused: function () {
          return !this.isPlaying();
        },
        isEmbeddableByAll: function () {
          return "all" === this.get("embeddable_by");
        },
        isManagedByFeeds: function () {
          return !!this.get("managed_by_feeds");
        },
        isScheduled: function () {
          return !!this.get("scheduled_public_date");
        },
        isOfflineSyncEnabled: function () {
          return n(0).isEmpty(this.get("restrictions"));
        },
        isGeoblocked: function () {
          return !!this.getBlockedCountries().length;
        },
        isGeoblockedInCountry: function (e) {
          return this.getBlockedCountries().indexOf(e) > -1;
        },
        getBlockedCountries: function () {
          return this.get("geo_blockings") || [];
        },
        getAvailableCountries: function () {
          return n(51).complement(this.getBlockedCountries());
        },
        getMonetizationTerritories: function () {
          var e = this.get("monetization");
          return (e && e.territories) || [];
        },
        isMonetizable: function () {
          return !this.isDisabled() && !this.isManagedByFeeds();
        },
        hasMonetizationRestriction: function () {
          var e = this.duration(),
            t = e > 10 * n(29).MS_IN_MINUTE,
            i = e < 30 * n(29).MS_IN_SECOND;
          return (n(97).cantMonetizeLongContent() && t) || i;
        },
        hasMonetizationPolicy: function () {
          return !!this.get("monetization_enabled");
        },
        hasMonetizationTerritories: function () {
          return this.getMonetizationTerritories().length > 0;
        },
        isPendingMonetization: function () {
          return (
            this.hasMonetizationTerritories() && !this.hasMonetizationPolicy()
          );
        },
      });
      function i(e, t) {
        this.has(e) && this.set(e, Math.max(0, this.get(e) + (t ? 1 : -1)));
      }
    },
    437: function (e, t) {
      var n = /\r?\n/g,
        i = /\s+/g;
      e.exports = {
        cleanBlockText: function (e) {
          return e.trim().replace(n, " ").replace(i, " ");
        },
      };
    },
    438: function (e, t, n) {
      e.exports = n(140).extend([
        n(31).Events,
        {
          latest: 0,
          totalSize: 0,
          initialize: function (e) {
            e || (e = {}), (this.totalSize = e.totalSize || 0);
          },
          isIndeterminate: function () {
            return !this.totalSize;
          },
          add: function (e) {
            return (
              e !== this.latest && ((this.latest = e), this.trigger("data")),
              this
            );
          },
          setTotal: function (e) {
            if (this.totalSize !== e) {
              var t = !this.totalSize || !e;
              (this.totalSize = e),
                t &&
                  this.trigger("change:indeterminate", this.isIndeterminate());
            }
            return this;
          },
          getValue: function () {
            return this.latest;
          },
          getProgress: function () {
            return this.totalSize ? this.latest / this.totalSize : 0;
          },
          getTotalSize: function () {
            return this.totalSize;
          },
        },
      ]);
    },
    439: function (e, t, n) {
      var i,
        r = n(39).extend({
          model: n(262),
          url: null,
          isFullyPopulated: function () {
            return !0;
          },
          hasDataForView: function () {
            return !0;
          },
        });
      e.exports = n(21).extend(
        {
          resource_type: "aggregate-audio-upload",
          url: null,
          _uploadsCollection: null,
          hasDataForView: function () {
            return !0;
          },
          setup: function (e) {
            (this._uploadsCollection = new r()),
              this.set({
                status: n(53).QUEUED,
                hasBeenSaved: !1,
              }),
              this.listenTo(this._uploadsCollection, "change:status", c)
                .listenTo(this._uploadsCollection, "add", a)
                .listenTo(this._uploadsCollection, "remove", s),
              o.call(this),
              this.addUploads(e.uploads);
          },
          addUploads: function (e) {
            this._uploadsCollection.add(e);
          },
          getUploadsCollection: function () {
            return this._uploadsCollection;
          },
          getUploads: function () {
            return this._uploadsCollection.models;
          },
          remove: function () {
            this._uploadsCollection.remove(this.getUploads()), this.destroy();
          },
          isHQUpload: function () {
            return this._uploadsCollection.every(function (e) {
              return e.isHQUpload();
            });
          },
        },
        {
          hashFn: function (e, t) {
            return (
              (t && t.resource_id) ||
              (e &&
                ((e.uploads &&
                  e.uploads.length &&
                  e.uploads
                    .map(function (e) {
                      return e.resource_id;
                    })
                    .join("_")) ||
                  e.id ||
                  e.resource_id)) ||
              null
            );
          },
          onCleanup: function (e) {
            e._uploadsCollection.remove(e.getUploads()),
              e._uploadsCollection.release();
          },
        }
      );
      function o() {
        this.set("transfer", new (n(331))()),
          this.set("transcoding", new (n(331))());
      }
      function a(e) {
        u.call(this, e, !0);
      }
      function s(e) {
        u.call(this, e, !1);
      }
      function u(e, t) {
        this.get("transfer")[t ? "addTransfer" : "removeTransfer"](
          e.get("transfer")
        ),
          this.get("transcoding")[t ? "addTransfer" : "removeTransfer"](
            e.get("transcoding")
          ),
          c.call(this);
      }
      var l =
        (((i = {})[n(53).UPLOADING] = 5),
        (i[n(53).QUEUED] = 4),
        (i[n(53).TRANSCODING] = 3),
        (i[n(53).COMPLETE] = 2),
        (i[n(53).FAILED] = 1),
        (i[n(53).IDLE] = 0),
        i);
      function c() {
        var e = this._uploadsCollection.pluck("status").reduce(function (e, t) {
          return l[t] > l[e] ? t : e;
        }, n(53).IDLE);
        this.set("status", e);
      }
    },
    44: function (e, t) {
      e.exports = {
        INITIAL: "timed-comment-sm:initial",
        CURRENT_COMMENT: "timed-comment-sm:current-comment",
        CURRENT_TIMESTAMP: "timed-comment-sm:current-timestamp",
        ACTIVE_TIMESTAMP: "timed-comment-sm:active-timestamp",
      };
    },
    440: function (e, t, n) {
      e.exports = n(87).extend({
        maxLength: 22,
        message: function () {
          return n(1).Lingua.t(
            "Enter a buy-link title that is up to [[maxLength]] characters.",
            {
              maxLength: this.maxLength,
            }
          );
        },
      });
    },
    441: function (e, t, n) {
      (function (t) {
        e.exports = new (n(16))(
          n(179).withOptions({
            read: "artwork_url",
          }),
          {
            requires: ["getAudible", "saveEdits"],
            _saving: !1,
            defaults: {
              saveCleanup: function () {},
              preSaveCheck: function () {
                return n(7).resolve();
              },
            },
            applyTo: function (e) {
              e.fields = t.extend(!0, {}, e.fields, {
                editing: {
                  defaultValue: !0,
                },
                errorMessage: {
                  defaultValue: "",
                },
              });
            },
            around: {
              saveEdits: function (e) {
                var t = this,
                  o = n(0).rest(arguments);
                return r
                  .call(this)
                  .then(this.preSaveCheck.bind(this))
                  .then(function () {
                    return i.call(t, e.apply(t, o));
                  });
              },
            },
            saveAudibleImage: function (e) {
              var t,
                i = this.getImageFileInfo();
              return (
                i.file
                  ? (e.setImageFile(i.file, i.source),
                    e.on("imageTranscodingDone", function (e) {
                      this.unsetImageFile({
                        silent: !0,
                      }),
                        this.set("artwork_url", e.artwork_url);
                    }),
                    (t = e.uploadImage()))
                  : (t = n(7).resolve()),
                t
              );
            },
            getErrorMessageTemplate: function (e, t, i) {
              var r = e || "unknown",
                o = i && " " + i + ".";
              return {
                track: {
                  upload: n(1).Lingua.t(
                    "Error uploading track.[[infoMessage]]",
                    {
                      infoMessage: o,
                    }
                  ),
                  save: n(1).Lingua.t(
                    "Error saving track.[[infoMessage]] Please try again.",
                    {
                      infoMessage: o,
                    }
                  ),
                  transcode: n(1).Lingua.t(
                    "Error processing track.[[infoMessage]]",
                    {
                      infoMessage: o,
                    }
                  ),
                  unknown: n(1).Lingua.t("Error with track.[[infoMessage]]", {
                    infoMessage: o,
                  }),
                },
                playlist: {
                  upload: n(1).Lingua.t(
                    "Error uploading playlist.[[infoMessage]]",
                    {
                      infoMessage: o,
                    }
                  ),
                  save: n(1).Lingua.t(
                    "Error saving playlist.[[infoMessage]] Please try again.",
                    {
                      infoMessage: o,
                    }
                  ),
                  transcode: n(1).Lingua.t(
                    "Error processing playlist.[[infoMessage]]",
                    {
                      infoMessage: o,
                    }
                  ),
                  unknown: n(1).Lingua.t(
                    "Error with playlist.[[infoMessage]]",
                    {
                      infoMessage: o,
                    }
                  ),
                },
              }[t][r];
            },
            extractErrorMessage: function (e) {
              try {
                return JSON.parse(e.responseText).errors[0].error_message;
              } catch (e) {
                return "";
              }
            },
            setToModelAttributes: function () {
              var e = this.getAttributesFromModel();
              this.set(e),
                this.unsetImageFile({
                  force: !0,
                }),
                this.markFieldsClean(),
                this.resetAllFieldValidations();
            },
          }
        );
        function i(e) {
          var t = this;
          return (
            (this._saving = !0),
            e.always(function () {
              (t._saving = !1), t.saveCleanup();
            })
          );
        }
        function r() {
          return this.get("editing") || this._saving
            ? n(7).reject()
            : n(7).resolve();
        }
      }.call(this, n(15)));
    },
    442: function (e, t, n) {
      e.exports = n(74).extend({
        message: n(1).Lingua.t("Enter a time in the future."),
        check: function (e, t) {
          t(e > Date.now());
        },
      });
    },
    444: function (e, t, n) {
      var i;
      i = {
        prefix: "sc-icon",
        size: "small",
        title: !1,
        variation: null,
      };
      e.exports = {
        render: function (e) {
          return (
            (e = e || {}),
            '<span class="' +
              [
                (e = n(0).defaults(e, i)).prefix,
                [e.prefix, e.type].join("-") +
                  (e.variation ? "-" + e.variation : ""),
                [e.prefix, e.size].join("-"),
                e.title ? "sc-ir" : "",
                e.class || "",
              ]
                .filter(Boolean)
                .join(" ") +
              '">' +
              (e.title ? n(11).Utils.escapeExpression(e.title) : "") +
              "</span>"
          );
        },
      };
    },
    445: function (e, t, n) {
      var i = /\S/,
        r = /\s+/;
      function o(e) {
        return new RegExp("(?:\t \t|\\s|\\b)" + n(111).regexpEscape(e), "i");
      }
      e.exports = {
        makeFilterGenerator: function (e) {
          return function (t) {
            if (!(a = t) || !i.test(a)) return null;
            var a,
              s = n(0).compact(n(318)(t).split(r)).map(o);
            return function (t) {
              var i = (function (t) {
                var i = (n(0).isFunction(e) ? e(t.attributes) : e).map(
                  function (e) {
                    if (-1 === e.indexOf("."))
                      return function (t) {
                        return t[e];
                      };
                    var t = e.split(".");
                    return function (e) {
                      return t.reduce(function (e, t) {
                        return e && e[t];
                      }, e);
                    };
                  }
                );
                return n(318)(
                  "\t \t" +
                    n(0)
                      .compact(
                        i.map(function (e) {
                          return e(t.attributes);
                        })
                      )
                      .join("\t \t")
                );
              })(t);
              return s.every(function (e) {
                return e.test(i);
              });
            };
          };
        },
      };
    },
    45: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "AudioAdTrackingEvents", function () {
          return i;
        }),
        n.d(t, "AudioAdVisualTrackingEvents", function () {
          return r;
        });
      var i = {
          UNFILLED_IMPRESSION: "audio_ad:unfilled_impression",
          IMPRESSION: "audio_ad:impression",
          PLAY_START: "audio_ad:playStart",
          PLAY: "audio_ad:play",
          PAUSE: "audio_ad:pause",
          ERROR: "audio_ad:error",
          SKIP: "audio_ad:skip",
          FIRST_QUARTILE: "audio_ad:first_quartile",
          SECOND_QUARTILE: "audio_ad:second_quartile",
          THIRD_QUARTILE: "audio_ad:third_quartile",
          FINISH: "audio_ad:finish",
          WHY_ADS_CLICK: "audio_ad:why_ads_click",
        },
        r = {
          IMPRESSION: "ad_visual:impression",
          CLICKTHROUGH: "ad_visual:clickthrough",
          WHY_ADS_CLICK: "ad_visual:why_ads_click",
          ERROR: "ad_visual:error",
        };
    },
    453: function (e, t, n) {
      e.exports = {
        getAccessibleMarkup: function (e) {
          return (
            '<span class="sc-visuallyhidden">' +
            n(11).Utils.escapeExpression(e.screenreader) +
            "</span>" +
            (e.visible
              ? '<span aria-hidden="true">' +
                n(11).Utils.escapeExpression(e.visible) +
                "</span>"
              : "")
          );
        },
      };
    },
    457: function (e, t, n) {
      (e.exports = function (e, t) {
        var i,
          r = t.resource_type;
        return (
          "single-audio-upload" === r
            ? (i = new (n(262))(e, t))
            : "aggregate-audio-upload" === r && (i = new (n(439))(e, t)),
          i
        );
      }).getClass = function (e) {
        var t = e.resource_type;
        return "single-audio-upload" === t
          ? n(262)
          : "aggregate-audio-upload" === t
          ? n(439)
          : void 0;
      };
    },
    459: function (e, t, n) {
      function i(e, t) {
        var i;
        return n(0).findWhere(n(662), (((i = {})[e] = t), i));
      }
      function r() {
        return -60 * n(13).LinguaLib.dateTimeHelper.getTimezoneOffset();
      }
      e.exports = {
        getLocalTimezone: function () {
          return (
            i(
              "id",
              (function () {
                try {
                  return window.Intl.DateTimeFormat().resolvedOptions()
                    .timeZone;
                } catch (e) {
                  return "";
                }
              })()
            ) || i("utc_offset", r())
          );
        },
        getLocalOffset: r,
        findTimezoneWhere: i,
      };
    },
    462: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.isHiDPI = function () {
          return !!window.devicePixelRatio && window.devicePixelRatio > 1;
        }),
        (t.getPixelRatio = function () {
          return window.devicePixelRatio
            ? (Math.floor(window.devicePixelRatio) || 1) / 1
            : 1;
        }),
        (t.supportsTypedArrays = function () {
          return window.hasOwnProperty("Uint8Array");
        });
    },
    463: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(206);
      (t.BLACK = i.rgb(0, 0, 0)),
        (t.ASH = i.rgb(153, 153, 153)),
        (t.SCARLET = i.rgb(255, 51, 0)),
        (t.SC_ORANGE = i.rgb(255, 85, 0)),
        (t.WHITE = i.rgb(255, 255, 255)),
        (t.BLAZE = i.rgb(255, 101, 0)),
        (t.RAVEN = i.rgb(51, 51, 51)),
        (t.CHARCOAL = i.rgb(102, 102, 102)),
        (t.GRAY = i.rgb(82, 82, 82));
    },
    470: function (e, t) {
      var n = (
          window.navigator.userLanguage ||
          window.navigator.language ||
          ""
        ).toLowerCase(),
        i = n.split("-")[0],
        r = n.split("-")[1];
      e.exports = {
        isUsedLanguage: function (e) {
          return i === e.toLowerCase();
        },
        isCountry: function (e) {
          return r === e.toLowerCase();
        },
        isUsedLanguageAndCountry: function (e) {
          return n === e.toLowerCase();
        },
      };
    },
    479: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "initialize", function () {
          return S;
        }),
        n.d(t, "saveWithSignals", function () {
          return E;
        }),
        n.d(t, "withSignalAttributes", function () {
          return C;
        });
      var i = n(4),
        r = n.n(i),
        o = n(8),
        a = n.n(o),
        s = n(18),
        u = n.n(s),
        l = n(7),
        c = n.n(l),
        d = n(21),
        f = n.n(d),
        h = (n(329), n(0)),
        p = n.n(h),
        g = n(84),
        m = n.n(g),
        v = n(65);
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var _ = {
          update: function () {},
          report: function () {
            return Promise.resolve({});
          },
        },
        b = Promise.resolve(_),
        w = function () {
          var e,
            t = {
              ci: 646297,
              pd: "acc",
              mo: 2,
              ui: window.btoa(null != (e = r.a.get("me").get("id")) ? e : ""),
              ck: window.btoa(m.a.getAnonymousId()),
              si: window.btoa(r.a.get("client_application_id")),
            },
            n = new Promise(function (e, t) {
              p.a.defer(
                v.insertScript,
                "https://pwt.soundcloud.com/static/sc/5.0.0/pagespeed.js?psv=5.0.0&ci=646297&pd=acc&mo=2&spa=1",
                {
                  onload: e,
                  onerror: t,
                }
              );
            });
          return (b = n
            .then(function () {
              return window.$$$.start(t);
            })
            .then(k(t))
            .catch(function () {
              return _;
            }));
        },
        k = function (e) {
          var t = y({}, e);
          return function (e) {
            return {
              update: function (n) {
                e.update(n), (t = y({}, t, n));
              },
              report: function (n) {
                return e
                  .report(n)
                  .then(function (e) {
                    return y({}, e, {
                      client_ds: y({}, t, {
                        et: n.eventType,
                        ri: n.resourceId,
                      }),
                    });
                  })
                  .catch(function () {
                    return {};
                  });
              },
            };
          };
        },
        A = ["OZ_TC", "OZ_SG", "OZ_DT", "client_ds"],
        S = function () {
          return r.a.get("features").has("v2_signals_collection")
            ? w().then(T)
            : Promise.resolve();
        },
        E = function (e) {
          var t = e.model,
            n = e.options,
            i = e.saveArgs;
          return c.a
            .promise(function (e, t) {
              I(n).then(e, t);
            })
            .then(function (e) {
              return (
                t.set(e, {
                  silent: !0,
                }),
                f.a.prototype.save.apply(t, i).always(function () {
                  t.set(e, {
                    unset: !0,
                    silent: !0,
                  });
                })
              );
            });
        },
        C = function (e) {
          var t = e.model,
            n = e.attributes;
          return t.pick.apply(t, n.concat(A));
        },
        T = function (e) {
          a.a.on("connect:login connect:logout", x(e));
        },
        x = function (e) {
          return function () {
            r.a
              .get("me")
              .getOrFetch(["id"])
              .then(function (t) {
                var n,
                  i = t.id;
                e.update({
                  ui: u.a.isLoggedIn()
                    ? window.btoa(null != (n = "" + i) ? n : "")
                    : "",
                });
              })
              .fail(function () {
                e.update({
                  ui: "",
                });
              });
          };
        },
        I = function (e) {
          return b.then(function (t) {
            return t.report(e);
          });
        };
    },
    487: function (e, t, n) {
      e.exports = n(74).extend({
        nullable: !1,
        message: "",
        value: null,
        check: function (e, t) {
          t(e === this.value);
        },
      });
    },
    490: function (e, t, n) {
      var i = n(210).wrapBackboneModel(
        {
          dataLayer: n(1022).dataProvider,
          defaultSubscribeLoadStrategy: n(210).V2LoadStrategy.LocalOnly,
          fetchLoadStrategy: n(210).V2LoadStrategy.ForceNetwork,
        },
        n(31).Model
      );
      e.exports = i.extend(
        {
          entityDesc: null,
          submodelMap: null,
          _submodels: null,
          setup: function () {},
          constructor: function (e, t) {
            var r = this;
            i.prototype.constructor.apply(this, arguments),
              (this._submodels = this._submodels || []),
              (this.options = t || {}),
              n(0).each(this.submodelMap, function (e, t) {
                r.on("change:" + t, function () {
                  r.get(t) && r.createSubmodel(e, t);
                });
              }),
              this.setup.apply(this, arguments),
              n(0).each(this.submodelMap, function (e, t) {
                r.get(t) && r.createSubmodel(e, t);
              });
          },
          getSubmodelOptions: function (e) {
            return null;
          },
          createSubmodel: function (e, t) {
            var n = this,
              i = this.getSubmodelOptions(t);
            [].concat(this.get(t)).forEach(function (t) {
              var r = new e(t, i);
              (r.lastFetchTime = Date.now()), n.addSubmodel(r);
            });
          },
          addSubmodel: function () {
            for (
              var e = this, t = arguments.length, i = new Array(t), r = 0;
              r < t;
              r++
            )
              i[r] = arguments[r];
            i.forEach(function (t) {
              n(0).contains(e._submodels, t)
                ? t.release()
                : e._submodels.push(t);
            });
          },
          getEquivalencyKey: function () {
            return this.resource_id;
          },
          hasDataForView: function (e) {
            return this.attrExists(e);
          },
          attrExists: function (e) {
            var t = Object.prototype.hasOwnProperty;
            return n(0).isArray(e)
              ? e.every(t, this.attributes)
              : t.call(this.attributes, e);
          },
          getUrn: function () {
            if ("urn" === this.idAttribute) return this.id;
            var e = this.urnPrefix,
              t = this.id;
            return e && t ? e + ":" + t : void 0;
          },
          hold: function () {},
          release: function () {},
          updateResourceId: function () {
            throw new Error("Not implemented");
          },
        },
        {
          getInstance: function (e, t) {
            return new this(e, t);
          },
        }
      );
    },
    496: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(7),
        r = n.n(i),
        o = n(120);
      function a(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return s(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return s(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0;
            return function () {
              return i >= e.length
                ? {
                    done: !0,
                  }
                : {
                    done: !1,
                    value: e[i++],
                  };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      t.default = {
        fetchCard: function (e) {
          return r.a.promise(function (t) {
            o.default.fetchContentCards(function (n) {
              for (var i, r = a(n.cards); !(i = r()).done; ) {
                var o,
                  s = i.value;
                if ((null == (o = s.extras) ? void 0 : o.adZone) === e) {
                  t(s);
                  break;
                }
              }
              t(null);
            });
          });
        },
        logImpression: function (e) {
          o.default.logCardImpressions([e], !0);
        },
        logClick: function (e) {
          o.default.logCardClick(e, !0);
        },
      };
    },
    497: function (e, t, n) {
      var i = {
          pt_BR: "br",
          en: "us",
        },
        r = {
          pt_BR: "pt-br",
          en: "us",
        },
        o = {
          googlePlay: function (e) {
            return (
              r[e] && (e = r[e]),
              "https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=[LANGUAGE]".replace(
                "[LANGUAGE]",
                e
              )
            );
          },
          appstore: function (e) {
            return (
              i[e] && (e = i[e]),
              "https://itunes.apple.com/[LANGUAGE]/app/soundcloud/id336353151?mt=8".replace(
                "[LANGUAGE]",
                e
              )
            );
          },
        };
      e.exports = {
        getStoreUrl: function (e, t) {
          var i = n(13).LinguaLib.getLocale() || "en";
          return (0, o[e])(i, t);
        },
      };
    },
    50: function (e, t, n) {
      e.exports = {
        DISABLED: -1,
        UNKNOWN: 0,
        INVALID: 1,
        VALID: 2,
      };
    },
    502: function (e, t, n) {
      (function (t) {
        var i = {
            default: "save",
            save: function () {
              return s.call(this, this.saveTracks, u.call(this));
            },
            retry: function () {
              return s.call(this, this.retryTracks, u.call(this));
            },
            cancel: function () {
              this.cancel();
            },
          },
          r = {
            save: {
              label: n(1).Lingua.t("Save"),
              action: "save",
            },
            retry: {
              label: n(1).Lingua.t("Retry"),
              action: "retry",
            },
            cancel: {
              label: n(1).Lingua.t("Cancel"),
              action: "cancel",
            },
            close: {
              label: n(1).Lingua.t("Close"),
              action: "cancel",
            },
          };
        e.exports = new (n(16))(n(213), {
          requirePrototype: n(78).prototype,
          applyTo: function (e) {
            (e.constructor.hashFn = function (e, t) {
              return (
                e.resource_id ||
                e.id ||
                (t && (t.resource_id || t.soundIds.join("_"))) ||
                null
              );
            }),
              (e.buttons = t.extend(!0, {}, r, e.buttons || {})),
              (e.actions = n(0).defaults(e.actions || {}, i));
          },
          before: {
            setup: function (e, t) {
              c.call(this, t.soundIds);
            },
          },
          requires: ["getAttributesFromModels", "getAttributesToBeSaved"],
          defaults: {
            getRequiredModelAttributes: function () {
              return [];
            },
            broadcastSuccess: function () {
              this._completeSaves.length > 0 &&
                n(8).trigger("multi-track:saved", {
                  soundSaves: this._completeSaves,
                });
            },
            setSoundAttributes: function (e, t) {
              e.set(t);
            },
            saveSound: function (e, t) {
              var i = e.createSnapshot(n(0).keys(t));
              return (
                this.setSoundAttributes(e, t),
                e.save().then(
                  function () {
                    return {
                      sound: e,
                      isSuccess: !0,
                    };
                  },
                  function () {
                    return (
                      i.rollback(),
                      {
                        sound: e,
                        isSuccess: !1,
                      }
                    );
                  }
                )
              );
            },
            getInitialValues: function () {
              return this.getAttributesFromModels();
            },
            resetValues: function () {
              var e = this.getInitialValues();
              this.set(e), this.markFieldsClean();
            },
          },
          _sounds: null,
          _failedSaves: null,
          _completeSaves: null,
          getSounds: function () {
            return this._sounds;
          },
          saveTracks: function () {
            return this.trigger("saveStart"), l.call(this, this.getSounds());
          },
          retryTracks: function () {
            return l.call(this, n(0).pluck(this._failedSaves, "sound"));
          },
          onSaved: function (e) {
            a.call(this, e), o.call(this, "allSaved");
          },
          onSaveFailed: function (e) {
            a.call(this, e),
              this.trigger("someFailed", {
                failedSounds: this._failedSaves,
              });
          },
          cancel: function () {
            o.call(this, "canceled");
          },
          clearSaveHistory: function () {
            (this._failedSaves = []), (this._completeSaves = []);
          },
          reduceSounds: function (e) {
            var t = this.getSounds();
            return t.length
              ? n(0).reduce(
                  e,
                  function (e, i, r) {
                    var o = i(t[0]),
                      a = n(0).some(t, function (e) {
                        return !n(0).isEqual(i(e), o);
                      });
                    return (e[r] = a ? null : o), e;
                  },
                  {}
                )
              : {};
          },
        });
        function o(e) {
          this.resetValues(),
            this.broadcastSuccess(),
            this.clearSaveHistory(),
            this.trigger(e);
        }
        function a(e) {
          (this._failedSaves = (function (e) {
            return n(0).reject(e, function (e) {
              return e.isSuccess;
            });
          })(e)),
            (this._completeSaves = this._completeSaves.concat(
              (function (e) {
                return n(0).filter(e, function (e) {
                  return e.isSuccess;
                });
              })(e)
            ));
        }
        function s(e, t) {
          var n = this;
          return t.then(function () {
            return e.call(n).then(n.onSaved.bind(n), n.onSaveFailed.bind(n));
          });
        }
        function u() {
          return this.validate().then(function (e) {
            if (!e) return n(7).defer().reject();
          });
        }
        function l(e) {
          var t = this,
            i = this.getAttributesToBeSaved(e),
            r = e.map(function (e) {
              return t.saveSound(e, i[e.id]);
            });
          return n(7).mapEither(function () {
            return n(0).flatten(arguments, !0);
          }, n(7).settled(r));
        }
        function c(e) {
          var t = this.getRequiredModelAttributes().map(function (e) {
            return "change:" + e;
          });
          (this._failedSaves = []),
            (this._completeSaves = []),
            (this._sounds = e.map(function (e) {
              var i = new (n(17))({
                id: e,
              });
              return this.addSubmodel(i), this.listenTo(i, t.join(" "), d), i;
            }, this));
          var i = p.call(this);
          i.length ? f.call(this, i) : h.call(this);
        }
        function d() {
          this.isDirty() || h.call(this);
        }
        function f(e) {
          var t = this;
          return n(7).settled(
            e.map(function (e) {
              return e.fetch({
                attrs: t.getRequiredModelAttributes(),
              });
            })
          );
        }
        function h() {
          var e = this.getAttributesFromModels();
          e && this.set(e);
        }
        function p() {
          return n(0).compact(
            this.getSounds().map(function (e) {
              return !e.attrExists(this.getRequiredModelAttributes())
                ? e
                : null;
            }, this)
          );
        }
      }.call(this, n(15)));
    },
    505: function (e, t, n) {
      var i,
        r,
        o = !1,
        a = n(75).audioTabIndicator ? "" : "▶ ",
        s = (e.exports = {
          initialize: function () {
            o || ((o = !0), n(8).on("audio:play", l).on("audio:pause", u));
          },
          deinitialize: function () {
            o && ((o = !1), n(8).off("audio:play", l).off("audio:pause", u));
          },
          set: function (e, t) {
            var o = n(14).getCurrentSound(),
              a = !(o && o.isPlaying());
            (i = e), (r = t || {}), a && c();
          },
          update: function () {
            d(n(14).getCurrentSound());
          },
          _setTitle: function (e) {
            window.document.title = e.toString();
          },
        });
      function u() {
        c();
      }
      function l(e) {
        d(e.sound);
      }
      function c() {
        var e;
        (e =
          i && r.withoutSuffix
            ? i
            : i
            ? n(1).Lingua.t("[[[pageTitle]]] on SoundCloud", {
                pageTitle: i,
              })
            : n(1).Lingua.t("SoundCloud – Hear the world’s sounds")),
          s._setTitle(e);
      }
      function d(e) {
        function t() {
          if (!e.isPaused()) {
            var t = e.playlist;
            t
              ? (function (e, t) {
                  var i = t.get("title"),
                    r = e.get("title"),
                    o =
                      a +
                      n(1).Lingua.t("[[[soundTitle]]] in [[[playlistTitle]]]", {
                        soundTitle: i,
                        playlistTitle: r,
                      });
                  s._setTitle(o);
                })(t, e)
              : (function (e) {
                  var t = e.get("title"),
                    i = e.get("user").username,
                    r =
                      a +
                      n(1).Lingua.t("[[[soundTitle]]] by [[[artist]]]", {
                        soundTitle: t,
                        artist: i,
                      });
                  s._setTitle(r);
                })(e);
          }
        }
        e &&
          !e.isAd() &&
          (e.attrExists(["title", "user"]) ? t() : e.fetch().done(t));
      }
    },
    507: function (e, t) {
      var n = (e.exports = {
        centered: function (e, t, n, i) {
          var r = Math.min(t, window.screen.width - 50),
            o = Math.min(n, window.screen.height - 50),
            a = window.screenX + (window.outerWidth - r) / 2,
            s = window.screenY + (window.outerHeight - o) / 2;
          return window.open(
            e,
            i || "",
            [
              "location=1",
              "width=" + r,
              "height=" + o,
              "top=" + s,
              "left=" + a,
              "toolbar=no",
              "scrollbars=yes",
            ].join(",")
          );
        },
        interceptPopup: function (e) {
          var t,
            n = null;
          return (
            (t = window.open),
            (window.open = function () {
              return (n = t.apply(void 0, arguments));
            }),
            e(),
            (window.open = t),
            n
          );
        },
        createPopupOpener: function (e) {
          var t,
            i = e.url,
            r = e.width,
            o = e.height,
            a = e.name;
          return function () {
            return (
              (t && !t.closed) || (t = n.centered(i, r, o, a)), t.focus(), t
            );
          };
        },
      });
    },
    508: function (e, t, n) {
      var i = (function () {
          "use strict";
          function e(e, t) {
            (this.fn = e),
              (this.priority = t),
              (this.isStarted = !1),
              (this.defer = n(7).defer());
          }
          var t = e.prototype;
          return (
            (t.run = function () {
              var e = this.defer,
                t = e.resolve,
                n = e.reject,
                i = e.state;
              return (
                this.isStarted ||
                  "pending" !== i() ||
                  ((this.isStarted = !0), this.fn().done(t).fail(n)),
                this.defer
              );
            }),
            (t.cancel = function () {
              this.defer.reject();
            }),
            e
          );
        })(),
        r = (function () {
          "use strict";
          function e(e) {
            (this.tasks = new (n(956))(function (e) {
              return e.priority;
            })),
              (this.paused = !1),
              (this.pendingCount = 0),
              (this.maxConcurrentTasks = e);
          }
          var t = e.prototype;
          return (
            (t.processQueue = function () {
              var e = this;
              if (!this.paused)
                for (
                  ;
                  this.maxConcurrentTasks - this.pendingCount > 0 &&
                  this.tasks.size();

                ) {
                  var t = this.tasks.dequeue();
                  this.pendingCount++,
                    t.run().always(function () {
                      e.pendingCount--, e.processQueue();
                    });
                }
            }),
            (t.addTask = function (e, t) {
              void 0 === t && (t = 1);
              var n = new i(e, t);
              return this.tasks.enqueue(n), this.processQueue(), n;
            }),
            (t.removeTask = function (e) {
              return e.cancel(), this.tasks.remove(e);
            }),
            (t.pause = function () {
              this.paused = !0;
            }),
            (t.resume = function () {
              (this.paused = !1), this.processQueue();
            }),
            (t.clear = function () {
              this.tasks.clear();
            }),
            e
          );
        })();
      e.exports = {
        AsyncTask: i,
        AsyncTasksQueue: r,
      };
    },
    509: function (e, t, n) {
      e.exports = {
        get: function (e, t) {
          var i = e.username || e.title || e.name;
          return !0 === t && (i = n(324).possessive(i)), i;
        },
        getTitleDisplayName: function (e, t, i) {
          var r = (function (e, t, i) {
            if (i.indexOf(" ") > -1) return i;
            if (i !== i.toUpperCase()) {
              var r = i.replace(/[.,#~_-]|([a-z])([A-Z])/g, function (e, t, n) {
                return t ? t + " " + n : " ";
              });
              if (i !== r) return n(111).titleCase(r);
            }
            var o = i.toLowerCase();
            if (
              (e && o.indexOf(e.toLowerCase()) > -1) ||
              (t && o.indexOf(t.toLowerCase()) > -1) ||
              o.indexOf("user") > -1
            )
              return e + " " + t;
            return i;
          })(e, t, i);
          return r !== i ? i + " | " + r : i;
        },
      };
    },
    51: function (e, t, n) {
      var i = d(n(322)),
        r = [
          "US",
          "IE",
          "GB",
          "FR",
          "PR",
          "AS",
          "GU",
          "MP",
          "VI",
          "GG",
          "JE",
          "IM",
          "GP",
          "MQ",
          "RE",
          "AU",
          "NZ",
          "CA",
          "DE",
          "NL",
          "BE",
          "CH",
          "ES",
          "IT",
          "PT",
          "AT",
          "FI",
          "DK",
          "SE",
          "NO",
        ],
        o = {
          AI: "GB",
          AS: "US",
          AW: "NL",
          AX: "FI",
          BL: "FR",
          BM: "GB",
          BQ: "NL",
          BV: "NO",
          CC: "AU",
          CK: "NZ",
          CW: "NL",
          CX: "AU",
          FK: "GB",
          FO: "DK",
          GG: "GB",
          GI: "GB",
          GL: "DK",
          GP: "FR",
          GS: "GB",
          GU: "US",
          IM: "GB",
          IO: "GB",
          JE: "GB",
          KY: "GB",
          MF: "FR",
          MP: "US",
          MQ: "FR",
          MS: "GB",
          NC: "FR",
          NF: "AU",
          NU: "NZ",
          PF: "FR",
          PM: "FR",
          PN: "GB",
          PR: "US",
          RE: "FR",
          SH: "GB",
          SJ: "NO",
          SX: "NL",
          TC: "GB",
          TF: "FR",
          TK: "NZ",
          VG: "GB",
          VI: "US",
          WF: "FR",
        },
        a = [
          "AQ",
          "AF",
          "CU",
          "BV",
          "IO",
          "CF",
          "CX",
          "GQ",
          "HT",
          "HM",
          "IR",
          "IQ",
          "KP",
          "LB",
          "LR",
          "LY",
          "MM",
          "PK",
          "UA",
          "TR",
        ],
        s = ["US", "AS", "GU", "MP", "PR", "UM", "VI"],
        u = [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "ES",
          "SE",
          "GB",
        ];
      e.exports = {
        countryToCode: function (e) {
          return (
            (t = i),
            (r = e),
            n(0).find(Object.keys(t), function (e) {
              return t[e] === r;
            }) || ""
          );
          var t, r;
        },
        codeToCountry: function (e) {
          return i[e] || "";
        },
        country: function (e) {
          return new l(i[e], e);
        },
        countries: function (e) {
          var t;
          return (
            (t =
              e && e.length > 0 && "worldwide" !== e[0]
                ? d(
                    n(0)
                      .chain(e)
                      .map(n(0).propertyOf(n(322)))
                      .compact()
                      .value()
                  )
                : i),
            n(0).chain(t).map(l).sortBy("title").value()
          );
        },
        countryCodes: function (e) {
          var t = e ? n(322)[e] : i;
          return t && Object.keys(t);
        },
        monetizableCountryCodes: function () {
          return r;
        },
        regionCodes: function () {
          return Object.keys(n(322)).sort();
        },
        regions: function () {
          return this.regionCodes().map(c);
        },
        complement: function (e) {
          return n(0).difference(Object.keys(i), e);
        },
        euCountryCodes: function () {
          return u;
        },
        isEUCountry: function (e) {
          return -1 !== u.indexOf(e);
        },
        isUSCountry: function (e) {
          return -1 !== s.indexOf(e);
        },
        isPayPalAvailableInCountry: function (e) {
          return -1 === a.indexOf(e);
        },
        parentCountryCode: function (e) {
          return o[e] || e;
        },
      };
      function l(e, t) {
        return {
          title: e,
          value: t,
        };
      }
      function c(e) {
        return {
          title: f(e),
          value: e,
        };
      }
      function d(e) {
        return n(0).reduce(
          e,
          function (e, t) {
            return n(0).assign(e, t);
          },
          {}
        );
      }
      function f(e) {
        return n(111).titleCase(e.replace("_", " "));
      }
    },
    52: function (e, t) {
      e.exports = {
        ChangeFrequency: {
          always: "always",
          hourly: "hourly",
          daily: "daily",
          weekly: "weekly",
          monthly: "monthly",
          yearly: "yearly",
          never: "never",
        },
      };
    },
    522: function (e, t) {
      e.exports = {
        default: "default",
        passwordReset: "password-reset",
      };
    },
    529: function (e, t, n) {
      e.exports = n(87).extend({
        maxLength: 30,
        message: function () {
          return n(1).Lingua.t("You can use up to [[maxLength]] tags.", {
            maxLength: this.maxLength,
          });
        },
      });
    },
    53: function (e, t) {
      e.exports = {
        IDLE: 0,
        QUEUED: 1,
        UPLOADING: 2,
        FAILED: 4,
        TRANSCODING: 8,
        COMPLETE: 16,
      };
    },
    539: function (e, t, n) {
      var i;
      e.exports = {
        preparePlaylistForm: function (e, t, i) {
          var r = a(e, n(333), {
            resource_id: e.resource_id,
          });
          r.set("sharing", n(285).getDefaultAvailability()),
            i && r.setTitleFromFolder(i);
          var u = e.getUploads().map(function (e) {
            return o(e, t);
          });
          return r.addSoundForms(u), s(r), r;
        },
        prepareSoundUploadForm: o,
        prepareSoundEditForm: r(n(93)),
        addFiles: function (e, t) {
          var o = this,
            a = void 0 === t ? {} : t,
            u = a.toPlaylistUploadId,
            l = a.replaceSoundUploadId,
            c = a.ReplaceSoundUploadClass,
            d = a.isDragNDrop;
          i || (i = new (n(171))());
          var f =
              !u &&
              n(285).getUploadAsPlaylist() &&
              n(4).get("me").canBulkUploadAsPlaylist(),
            h = {},
            p = i.extractFolderName(e);
          return i
            .addFiles(e, {
              replaceSoundUploadId: l,
            })
            .then(function (e) {
              var t = e.length;
              if (f && t > 1)
                (h.inPlaylist = !0),
                  o.preparePlaylistForm(i.addUploadsAsAggregate(e), h, p);
              else if (u)
                o.preparePlaylistForm(i.addUploadsToAggregate(e, u), h, p);
              else if (l) {
                var a = c ? r(c) : o.prepareSoundEditForm;
                e.forEach(a);
              } else e.map(o.prepareSoundUploadForm).forEach(s);
              t > 0 &&
                !u &&
                (function (e, t) {
                  var i = t.asPlaylist,
                    r = t.isDragNDrop;
                  n(12).trackV0Click(
                    [
                      "upload_group",
                      1 === e ? "single" : "multiple",
                      1 !== e && (i ? "grouped" : "ungrouped"),
                    ].filter(Boolean),
                    {
                      click_attributes: {
                        is_drag_n_drop: !!r,
                      },
                    }
                  );
                })(t, {
                  asPlaylist: f,
                  isDragNDrop: d,
                });
            });
        },
      };
      function r(e) {
        return function (t) {
          return a(t, e, {
            resource_id: t.resource_id,
          });
        };
      }
      function o(e, t) {
        var i = a(
          e,
          n(93),
          n(0).extend(
            {
              resource_id: e.resource_id,
            },
            t
          )
        );
        return (
          n(1433)
            .getDataFromFile(e.get("file"))
            .done(function (e) {
              e.artwork_data &&
                i.setImageFile(
                  n(651).getBlobFromDataURI(e.artwork_data),
                  "id3"
                ),
                i.set(n(0).omit(e, "artwork_data"));
            }),
          i.set("availability", n(285).getDefaultAvailability()),
          i.set("track_format", n(285).getDefaultTrackFormat()),
          i
        );
      }
      function a(e, t, n) {
        var i = (function (e, t) {
          var n = new e(null, t);
          return n.release(), n;
        })(t, n);
        return i.setFileUpload(e), i;
      }
      function s(e) {
        var t = new (n(752))();
        t.add(e, {
          at: 0,
        }),
          t.release();
      }
    },
    56: function (e, t, n) {
      var i = (e.exports = {
        createSnippetUXSoundFilter: function (e) {
          var t = e.skipSnippetizedAndBlockedSounds;
          return function (e) {
            var n = !e.isSnippetized() && !e.isBlocked();
            return !t || (t && n);
          };
        },
        isSoundType: function (e) {
          return "sound" === e.resource_type;
        },
        isSnippetUnplayable: function (e) {
          return e.isSnippetized() && !e.isPlayable();
        },
        isSnippetBlocked: function (e, t) {
          return i.isSnippetUnplayable(e) && !t.isAvailable();
        },
        isSoundBlocked: function (e, t) {
          return (
            !!i.isSoundType(e) && (e.isBlocked() || i.isSnippetBlocked(e, t))
          );
        },
        isSoundInteractive: function (e, t) {
          return (
            i.isSoundType(e) && e.isInteractive() && !i.isSnippetBlocked(e, t)
          );
        },
        shouldEnableSnippetUX: function () {
          var e = n(4).get("experiments").get("go_plus_free_tier_web");
          return !1 === e
            ? n(4)
                .get("features")
                .has("v2_snippet_ux_skip_snippets_in_play_queue")
            : "treatment" === e;
        },
        isGoPlusSnippetNotPlayable: function (e, t) {
          return i.isSnippetAndUnplayable(e) && i.isProductAvailable(t);
        },
        isSnippetAndUnplayable: function (e) {
          return e === n(91).ContentPolicy.Snip && i.shouldEnableSnippetUX();
        },
        isProductAvailable: function (e) {
          return e.id === n(234).ProductId.free || !!e.preselected_term;
        },
        isBlocked: function (e, t) {
          return (
            e === n(91).ContentPolicy.Block ||
            (i.isSnippetAndUnplayable(e) && !i.isProductAvailable(t))
          );
        },
      });
    },
    57: function (e, t, n) {
      var i = (e.exports = n(201).extend());
      n(959).applyTo(i.prototype), n(960).applyTo(i.prototype);
    },
    575: function (e, t, n) {
      (function (t) {
        var i = {
          likes: "favorites",
          people: "users",
          sound: "track",
          sounds: "tracks",
          "web-profile": "web_profile",
        };
        e.exports = {
          initialize: function (e) {
            var i,
              r = this,
              o = e.statusCode,
              a = void 0 === o ? {} : o,
              s = e.enableScheduling,
              u = void 0 !== s && s,
              l = n(4).get("client_id");
            t.ajaxSetup({
              xhr:
                ((i = t.ajaxSettings.xhr),
                function () {
                  var e = i();
                  return (
                    this.progress &&
                      e.upload.addEventListener(
                        "progress",
                        this.progress.bind(this)
                      ),
                    e
                  );
                }),
              statusCode: a,
              progress: null,
              timeout: 4e4,
              beforeSend: function (e, t) {
                t.abort &&
                  "function" == typeof t.abort.addAbortListener &&
                  n(259).listenToAbortSignal(e, t.abort),
                  (t.crossDomain = !0),
                  r.isApiV2Endpoint(t.url) &&
                    (!t.omitAuthorization &&
                      n(18).isLoggedIn() &&
                      e.setRequestHeader(
                        "Authorization",
                        "OAuth " + n(18).getAuthToken()
                      ),
                    (t.url = n(26).modify(t.url, {
                      query: {
                        client_id: l,
                        app_version: n(4).get("app_version"),
                        app_locale: n(13).LinguaLib.getLocale(),
                        stage: n(68).get("stage"),
                      },
                    })));
              },
            }),
              u && (t.ajax = n(155).addAjaxScheduling(t.ajax));
          },
          isApiV2Endpoint: function (e) {
            return 0 === e.indexOf(n(4).get("api_v2_host"));
          },
          toAPIResource: function (e) {
            return i[e] || e;
          },
        };
      }.call(this, n(15)));
    },
    576: function (e, t, n) {
      var i = [n(67).none, n(67).one, n(67).all];
      e.exports = function (e) {
        var t,
          a,
          s,
          u,
          l,
          c,
          d,
          f,
          h,
          p,
          g,
          m = void 0 === e ? {} : e,
          v = m.prefetchDistance,
          y = void 0 === v ? 20 : v,
          _ = m.playNextOnErrorDelay,
          b = void 0 === _ ? 2500 : _,
          w = m.rewindThreshold,
          k = void 0 === w ? 5e3 : w,
          A = m.randomBufferSize,
          S = void 0 === A ? 100 : A,
          E = m.prefetchAudioCheckPoint,
          C = void 0 === E ? 1e4 : E,
          T = m.stableBufferDuration,
          x = void 0 === T ? 1e4 : T,
          I = new (n(961))(),
          L = 0,
          P = -1,
          M = -1 / 0,
          D = 0,
          O = 0,
          R = !1,
          U = !1,
          F = !1,
          N = !1,
          z = n(0).noop,
          q = null,
          V = i[0],
          j = !1,
          B = [],
          G = n(0).noop,
          H = n(0).memoize(function () {
            var e = n(7).defer();
            return (
              !a || a.stream.isEnded()
                ? e.resolve()
                : (K.listenTo(a.stream, "end", e.resolve), K.pullPrev(1 / 0)),
              e.promise()
            );
          }),
          Q = function () {
            return f.isAdBreakActive()
              ? !!f.isAllowedToSkipAdBreak() &&
                  ((z = n(0).noop), f.requestSkipAdBreak(), !0)
              : (f.dismissLeaveBehind(), !0);
          },
          K = n(0).assign({}, n(31).Events, {
            states: {
              globalPlayLock: {
                initial: !1,
              },
              hasNext: {
                initial: !1,
              },
              hasCurrent: {
                initial: !1,
              },
              shuffle: {
                setup: function () {
                  I.each(function (e, t) {
                    e.order = t;
                  });
                  var e = P + 1,
                    t = I.slice(0, e),
                    i = n(0).shuffle(I.slice(e));
                  I.reset(t.concat(i)), s && s.stream.shuffle();
                  n(12).trackV0Click(["shuffle"], {
                    click_name: "shuffle::on",
                  });
                },
                teardown: function () {
                  var e = K.getCurrentQueueItem(),
                    t = P;
                  for (; t >= 0 && I.at(t).explicit && null == I.at(t).order; )
                    t--;
                  var i = I.at(t),
                    r = I.reduce(
                      function (e, t) {
                        return (
                          null != t.order
                            ? e.ordered.push(t)
                            : t.explicit
                            ? e.explicit.push(t)
                            : t.index < 0
                            ? e.prev.push(t)
                            : e.next.push(t),
                          e
                        );
                      },
                      {
                        prev: [],
                        ordered: [],
                        explicit: [],
                        next: [],
                      }
                    );
                  s && (r.next = r.next.concat(s.stream.unshuffle()));
                  var o = [].concat(
                      n(0).sortBy(r.prev, "index"),
                      n(0).sortBy(r.ordered, "order"),
                      n(0).sortBy(r.next, "index")
                    ),
                    a = o.indexOf(i),
                    u = n(0).sortBy(r.explicit, "index");
                  o.splice.apply(o, [a + 1, 0].concat(u)),
                    -1 === (P = o.indexOf(e)) &&
                      n(196).notify(
                        new Error(
                          "PlayManager: Error occurred when unshuffling."
                        )
                      );
                  I.reset(o),
                    n(12).trackV0Click(["shuffle"], {
                      click_name: "shuffle::off",
                    });
                },
              },
              hasFallback: {
                initial: !1,
              },
              fallbackEnabled: {
                initial: !0,
              },
            },
            initialize: function (e, t, i, r) {
              void 0 === r && (r = function () {}),
                (f = e),
                (h = t),
                (p = i),
                K.listenTo(
                  f,
                  n(82).CHANGE_AD_SKIPPABILITY,
                  ae.bind(this, "change")
                )
                  .listenTo(f, n(82).END_AD_BREAK, ae.bind(this, "end"))
                  .listenTo(h, "destroy", function (e) {
                    var t = e.targetType,
                      n = e.targetModel;
                    "sound" === t && re.call(this, n);
                  })
                  .listenTo(p, "geoBlocked", ue)
                  .listenTo(p, "soundPolicyChange", oe),
                (d = r),
                (g = window.setInterval(le, 500)),
                (this.restoreSoundStore = new (n(578))());
            },
            dispose: function () {
              (z = n(0).noop),
                window.clearInterval(g),
                $(null),
                W(null),
                I.release(),
                K.stopListening(),
                K.off();
            },
            playSource: function (e, t, i, r) {
              if (
                (void 0 === r && (r = {}), !K.getState("globalPlayLock")) &&
                Q()
              ) {
                var o = K.getCurrentQueueItem();
                if (o && t === o.sound) K.playCurrent(r);
                else {
                  K.pauseCurrent({
                    seek: 0,
                  });
                  var a = void 0 === r.fallbackEnabled || r.fallbackEnabled;
                  K.toggleState("fallbackEnabled", a);
                  var s = n(321)(
                      e,
                      t,
                      i,
                      S,
                      void 0,
                      r.skipSnippetizedAndBlockedSounds
                    ),
                    u = s.prev;
                  W(s.next),
                    $(u),
                    K.trigger(n(226).QUEUE_RESET),
                    (l = r),
                    (F = !0),
                    (N = !1),
                    K.pullNext(1);
                }
              }
            },
            toggleSource: function (e, t, n) {
              void 0 === n && (n = {}),
                K.isSourcePlaying(e)
                  ? K.pauseCurrent(n)
                  : K.isSourceActive(e)
                  ? K.playCurrent(n)
                  : K.playSource(e, null, t, n);
            },
            playCurrent: function (e) {
              if (
                (void 0 === e && (e = {}),
                (e = n(0).defaults(e, {
                  allowAdBreak: !0,
                })),
                Q())
              ) {
                var t = K.getCurrentQueueItem();
                if (t && t.sound.isPlayable()) {
                  z = function () {
                    (z = n(0).noop),
                      (j = !0),
                      (function (e) {
                        if (n(116).isCasting()) return;
                        var t = function () {
                          G(),
                            n(1003)
                              .waitForPlayThreshold(e, K.getCurrentMetadata())
                              .then(function (e) {
                                var t = e.soundId,
                                  n = e.playContext;
                                h.addToPlayHistory(t, n, !0);
                              });
                        };
                        e.on("time", t),
                          G(),
                          (G = function () {
                            e.off("time", t), (G = n(0).noop);
                          });
                      })(t.sound),
                      t.sound.play(e),
                      t.sound.player &&
                        t.sound.player.registerMediaSessionActionHandlers(),
                      n(422).addSound(t.sound, e);
                  };
                  var i =
                      e.allowAdBreak &&
                      n(64).isUserAdConsumer() &&
                      !n(116).isCasting(),
                    r = q === t.sound.getUrn();
                  if (((q = t.sound.getUrn()), t.enablePreloading(), i && !r))
                    f.beginAdBreak(t.sound, e)
                      .fail(z)
                      .then(function (e) {
                        return e.getActiveDeferred();
                      })
                      .then(z);
                  else z();
                } else N ? K.playPrev(e) : K.playNext(e);
              } else
                z = function () {
                  return K.playCurrent(e);
                };
            },
            pauseCurrent: function (e) {
              void 0 === e && (e = {}), (c = null), (l = null);
              var t = K.getCurrentSound();
              t && (t.pause(), e.seek >= 0 && t.seek(e.seek));
            },
            toggleCurrent: function (e) {
              void 0 === e && (e = {});
              var t = K.getCurrentSound(),
                n = f.getCurrentAdSound();
              n
                ? n.toggle(e)
                : K.getState("globalPlayLock") ||
                  (t && (t.isPlaying() ? K.pauseCurrent(e) : K.playCurrent(e)));
            },
            seekCurrentBy: function (e) {
              var t = K.getCurrentSound(),
                n = f.getCurrentAdSound();
              if (t && !n) {
                var i = e(t);
                t.seekRelative(i);
              }
            },
            seekCurrentTo: function (e) {
              var t = K.getCurrentSound(),
                n = f.getCurrentAdSound();
              if (t && !n) {
                var i = e(t);
                t.seek(i);
              }
            },
            setCurrentItem: function (e, t) {
              if ((void 0 === t && (t = {}), Q())) {
                q = null;
                var i = K.getCurrentQueueItem(),
                  r = e !== i,
                  o = e.sound;
                r &&
                  (i && i.disablePreloading(),
                  K.pauseCurrent({
                    seek: 0,
                  }),
                  i && X(i.sound),
                  -1 === (P = I.indexOf(e)) &&
                    n(196).notify(
                      new Error(
                        "PlayManager: setCurrentItem() called with item which isn't in the queue."
                      )
                    ),
                  se(),
                  (function (e) {
                    if (B.indexOf(e) >= 0) return void 0;
                    B.push(e),
                      K.listenTo(e, "finish", ee)
                        .listenTo(e, "change:playable", ne)
                        .listenTo(e, "time", te)
                        .listenToOnce(e, "time", function () {
                          N = !1;
                        });
                  })(o),
                  K.trigger(n(226).CHANGE_CURRENT_SOUND, {
                    current: o,
                  })),
                  !0 !== t.pause ? K.playCurrent(t) : e.enablePreloading(),
                  r &&
                    (function () {
                      U || K.pullNext(Math.max(0, y - (I.length - P) + 1));
                      K.pullPrev(Math.max(0, y - P));
                    })(),
                  le();
              }
            },
            playNext: function (e) {
              if ((void 0 === e && (e = {}), f.isAdBreakActive()))
                f.requestSkipCurrentAd();
              else {
                (e = n(0).assign(
                  {
                    seek: 0,
                  },
                  e
                )),
                  (N = !1);
                var i = V === n(67).all,
                  a = K.getCurrentQueueItem();
                if (!a || V !== n(67).one || e.userInitiated)
                  if (I.length && P < I.length - 1)
                    K.setCurrentItem(I.at(P + 1), e);
                  else {
                    if (s)
                      return s.stream.isEnded() ||
                        (U && i) ||
                        (U && !K.getState("fallbackEnabled"))
                        ? void (i
                            ? H().then(function () {
                                var t = I.find(r);
                                t && K.setCurrentItem(t, e);
                              })
                            : K.getState("fallbackEnabled") &&
                              (function (e) {
                                void 0 === e && (e = {});
                                if (s.stream.isEnded()) {
                                  var t,
                                    i = o(I);
                                  i &&
                                    (t = (function (e) {
                                      if (!e || !d) return;
                                      var t = I.map(function (e) {
                                          return e.index;
                                        }),
                                        i =
                                          Math.max.apply(Math, [0].concat(t)) +
                                          1,
                                        r = d(e.sound) || {},
                                        o = r.source,
                                        a = {
                                          restoreUrl: r.restoreUrl,
                                          layoutInfo: e.layoutInfo,
                                          sourceInfo: {},
                                        };
                                      if (o) return n(321)(o, null, a, 1, i);
                                    })(i)) &&
                                    (W(t.next, !0),
                                    t.prev.dispose(),
                                    (l = e),
                                    K.pullNext(1));
                                } else U && ((l = e), K.pullNext(1));
                              })(e))
                        : ((l = e), void K.pullNext(1));
                    t && (W(t.next), $(t.prev), (t = null), K.playNext(e));
                  }
                else K.setCurrentItem(a, e);
              }
            },
            playPrev: function (e) {
              void 0 === e && (e = {}),
                (e = n(0).assign(
                  {
                    seek: 0,
                  },
                  e
                ));
              var t = K.getCurrentSound(),
                i = f.getCurrentAdSound(),
                r =
                  V === n(67).all &&
                  a &&
                  a.stream.isEnded() &&
                  s &&
                  s.stream.isEnded(),
                o = P > 0 ? I.at(P - 1) : r ? I.last() : null,
                u = a && !a.stream.isEnded();
              if (!i && t && ((!o && !u) || t.currentTime() > k))
                return (
                  t.isPlayable() &&
                    (t.seek(0), t.isPlaying() || ((j = !0), t.play(e))),
                  void (N = !1)
                );
              (N = !0),
                o ? K.setCurrentItem(o, e) : u && ((c = e), K.pullPrev(1));
            },
            removeItem: function (e) {
              K.getCurrentQueueItem() !== e && I.remove(e);
            },
            clearQueue: function () {
              var e = K.getCurrentQueueItem();
              K.replaceQueue(e ? [e] : [], e ? 0 : -1);
            },
            replaceQueue: function (e, t, i) {
              void 0 === i && (i = {}),
                (t >= -1 && t < e.length) ||
                  n(196).notify(
                    new Error(
                      "PlayManager: Cursor out of range when attempting to replace queue: " +
                        t
                    )
                  ),
                $(null),
                s && (K.stopListening(s.stream), s.dispose()),
                (s = n(424)),
                (U = !1),
                (D = 0);
              var r = K.getCurrentSound();
              r && e[t].sound !== r && K.pauseCurrent(),
                X(r),
                K.trigger(n(226).QUEUE_RESET),
                I.reset(e, {
                  silent: !0,
                }),
                (P = -1),
                t >= 0 && K.setCurrentItem(I.at(t), i),
                I.trigger("reset", I, {}),
                se();
            },
            addExplicitQueueItem: function (e, t, i) {
              K.injectExplicitQueueItem(K.createExplicitQueueItem(e, t, i)),
                s || W(n(424), !1);
            },
            createExplicitQueueItem: function (e, t, i) {
              var r = e.getSoundIndex(t),
                o = e.getQueueMetadataAt(r),
                a = o.originalModel,
                s = o.queryPosition,
                u = o.sourceInfo,
                l = new (n(145))(
                  {},
                  {
                    contextSnapshot: i,
                    originalModel: a,
                    queryPosition: s,
                    sound: t,
                    sourceInfo: u,
                    explicit: !0,
                    index: L++,
                  }
                );
              return l.release(), l;
            },
            injectExplicitQueueItem: function (e) {
              for (
                var t = P + 1, n = I.length;
                t < n && I.at(t) && I.at(t).explicit;

              )
                t++;
              I.add(e, {
                at: t,
              }),
                0 === n &&
                  K.setCurrentItem(e, {
                    pause: !0,
                  });
            },
            cloneQueueItemToExplicit: function (e) {
              var t = e.clone({
                explicit: !0,
                index: L++,
                order: null,
              });
              t.release(), K.injectExplicitQueueItem(t);
            },
            toggleShuffle: function () {
              K.toggleState("shuffle");
            },
            setInitialHistorySource: function (e, t) {
              var i = n(321)(e, null, t),
                r = i.next;
              i.prev.dispose(),
                $(r),
                W(n(424), !1),
                (c = {
                  pause: !0,
                }),
                K.pullPrev(1);
            },
            setInitialSource: function (e, i, r) {
              if (
                (void 0 === i && (i = 0),
                R &&
                  !u &&
                  (u = window.setTimeout(function () {
                    (R = !1),
                      (u = null),
                      K.playCurrent({
                        userInitiated: !1,
                      });
                  }, 400)),
                !a && i > M)
              ) {
                t && t.dispose(), (M = i);
                var o = !!e.playlist,
                  s = o ? e.playlist : e,
                  l = o ? e : null;
                return (t = n(321)(s, l, r));
              }
            },
            unsetInitialSource: function (e) {
              t === e && ((M = -1 / 0), t.dispose(), (t = null));
            },
            isSourcePlaying: function (e) {
              var t = K.getCurrentSound();
              return !!t && t.isPlaying() && K.isSourceActive(e);
            },
            isPlaying: function () {
              var e,
                t =
                  null != (e = f.getCurrentAdSound()) ? e : K.getCurrentSound();
              return !!t && t.isPlaying();
            },
            isSourceActive: function (e) {
              var t = K.getCurrentQueueItem();
              return !!t && n(0).isEqual(t.sourceInfo, e.getSourceInfo());
            },
            getQueue: function () {
              return I;
            },
            getCurrentQueueItem: function () {
              return I.at(P);
            },
            getCurrentMetadata: function () {
              var e = n(64).isUserAdConsumer() ? f.getCurrentAdSound() : null,
                t = K.getCurrentQueueItem();
              if (e && t) {
                var i = t.clone({
                  sound: e,
                  originalModel: e,
                  restoreUrl: null,
                });
                return i.release(), i;
              }
              return t;
            },
            getCurrentMetadataEmptyReasons: function () {
              return {
                adConsumer: n(64).isUserAdConsumer(),
                currentAd: n(64).isUserAdConsumer() && !!f.getCurrentAdSound(),
                queueLength: I.length,
                queueCursor: P,
              };
            },
            hasNextSound: function () {
              return K.getState("hasNext");
            },
            hasCurrentSound: function () {
              return K.getState("hasCurrent");
            },
            getCurrentSound: function () {
              var e = K.getCurrentQueueItem();
              return e && e.sound;
            },
            hasMoreAhead: function () {
              return !!s && !s.stream.isEnded();
            },
            hasMoreBehind: function () {
              return !!a && !a.stream.isEnded();
            },
            hasFallback: function () {
              return U || (s && s.stream.isEnded() && !!o(I));
            },
            enableAutoplay: function () {
              s
                ? K.playCurrent({
                    userInitiated: !1,
                  })
                : (R = !0);
            },
            restoreState: function (e) {
              if ((void 0 === e && (e = K.getCurrentQueueItem()), e)) {
                var t = n(4).get("router"),
                  i = e,
                  r = i.contextSnapshot,
                  o = i.sound,
                  a = r && r.restoreUrl,
                  s = o.playlist || o.systemPlaylist || o;
                a
                  ? (t.navigate(a, {
                      trigger: !0,
                    }),
                    this.restoreSoundStore.set(
                      "restoreToSound",
                      s.resource_type + s.resource_id
                    ))
                  : t.navigateToRoute("listen", [o], {
                      trigger: !0,
                    });
              }
            },
            cycleRepeatMode: function () {
              if (n(116).isCasting())
                K.setRepeatMode(V === n(67).none ? n(67).one : n(67).none);
              else {
                var e = i.indexOf(V);
                K.setRepeatMode(i[(e + 1) % i.length]);
              }
            },
            setRepeatMode: function (e) {
              e !== V &&
                ((V = e), K.trigger(n(226).CHANGE_REPEAT_MODE, V), se());
            },
            pullNext: function (e) {
              s &&
                !s.stream.isEnded() &&
                (D = Math.max(D, e)) > 0 &&
                s.stream.resume();
            },
            pullPrev: function (e) {
              a &&
                !a.stream.isEnded() &&
                (O = Math.max(O, e)) > 0 &&
                a.stream.resume();
            },
            getQueueState: function () {
              return {
                currentIndex: P,
                repeatMode: V,
              };
            },
          });
        return (
          n(420).applyTo(K),
          K.listenTo(I, "remove", function (e, t, n) {
            n.index <= P && --P;
            se();
          })
            .listenTo(I, "add", function (e) {
              I.indexOf(e) <= P && ++P;
              se();
            })
            .listenTo(I, "error", function (e, t) {
              if (!t) return;
              (404 === t.status || t instanceof n(260)) && re(e.sound);
            }),
          K
        );
        function W(e, t) {
          var i, r, o;
          void 0 === t && (t = !1),
            s && (K.stopListening(s.stream), s.dispose()),
            t ||
              ((i = K.getCurrentQueueItem()),
              (r = j || (i && !i.explicit)),
              (o = I.slice(0, P + (r ? 1 : 0)).concat(
                n(0).reject(I.slice(P + 1), "explicit")
              )),
              I.remove(o),
              r && X(i.sound)),
            (s = e),
            (U = t),
            (D = 0),
            e &&
              (K.getState("shuffle") && e.stream.shuffle(),
              K.listenTo(s.stream, "data", J).listenTo(s.stream, "end", Z)),
            se();
        }
        function $(e) {
          a && (K.stopListening(a.stream), a.dispose()),
            (a = e),
            e && ((H.cache = {}), K.listenTo(a.stream, "data", Y));
        }
        function Y(e) {
          0 == --O && a.stream.pause(),
            I.unshift(e, {
              prevStream: !0,
            }),
            c && K.setCurrentItem(e, c);
        }
        function J(e) {
          0 == --D && s.stream.pause(),
            F ? (I.unshift(e), (F = !1)) : I.push(e),
            l && K.setCurrentItem(e, l),
            le();
        }
        function Z() {
          F = !1;
        }
        function X(e) {
          if (e) {
            var t = B.indexOf(e);
            t >= 0 &&
              (B.splice(t, 1),
              K.stopListening(e),
              e.player && e.player.unregisterMediaSessionActionHandlers());
          }
        }
        function ee() {
          var e = K.getCurrentSound();
          n(116).isCasting() || (e.pause(), ie());
        }
        function te(e) {
          var t = K.getCurrentSound();
          t &&
            t.currentTime() >= t.duration() - C &&
            (le(), K.stopListening(t, "time", te));
        }
        function ne() {
          var e = K.getCurrentSound();
          e && !e.isPlayable() && (X(e), ie());
        }
        function ie(e) {
          void 0 === e && (e = {}),
            K.playNext(
              n(0).assign(
                {
                  userInitiated: !1,
                },
                e
              )
            );
        }
        function re(e) {
          var t = e.isPlaying(),
            n = K.getCurrentSound() === e,
            i = I.filter({
              sound: e,
            });
          I.remove(i),
            n &&
              ie({
                pause: !t,
              });
        }
        function oe(e) {
          var t = n(56).shouldEnableSnippetUX(),
            i = !e.isSnippetized() && !e.isBlocked();
          t && !i && re.call(this, e);
        }
        function ae(e) {
          K.toggleState("globalPlayLock", f.isAdBreakActive());
        }
        function se() {
          var e =
              P < I.length - 1 ||
              (!!s && !s.stream.isEnded()) ||
              (V === n(67).all && I.length > 1) ||
              (V !== n(67).all && !!o(I)),
            t = !(!e && !K.getCurrentQueueItem());
          K.toggleState("hasNext", e).toggleState("hasCurrent", t);
        }
        function ue(e) {
          var t = e.sound;
          if (t.isPlaying()) {
            var n = function e() {
                t.off("pause", e), window.clearTimeout(i);
              },
              i = window.setTimeout(function () {
                n(), K.playNext();
              }, b);
            t.on("pause", n);
          }
        }
        function le() {
          for (
            var e, t = K.getCurrentQueueItem(), n = 1;
            t && null != (e = I.at(P + n)) && !e.sound.isPlayable();

          )
            n++;
          if (e) {
            var i = t.sound && t.sound.player;
            if (i) {
              var r = i.getMaxBufferLength(),
                o = i.getCurrentBufferedTimeRange(),
                a = i.getDuration(),
                s = o ? o.end : 0,
                u = i.getPosition();
              null !== r && null !== a && (s >= a || s - u >= Math.min(x, r))
                ? e.enablePreloading()
                : e.disablePreloading();
            }
          }
        }
      };
      function r(e) {
        return e.sound.isPlayable();
      }
      function o(e) {
        for (var t = e.length; t--; )
          if (e.at(t).sound.isPublic()) return e.at(t);
      }
    },
    577: function (e, t, n) {
      var i = (e.exports = n(201).extend());
      n(962).applyTo(i.prototype);
    },
    58: function (e, t, n) {
      e.exports = n(1621)();
    },
    580: function (e, t) {
      function n() {}
      function i(e) {
        (this._tree = e), (this._ancestors = []), (this._cursor = null);
      }
      (n.prototype.clear = function () {
        (this._root = null), (this.size = 0);
      }),
        (n.prototype.find = function (e) {
          for (var t = this._root; null !== t; ) {
            var n = this._comparator(e, t.data);
            if (0 === n) return t.data;
            t = t.get_child(n > 0);
          }
          return null;
        }),
        (n.prototype.findIter = function (e) {
          for (var t = this._root, n = this.iterator(); null !== t; ) {
            var i = this._comparator(e, t.data);
            if (0 === i) return (n._cursor = t), n;
            n._ancestors.push(t), (t = t.get_child(i > 0));
          }
          return null;
        }),
        (n.prototype.lowerBound = function (e) {
          for (
            var t = this._root, n = this.iterator(), i = this._comparator;
            null !== t;

          ) {
            var r = i(e, t.data);
            if (0 === r) return (n._cursor = t), n;
            n._ancestors.push(t), (t = t.get_child(r > 0));
          }
          for (var o = n._ancestors.length - 1; o >= 0; --o)
            if (i(e, (t = n._ancestors[o]).data) < 0)
              return (n._cursor = t), (n._ancestors.length = o), n;
          return (n._ancestors.length = 0), n;
        }),
        (n.prototype.upperBound = function (e) {
          for (
            var t = this.lowerBound(e), n = this._comparator;
            null !== t.data() && 0 === n(t.data(), e);

          )
            t.next();
          return t;
        }),
        (n.prototype.min = function () {
          var e = this._root;
          if (null === e) return null;
          for (; null !== e.left; ) e = e.left;
          return e.data;
        }),
        (n.prototype.max = function () {
          var e = this._root;
          if (null === e) return null;
          for (; null !== e.right; ) e = e.right;
          return e.data;
        }),
        (n.prototype.iterator = function () {
          return new i(this);
        }),
        (n.prototype.each = function (e) {
          for (var t, n = this.iterator(); null !== (t = n.next()); ) e(t);
        }),
        (n.prototype.reach = function (e) {
          for (var t, n = this.iterator(); null !== (t = n.prev()); ) e(t);
        }),
        (i.prototype.data = function () {
          return null !== this._cursor ? this._cursor.data : null;
        }),
        (i.prototype.next = function () {
          if (null === this._cursor) {
            var e = this._tree._root;
            null !== e && this._minNode(e);
          } else {
            var t;
            if (null === this._cursor.right)
              do {
                if (((t = this._cursor), !this._ancestors.length)) {
                  this._cursor = null;
                  break;
                }
                this._cursor = this._ancestors.pop();
              } while (this._cursor.right === t);
            else
              this._ancestors.push(this._cursor),
                this._minNode(this._cursor.right);
          }
          return null !== this._cursor ? this._cursor.data : null;
        }),
        (i.prototype.prev = function () {
          if (null === this._cursor) {
            var e = this._tree._root;
            null !== e && this._maxNode(e);
          } else {
            var t;
            if (null === this._cursor.left)
              do {
                if (((t = this._cursor), !this._ancestors.length)) {
                  this._cursor = null;
                  break;
                }
                this._cursor = this._ancestors.pop();
              } while (this._cursor.left === t);
            else
              this._ancestors.push(this._cursor),
                this._maxNode(this._cursor.left);
          }
          return null !== this._cursor ? this._cursor.data : null;
        }),
        (i.prototype._minNode = function (e) {
          for (; null !== e.left; ) this._ancestors.push(e), (e = e.left);
          this._cursor = e;
        }),
        (i.prototype._maxNode = function (e) {
          for (; null !== e.right; ) this._ancestors.push(e), (e = e.right);
          this._cursor = e;
        }),
        (e.exports = n);
    },
    587: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = (e.exports = {
        include: function () {
          var e = this,
            t =
              "https://www.googletagmanager.com/gtm.js?id=" +
              (n(23).isOneTrustEnabled() ? "GTM-PC2BJW8" : "GTM-NXX9K5"),
            i = (window.dataLayer = window.dataLayer || []),
            o = !!n(4).get("me").id,
            a = new (n(57))("google-tag-manager-page-tracking");
          i.push({
            "gtm.start": Date.now(),
            event: "gtm.js",
          }),
            o ||
              (n(8).once("connect:login", function () {
                e.pushEvent({
                  event: "login",
                });
              }),
              n(8).once("signup:successful", function () {
                e.pushEvent({
                  event: "signup-successful",
                });
              })),
            n(8).on("consumer-premium:subscriptionChange", function (t) {
              var n = t.price,
                i = (t.subType, t.term);
              e.pushEvent({
                event: "consumer-signup-successful-go",
                price: n,
                subscriptionTerm: i,
              });
            }),
            n(8).on("layout:change", function (t) {
              r.adjustViewCounts(a, t),
                e.pushEvent({
                  event: "virtual-pageview",
                  layoutInfo: t,
                  layoutViewCounts: r.getViewCounts(a),
                });
            }),
            n(8).on("upload_funnel:save", function () {
              e.pushEvent({
                event: "upload-save",
              });
            }),
            n(0).defer(n(65).insertScript, t);
        },
        trackAudioEvent: function (e) {
          this.pushEvent(e);
        },
        pushEvent: function (e) {
          var t = e.event,
            r = e.creatorSubType,
            o = e.layoutInfo,
            a = e.layoutViewCounts,
            s = (function (e, t) {
              if (null == e) return {};
              var n,
                i,
                r = {},
                o = Object.keys(e);
              for (i = 0; i < o.length; i++)
                (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r;
            })(e, [
              "event",
              "creatorSubType",
              "layoutInfo",
              "layoutViewCounts",
            ]),
            u = (window.dataLayer = window.dataLayer || []),
            l = n(4).get("me"),
            c = !!l.id,
            d = n(4).get("geoip"),
            f = d && d.get("country_code"),
            h = {};
          Object.keys(s).forEach(function (e) {
            h[e] = s[e] || void 0;
          }),
            u.push(
              n(0).defaults(
                i(
                  {
                    event: t,
                    isLoggedIn: c,
                    guid: n(425).generate(),
                    isPremium: l.isPremium(),
                    creatorSubType: r || l.getCreatorPlan(),
                    pageCategory: o ? o.layoutName : void 0,
                    hasHighTier: l.hasHighTier(),
                    consumerSubType: l.getConsumerPlan(),
                    countryCode: f,
                  },
                  h
                ),
                a || {}
              )
            );
        },
        adjustViewCounts: function (e, t) {
          var n = t.layoutName;
          "upload" === n
            ? e.set("uploadVisitCount", (e.get("uploadVisitCount") || 0) + 1)
            : "stats" === n &&
              e.set("statsVisitCount", (e.get("statsVisitCount") || 0) + 1),
            e.set("allVisitCount", (e.get("allVisitCount") || 0) + 1);
        },
        getViewCounts: function (e) {
          return {
            uploadVisitCount: e.get("uploadVisitCount") || 0,
            statsVisitCount: e.get("statsVisitCount") || 0,
            premiumVisitCount: 0,
            allVisitCount: e.get("allVisitCount") || 0,
          };
        },
      });
    },
    588: function (e, t, n) {
      var i = new (n(57))("aw"),
        r = null;
      function o() {
        (r = null), i.reset();
      }
      function a() {
        if (n(23).isOneTrustEnabled()) {
          if (!n(23).isCategoryEnabled(n(23).CookieCategory.Targeting))
            return o();
        } else if (
          !n(4).get("privacy_settings").isOptedInToTargetedAdvertising()
        )
          return o();
        if (!i.get("listener_id")) return s();
        var e = i.get("last_updated"),
          t = (Date.now() - e) / n(29).MS_IN_DAY;
        e && t >= 1 && s();
      }
      function s() {
        n(65).insertMultipleScriptsInSandbox(
          [
            "//synchrobox.adswizz.com/register2.php",
            "//cdn.adswizz.com/adswizz/js/SynchroClient2.js",
          ],
          void 0,
          {
            onScriptLoad: function (e, t) {
              var n =
                t &&
                "function" == typeof t.com_adswizz_synchro_getListenerId &&
                t.com_adswizz_synchro_getListenerId();
              n &&
                ((r = n),
                i.set("listener_id", n),
                i.set("last_updated", Date.now()));
            },
          }
        );
      }
      e.exports = {
        initialize: function () {
          n(23).isOneTrustEnabled()
            ? this.initializeWithOneTrust()
            : this.initializeWithPrivacySettings();
        },
        initializeWithOneTrust: function () {
          n(23).onChange(function () {
            n(23).isCategoryEnabled(n(23).CookieCategory.Targeting) ? a() : o();
          });
        },
        initializeWithPrivacySettings: function () {
          var e = n(4).get("privacy_settings");
          e.on("change:" + n(153).TARGETED_ADVERTISING_OPT_IN, function () {
            e.isOptedInToTargetedAdvertising() ? a() : o();
          }),
            n(8).on("connect:logout", o),
            n(8).on("connect:login", a),
            a();
        },
        getAdswizzId: function () {
          return r || i.get("listener_id");
        },
      };
    },
    589: function (e, t, n) {
      var i,
        r = new (n(57))("dax"),
        o = ["date_of_birth", "gender"];
      function a() {
        if (
          n(23).isOneTrustEnabled()
            ? n(23).isCategoryEnabled(n(23).CookieCategory.Targeting)
            : n(4).get("privacy_settings").isOptedInToTargetedAdvertising()
        ) {
          var e = r.get("userInfo");
          if (
            (e &&
              e.segments &&
              e.uid &&
              !i &&
              (i = {
                segments: e.segments,
                uid: e.uid,
              }),
            e && e.last_updated)
          )
            ((Date.now() - e.last_updated) / n(29).MS_IN_DAY >= 1 || !i) && u();
          else u();
        }
      }
      function s() {
        (i = void 0), r.reset();
      }
      function u() {
        var e;
        ((e = n(4).get("me")),
        n(7)
          .all([
            n(65).loadSandbox(),
            n(18).isLoggedIn()
              ? e.fetch({
                  attrs: o,
                })
              : n(7).resolve(),
          ])
          .done(function (t) {
            t.contentWindow.xl8_config = {
              p: 1083,
              g: 1,
            };
            var n = {},
              i = e.get("gender"),
              r = e.get("date_of_birth");
            return (
              ("female" !== i && "male" !== i) || (n.gender = i),
              r && r.year && (n.age = new Date().getFullYear() - r.year),
              (t.contentWindow.dataLayer = n),
              t
            );
          }))
          .then(l)
          .then(c)
          .then(d);
      }
      function l(e) {
        var t = n(7).defer();
        n(65).insertScriptIntoIframe(
          e,
          "https://cdn.exelator.com/build/static.min.js",
          {},
          {
            onScriptLoad: t.resolve,
            onError: t.resolve,
          }
        );
      }
      function c() {
        var e = n(7).defer(),
          t = new window.XMLHttpRequest();
        return (
          (t.onload = function () {
            200 !== this.status ? e.reject() : e.resolve(t.responseText);
          }),
          (t.onerror = e.reject),
          t.open("GET", "https://loadr.exelator.com/load?p=1083&g=130&j=j", !0),
          t.send(),
          e
        );
      }
      function d(e) {
        try {
          var t = JSON.parse(e),
            o = t && t.user;
          if (o && o.segments && o.uid) {
            var a = {
              segments: o.segments,
              uid: o.uid,
              last_updated: Date.now(),
            };
            (i = s = a), r.set("userInfo", s);
          }
        } catch (e) {
          return void n(12).trackV1Click({
            click_name: "dax-non-json",
          });
        }
        var s;
      }
      e.exports = {
        initialize: function () {
          n(23).isOneTrustEnabled()
            ? this.initializeWithOneTrust()
            : this.initializeWithPrivacySettings();
        },
        initializeWithOneTrust: function () {
          n(23).onChange(function () {
            n(23).isCategoryEnabled(n(23).CookieCategory.Targeting) ? a() : s();
          });
        },
        initializeWithPrivacySettings: function () {
          var e = n(4).get("privacy_settings");
          e.on("change:" + n(153).TARGETED_ADVERTISING_OPT_IN, function () {
            e.isOptedInToTargetedAdvertising() ? a() : s();
          }),
            n(8).on("connect:logout", s),
            a();
        },
        getUserData: function () {
          return i;
        },
      };
    },
    59: function (e, t, n) {
      var i,
        r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:\/@]*)(?::([^:\/@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        o = [
          "---",
          "scheme",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "fragment",
        ],
        a = (e.exports = {
          parse: function (e, t) {
            var n,
              i,
              s = r.exec(e),
              u = {};
            for (t || (t = o), n = 1; n < o.length; ++n)
              if (((i = o[n]), -1 !== t.indexOf(i) && (s[n] || "query" === i)))
                switch (i) {
                  case "port":
                    u[i] = parseInt(s[n], 10);
                    break;
                  case "path":
                    u[i] = s[n]
                      .split("/")
                      .map(function (e) {
                        try {
                          return decodeURIComponent(e);
                        } catch (t) {
                          return e;
                        }
                      })
                      .map(function (e) {
                        return e.replace(/\//g, "%2F");
                      })
                      .join("/");
                    break;
                  case "query":
                    u[i] = a.parseQueryString(s[n]);
                    break;
                  default:
                    u[i] = s[n];
                }
            return (
              u.scheme &&
                u.host &&
                (u.origin =
                  u.scheme + "://" + u.host + (u.port ? ":" + u.port : "")),
              u
            );
          },
          joinPath: function (e) {
            return e.filter(Boolean).join("/");
          },
          parseQueryString: function (e) {
            var t = {};
            return (
              e &&
                e.replace(/([^?=&]+)(?:=([^&]*))?/g, function (e, n, i) {
                  switch (
                    ((n = s(n)),
                    (i = s((i || "").replace(/\+/g, " "))),
                    typeof t[n])
                  ) {
                    case "object":
                      t[n].push(i);
                      break;
                    case "undefined":
                      t[n] = i;
                      break;
                    default:
                      t[n] = [t[n], i];
                  }
                }),
              t
            );
          },
          param: function (e, t) {
            t = t || {};
            var i = [],
              r = function e(r, o) {
                var a, s;
                n(0).isArray(o)
                  ? o.forEach(function (n, i) {
                      e(
                        r +
                          "[" +
                          ("object" == typeof n && t.jquerySerialize ? i : "") +
                          "]",
                        n
                      );
                    })
                  : n(0).isObject(o)
                  ? n(0).each(o, function (t, n) {
                      e(r + "[" + n + "]", t);
                    })
                  : ((a = r),
                    (s = o),
                    (i[i.length] =
                      encodeURIComponent(a) + "=" + encodeURIComponent(s)));
              };
            return (
              n(0).each(e, function (e, t) {
                r(t, e);
              }),
              i.join("&").replace(/%20/g, "+")
            );
          },
          stringify: function (e, t) {
            var r,
              o,
              s = [];
            return (
              t &&
                ((o = a.parse(t)),
                e.query &&
                  o.query &&
                  (n(0).assign(o.query, e.query), delete e.query),
                (e = n(0).assign({}, o, e))),
              e.scheme && s.push(e.scheme + "://"),
              e.user &&
                (s.push(e.user),
                e.password && s.push(":" + e.password),
                s.push("@")),
              e.host && s.push(e.host),
              e.port && s.push(":" + e.port),
              e.path &&
                ("string" == typeof e.path
                  ? s.push(u(e.path))
                  : s.push(u(a.joinPath(e.path)))),
              (r = i(e.query)) && s.push("?" + r),
              e.fragment && s.push("#" + e.fragment),
              s.join("")
            );
          },
          modify: function (e, t) {
            var i = a.parse(e);
            return (
              n(0).isFunction(t)
                ? (i = t.call(null, i))
                : "object" == typeof t &&
                  (t.query && (n(0).assign(i.query, t.query), delete t.query),
                  n(0).assign(i, t)),
              a.stringify(i)
            );
          },
          normalize: function (e) {
            var t = n(0).defaults(a.parse(e), {
              scheme: "http",
            });
            return a.stringify(t);
          },
        });
      function s(e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      }
      function u(e) {
        return e.split("/").map(c).map(l).join("/");
      }
      function l(e) {
        return encodeURI(e)
          .replace(/#/g, "%23")
          .replace(/\?/g, "%3F")
          .replace(/\//g, "%2F");
      }
      function c(e) {
        try {
          for (; d(e); ) e = decodeURIComponent(e);
          return e;
        } catch (t) {
          return e;
        }
      }
      function d(e) {
        return e !== decodeURIComponent(e);
      }
      i = function (e) {
        var t,
          n,
          i,
          r,
          o = [];
        if (e)
          for (t in e)
            if (e.hasOwnProperty(t) && null != (r = e[t]))
              if ("object" == typeof r)
                for (i = r.length, n = 0; n < i; ++n)
                  o.push(
                    encodeURIComponent(t) +
                      "=" +
                      encodeURIComponent(r[n]).replace(/%2F/g, "/")
                  );
              else
                o.push(
                  encodeURIComponent(t) +
                    "=" +
                    encodeURIComponent(r).replace(/%2F/g, "/")
                );
        return o.join("&");
      };
    },
    596: function (e, t, n) {
      e.exports = {
        scheduleIdleTask: function (e, t) {
          void 0 === t && (t = 1);
          return i.add({
            fn: e,
            minTaskTime: t,
          });
        },
        removeIdleTask: function (e) {
          i.remove(e);
        },
      };
      var i = new (n(1023).IdleQueue)();
    },
    599: function (e, t) {
      e.exports = {
        "sc-artwork-placeholder-0": ["#846170", "#70929c"],
        "sc-artwork-placeholder-1": ["#846170", "#e6846e"],
        "sc-artwork-placeholder-2": ["#846170", "#8e8485"],
        "sc-artwork-placeholder-3": ["#70929c", "#846170"],
        "sc-artwork-placeholder-4": ["#70929c", "#e6846e"],
        "sc-artwork-placeholder-5": ["#70929c", "#8e8485"],
        "sc-artwork-placeholder-6": ["#e6846e", "#846170"],
        "sc-artwork-placeholder-7": ["#e6846e", "#70929c"],
        "sc-artwork-placeholder-8": ["#e6846e", "#8e8485"],
        "sc-artwork-placeholder-9": ["#8e8485", "#846170"],
        "sc-artwork-placeholder-10": ["#8e8485", "#70929c"],
        "sc-artwork-placeholder-11": ["#8e8485", "#e6846e"],
      };
    },
    6: function (e, t, n) {
      (function (t) {
        var i = (e.exports = n(31).View.extend(n(420), n(957), {
          ModelClass: null,
          requiredAttributes: null,
          observedAttributes: null,
          css: null,
          template: n(0).noop,
          LoadingView: null,
          loadingViewArgs: null,
          loadingTemplate: function () {
            return "";
          },
          element2selector: null,
          _element2selector_cache: null,
          defaults: {
            bulkFetch: 0,
          },
          bubbleEvents: null,
          disposed: !1,
          disposeFinished: !1,
          subviews: null,
          reactSubviews: null,
          _subviews_keys: null,
          _lastEventId: null,
          constructorArguments: null,
          _whenInsertedDefer: null,
          _whenVisibleDefer: null,
          _deferreds: null,
          _dataSources: null,
          initialize: function (e) {
            var t;
            (e = this.options = o(this.constructor, e || {})),
              (this.constructorArguments = n(0).clone(e)),
              (e.resource_id || e._id) &&
                this.ModelClass &&
                (this.model = t = this.getModel({
                  resource_id: e.resource_id,
                  resource_type: e.resource_type,
                  _id: e._id,
                })),
              (this._deferreds = []),
              (this.subviews = []),
              (this._subviews_keys = []),
              (this._dataSources = []),
              (this.reactSubviews = []),
              this.resetElementCache(),
              this._setupBubbleListeners(),
              this._setup(e),
              t && this.model !== t && t.release(),
              this.model
                ? this.addDataSource(this.model, {
                    observedAttributes: this.observedAttributes,
                    requiredAttributes: this.requiredAttributes,
                  })
                : this.collection && this.addDataSource(this.collection);
          },
          _setup: function (e) {
            this.setup(e);
          },
          setup: n(0).noop,
          scheduleDisposal: function () {
            var e = this;
            (this.disposed = !0),
              n(596).scheduleIdleTask(function () {
                return e._dispose();
              });
          },
          _dispose: function () {
            if (!this.disposeFinished) {
              for (
                this._teardown(),
                  this.dispose(),
                  this.disposed = !0,
                  this.disposeFinished = !0;
                this._deferreds.length;

              )
                "number" == typeof this._deferreds[0]
                  ? window.clearTimeout(this._deferreds.shift())
                  : this._deferreds[0].reject("viewDisposed");
              for (this.off(), this.stopListening(); this._dataSources.length; )
                c.call(this, this._dataSources.shift());
              this.destroyElement(),
                [
                  "el",
                  "$el",
                  "model",
                  "collection",
                  "constructorArguments",
                ].forEach(function (e) {
                  this[e] && (this[e] = null);
                }, this);
            }
          },
          destroyElement: function () {
            this.$el.remove();
          },
          dispose: n(0).noop,
          _teardown: function () {
            this.disposeSubviews(),
              this.disposeReactSubviews(),
              this._whenInsertedDefer &&
                (this._whenInsertedDefer.reject(),
                (this._whenInsertedDefer = null)),
              this.teardown(),
              this.resetElementCache();
          },
          teardown: n(0).noop,
          disposeSubviews: function () {
            for (; this.subviews.length; ) this.subviews.pop()._dispose();
            (this.subviews = []), (this._subviews_keys = []);
          },
          disposeReactSubviews: function () {
            this.reactSubviews.forEach(function (e) {
              return n(480).unmountComponentAtNode(e);
            }),
              (this.reactSubviews = []);
          },
          getModel: function (e) {
            var t,
              n,
              i,
              r,
              o,
              a = e._id,
              s = e.resource_id,
              u = e.resource_type,
              l = e.options;
            if (void 0 !== s)
              (i = {
                resource_id: s,
                resource_type: u,
              }),
                (n = this.ModelClass.getClass
                  ? this.ModelClass.getClass(i)
                  : this.ModelClass);
            else if (void 0 !== a) {
              var c;
              ((c = {})[
                (this.ModelClass &&
                  this.ModelClass.prototype &&
                  this.ModelClass.prototype.idAttribute) ||
                  "id"
              ] = a),
                (c.resource_type = u),
                (i = c),
                (n = this.ModelClass.getClass
                  ? this.ModelClass.getClass(i)
                  : this.ModelClass);
            } else 0;
            (t = n.getInstance(i, l))
              ? t.hold()
              : (((o = {})[n.prototype.idAttribute || "id"] = a || s),
                (r = o),
                u && (r.resource_type = u),
                (t = new n(r)));
            return t;
          },
          _setupBubbleListeners: function () {
            var e, t;
            for (t in this.bubbleEvents)
              this.bubbleEvents.hasOwnProperty(t) &&
                ((e = this.bubbleEvents[t]),
                n(0).isFunction(e) || (e = this[e]),
                this.on(t, e, this));
          },
          addDeferred: function (e) {
            var t = this;
            return (
              "number" == typeof e
                ? this._deferreds.push(e)
                : e.reject &&
                  "pending" === e.state() &&
                  (e.always(function () {
                    var n = t._deferreds.indexOf(e);
                    n > -1 && t._deferreds.splice(n, 1);
                  }),
                  this._deferreds.push(e)),
              e
            );
          },
          addTimeout: function (e, t) {
            return this.addDeferred(window.setTimeout(e, t));
          },
          addDataSource: function (e, t) {
            var i;
            e instanceof n(21) || e instanceof n(490)
              ? ((t = n(0).assign(
                  {
                    isModel: !0,
                  },
                  (function (e, t) {
                    var n,
                      i,
                      r = h(e, t.requiredAttributes),
                      o = h(e, t.observedAttributes),
                      a = (r || []).concat(o || []).reduce(function (e, t) {
                        var n = "string" == typeof t ? t.split(".") : [t],
                          i = n[0],
                          r = n[1];
                        n[2];
                        return (
                          r && (e || (e = {}), (e[i] = [r].concat(e[i] || []))),
                          e
                        );
                      }, null);
                    a ? ((n = g(r)), (i = g(o))) : ((n = r), (i = o));
                    return {
                      requiredAttributes: n,
                      observedAttributes: i,
                      nestedAttributes: a,
                    };
                  })(e, t || {})
                )),
                (i = a))
              : ((t = n(0).assign(
                  {
                    isCollection: !0,
                  },
                  t
                )),
                (i = l));
            var r = {
              source: e,
              options: t,
            };
            return this._dataSources.push(r), i.call(this, !0, r), e;
          },
          removeDataSource: function (e) {
            this._dataSources.some(function (t, n) {
              if (t.source === e)
                return c.call(this, t), this._dataSources.splice(n, 1), !0;
            }, this);
          },
          findDataSourceInfo: function (e) {
            return n(0).find(this._dataSources, function (t) {
              return t.source === e;
            });
          },
          addReactSubview: function (e) {
            this.reactSubviews.indexOf(e) < 0 && this.reactSubviews.push(e);
          },
          addSubview: function (e, t) {
            return (
              (e._parentView = this),
              this.subviews.push(e),
              this._subviews_keys.push(t),
              t && (this.subviews[t] = e),
              e
            );
          },
          removeSubview: function (e) {
            for (var t = this.subviews.length; t--; )
              if (this.subviews[t] === e)
                return (
                  this._subviews_keys[t] &&
                    delete this.subviews[this._subviews_keys[t]],
                  (e._parentView = null),
                  this.subviews.splice(t, 1),
                  void this._subviews_keys.splice(t, 1)
                );
          },
          getAncestorSubviews: function () {
            var e = [];
            return (
              this.subviews.forEach(function (t) {
                e.push(t), (e = e.concat(t.getAncestorSubviews()));
              }),
              e
            );
          },
          getElement: function (e) {
            return this.disposed
              ? t()
              : (void 0 === this._element2selector_cache[e] &&
                  (this._element2selector_cache[e] = this.$(
                    this.element2selector[e]
                  )),
                this._element2selector_cache[e]);
          },
          resetElementCache: function () {
            this._element2selector_cache = {};
          },
          render: function () {
            var e,
              t,
              i = this.hasData(),
              r = this.getTemplate(i);
            return (
              r &&
                ((e = this._getTemplateData(i)),
                n(379).render(r.bind(this), e, this.el),
                n(379).subviews(this)),
              i
                ? (this.renderDecorate(),
                  (t = this._dataSources.filter(p)).length &&
                    this.addTimeout(function () {
                      n(0).invoke(n(0).pluck(t, "source"), "fetch");
                    }, 0))
                : (!r &&
                    this.LoadingView &&
                    this.addSubview(
                      new this.LoadingView(
                        n(0).result(this, "loadingViewArgs")
                      ),
                      "loading"
                    )
                      .render()
                      .$el.appendTo(this.el),
                  this.fetchData().fail(this.removeLoader.bind(this))),
              this
            );
          },
          hasData: function () {
            return !this._dataSources.some(this.missingRequiredData, this);
          },
          fetchData: function (e) {
            var t = this;
            void 0 === e &&
              (e = (function (e) {
                for (; e; ) {
                  var t = e.options.fetchPriority;
                  if (null != t) return t;
                  e = e._parentView;
                }
                return n(155).RequestPriorities.MEDIUM;
              })(this));
            var i,
              r,
              o = this._fetchDeferred;
            return (
              (o && "pending" === o.state()) ||
                ((r = (i = this._dataSources.filter(
                  this.missingRequiredData,
                  this
                )).length)
                  ? ((this._fetchDeferred = o =
                      r > 1
                        ? n(7).settled(
                            i.map(function (n) {
                              return t.fetchDataFromSource(n, e);
                            })
                          )
                        : this.fetchDataFromSource(i[0], e)),
                    o.always(function () {
                      t._fetchDeferred = null;
                    }))
                  : (o = n(7).resolve())),
              o
            );
          },
          missingRequiredData: function (e) {
            var t = e.source,
              n = e.options;
            if (n.isModel) {
              var i = f(e);
              return !!i.length && !t.hasDataForView(i);
            }
            return !t.hasDataForView(n);
          },
          fetchDataFromSource: function (e, t) {
            void 0 === t && (t = n(155).RequestPriorities.MEDIUM);
            var i = e.source,
              r = this.options.bulkFetch;
            return e.options.isCollection && r
              ? i.bulkFetch(r)
              : i.fetch({
                  attrs: d(e),
                  reset: !0,
                  priority: t,
                });
          },
          renderDecorate: n(0).noop,
          rerender: function () {
            this.disposed || (this._teardown(), this.render());
          },
          getTemplate: function (e) {
            return e || (!this.LoadingView && !this.loadingTemplate)
              ? this.template
              : this.LoadingView
              ? null
              : this.loadingTemplate;
          },
          _getTemplateData: function (e) {
            var t = {};
            return (
              this.model
                ? (t = this.getModelData() || t)
                : this.collection && (t = this.getCollectionData() || t),
              (t._options = n(0).clone(this.options)),
              e && (t = this.getTemplateData(t) || t),
              t
            );
          },
          getTemplateData: n(0).noop,
          getCollectionData: function () {
            return this.collection.toJSON();
          },
          getModelData: function () {
            return this.model.toJSON();
          },
          bubble: function (e, t) {
            var i = new (n(1029))(t);
            return r.call(this, e, i), i;
          },
          getContextData: function () {
            return this.bubble("contextrequest").data;
          },
          removeLoader: function () {
            var e = this.subviews.loading;
            e && (e._dispose(), this.removeSubview(e));
          },
          scrollIntoView: function (e) {
            var i = void 0 === e ? {} : e,
              r = i.position,
              o = void 0 === r ? "auto" : r,
              a = i.force,
              s = void 0 !== a && a,
              u = i.topOffset,
              l = void 0 === u ? 20 : u,
              c = i.bottomOffset,
              d = void 0 === c ? 20 : c,
              f = i.duration,
              h = void 0 === f ? 300 : f,
              p = i.internalSelector,
              g = p ? this.$(p) : this.$el,
              m = g.offset(),
              v = n(7).defer(),
              y = 0;
            if (!m) return v.reject();
            var _ = t(".g-main-scroll-area").first();
            _.length || ((_ = t("#content")), (y = 46));
            var b = t(window.document).scrollTop(),
              w = t(window).height() - 47,
              k = b,
              A = b + w,
              S = g.height(),
              E = Math.floor(m.top),
              C = Math.floor(E + S);
            if (!(E > k && C < A) || s) {
              var T =
                "top" === o || S > w || ("auto" === o && E < k)
                  ? E - l - y
                  : C - w + d;
              n(177).visible()
                ? t("body,html").animate(
                    {
                      scrollTop: T,
                    },
                    {
                      complete: v.resolve,
                      duration: h,
                    }
                  )
                : (t("body,html").prop({
                    scrollTop: T,
                  }),
                  v.resolve());
            } else v.resolve();
            return v;
          },
          isEquivalentTo: function (e, t) {
            var i = t || {};
            return (
              this.constructor === e &&
              n(0).isEqual(o(e, i), this.constructorArguments)
            );
          },
          whenInserted: function (e) {
            return (
              this._whenInsertedDefer ||
                (this._whenInsertedDefer = n(65).whenInserted(this.el, {
                  root: e,
                  timeout: 3e4,
                })),
              this._whenInsertedDefer
            );
          },
          whenVisible: function () {
            if (!this._whenVisibleDefer) {
              var e = (this._whenVisibleDefer = n(7).deferFrom(
                n(394).whenElementVisible(this.el)
              ));
              this.addDeferred(e);
            }
            return this._whenVisibleDefer;
          },
          _onModelChange: function (e, t, n, i) {
            this._lastEventId !== i &&
              ((this._lastEventId = i), this.onModelChange(e, t, n));
          },
          onModelChange: function () {
            this.shouldViewRerender() && this.rerender();
          },
          onCollectionChange: function (e, t) {
            2 === arguments.length && (t = e),
              this.disposed || this.trigger("update:collection", t.length);
          },
          shouldViewRerender: function () {
            return !0;
          },
          onCollectionReset: function () {
            this.shouldViewRerender() && this.rerender();
          },
          onAdd: n(0).noop,
          onRemove: n(0).noop,
        }));
        function r(e, t) {
          for (var n = this; n && !t.isPropagationStopped(); )
            n.trigger(e, t), (n = n._parentView);
        }
        function o(e, t) {
          return (
            n(0).defaults(t, e.prototype.defaults),
            e === i ? t : o(e.__super__.constructor, t)
          );
        }
        function a(e, t) {
          var n = this,
            i = e ? "on" : "off",
            r = t.source,
            o = e ? s.call(this, t) : null;
          d(t).forEach(function (e) {
            r[i]("change:" + e, o, n);
          });
        }
        function s(e) {
          return e.options.nestedAttributes
            ? function (t, n, i, r) {
                this._lastEventId !== r &&
                  ((this._lastEventId = r),
                  u.call(this, e) && this.onModelChange(t, n, i));
              }
            : this._onModelChange;
        }
        function u(e) {
          var t = e.source,
            i = e.options.nestedAttributes,
            r = t.changed;
          if (
            d(e).some(function (e) {
              return !i[e] && n(0).has(r, e);
            })
          )
            return !0;
          var o = t.previousAttributes();
          return n(0).some(i, function (e, t) {
            return (
              !!r[t] &&
              (!o[t] ||
                e.some(function (e) {
                  return o[t][e] !== r[t][e];
                }))
            );
          });
        }
        function l(e, t) {
          var n = e ? "on" : "off";
          t.source[n]("add", this.onAdd, this)
            [n]("remove", this.onRemove, this)
            [n]("reset", this.onCollectionReset, this)
            [n]("add remove reset", this.onCollectionChange, this);
        }
        function c(e) {
          var t = e.source;
          (e.options.isModel ? a : l).call(this, !1, e), t.release();
        }
        function d(e) {
          var t = h(e.source, e.options.observedAttributes),
            n = f(e);
          return t ? t.concat(n) : n;
        }
        function f(e) {
          var t = e.options;
          return h(e.source, t.requiredAttributes) || [];
        }
        function h(e, t) {
          return t && !Array.isArray(t) ? t[e.resource_type] : t;
        }
        function p(e) {
          var t = e.options.observedAttributes,
            n = e.source;
          return t && t.length && !n.isPopulated() && !n.hasDataForView(t);
        }
        function g(e) {
          return e
            ? n(0).uniq(
                e.map(function (e) {
                  return e.split(".")[0];
                })
              )
            : null;
        }
      }.call(this, n(15)));
    },
    60: function (e, t, n) {
      var i = "devicePixelRatio" in window ? window.devicePixelRatio : 1;
      e.exports = n(0).assign(n(258), {
        devicePixelRatio: i,
        isHiDPI: i > 1,
        isJsEnabledBot: /googlebot/i.test(window.navigator.userAgent),
        desktop: !n(258).mobile && !n(258).tablet,
        isIE11: Boolean(n(258).msie && "11.0" === n(258).version),
      });
    },
    600: function (e, t, n) {
      e.exports = new (n(16))({
        applyTo: function (e, t) {
          e.getTypes = n(0).constant((t && t.types) || {});
        },
        defaults: {
          getShareURL: function (e) {
            return this.getShareAttributes(e).permalink_url;
          },
        },
        getShareAttributes: function (e) {
          var t = n(0).clone(this.attributes),
            r = e && e.type,
            o = r && this.getTypes()[r];
          return (
            o &&
              n(0).each(o, function (e, n) {
                t[n] = e.replace(/\:([a-zA-Z0-9_-]+)/g, function (e, n) {
                  return t[n];
                });
              }),
            (t.permalink_url = i(t.permalink_url)),
            (t.uri = i(t.uri)),
            "private" === t.sharing &&
              !t.secret_uri &&
              t.secret_token &&
              (t.secret_uri = n(26).modify(t.uri, {
                query: {
                  secret_token: t.secret_token,
                },
              })),
            t
          );
        },
      });
      function i(e) {
        return e && e.replace(/^http:/, "https:");
      }
    },
    601: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = [
        {
          route: "(.*)",
          handler: function (e) {
            var t = e.replace(/^\/+|[,.)]+$/g, "");
            return e !== t
              ? this.navigate("/" + t, {
                  trigger: !0,
                  replace: !0,
                })
              : this.apply("error", {
                  type: "404",
                });
          },
        },
        {
          prefix: ":user/:sound",
          subroutes: n(1042),
          fallThrough: !0,
        },
        {
          prefix: ":user/sets/:playlist",
          subroutes: n(1043),
        },
        {
          prefix: ":user",
          subroutes: n(1044),
          fallThrough: !0,
        },
        {
          prefix: ":user/stats",
          subroutes: n(1045),
        },
        {
          prefix: ":user/(?!sets/):sound/stats",
          subroutes: n(1046),
        },
        {
          prefix: "you",
          subroutes: n(1047),
        },
        {
          prefix: "you/apps",
          subroutes: n(1048),
        },
        {
          prefix: "stations",
          subroutes: n(1049),
        },
        {
          route: "(?:you/)?groups(?:/.*)?",
          code: 410,
          redirect: "/",
        },
        {
          route: "soundcloud-hustle/sets/raw-rap-for-deadlifts",
          redirect: "soundcloud-hustle/sets/aggro-rap-workout-bangers",
        },
        {
          route: "soundcloud-shine/sets/backroads-country",
          redirect: "soundcloud-shine/sets/backroads-best-country-now",
        },
        {
          route: "soundcloud-la-onda/sets/reggaeton-bangers",
          redirect: "soundcloud-la-onda/sets/baile-reggaeton-bangers",
        },
        {
          route: "soundcloud-the-peak/sets/new-dubstep",
          redirect: "soundcloud-the-peak/sets/bass-flex-new-dubstep-heat",
        },
        {
          route: "soundcloud-hustle/sets/rap-for-confidence",
          redirect: "soundcloud-hustle/sets/boomin-feel-good-hip-hop",
        },
        {
          route: "soundcloud-vibrations/sets/global-beats-new-hot",
          redirect: "soundcloud-vibrations/sets/borderless-global-beats-now",
        },
        {
          route: "soundcloud-hustle/sets/new-chicago-rap",
          redirect: "soundcloud-hustle/sets/chi-town-chicago-rap-now",
        },
        {
          route: "soundcloud-auras/sets/closer-new-hot-emerging-r-b",
          redirect: "soundcloud-auras/sets/closer-emerging-r-b",
        },
        {
          route: "soundcloud-mainroom/sets/dance-new-hot",
          redirect: "soundcloud-mainroom/sets/club-heat-new-dance-now",
        },
        {
          route: "soundcloud-shine/sets/pop-party-hits",
          redirect: "soundcloud-shine/sets/dialed-in-pop-party-hits",
        },
        {
          route: "soundcloud-scenes/sets/indie-breaking-artists",
          redirect: "soundcloud-scenes/sets/dreams-emerging-indie",
        },
        {
          route: "soundcloud-hustle/sets/rap-new-hot",
          redirect: "soundcloud-hustle/sets/drippin-best-rap-right-now",
        },
        {
          route: "soundcloud-shine/sets/ear-candy-pop-new-hot",
          redirect: "soundcloud-shine/sets/ear-candy-fresh-pop-picks",
        },
        {
          route: "soundcloud-shine/sets/chill-pop",
          redirect: "soundcloud-shine/sets/easy-chill-pop",
        },
        {
          route: "soundcloud-the-peak/sets/edm-crossovers",
          redirect: "soundcloud-the-peak/sets/electrify-edm-crossovers",
        },
        {
          route: "soundcloud-shine/sets/emerging-underground-pop",
          redirect: "soundcloud-shine/sets/fizz-tomorrows-hits-today",
        },
        {
          route: "soundcloud-vs/sets/lo-fi-beats",
          redirect: "soundcloud-vs/sets/focus-lo-fi-beats",
        },
        {
          route: "soundcloud-la-onda/sets/top-down-latin-trap",
          redirect: "soundcloud-la-onda/sets/fuego-top-down-latin-trap",
        },
        {
          route: "soundcloud-shine/sets/feel-good-pop",
          redirect: "soundcloud-shine/sets/happy-feel-good-pop",
        },
        {
          route: "soundcloud-mainroom/sets/new-house-heaters",
          redirect: "soundcloud-mainroom/sets/house-new-house-heaters",
        },
        {
          route: "soundcloud-hustle/sets/trap-85",
          redirect: "soundcloud-hustle/sets/i-85-hot-atlanta-rap",
        },
        {
          route: "soundcloud-la-onda/sets/latinx-pop-new-hot",
          redirect: "soundcloud-la-onda/sets/la-multitud-new-latinx-pop",
        },
        {
          route: "soundcloud-the-peak/sets/level-up-the-peak-emerging",
          redirect: "soundcloud-the-peak/sets/level-up-edm-next",
        },
        {
          route: "soundcloud-shine/sets/new-now",
          redirect: "soundcloud-shine/sets/new-now-essential-new-music",
        },
        {
          route: "soundcloud-the-peak/sets/on-the-up-the-peak-hot-new",
          redirect: "soundcloud-the-peak/sets/on-the-up-new-edm-hits",
        },
        {
          route: "soundcloud-hustle/sets/west-coast-hip-hop-new-hot",
          redirect: "soundcloud-hustle/sets/pacific-rims-new-west-coast-rap",
        },
        {
          route: "soundcloud-hustle/sets/late-night-hip-hop-party",
          redirect: "soundcloud-hustle/sets/late-nite-hip-hop-party-pourin",
        },
        {
          route: "soundcloud-vs/sets/power-play",
          redirect: "soundcloud-vs/sets/power-play-elite-rap-bars",
        },
        {
          route: "soundcloud-hustle/sets/memphis-rap",
          redirect: "soundcloud-hustle/sets/stacks-new-memphis-rap",
        },
        {
          route: "soundcloud-scenes/sets/stitches-indie-hot-new",
          redirect: "soundcloud-scenes/sets/stitches-indie-new-arrivals",
        },
        {
          route: "soundcloud-hustle/sets/sunrise",
          redirect: "soundcloud-hustle/sets/sunrise-fresh-florida-rap",
        },
        {
          route: "soundcloud-raw/sets/tearz-new-hot-emo-rap",
          redirect: "soundcloud-raw/sets/tearz-new-emo-rap",
        },
        {
          route: "soundcloud-mainroom/sets/techno-new-hot",
          redirect: "soundcloud-mainroom/sets/techno-new-techno-now",
        },
        {
          route: "soundcloud-amped/sets/new-rock-now",
          redirect: "soundcloud-amped/sets/the-dive-new-rock-now",
        },
        {
          route: "soundcloud-hustle/sets/the-look-out",
          redirect: "soundcloud-hustle/sets/the-lookout-tomorrows-rap-hits",
        },
        {
          route: "soundcloud-hustle/sets/bay-area-rap-now",
          redirect: "soundcloud-hustle/sets/town-buisness-bay-area-rap-now",
        },
        {
          route: "soundcloud-circuits/sets/tunnel",
          redirect: "soundcloud-circuits/sets/tunnel-best-electronic-now",
        },
        {
          route: "soundcloud-hustle/sets/hip-hop-party-starters",
          redirect: "soundcloud-hustle/sets/turn-up-hip-hop-party-starters",
        },
        {
          route: "soundcloud-auras/sets/soul-chill",
          redirect: "soundcloud-auras/sets/unwind-soul-chill-and-r-b",
        },
        {
          route: "soundcloud-auras/sets/vibes-new-hot-r-b",
          redirect: "soundcloud-auras/sets/vibes-best-new-r-b",
        },
        {
          route: "soundcloud-the-peak/sets/chill-edm",
          redirect: "soundcloud-the-peak/sets/waves-chill-edm",
        },
        {
          route: "",
          handler: function () {
            return this.isLoggedIn()
              ? this.navigate("/discover", {
                  replace: !0,
                  trigger: !0,
                })
              : this.apply("front");
          },
          meta: {
            sitemap: [
              {
                loc: "",
                changefreq: n(52).ChangeFrequency.hourly,
                priority: 1,
              },
            ],
          },
        },
        {
          prefix: "charts",
          subroutes: n(1050),
        },
        {
          route: "(?:(?:explore|tracks)(?:/:exploreCategory)?|tags|hot|latest)",
          redirect: function (e) {
            return e ? "/charts/top?genre=" + e : "/charts/top";
          },
        },
        {
          prefix: "discover",
          subroutes: n(1051),
          fallThrough: {
            redirect: "/discover",
          },
        },
        {
          route: "(?:discover/sets/introducing..)(.*)",
          redirect: function (e) {
            return e ? "/" + e + "/popular-tracks" : "/discover";
          },
        },
        {
          route: "campaigns/:alphanum+",
          code: 410,
          redirect: "/",
        },
        {
          prefix: "people",
          subroutes: n(1052),
        },
        {
          route: "popular/searches(?:/(:num+))?",
          handler: function (e) {
            return this.apply("popular-searches", {
              subpage: Number(e || "1"),
            });
          },
          meta: {
            sitemap: [
              {
                loc: "popular/searches",
                changefreq: n(52).ChangeFrequency.daily,
                priority: 1,
              },
            ],
          },
        },
        {
          route:
            "(community-guidelines|imprint|law-enforcement-guidelines|network-enforcement-act)",
          handler: function (e) {
            return this.apply("static-page", {
              pageName: e,
            });
          },
          meta: {
            sitemap: [
              {
                loc: "community-guidelines",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "imprint",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "law-enforcement-guidelines",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "network-enforcement-act",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          route:
            "((terms-of-use(?:-(pro|purchases))?|go-terms-of-use)(?:/:monthYear)?)",
          handler: function (e) {
            return this.apply("static-page", {
              pageName: e,
            });
          },
          meta: {
            sitemap: [
              {
                loc: "terms-of-use",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "terms-of-use-pro",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "terms-of-use-purchases",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
              {
                loc: "go-terms-of-use",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          prefix: "pages",
          subroutes: n(1053),
          fallThrough: !0,
        },
        {
          prefix: "tags",
          subroutes: n(1054),
          fallThrough: {
            redirect: "/charts",
          },
        },
        {
          route: "search(?:/(sounds|sets|people|groups|go|albums))?",
          handler: function (e) {
            return this.apply("search", {
              category: e,
            });
          },
          meta: {
            sitemap: [
              {
                loc: "search",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          route: "notifications",
          requiresLogin: !0,
          handler: function () {
            return this.apply("activity");
          },
        },
        {
          route: "stream/activity",
          redirect: "/notifications",
        },
        {
          route: "stream",
          requiresLogin: !0,
          handler: function () {
            return this.apply("stream");
          },
          meta: {
            feature: "stream",
          },
        },
        {
          route: "home",
          handler: function () {
            return this.navigate("/discover", {
              replace: !0,
              trigger: !0,
            });
          },
        },
        {
          route: "logout",
          code: 401,
          handler: function () {
            return this.apply("logout");
          },
        },
        {
          prefix: "mobile",
          subroutes: n(1076),
        },
        {
          route: "upload",
          handler: function () {
            return this.apply("upload");
          },
          meta: {
            sitemap: [
              {
                loc: "upload",
                changefreq: n(52).ChangeFrequency.daily,
                priority: 1,
              },
            ],
          },
        },
        {
          route: "upload-beta",
          handler: function () {
            return this.apply("upload");
          },
        },
        {
          route: "next-upload",
          redirect: "/upload",
        },
        {
          route: "upload-classic",
          redirect: "/upload",
        },
        {
          route: "messages(?:/:conversationId)?",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("inbox", {
              conversationId: e,
            });
          },
        },
        {
          route: "xbox-app",
          handler: function () {
            return this.apply("xbox");
          },
          meta: {
            sitemap: [
              {
                loc: "xbox-app",
                changefreq: n(52).ChangeFrequency.monthly,
                priority: 0.5,
              },
            ],
          },
        },
        {
          route: "premium(/.*)?",
          handler: function (e) {
            return this.apply("checkout-redirect", {
              path: "/pro",
              query: this.getQueryParams(),
            });
          },
        },
        {
          prefix: "settings",
          subroutes: n(1077),
          fallThrough: {
            redirect: "/settings",
          },
        },
        {
          route: "dashboard(?:/.*)?",
          redirect: "/stream",
        },
        {
          route: "creativecommons",
          redirect: "/search/sounds/?filter.license=to_share",
        },
        {
          route: "(tracks|people|groups)/search",
          redirect: function (e) {
            return "tracks" === e && (e = "sounds"), "/search/" + e;
          },
        },
        {
          prefix: "signin",
          subroutes: n(1078),
        },
        {
          route: "login(?:/(.*))?",
          redirect: function (e) {
            return this.isLoggedIn()
              ? "/stream"
              : ["/signin", e].filter(Boolean).join("/");
          },
        },
        {
          route: "signup",
          redirect: "/signin",
        },
        {
          route: "activate(?:/(:alphanum+))?",
          requiresLogin: !0,
          handler: function (e) {
            return this.apply("activate", {
              code: e,
            });
          },
        },
        {
          route: "settings/connections",
          redirect: "/settings",
        },
        {
          route:
            "-/t/click/postman-email-payments-subscriptions-(consumer-activation|consumer-activation_trial|receipt)",
          handler: function () {
            return this.navigate("/you/subscriptions");
          },
        },
      ];
      var o, a;
      e.exports =
        ((o = r),
        (a = n(1079).create({
          includeQueryParams: !0,
          caseInsensitive: !1,
          definitions: {
            user: ":alphanum{1,255}",
            sound: ":alphanum{1,255}",
            playlist: ":alphanum{1,255}",
            systemPlaylistPermalink: "[^/]{1,255}",
            id: ":num+",
            stationType: "track|artist",
            stationIdentifier: ":alphanum{1,255}(?:/:alphanum{1,255})?",
            secretToken: n(432).secretTokenMatcher,
            group: ":alphanum{1,255}",
            exploreCategory: "[^/]+",
            tag: ".+",
            conversationId: ":num+:(?::num+|system)",
            code: "\\w+",
            planName: "pro(?:-unlimited)?",
            metric: "\\w+",
            date: "[^/]+",
            monthYear: "(?:0[1-9]|1[012])-20[0-9]{2}",
            guid: "[a-f0-9-]+",
          },
        })),
        o
          .reduce(function (e, t) {
            return t.subroutes
              ? e.concat(
                  ((r = (n = t).prefix),
                  [s(n)]
                    .filter(Boolean)
                    .concat(n.subroutes)
                    .map(function (e) {
                      var t = e.route,
                        n =
                          "" === t
                            ? ""
                            : a(e.route).test("")
                            ? "(?:/(?:" + t + "))?"
                            : "/(?:" + t + ")";
                      if (e.meta && e.meta.sitemap) {
                        var o = e.meta.sitemap.map(d(r));
                        e = i({}, e, {
                          meta: i({}, e.meta, {
                            sitemap: o,
                          }),
                        });
                      }
                      return i({}, e, {
                        route: r + n,
                      });
                    }))
                )
              : e.concat(t);
            var n, r;
          }, [])
          .map(function (e) {
            var t = a(e.route),
              n = l(e),
              r = null != e.name ? e.name : e.route,
              o = e.meta || {};
            if (o && o.sitemap) {
              var s = o.sitemap.map(d("https://soundcloud.com"));
              o = i({}, o, {
                sitemap: s,
              });
            }
            return {
              name: r,
              route: t,
              handler: n,
              code: e.code,
              meta: o,
            };
          }));
      function s(e) {
        var t = e.fallThrough;
        return !0 === t
          ? null
          : {
              route: ".*",
              handler: t ? l(t) : u,
            };
      }
      function u() {
        return this.apply("error", {
          type: "404",
        });
      }
      function l(e) {
        var t = e.redirect,
          n = t
            ? function () {
                var e = "string" == typeof t ? t : t.apply(this, arguments);
                return this.navigate(c(e, this.getQueryString()), {
                  replace: !0,
                  trigger: !0,
                });
              }
            : e.handler;
        return (function (e, t) {
          if (!e) return t;
          return function () {
            return this.getFeatureValue(e)
              ? t.apply(this, arguments)
              : this.apply("error", {
                  type: "404",
                });
          };
        })(
          e.feature,
          e.requiresLogin
            ? (function (e) {
                return function () {
                  return this.isLoggedIn()
                    ? e.apply(this, arguments)
                    : this.unauthenticated();
                };
              })(n)
            : n
        );
      }
      function c(e, t) {
        void 0 === t && (t = "");
        var n = e.indexOf("#") > -1 ? e.split(/(?=#)/) : [e, ""],
          i = n[0],
          r = n[1];
        return e.indexOf("?") > -1 ? i + t.replace(/^\?/, "&") + r : i + t + r;
      }
      function d(e) {
        return function (t) {
          return i({}, t, {
            loc:
              0 === t.loc.indexOf("https://")
                ? t.loc
                : e + (0 === t.loc.length ? "" : "/" + t.loc),
          });
        };
      }
    },
    605: function (e, t, n) {
      "use strict";
      var i = Node,
        r = i.TEXT_NODE,
        o = i.ELEMENT_NODE;
      e.exports = function e(t, n, i, a) {
        var s = t.firstChild,
          u = void 0;
        if (s)
          do {
            s.nodeType === r ? n(s) : s.nodeType === o && e(s, n, i, a),
              (u = s);
          } while ((s = s.nextSibling) && (!i || i(u)));
        a && s && a(s);
      };
    },
    606: function (e, t, n) {
      var i = function () {
        return null;
      };
      e.exports = new (n(16))({
        applyTo: function (e, t) {
          var a = t.batchEndpoint,
            s = t.flushInterval,
            u = void 0 === s ? 50 : s,
            l = t.maxQueueSize,
            c = void 0 === l ? 50 : l,
            d = t.getBatchParams,
            f = void 0 === d ? i : d,
            h = t.paramName,
            p = void 0 === h ? "ids" : h,
            g = {};
          this.around(e, {
            fetch: function (e, t) {
              var i,
                s = this;
              if ((t || (t = {}), r.call(this, t))) return e(t);
              if (
                (this._requests || (this._requests = {}),
                !this._requests[this.id])
              ) {
                var l = f(this) || null,
                  d = (i = l)
                    ? n(26).stringify({
                        query: i,
                      })
                    : "default",
                  h = g[d] || (g[d] = new o(a, l, c, u, p));
                this._requests[this.id] = h.add(this, t).always(function () {
                  delete s._requests[s.id];
                });
              }
              return this._requests[this.id];
            },
          });
        },
      });
      function r(e) {
        return (
          !this.id ||
          e.jqAjax ||
          !1 === e.batch ||
          "private" === this.get("sharing")
        );
      }
      function o(e, t, n, i, r) {
        (this.batchEndpoint = e),
          (this.batchParams = t),
          (this.maxQueueSize = n),
          (this.flushInterval = i),
          (this.queue = {}),
          (this.timer = null),
          (this.paramName = r);
      }
      o.prototype = {
        getIds: function () {
          var e = n(0).reduce(
            this.queue,
            function (e, t, n) {
              return "pending" === t.deferred.state() && (e[n] = t), e;
            },
            {}
          );
          return Object.keys(e).sort();
        },
        add: function (e, t) {
          var i = (this.queue[e.id] = this.queue[e.id] || {
            callsigs: [],
            deferred: n(7).defer(),
          });
          return (
            i.callsigs.push({
              model: e,
              options: t,
            }),
            this.timer ||
              (this.timer = window.setTimeout(
                this.flush.bind(this),
                this.flushInterval
              )),
            Object.keys(this.queue).length === this.maxQueueSize &&
              this.flush(),
            i.deferred
          );
        },
        flush: function () {
          var e = this,
            t = this.getIds(),
            i = this.queue;
          window.clearTimeout(this.timer),
            (this.timer = null),
            (this.queue = {}),
            t.length < 1 ||
              n(433)(
                function () {
                  var i;
                  return n(35).callEndpoint(
                    e.batchEndpoint,
                    null,
                    n(0).assign(
                      (((i = {})[e.paramName] = t.join(",")), i),
                      e.batchParams
                    ),
                    null,
                    {
                      priority: n(155).RequestPriorities.URGENT,
                    }
                  );
                },
                function () {
                  return !1;
                }
              ).then(function (e) {
                var r = e.body,
                  o = n(0).map(n(0).pluck(r, "id"), String);
                r.forEach(function (e) {
                  var t = e.id,
                    n = i[t],
                    r = Date.now();
                  n &&
                    (n.callsigs.forEach(function (t) {
                      var n = t.model;
                      (n.lastFetchTime = r), n.set(n.parse(e), t.options);
                    }),
                    n.deferred.resolve());
                }),
                  n(0)
                    .difference(t, o)
                    .forEach(function (e) {
                      var t = i[e];
                      t &&
                        t.callsigs.forEach(function (e) {
                          e.model.trigger(
                            "error",
                            e.model,
                            new (n(260))(),
                            e.options
                          );
                        });
                    }),
                  n(0).each(i, function (e) {
                    e.deferred.reject();
                  });
              });
        },
      };
    },
    607: function (e, t, n) {
      e.exports = new (n(16))({
        requires: [
          "getSourceInfo",
          "containsSound",
          "getCurrentSound",
          "getSoundIndex",
          "getQueueMetadataAt",
        ],
      });
    },
    608: function (e, t, n) {
      var i = {};
      e.exports = new (n(16))({
        applyTo: function (e) {
          var t = e.constructor;
          this.before(t, {
            onCleanup: function (e) {
              !(function (e, t) {
                var n = r(e),
                  o = t.resource_id;
                o && i[n] && delete i[n][o];
              })(this.constructor, e);
            },
          }),
            (function (e) {
              e._sdb = n(0).uniqueId("sdb");
            })(t);
        },
        after: {
          initialize: function () {
            this.attributes = a(this.constructor, this.attributes);
          },
        },
        around: {
          set: function (e, t, i, r) {
            var s, u;
            return (
              "object" == typeof t ? ((s = t), (r = i)) : ((s = {})[t] = i),
              s
                ? (this.submodelMap &&
                    (s = n(0).reduce(this.submodelMap, o, n(0).clone(s))),
                  (u = this.constructor),
                  !this.resource_id && u.hashFn(s) && (s = a(u, s)),
                  e(s, r))
                : this
            );
          },
        },
      });
      function r(e) {
        return e._sdb;
      }
      function o(e, t, i) {
        var o = e[i];
        return (
          o &&
            r(t) &&
            (e[i] = n(0).isArray(o) ? o.map(a.bind(null, t)) : a(t, o)),
          e
        );
      }
      function a(e, t) {
        var o,
          a = r(e),
          s = (function (e, t) {
            return e.hashFn ? e.hashFn(t) : t.id;
          })(e, t);
        return s
          ? ((i[a] = i[a] || {}),
            (o = i[a][s])
              ? n(0).assign(o, e.normalize ? e.normalize(t) : t)
              : (o = i[a][s] = t),
            o)
          : t;
      }
    },
    609: function (e, t, n) {
      "use strict";
      var i, r, o;
      n(69), n(91), n(21), n(576);
      !(function (e) {
        (e.Standard = "standard"), (e.High = "high"), (e.Auto = "auto");
      })(i || (i = {})),
        (function (e) {
          (e.pause = "pause"),
            (e.bufferUnderrun = "buffer_underrun"),
            (e.skip = "skip"),
            (e.trackFinished = "track_finished"),
            (e.endOfContent = "end_of_content"),
            (e.context_change = "context_change"),
            (e.playbackError = "playback_error"),
            (e.concurrentStreaming = "concurrent_streaming");
        })(r || (r = {})),
        (function (e) {
          (e.play = "play"), (e.pause = "pause"), (e.checkpoint = "checkpoint");
        })(o || (o = {}));
    },
    617: function (e, t, n) {
      e.exports = new (n(16))(
        n(179).withOptions({
          read: "avatar_url",
          write: "image_data",
          useFormData: !1,
        }),
        {
          getImageSaveUrl: function () {
            return n(35).getUrlForEndpoint("meAvatar");
          },
          getImageDeleteEndpoint: function () {
            return "meAvatarDelete";
          },
          around: {
            uploadImage: function (e) {
              for (
                var t = this,
                  i = arguments.length,
                  r = new Array(i > 1 ? i - 1 : 0),
                  o = 1;
                o < i;
                o++
              )
                r[o - 1] = arguments[o];
              return e.call(this, r).done(function (e) {
                var i = t.getUrn();
                if (
                  (n(12).trackV1Click({
                    click_name: "avatar_image:add",
                    click_object: i,
                    click_category: "profile_edit",
                  }),
                  e.avatar_url)
                ) {
                  var r = n(43).parseImageUrl(e.avatar_url),
                    o = r[1] + "-" + r[2];
                  n(120).default.setUserAttribute("profile_image", o),
                    n(120).default.trackUserEvent("profile_image_updated", {
                      creator_display_name: t.get("username"),
                      creator_urn: i,
                    });
                }
                return e;
              });
            },
          },
        }
      );
    },
    618: function (e, t, n) {
      (function (t) {
        var i = new (n(57))("notify");
        e.exports = n(21).extend(
          {
            channel: null,
            _queue: null,
            _waitingQueue: null,
            _unseenQueue: null,
            _breaker: null,
            lastRead: null,
            _request: null,
            defaults: {
              size: null,
              type: null,
            },
            initialize: function (e) {
              (this._queue = []),
                (this._waitingQueue = []),
                (this._unseenQueue = []);
              var t = e.type,
                r = n(142)[t];
              (this.baseUrl = r.get("baseUrl")),
                (this.channel = r.get("channel")),
                (this.lastRead = i.get(t)),
                n(0).bindAll(this, "onNotification"),
                o(t)
                  ? n(4)
                      .get("notifications")
                      .subscribe(r.channel, this.onNotification)
                  : this.startPolling(),
                s.call(this, !0);
            },
            startPolling: function () {
              var e,
                t,
                i = this;
              this._isPolling ||
                ((e = this._breaker = new (n(193))(c.call(this))),
                (this._isPolling = !0),
                (t = function () {
                  i._isPolling &&
                    (window.clearTimeout(i._pollingId),
                    i
                      .fetch({
                        force: !0,
                        priority: n(155).RequestPriorities.LOW,
                      })
                      .done(function (n) {
                        r.call(i, n)
                          ? (e.succeeded(),
                            (i._pollingId = window.setTimeout(
                              t,
                              e.currentDelay()
                            )))
                          : e.failed();
                      })
                      .fail(function (t) {
                        t.status >= 400 && t.status < 500
                          ? e.disable({
                              autoEnable: !1,
                            })
                          : e.failed();
                      }));
                }),
                this._breaker.on("enabled", t),
                a.call(this, !0),
                t());
            },
            stopPolling: function () {
              this._isPolling &&
                (a.call(this, !1),
                window.clearTimeout(this._pollingId),
                (this._pollingId = null),
                (this._isPolling = !1),
                this._breaker.dispose(),
                (this._breaker = null));
            },
            restart: function () {
              this.stopPolling(), this.startPolling();
            },
            onNotification: function (e) {
              this._request ? this._waitingQueue.push(e) : this._queue.push(e),
                this._unseenQueue.push(e),
                this.set("size", this._unseenQueue.length);
            },
            hasUnfetchedItems: function () {
              return this._queue.length > 0;
            },
            fetchQueuedItems: function () {
              var e = this;
              if (!this._request) {
                if (!this.hasUnfetchedItems())
                  return this.set("size", 0), n(7).resolve();
                var i,
                  r = this._queue,
                  o = r.length,
                  a = r[0].uuid,
                  s = r[o - 1].uuid;
                (i = n(26).modify(n(0).result(this, "baseUrl"), {
                  query: {
                    "uuid[to]": a,
                    cursor: s,
                    limit: o,
                    offset: null,
                  },
                })),
                  (this._request = n(7).defer()),
                  t
                    .ajax({
                      url: i,
                      dataType: "json",
                      type: "GET",
                    })
                    .done(function (t) {
                      e.onFetchQueuedItemsDone(t),
                        e._request.resolve(),
                        (e._request = null);
                    })
                    .fail(function () {
                      e.onFetchFail(), e._request.reject(), (e._request = null);
                    });
              }
              return this._request;
            },
            markAsRead: function (e) {
              var t = this.get("type"),
                n = 0;
              this.lastRead !== e &&
                ((this.lastRead = e),
                i.set(t, e),
                this._unseenQueue.some(function (t) {
                  if ((++n, t.uuid === e)) return !0;
                })
                  ? this._unseenQueue.splice(0, n)
                  : (this._unseenQueue.length = 0),
                this.set("size", this._unseenQueue.length)),
                o(t) || this.startPolling();
            },
            fetch: function (e) {
              var t,
                i = this,
                o = !(!e || !e.force);
              return null === this.get("size") || o
                ? ((t = n(26).modify(n(0).result(this, "baseUrl"), {
                    query: {
                      limit: 1,
                      linked_partitioning: 1,
                    },
                  })),
                  n(21)
                    .prototype.fetch.call(
                      this,
                      n(0).assign(
                        {
                          url: t,
                          dataType: "json",
                          jqAjax: !0,
                        },
                        e
                      )
                    )
                    .done(function (e) {
                      var t = r.call(i, e);
                      (i.lastFetchTime = Date.now()),
                        t &&
                          (null === i.get("size") || o) &&
                          (i._queue.push(e.collection[0]), i.set("size", !0));
                    }))
                : n(7).resolve();
            },
            hasDataForView: function () {
              return null !== this.get("size");
            },
            onFetchFail: function () {
              this._waitingQueue.length &&
                Array.prototype.push.apply(
                  this._queue,
                  this._waitingQueue.splice(0, this._waitingQueue.length)
                );
            },
            onFetchQueuedItemsDone: function (e) {
              (this._queue.length = 0),
                this._waitingQueue.length &&
                  (this._queue.push.apply(this._queue, this._waitingQueue),
                  (this._waitingQueue.length = 0));
              var t = e.collection;
              t && t.length ? this.trigger("data", t) : this.set("size", 0);
            },
          },
          {
            hashFn: function (e) {
              return e.type;
            },
            onCleanup: function (e) {
              o(e.get("type")) &&
                n(4)
                  .get("notifications")
                  .unsubscribe(e.channel, e.onNotification),
                e.stopPolling(),
                s.call(e, !1);
            },
            cleanupInstantly: !0,
          }
        );
        function r(e) {
          var t, i, r;
          return (
            e &&
              e.collection &&
              e.collection.length &&
              ((i = (t = e.collection[0]).last_message
                ? t.last_message.conversation_id + "_" + t.last_message.sent_at
                : t.uuid || t.id),
              (r = n(0).isNumber(i)
                ? i > (void 0 === this.lastRead ? -1 : this.lastRead)
                : i !== this.lastRead)),
            r
          );
        }
        function o(e) {
          var t = n(142)[e];
          return !!(n(4).get("notifications") && t && t.channel);
        }
        function a(e) {
          this[e ? "on" : "off"]("change:size", l);
        }
        function s(e) {
          var t = e ? "on" : "off";
          n(142)[this.get("type")][t]("pollIntervalChange", u, this);
        }
        function u() {
          this._breaker && this.restart();
        }
        function l(e, t) {
          t && e.stopPolling();
        }
        function c() {
          var e = n(142)[this.get("type")];
          return {
            backoffRate: 1.1,
            baseDelay: e.get("minPollInterval"),
            maxDelay: e.get("maxPollInterval"),
          };
        }
      }.call(this, n(15)));
    },
    62: function (e, t, n) {
      e.exports = n(74).extend({
        nullable: !1,
        message: n(1).Lingua.t("This field must not be empty"),
        shouldCheck: function () {
          return !0;
        },
        check: function (e, t) {
          t(
            !(
              this.shouldCheck.call(this._form) &&
              (function (e) {
                return null == e || 0 === e.length;
              })(e)
            )
          );
        },
      });
    },
    624: function (e, t, n) {
      (function (t) {
        var i = {
            apiStreamable: {
              defaultValue: !0,
            },
            embeddableByAll: {
              defaultValue: !0,
            },
            downloadable: {
              defaultValue: !1,
              disabled: function () {
                return !n(4).get("me").canEditDownloadable();
              },
            },
            feedable: {
              defaultValue: !1,
              disabled: function () {
                return !n(4).get("me").canEditRssEnabled();
              },
            },
            offlineSyncEnabled: {
              defaultValue: !0,
            },
            buyLink: {
              defaultValue: "",
            },
            buyTitle: {
              defaultValue: n(1).Lingua.t("Buy").toString(),
            },
            commentable: {
              defaultValue: !0,
            },
            publicComments: {
              defaultValue: !0,
            },
            stats: {
              defaultValue: !0,
            },
            labelName: {
              defaultValue: null,
            },
            releaseDate: {
              defaultValue: null,
            },
          },
          r = {
            save: {
              label: n(1).Lingua.t("Save"),
              pendingLabel: n(1).Lingua.t("Saving"),
              action: "save",
            },
            cancel: {
              label: n(1).Lingua.t("Cancel"),
              action: "cancel",
            },
          },
          o = {
            buyLink: [
              [
                n(293),
                {
                  strict: !1,
                },
              ],
            ],
            buyTitle: [[n(440)]],
          },
          a = {
            buyTitle: {
              fields: [],
              check: function () {
                return n(4).get("features").has("custom_buy_title");
              },
            },
          },
          s = {
            default: "save",
            cancel: function () {
              n(294)
                .confirm(
                  n(1).Lingua.t(
                    "Are you sure you want to stop your upload? Any unsaved changes will be lost."
                  )
                )
                .done(this.cancel.bind(this));
            },
          };
        e.exports = new (n(16))(
          n(625),
          n(1190),
          n(627),
          n(157).withOptions({
            attr: "title",
          }),
          n(441),
          {
            applyTo: function (e) {
              (e.buttons = t.extend(!0, {}, r, e.buttons || {})),
                (e.fields = t.extend(!0, {}, i, e.fields || {})),
                (e.constraints = t.extend(!0, {}, o, e.constraints || {})),
                (e.constraintConditions = t.extend(
                  !0,
                  {},
                  a,
                  e.constraintConditions || {}
                )),
                (e.actions = t.extend(!0, {}, s, e.actions || {}));
            },
            _permalinkConstraint: null,
            isEdit: !1,
            requires: [
              "cancel",
              "getAudible",
              "createAudible",
              "unsetAudible",
              "getAttributesToBeSaved",
              "getAttributesFromModel",
              "onAudibleEdited",
              "onAudibleSaved",
            ],
            before: {
              initialize: function () {
                var e = {
                  type:
                    "playlist-upload" === this.resource_type
                      ? "playlist"
                      : "sound",
                  getResource: function () {
                    return this.getAudible();
                  },
                };
                this._permalinkConstraint = new (n(334))(e, this);
              },
              setup: function () {
                this.on(
                  "imageDataChanged",
                  this.markFieldsDirty.bind(this, "artwork_url")
                ),
                  this.on(
                    "change:commentable",
                    function (e, t) {
                      t || this.set("publicComments", !1);
                    },
                    this
                  ),
                  this.on(
                    "change:publicComments",
                    function (e, t) {
                      t && this.set("commentable", !0);
                    },
                    this
                  );
              },
            },
            after: {
              setup: function (e, t) {
                this.isEdit ||
                  (this.set(
                    "feedable",
                    !!n(4).get("me").get("default_tracks_feedable")
                  ),
                  t.inPlaylist || this.on("change:title", u, this));
              },
            },
            around: {
              getAttributesToBeSaved: function (e) {
                var t = this.get("buyTitle"),
                  i = this.get("buyLink"),
                  r = {};
                return (
                  (r.embeddable = this.get("embeddableByAll")),
                  (r.purchase_url = i ? n(26).normalize(i) : null),
                  (r.purchase_title =
                    t === this.getFieldMetadata("buyTitle").defaultValue
                      ? null
                      : t),
                  (r.reveal_stats = this.get("stats")),
                  (r.label_name = this.get("labelName")),
                  (r.release_date =
                    this.get("releaseDate") &&
                    n(13).LinguaLib.dateTimeHelper.format(
                      this.get("releaseDate"),
                      "iso"
                    )),
                  n(0).assign(r, e())
                );
              },
            },
            saveEdits: function () {
              var e = this,
                t = this.getOrCreateAudible();
              return (
                t.set(this.getAttributesToBeSaved()),
                this.onAudibleEdited(t.toJSON(), t.previousAttributes()),
                t
                  .save()
                  .then(this.saveAudibleImage.bind(this, t))
                  .then(
                    this.onAudibleSaved.bind(this),
                    this.onSaveFailed.bind(this)
                  )
                  .done(function () {
                    e.trigger("saved"),
                      e.isEdit ||
                        (function (e) {
                          if (e) {
                            var t = n(215).parse(e.get("tag_list") || ""),
                              i = n(4).get("me"),
                              r = {
                                first_tag: t[0] || "",
                                genre: e.get("genre"),
                                length: e.get("duration"),
                                title: e.get("title"),
                                public: e.isPublic(),
                                track_id: e.id,
                                track_link: e.get("permalink_url"),
                                creator_id: i.id,
                                creator_display_name: i.get("username"),
                                creator_link: i.get("permalink_url"),
                              };
                            n(120).default.trackUserEvent("upload_track", r);
                          }
                        })(e.getAudible());
                  })
              );
            },
            preSaveCheck: function () {
              return this.fileStatusCheck();
            },
            getOrCreateAudible: function () {
              var e = this.getAudible();
              if (e) return e;
              var t = this.createAudible();
              return (
                t.on(
                  "destroy",
                  function () {
                    this.unsetAudible(), this.cancel();
                  },
                  this
                ),
                t
              );
            },
            saveCleanup: function (e) {
              this.markFieldsClean(Object.keys(this.getAttributesFromModel()));
            },
            setToFailed: function (e, t) {
              var n =
                "playlist-upload" === this.resource_type ? "playlist" : "track";
              t && "string" != typeof t && (t = this.extractErrorMessage(t)),
                this.set({
                  errorMessage: this.getErrorMessageTemplate(e, n, t),
                });
            },
            increasePermalink: function (e) {
              var t = /-(\d+)$/;
              return e.match(t)
                ? e.replace(t, function (e, t) {
                    return "-" + (t = parseInt(t, 10) + 1);
                  })
                : e + "-1";
            },
          }
        );
        function u() {
          var e = this;
          this.trigger("generatingPermalink", !0),
            l
              .call(this, n(111).permalink(this.get("title")))
              .always(function (t) {
                (t = t || ""),
                  e.set("permalink", t),
                  e.trigger("generatingPermalink", !1);
              });
        }
        function l(e, t, i) {
          var r = this;
          return (
            (t = t || n(7).defer()),
            (i = i || 0),
            this._permalinkConstraint.check(e, function (n) {
              n
                ? t.resolve(e)
                : i < 10
                ? l.call(r, r.increasePermalink(e), t, ++i)
                : t.reject();
            }),
            t
          );
        }
      }.call(this, n(15)));
    },
    625: function (e, t, n) {
      (function (t) {
        var i = function (e) {
          var t = n(135).genreLabel(e.id),
            i = n(135).getEnglishGenreLabel(e.id);
          return {
            id: i,
            value: i,
            label: t,
          };
        };
        function r(e) {
          return !(
            !e ||
            "NO_GENRE" === e ||
            n(135).isGenreLabel(n(0).unescape(e))
          );
        }
        e.exports = new (n(16))({
          requires: ["getAudible"],
          merge: {
            requiredModelAttributes: [
              "title",
              "description",
              "tag_list",
              "artwork_url",
              "sharing",
              "permalink",
            ],
          },
          applyTo: function (e) {
            var r, o;
            t.extend(!0, e, {
              fields:
                ((r = e.resource_type),
                (o =
                  '<a href="https://help.soundcloud.com/hc/en-us/articles/115003450427-Sharing-a-private-track-or-playlist-within-SoundCloud" class="sc-link-dark" rel="noopener noreferrer" target="_blank">'),
                {
                  title: {
                    defaultValue: "",
                  },
                  description: {
                    defaultValue: "",
                  },
                  genre: {
                    defaultValue: "NO_GENRE",
                    datasource: [
                      {
                        value: "NO_GENRE",
                        id: "NO_GENRE",
                      },
                    ],
                    groups: [
                      {
                        links: [
                          {
                            id: "NO_GENRE",
                            value: "NO_GENRE",
                            label: n(1).Lingua.t("None"),
                          },
                          {
                            id: "CUSTOM_GENRE",
                            value: "CUSTOM_GENRE",
                            label: n(1).Lingua.t("Custom", null, {
                              context: "Genre",
                            }),
                          },
                        ],
                      },
                      {
                        title: n(1).Lingua.t("Music"),
                        links: n(135).genres("music").map(i),
                      },
                      {
                        title: n(1).Lingua.t("Audio"),
                        links: n(135).genres("audio").map(i),
                      },
                    ],
                  },
                  customGenre: {
                    defaultValue: "",
                  },
                  tags: {
                    defaultValue: function () {
                      return [];
                    },
                  },
                  artwork_url: {
                    defaultValue: null,
                  },
                  sharing: {
                    defaultValue: "public",
                    datasource: [
                      {
                        value: "public",
                        label: n(1).Lingua.t("Public"),
                        sublabel:
                          "playlist-upload" === r || "playlist-edit" === r
                            ? n(1).Lingua.t(
                                "Anyone will be able to listen to this playlist."
                              )
                            : n(1).Lingua.t(
                                "Anyone will be able to listen to this track."
                              ),
                      },
                      {
                        value: "private",
                        label: n(1).Lingua.t("Private"),
                        sublabel:
                          "playlist-upload" === r || "playlist-edit" === r
                            ? n(1).Lingua.t(
                                "Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this playlist.",
                                {
                                  linkStart: o,
                                  linkEnd: "</a>",
                                }
                              )
                            : n(1).Lingua.t(
                                "Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this track.",
                                {
                                  linkStart: o,
                                  linkEnd: "</a>",
                                }
                              ),
                      },
                    ],
                  },
                  permalink: {
                    defaultValue: "",
                  },
                  track_format: {
                    defaultValue: "single-track",
                    datasource: [
                      {
                        value: "single-track",
                        id: "single-track",
                        label: n(1).Lingua.tPending("Single track"),
                      },
                      {
                        value: "dj-mix",
                        id: "dj-mix",
                        label: n(1).Lingua.tPending("DJ Mix"),
                      },
                    ],
                  },
                  caption: {
                    defaultValue: "",
                  },
                }),
            });
          },
          around: {
            getAttributesToBeSaved: function (e) {
              var t = e.apply(this, n(0).rest(arguments)),
                i = n(0).pick(
                  this.attributes,
                  "title",
                  "description",
                  "sharing",
                  "permalink",
                  "genre",
                  "caption"
                ),
                r = this.get("customGenre");
              return (
                "NO_GENRE" === i.genre
                  ? (i.genre = "")
                  : "CUSTOM_GENRE" === i.genre
                  ? (i.genre = r)
                  : (i.genre = n(0).unescape(i.genre)),
                (i.tag_list = n(215).serialize(this.get("tags"))),
                n(0).assign(i, t)
              );
            },
            getAttributesFromModel: function (e) {
              var t = this.getAudible(),
                i = e.apply(this, n(0).rest(arguments)),
                o = n(0).pick(
                  t.attributes,
                  "title",
                  "description",
                  "sharing",
                  "permalink",
                  "artwork_url",
                  "genre",
                  "caption"
                );
              return (
                r(o.genre)
                  ? ((o.customGenre = o.genre), (o.genre = "CUSTOM_GENRE"))
                  : o.genre
                  ? (o.genre = n(0).escape(o.genre))
                  : (o.genre = "NO_GENRE"),
                (o.tags = n(215).extract(t.attributes)),
                n(0).assign(o, i)
              );
            },
          },
          isCustomGenre: function () {
            return r(this.get("genre"));
          },
        });
      }.call(this, n(15)));
    },
    626: function (e, t) {
      e.exports = {
        "all-music": "All music genres",
        "all-audio": "All audio genres",
        alternativerock: "Alternative Rock",
        ambient: "Ambient",
        classical: "Classical",
        country: "Country",
        danceedm: "Dance &amp; EDM",
        dancehall: "Dancehall",
        deephouse: "Deep House",
        disco: "Disco",
        drumbass: "Drum &amp; Bass",
        dubstep: "Dubstep",
        electronic: "Electronic",
        folksingersongwriter: "Folk &amp; Singer-Songwriter",
        hiphoprap: "Hip-hop &amp; Rap",
        house: "House",
        indie: "Indie",
        jazzblues: "Jazz &amp; Blues",
        latin: "Latin",
        metal: "Metal",
        piano: "Piano",
        pop: "Pop",
        rbsoul: "R&amp;B &amp; Soul",
        reggae: "Reggae",
        reggaeton: "Reggaeton",
        rock: "Rock",
        soundtrack: "Soundtrack",
        speech: "Speech",
        techno: "Techno",
        trance: "Trance",
        trap: "Trap",
        triphop: "Triphop",
        world: "World",
        audiobooks: "Audiobooks",
        business: "Business",
        comedy: "Comedy",
        entertainment: "Entertainment",
        learning: "Learning",
        newspolitics: "News &amp; Politics",
        religionspirituality: "Religion &amp; Spirituality",
        science: "Science",
        sports: "Sports",
        storytelling: "Storytelling",
        technology: "Technology",
      };
    },
    627: function (e, t, n) {
      (function (t) {
        var i = {
          license: {
            defaultValue: function () {
              return o(n(4).get("me")) ? n(126).COMMONS : n(126).ALL_RIGHTS;
            },
            datasource: [
              {
                label: n(1).Lingua.t("All Rights Reserved"),
                value: n(126).ALL_RIGHTS,
              },
              {
                label: "Creative Commons",
                value: n(126).COMMONS,
              },
            ],
          },
          creativeCommonsLicense: {
            defaultValue: function () {
              return o(n(4).get("me")) ? r(n(4).get("me")) : n(126).DEFAULT_CC;
            },
          },
          attribution: {
            defaultValue: !0,
            readOnly: !0,
          },
          nonCommercial: {
            defaultValue: !0,
          },
          nonDerivative: {
            defaultValue: !1,
          },
          shareAlike: {
            defaultValue: !0,
          },
        };
        function r(e) {
          return e.get("default_license");
        }
        function o(e) {
          var t = r(e);
          return t && t !== n(126).ALL_RIGHTS;
        }
        function a(e, t) {
          t && this.set("shareAlike", !1);
        }
        function s(e, t) {
          t && this.set("nonDerivative", !1);
        }
        function u(e) {
          return "change:" + e;
        }
        function l() {
          var e = n(126).serializeCCAttributes(this.attributes);
          this.set("creativeCommonsLicense", e);
        }
        function c() {
          var e = this.get("license");
          return e === n(126).ALL_RIGHTS
            ? e
            : this.get("creativeCommonsLicense");
        }
        e.exports = new (n(16))({
          requires: ["getAudible"],
          merge: {
            requiredModelAttributes: ["license"],
          },
          applyTo: function (e) {
            t.extend(!0, e, {
              fields: i,
            });
          },
          before: {
            setup: function () {
              var e = ["license"].concat(Object.keys(n(126).ccFields));
              this.listenTo(this, "change:nonDerivative", a)
                .listenTo(this, "change:shareAlike", s)
                .listenTo(this, e.map(u).join(" "), l);
            },
          },
          around: {
            getAttributesToBeSaved: function (e) {
              var t = e.apply(this, n(0).rest(arguments)),
                i = {
                  license: c.call(this),
                };
              return n(0).assign(i, t);
            },
            getAttributesFromModel: function (e) {
              var t = this.getAudible(),
                i = e.apply(this, n(0).rest(arguments)),
                r = n(126).parse(t.get("license"));
              return n(0).assign(r, i);
            },
          },
        });
      }.call(this, n(15)));
    },
    628: function (e, t, n) {
      (function (t) {
        var i = {
          fileUploadSaved: {
            defaultValue: !1,
          },
          fileUploadFailed: {
            defaultValue: !1,
          },
          fileUpload: {
            defaultValue: null,
          },
        };
        function r() {
          var e = this.getFileUpload();
          e && e.set("hasBeenSaved", !0),
            (this._fileSaveableDeferred = null),
            this.set("fileUploadSaved", !0),
            s.call(this);
        }
        function o() {
          this.markFieldsClean("fileUpload"), this.unsetFileUpload();
        }
        function a(e, t) {
          var i = this.getAudible(),
            r = this.isEdit;
          switch (t) {
            case n(53).TRANSCODING:
              r || this._fileSaveableDeferred.resolve();
              break;
            case n(53).FAILED:
              e.previous("status") === n(53).TRANSCODING
                ? (i && i.set("state", n(17).states.FAILED),
                  this.setToFailed("transcode"))
                : this.setToFailed("upload"),
                this.set("fileUploadFailed", !0);
              break;
            case n(53).COMPLETE:
              i && i.set("state", n(17).states.FINISHED),
                r &&
                  this._fileSaveableDeferred &&
                  this._fileSaveableDeferred.resolve(),
                s.call(this);
          }
        }
        function s() {
          var e = this.get("fileUploadSaved"),
            t = this.getFileUpload(),
            i = t && t.get("status") === n(53).COMPLETE;
          e &&
            i &&
            (this.trigger("upload:completed:saved"), this.removeUpload());
        }
        e.exports = new (n(16))({
          requires: ["getAudible", "isEdit", "onAudibleSaved", "hasFailed"],
          _fileSaveableDeferred: null,
          applyTo: function (e) {
            e.fields = t.extend(!0, {}, i, e.fields || {});
          },
          after: {
            onAudibleSaved: function () {
              var e = this.getAudible(),
                t = this.getFileUpload();
              if (
                (e && this.isEdit && t && n(17).prototype.createPlayer.apply(e),
                t)
              ) {
                if ("single-audio-upload" === t.resource_type) {
                  var i,
                    o = Boolean(
                      null == e || null == (i = e.getSounds()[0])
                        ? void 0
                        : i.get("caption")
                    );
                  n(8).trigger("upload_funnel:save"),
                    n(12).trackUploadFunnel({
                      chapter: "save",
                      uploadId: t.getTrackingId(),
                      event: {
                        click_attributes: {
                          has_caption: o,
                        },
                      },
                    });
                }
                r.call(this);
              }
            },
          },
          hasUnsavedUpload: function () {
            var e = this.getFileUpload();
            return e && e.get("status") !== n(53).FAILED;
          },
          setFileUpload: function (e) {
            this.set({
              fileUpload: e,
              fileUploadFailed: !1,
              fileUploadSaved: !1,
            }),
              this.markFieldsDirty("fileUpload"),
              e.hold(),
              (this._fileSaveableDeferred = n(7).defer()),
              this.listenTo(e, "change:status", a).listenTo(e, "destroy", o);
          },
          unsetFileUpload: function () {
            var e = this.getAudible();
            e && e.set("state", n(17).states.FINISHED),
              this.set("fileUpload", null),
              this._fileSaveableDeferred && this._fileSaveableDeferred.reject(),
              (this._fileSaveableDeferred = null);
          },
          getFileUpload: function () {
            return this.get("fileUpload");
          },
          removeUpload: function () {
            var e = this.getFileUpload();
            e && (e.release(), e.remove());
          },
          replaceUpload: function (e) {
            this.removeUpload(), this.setFileUpload(e);
          },
          getUploadAttributes: function () {
            var e = this.isEdit,
              t = this.getFileUpload(),
              n = {};
            return (
              t &&
                ((n[e ? "replacing_uid" : "uid"] = t.getUploadId()),
                (n[
                  e ? "replacing_original_filename" : "original_filename"
                ] = t.getFileName())),
              n
            );
          },
          fileStatusCheck: function () {
            var e = this.getFileUpload(),
              t = this.isEdit ? n(53).COMPLETE : n(53).TRANSCODING;
            if (!e) return n(7).resolve();
            var i = e.get("status");
            return i < t && i !== n(53).FAILED
              ? this._fileSaveableDeferred
              : n(7).resolve();
          },
        });
      }.call(this, n(15)));
    },
    629: function (e, t, n) {
      (function (t) {
        function i() {
          return "playlist-upload" === this.resource_type;
        }
        var r = {
            publisherArtist: {
              defaultValue: null,
              disabled: i,
            },
            publisherAlbumTitle: {
              defaultValue: null,
            },
            publisherContainsMusic: {
              datasource: [
                {
                  label: "",
                  value: null,
                },
                {
                  label: n(1).Lingua.t("Yes"),
                  value: !0,
                },
                {
                  label: n(1).Lingua.t("No"),
                  value: !1,
                },
              ],
              defaultValue: null,
              disabled: i,
            },
            publisher: {
              defaultValue: null,
            },
            publisherIswc: {
              defaultValue: null,
            },
            publisherUpcOrEan: {
              defaultValue: null,
            },
            publisherIsrc: {
              defaultValue: null,
              disabled: i,
            },
            publisherIsrcGenerated: {
              defaultValue: !1,
              disabled: i,
            },
            publisherPLine: {
              defaultValue: null,
            },
            publisherCLine: {
              defaultValue: null,
            },
            publisherExplicit: {
              datasource: [
                {
                  label: "",
                  value: null,
                },
                {
                  label: n(1).Lingua.t("Yes"),
                  value: !0,
                },
                {
                  label: n(1).Lingua.t("No"),
                  value: !1,
                },
              ],
              defaultValue: null,
            },
            publisherWriterComposer: {
              defaultValue: null,
            },
            publisherReleaseTitle: {
              defaultValue: null,
            },
          },
          o = {
            artist: "publisherArtist",
            album_title: "publisherAlbumTitle",
            contains_music: "publisherContainsMusic",
            publisher: "publisher",
            iswc: "publisherIswc",
            upc_or_ean: "publisherUpcOrEan",
            isrc: "publisherIsrc",
            p_line: "publisherPLine",
            c_line: "publisherCLine",
            explicit: "publisherExplicit",
            writer_composer: "publisherWriterComposer",
            release_title: "publisherReleaseTitle",
          };
        e.exports = new (n(16))({
          requires: ["getAudible", "getAttributesFromModel"],
          requirePrototype: n(78).prototype,
          merge: {
            requiredModelAttributes: ["publisher_metadata", "isrc_state"],
          },
          applyTo: function (e) {
            t.extend(!0, e, {
              fields: r,
              constraints: {
                publisherIswc: [n(1193)],
                publisherIsrc: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Enter the ISRC."),
                    },
                  ],
                  n(1194),
                ],
                publisherUpcOrEan: [n(1195)],
                publisherArtist: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Enter an artist."),
                    },
                  ],
                ],
                publisherContainsMusic: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Select an option."),
                    },
                  ],
                  [n(798)],
                ],
              },
              constraintConditions: {
                publisherIsrc: {
                  fields: ["monetizationEnabled", "publisherContainsMusic"],
                  constraints: [n(62)],
                  check: function (e, t) {
                    var i = n(4).get("me"),
                      r = i.getCPPOption("is_isrc_required_for_audio"),
                      o = i.hasMonetization();
                    return e && (t || r) && o;
                  },
                },
                publisherArtist: {
                  fields: [
                    "publisherContainsMusic",
                    "publisherIsrcGenerated",
                    "publisherIsrc",
                  ],
                  check: function (e, t, i) {
                    return n(4).get("me").isCPPEnabled() && (t || (e && i));
                  },
                },
                publisherContainsMusic: {
                  fields: ["monetizationEnabled"],
                  check: n(0).identity,
                },
              },
              isRequestingIsrcGeneration: function () {
                return this.get("publisherIsrcGenerated");
              },
              isPendingIsrcGeneration: function () {
                return "pending" === this.get("publisherIsrcState");
              },
              hasAssignedIsrc: function () {
                return (
                  this.isRequestingIsrcGeneration() &&
                  "assigned" === this.get("publisherIsrcState")
                );
              },
            });
          },
          after: {
            setup: function () {
              this.isEdit ||
                this.set(
                  "publisherContainsMusic",
                  !n(4).get("me").getCPPOption("default_is_audio", !1)
                ),
                this.listenTo(
                  this,
                  "change:publisherIsrcGenerated change:publisherIsrcState change:publisherIsrc",
                  a
                ),
                a.call(this);
            },
            saveCleanup: function () {
              var e = this.getAudible(),
                t = e.get("isrc_state"),
                n = e.get("publisher_metadata");
              this.set("publisherIsrcState", t),
                this.set("publisherIsrc", n.isrc);
            },
          },
          around: {
            getAttributesToBeSaved: function (e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              var a = e.apply(this, i),
                s = this.isRequestingIsrcGeneration();
              return (
                (a.publisher_metadata = n(0).reduce(
                  o,
                  function (e, t, n) {
                    var i = this.get(t);
                    return (
                      (e[n] = "isrc" === n ? (s ? null : i || null) : i), e
                    );
                  },
                  {},
                  this
                )),
                (a.isrc_generate = s),
                a
              );
            },
            getAttributesFromModel: function (e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              var a = e.apply(this, i),
                s = this.getAudible(),
                u = s.get("publisher_metadata"),
                l = s.get("isrc_state");
              return (
                u &&
                  n(0).assign(
                    a,
                    n(0).reduce(
                      o,
                      function (e, t, n) {
                        return (e[t] = u[n]), e;
                      },
                      {}
                    )
                  ),
                (a.publisherIsrcState = l),
                (a.publisherIsrcGenerated = !!l),
                a
              );
            },
          },
        });
        function a() {
          i.call(this) ||
            (this.setFieldDisabled(
              "publisherIsrc",
              this.get("publisherIsrcGenerated")
            ),
            this.setFieldDisabled(
              "publisherIsrcGenerated",
              !(!this.get("publisherIsrcState") && !this.get("publisherIsrc"))
            ));
        }
      }.call(this, n(15)));
    },
    63: function (e, t) {
      e.exports = {
        ALT: 18,
        BACKSPACE: 8,
        COMMA: 188,
        CTRL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESC: 27,
        HASH: 220,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        META_FIREFOX_OSX: 224,
        META_LEFT: 91,
        META_RIGHT: 92,
        META_RIGHT_OSX: 93,
        PGDOWN: 34,
        PGUP: 33,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      };
    },
    630: function (e, t, n) {
      (function (t) {
        var i = n(0).negate(p),
          r = {
            monetizationEnabled: {
              defaultValue: !1,
              disabled: i,
            },
            monetizationStartTimezone: {
              defaultValue: null,
              disabled: i,
            },
            monetizationStart: {
              defaultValue: !1,
              disabled: i,
            },
            monetizationStartLocalDate: {
              defaultValue: null,
              disabled: i,
            },
            monetizationStartDate: {
              defaultValue: null,
              disabled: i,
            },
            monetizationEndTimezone: {
              defaultValue: null,
              disabled: i,
            },
            monetizationEnd: {
              defaultValue: !1,
              disabled: i,
            },
            monetizationEndLocalDate: {
              defaultValue: null,
              disabled: i,
            },
            monetizationEndDate: {
              defaultValue: null,
              disabled: i,
            },
            monetizationRightsholders: {
              defaultValue: null,
              disabled: i,
              datasource: function () {
                return new (n(1196))();
              },
            },
            unknownTerritories: {
              defaultValue: null,
            },
          };
        e.exports = new (n(16))({
          merge: {
            requiredModelAttributes: ["monetization"],
          },
          requires: ["getAudible", "saveEdits", "onAudibleSaved"],
          applyTo: function (e) {
            t.extend(!0, e, {
              fields: r,
              constraints: {
                monetizationEnabled: [
                  [
                    n(487),
                    {
                      value: !1,
                      message: n(1).Lingua.t(
                        "Tracks can only be monetized if they are between 30 seconds and 10 minutes long."
                      ),
                    },
                  ],
                ],
                monetizationStartDate: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Select a date."),
                    },
                  ],
                  n(335),
                  n(442),
                ],
                monetizationEndDate: [
                  [
                    n(62),
                    {
                      message: n(1).Lingua.t("Select a date."),
                    },
                  ],
                  n(335),
                  n(442),
                ],
                monetizationRightsholders: [n(1197), n(1198)],
              },
              constraintConditions: {
                monetizationEnabled: {
                  fields: [],
                  check: function () {
                    var e = this.getAudible();
                    return (
                      this.isEdit &&
                      e &&
                      "sound" === e.resource_type &&
                      e.hasMonetizationRestriction()
                    );
                  },
                },
                monetizationStartDate: {
                  fields: ["monetizationStartDate", "monetizationStart"],
                  check: function (e, t) {
                    return (
                      t &&
                      (!e ||
                        this.getFieldMetadata("monetizationStartDate").isDirty)
                    );
                  },
                },
                monetizationEndDate: {
                  fields: ["monetizationEndDate", "monetizationEnd"],
                  check: function (e, t) {
                    return (
                      t &&
                      (!e ||
                        this.getFieldMetadata("monetizationEndDate").isDirty)
                    );
                  },
                },
                monetizationRightsholders: {
                  fields: ["monetizationEnabled"],
                  check: function (e) {
                    return e && v.call(this);
                  },
                },
              },
            }),
              (e.constraints.FORM = (e.constraints.FORM || []).concat([
                [
                  n(1199),
                  {
                    nullable: !0,
                    message: n(1).Lingua.t(
                      "Monetization start must happen before monetization end."
                    ),
                    fields: ["monetizationStartDate", "monetizationEndDate"],
                  },
                ],
              ]));
          },
          before: {
            saveEdits: function () {
              if ("sound-upload-edit" === this.resource_type) {
                var e = this.getAudible();
                this._isCurrentlyMonetizingInAnyTerritory = Boolean(
                  e && e.hasMonetizationTerritories()
                );
              }
            },
          },
          after: {
            setup: function () {
              var e = n(4).get("me"),
                t = g.call(this);
              (this._explicitRightsholderRequiredTerritories = t
                ? new (n(443))({
                    id: t,
                  })
                : null),
                this.on("change:monetizationEnabled", d, this),
                this.forceChange("monetizationEnabled"),
                this.on("change:monetizationEnabled", c, this),
                !this.isEdit &&
                  e.getCPPOption("default_monetizable") &&
                  this.set("monetizationEnabled", !0),
                (this.defaultDurationDays = e.getCPPOption(
                  "default_monetization_duration_in_days"
                )),
                this.defaultDurationDays > 0 &&
                  (this.isEdit ||
                    (this.on("change:monetizationEnabled", s, this),
                    s.call(this)),
                  this.on(
                    "change:monetizationStartDate change:monetizationEnd",
                    u,
                    this
                  ));
            },
            onAudibleSaved: function () {
              !1 === this._isCurrentlyMonetizingInAnyTerritory &&
                !0 === this.get("monetizationEnabled") &&
                n(8).trigger("monetization-request:sent", this.getAudible()),
                delete this._isCurrentlyMonetizingInAnyTerritory;
            },
            destroy: function () {
              this._explicitRightsholderRequiredTerritories &&
                this._explicitRightsholderRequiredTerritories.release();
            },
          },
          around: {
            getAttributesToBeSaved: function (e) {
              var t = e.apply(this, [].slice.call(arguments, 1)),
                i = n(4).get("me").isCPPEnabled();
              return i
                ? n(0).assign(t, {
                    monetization: f(this),
                    rightsholders: h(this),
                  })
                : t;
            },
            getAttributesFromModel: function (e) {
              var t = e.apply(this, [].slice.call(arguments, 1)),
                i = this.getAudible(),
                r = i.get("monetization"),
                a = i.get("rightsholders") || [],
                s = n(0).partition(
                  i.getMonetizationTerritories(),
                  function (e) {
                    return n(0).contains(n(51).monetizableCountryCodes(), e);
                  }
                ),
                u = s[0],
                l = s[1];
              return (
                r &&
                  n(0).assign(t, {
                    monetizationEnabled: !!i.getMonetizationTerritories()
                      .length,
                    monetizationStart: !!r.start_timestamp,
                    monetizationEnd: !!r.end_timestamp,
                    monetizationStartDate: o(r.start_timestamp),
                    monetizationEndDate: o(r.end_timestamp),
                    monetizationStartTimezone: r.start_timezone,
                    monetizationEndTimezone: r.end_timezone,
                    monetizationWorldwide: r.worldwide,
                    monetizationExcludedTerritories: r.excluded_territories,
                  }),
                (this.attributes.monetizationRightsholders = u.map(function (
                  e
                ) {
                  return (
                    n(0).findWhere(a, {
                      territory: e,
                    }) || {
                      territory: e,
                    }
                  );
                })),
                (this.attributes.unknownTerritories = l),
                t
              );
            },
          },
        });
        function o(e) {
          return e && n(13).LinguaLib.dateTimeHelper.fromString(e);
        }
        function a(e) {
          return e.toISOString();
        }
        function s() {
          var e,
            t = this.get("monetizationStart"),
            n = this.get("monetizationEnd");
          !this.get("monetizationEnabled") ||
            t ||
            n ||
            (this.set("monetizationEnd", !0),
            this.set(
              "monetizationEndDate",
              l(
                ((e = new Date()).setHours(0, 0, 0, 0), e),
                this.defaultDurationDays
              )
            ));
        }
        function u() {
          var e = this.get("monetizationStart"),
            t = this.get("monetizationEnd"),
            n = this.get("monetizationStartDate");
          e &&
            t &&
            n &&
            (this.set(
              "monetizationEndTimezone",
              this.get("monetizationStartTimezone")
            ),
            this.set("monetizationEndDate", l(n, this.defaultDurationDays)));
        }
        function l(e, t) {
          return (e = new Date(+e)).setUTCDate(e.getUTCDate() + t), e;
        }
        function c(e, t) {
          if (t) {
            var i = n(51)
              .monetizableCountryCodes()
              .map(function (e) {
                return {
                  territory: e,
                };
              });
            this.set("monetizationRightsholders", i);
          } else this.set("monetizationRightsholders", []);
        }
        function d(e, t) {
          var n = !t || !p();
          this.setFieldDisabled(
            [
              "monetizationStartTimezone",
              "monetizationStart",
              "monetizationStartLocalDate",
              "monetizationStartDate",
              "monetizationEndTimezone",
              "monetizationEnd",
              "monetizationEndLocalDate",
              "monetizationEndDate",
            ],
            n
          );
        }
        function f(e) {
          var t = {
            start_timestamp: null,
            start_timezone: null,
            end_timestamp: null,
            end_timezone: null,
            territories: [],
            excluded_territories: [],
            worldwide: !1,
          };
          return (
            e.get("monetizationEnabled") &&
              (e.get("monetizationStart") &&
                ((t.start_timestamp = a(e.get("monetizationStartDate"))),
                (t.start_timezone = e.get("monetizationStartTimezone"))),
              e.get("monetizationEnd") &&
                ((t.end_timestamp = a(e.get("monetizationEndDate"))),
                (t.end_timezone = e.get("monetizationEndTimezone"))),
              (t.worldwide = e.get("monetizationWorldwide")),
              (t.excluded_territories = e.get(
                "monetizationExcludedTerritories"
              )),
              (t.territories = n(0)
                .pluck(e.get("monetizationRightsholders"), "territory")
                .concat(e.get("unknownTerritories"))
                .filter(Boolean))),
            t
          );
        }
        function h(e) {
          return (e.get("monetizationRightsholders") || []).filter(function (
            e
          ) {
            return !!e.rightsholder_urn;
          });
        }
        function p() {
          return (
            n(4).get("me").canEditMonetization() &&
            n(4).get("me").hasMonetization()
          );
        }
        function g() {
          var e = this.getAudible();
          return (
            (e &&
              e.get("publisher_metadata") &&
              e.get("publisher_metadata").isrc) ||
            null
          );
        }
        function m() {
          return (
            (this._explicitRightsholderRequiredTerritories &&
              this._explicitRightsholderRequiredTerritories.get(
                "territories"
              )) ||
            []
          );
        }
        function v() {
          var e = Boolean(g.call(this)),
            t = n(0).intersection(
              m.call(this),
              n(51).monetizableCountryCodes()
            );
          return !e || t.length > 0;
        }
      }.call(this, n(15)));
    },
    632: function (e, t, n) {
      e.exports = n(74).extend({
        check: function (e, t) {
          var r = this,
            o = (e || "").trim();
          n(0).isEmpty(o)
            ? ((this.message = ""), t(!0))
            : (function (e) {
                var t = new (n(799))({
                    minLength: 0,
                    maxLength: 1,
                  }),
                  i = n(7).defer();
                return (
                  t.check(e, function (e) {
                    e
                      ? i.resolve({
                          isValid: e,
                          message: "",
                        })
                      : i.reject({
                          isValid: e,
                          message: t.message,
                        });
                  }),
                  i
                );
              })(o)
                .then(function () {
                  return (function (e) {
                    return (function (e) {
                      var t = n(26).parse(e).path;
                      if (!t)
                        return n(7).reject("Cound not parse trackUrl:", e);
                      var i = t.split("/"),
                        r = i[1],
                        o = i[2];
                      return n(17).resolve(r, o);
                    })(e).then(
                      function () {
                        return {
                          isValid: !0,
                          message: "",
                        };
                      },
                      function (e) {
                        return {
                          isValid: !1,
                          message: i((e || {}).status),
                        };
                      }
                    );
                  })(o);
                })
                .always(function (e) {
                  (r.message = e.message), t(e.isValid);
                });
        },
      });
      function i(e) {
        return n(0).isUndefined(e)
          ? n(1).Lingua.t("Something went wrong")
          : e <= 0
          ? n(1).Lingua.t(
              "Your network connection seems to be disabled. Please check and retry."
            )
          : 404 === e
          ? n(1).Lingua.tPending(
              "This track was not found. Please, verify the URL."
            )
          : n(1).Lingua.t("Something went wrong");
      }
    },
    633: function (e, t, n) {
      (function (t) {
        var i = {
          playlistType: {
            defaultValue: n(117).defaultReleaseType,
            datasource: Object.keys(n(117).releaseLabels).map(function (e) {
              return {
                value: e,
                label: n(117).releaseLabels[e],
              };
            }),
          },
          releaseDate: {
            defaultValue: null,
          },
        };
        e.exports = new (n(16))({
          requires: ["getAudible"],
          requirePrototype: n(78).prototype,
          merge: {
            requiredModelAttributes: ["set_type", "release_date"],
          },
          applyTo: function (e) {
            t.extend(!0, e, {
              fields: i,
              constraints: {
                releaseDate: [
                  n(335),
                  [
                    n(62),
                    {
                      message: function (e) {
                        return (
                          {
                            album: n(1).Lingua.t(
                              "Enter a release date for albums."
                            ),
                            ep: n(1).Lingua.t("Enter a release date for EPs."),
                            single: n(1).Lingua.t(
                              "Enter a release date for singles."
                            ),
                            compilation: n(1).Lingua.t(
                              "Enter a release date for compilations."
                            ),
                          }[e.get("playlistType")] ||
                          n(1).Lingua.t("Enter a release date.")
                        );
                      },
                    },
                  ],
                ],
              },
              constraintConditions: {
                releaseDate: {
                  fields: ["playlistType"],
                  constraints: [n(62)],
                  check: function (e) {
                    return e !== n(117).defaultReleaseType;
                  },
                },
              },
            });
          },
          around: {
            getAttributesToBeSaved: function (e) {
              var t = e.apply(this, n(0).rest(arguments)),
                i = this.get("releaseDate");
              return n(0).assign(
                {
                  set_type: n(117).typeToApi(this.get("playlistType")),
                  release_date:
                    i && n(13).LinguaLib.dateTimeHelper.format(i, "iso"),
                },
                t
              );
            },
            getAttributesFromModel: function (e) {
              var t = e.apply(this, n(0).rest(arguments)),
                i = this.getAudible();
              return n(0).assign(
                {
                  playlistType: n(117).apiToType(i.get("set_type")),
                  releaseDate:
                    i.get("release_date") &&
                    n(13).LinguaLib.dateTimeHelper.fromString(
                      i.get("release_date")
                    ),
                },
                t
              );
            },
          },
        });
      }.call(this, n(15)));
    },
    638: function (e, t) {
      e.exports = {
        isSoundCloudMail: function (e) {
          return /nosend\.soundcloudmail\.com$/.test(e);
        },
      };
    },
    64: function (e, t, n) {
      var i = (e.exports = {
        AudioAdVisualPlacements: {
          companion: "companion",
          leaveBehind: "leaveBehind",
        },
        AudioAdVisualFormats: {
          html: "html",
          image: "image",
        },
        getPreferredAdVisualAttributes: function (e, t) {
          var r =
              t === i.AudioAdVisualPlacements.companion
                ? e.get("companion_display")
                : e.get("leave_behind"),
            o =
              t === i.AudioAdVisualPlacements.companion
                ? e.get("html_companion_display")
                : e.get("html_leave_behind");
          return r || o
            ? n(65).isSrcdocSupportedInBrowser() && o
              ? {
                  attributes: o,
                  format: i.AudioAdVisualFormats.html,
                }
              : {
                  attributes: r,
                  format: i.AudioAdVisualFormats.image,
                }
            : {
                attributes: null,
                format: null,
              };
        },
        isUserAdConsumer: function () {
          return !(
            "front" === (n(4).get("router").getLayoutInfo() || {}).layoutName ||
            n(4).get("me").getPerk("adFree")
          );
        },
        isAdBlockEnabled: n(0).memoize(function () {
          var e = window.document.createElement("div");
          e.classList.add("ads_ad_box2"),
            (e.style.width = "0"),
            (e.style.height = "0"),
            (e.style.overflow = "hidden"),
            (e.style.visibility = "hidden"),
            window.document.body.appendChild(e);
          var t = "none" === window.getComputedStyle(e).display;
          return window.document.body.removeChild(e), t;
        }),
      });
    },
    643: function (e, t, n) {
      e.exports = {
        labels: {
          geoblocked: n(1).Lingua.t("Geoblocked", {}),
          monetizable: n(1).Lingua.t("Monetizing", {}),
          "monetizable-pending": n(1).Lingua.t("Not monetizing", {}),
          "monetizable-possible": n(1).Lingua.t("Monetizable", {}),
          "monetization-restriction": n(1).Lingua.t(
            "Monetization restricted",
            {}
          ),
          private: n(1).Lingua.t("Private", {}),
          restricted: n(1).Lingua.t("Restricted", {}),
          scheduled: n(1).Lingua.t("Scheduled", {}),
          mastered: n(1).Lingua.t("Mastered", {}),
        },
      };
    },
    65: function (e, t, n) {
      var i,
        r = window.document,
        o = (e.exports = {
          insertScript: function (e, t) {
            var i = s(e, (t = t || {})),
              r = u(),
              a = t.onerror,
              l = t.removeAfterLoad
                ? n(0).wrap(t.onload || n(0).noop, function (e) {
                    r.removeChild(i), e();
                  })
                : t.onload;
            return (l || a) && o.onScriptLoad(i, l, a), r.appendChild(i), i;
          },
          removeElement: function (e) {
            if (e && e.parentNode) return e.parentNode.removeChild(e);
          },
          insertSandboxedScript: function (e, t, n) {
            return (
              void 0 === n &&
                (n = {
                  onScriptLoad: function () {},
                }),
              l().then(function (i) {
                return d(i, e, t, n);
              })
            );
          },
          insertMultipleScriptsInSandbox: function (e, t, n) {
            void 0 === n &&
              (n = {
                onScriptLoad: function () {},
              }),
              l().then(function (i) {
                var r = u(i.contentWindow.document);
                return (
                  e.forEach(function (o, a) {
                    var u = s(o, {
                      isAsync: !1,
                      attributes: t,
                    });
                    r.appendChild(u),
                      a === e.length - 1 &&
                        (u.onload = function () {
                          return n.onScriptLoad(u, i.contentWindow);
                        });
                  }),
                  i
                );
              });
          },
          onScriptLoad: function (e, t, i) {
            void 0 === t && (t = n(0).noop),
              void 0 === i && (i = n(0).noop),
              t &&
                (e.addEventListener
                  ? e.addEventListener("load", t, !1)
                  : e.readyState && (e.onreadystatechange = t)),
              i && (e.onerror = i);
          },
          whenInserted: function (e, t) {
            var o = void 0 === t ? {} : t,
              s = o.root,
              u = void 0 === s ? r.body : s,
              l = o.timeout,
              c = void 0 === l ? 1 / 0 : l;
            return n(7)
              .deferFrom(
                (function (e, t) {
                  var o = void 0 === t ? {} : t,
                    s = o.timeout,
                    u = void 0 === s ? 1 / 0 : s,
                    l = o.root,
                    c = void 0 === l ? r.body : l;
                  return c.contains(e)
                    ? n(7).resolve()
                    : n(7).promise(function (t, n) {
                        a.push({
                          root: c,
                          element: e,
                          resolve: t,
                          reject: n,
                          created_at: Date.now(),
                          timeout: u,
                        }),
                          i ||
                            (i = window.setInterval(function () {
                              (a = a.filter(function (e) {
                                var t = (function (e) {
                                  var t,
                                    n,
                                    i,
                                    r = e.root,
                                    o = e.element,
                                    a = e.resolve,
                                    s = e.reject;
                                  return (
                                    (n = (t = e).created_at),
                                    (i = t.timeout),
                                    Date.now() - n > i
                                      ? s
                                      : r.contains(o)
                                      ? a
                                      : null
                                  );
                                })(e);
                                return t && t(), !t;
                              })).length ||
                                (window.clearInterval(i), (i = null));
                            }, 50));
                      });
                })(e, {
                  root: u,
                  timeout: c,
                })
              )
              .always(function () {
                return (function (e, t) {
                  a = n(0).reject(a, {
                    element: e,
                    root: t,
                  });
                })(e, u);
              });
          },
          loadSandbox: l,
          insertScriptIntoIframe: d,
          isSrcdocSupportedInBrowser: function () {
            return !!("srcdoc" in window.document.createElement("iframe"));
          },
        }),
        a = [];
      function s(e, t) {
        var n = r.createElement("script"),
          i = !("isAsync" in t) || t.isAsync;
        return (n.async = i), (n.src = e), c(n, t.attributes), n;
      }
      function u(e) {
        return (
          void 0 === e && (e = window.document),
          e.getElementsByTagName("head")[0]
        );
      }
      function l() {
        return n(7).promise(function (e, t) {
          var n = r.createElement("iframe");
          c(n, {
            sandbox: "allow-scripts allow-same-origin",
            width: 0,
            height: 0,
            frameborder: 0,
          }),
            (n.onload = function (t) {
              return e(t.target);
            }),
            (n.onerror = t),
            r.getElementsByTagName("body")[0].appendChild(n);
        });
      }
      function c(e, t) {
        n(0).each(t, function (t, n) {
          return e.setAttribute(n, t);
        });
      }
      function d(e, t, i, r) {
        void 0 === i && (i = {}),
          void 0 === r &&
            (r = {
              onScriptLoad: n(0).noop,
            });
        var a = u(e.contentWindow.document),
          l = s(t, {
            isAsync: !1,
            attributes: i,
          });
        return (
          o.onScriptLoad(
            l,
            function () {
              return r.onScriptLoad(l, e.contentWindow);
            },
            r.onError
          ),
          a.appendChild(l),
          e
        );
      }
    },
    651: function (e, t) {
      e.exports = {
        getByteFromBuffer: function (e, t) {
          return t >= 0 && t < e.byteLength
            ? new Uint8Array(e, t, 1)[0]
            : void 0;
        },
        getBlobFromDataURI: function (e) {
          var t,
            n,
            i,
            r,
            o = [],
            a = e.split(",");
          t = a[0].indexOf("base64") > -1 ? window.atob(a[1]) : decodeURI(a[1]);
          var s = /^.*?:(.*?);/.exec(e);
          for (n = s ? s[1] : void 0, i = 0, r = t.length; i < r; i++)
            o[i] = t.charCodeAt(i);
          return new window.Blob([new Uint8Array(o)], {
            type: n,
          });
        },
      };
    },
    660: function (e, t, n) {
      e.exports = {
        bytesToMB: function (e, t) {
          var i = void 0 === t ? {} : t,
            r = i.base,
            o = void 0 === r ? (n(60).windows ? 1024 : 1e3) : r,
            a = i.digits,
            s = void 0 === a ? 1 : a,
            u = i.unit,
            l = void 0 === u ? "MB" : u;
          return (e / Math.pow(o, 2)).toFixed(s) + l;
        },
      };
    },
    662: function (e) {
      e.exports = JSON.parse(
        '[{"id":"Pacific/Midway","name":"International Date Line West","utc_offset":-39600},{"id":"Pacific/Midway","name":"Midway Island","utc_offset":-39600},{"id":"Pacific/Pago_Pago","name":"Samoa","utc_offset":-39600},{"id":"Pacific/Honolulu","name":"Hawaii","utc_offset":-36000},{"id":"America/Juneau","name":"Alaska","utc_offset":-32400},{"id":"America/Los_Angeles","name":"Pacific Time (US & Canada)","utc_offset":-28800},{"id":"America/Tijuana","name":"Tijuana","utc_offset":-28800},{"id":"America/Phoenix","name":"Arizona","utc_offset":-25200},{"id":"America/Chihuahua","name":"Chihuahua","utc_offset":-25200},{"id":"America/Mazatlan","name":"Mazatlan","utc_offset":-25200},{"id":"America/Denver","name":"Mountain Time (US & Canada)","utc_offset":-25200},{"id":"America/Guatemala","name":"Central America","utc_offset":-21600},{"id":"America/Chicago","name":"Central Time (US & Canada)","utc_offset":-21600},{"id":"America/Mexico_City","name":"Guadalajara","utc_offset":-21600},{"id":"America/Mexico_City","name":"Mexico City","utc_offset":-21600},{"id":"America/Monterrey","name":"Monterrey","utc_offset":-21600},{"id":"America/Regina","name":"Saskatchewan","utc_offset":-21600},{"id":"America/Bogota","name":"Bogota","utc_offset":-18000},{"id":"America/New_York","name":"Eastern Time (US & Canada)","utc_offset":-18000},{"id":"America/Indiana/Indianapolis","name":"Indiana (East)","utc_offset":-18000},{"id":"America/Lima","name":"Lima","utc_offset":-18000},{"id":"America/Lima","name":"Quito","utc_offset":-18000},{"id":"America/Caracas","name":"Caracas","utc_offset":-16200},{"id":"America/Halifax","name":"Atlantic Time (Canada)","utc_offset":-14400},{"id":"America/La_Paz","name":"La Paz","utc_offset":-14400},{"id":"America/Santiago","name":"Santiago","utc_offset":-14400},{"id":"America/St_Johns","name":"Newfoundland","utc_offset":-12600},{"id":"America/Sao_Paulo","name":"Brasilia","utc_offset":-10800},{"id":"America/Argentina/Buenos_Aires","name":"Buenos Aires","utc_offset":-10800},{"id":"America/Argentina/San_Juan","name":"Georgetown","utc_offset":-10800},{"id":"America/Godthab","name":"Greenland","utc_offset":-10800},{"id":"Atlantic/South_Georgia","name":"Mid-Atlantic","utc_offset":-7200},{"id":"Atlantic/Azores","name":"Azores","utc_offset":-3600},{"id":"Atlantic/Cape_Verde","name":"Cape Verde Is.","utc_offset":-3600},{"id":"Africa/Casablanca","name":"Casablanca","utc_offset":0},{"id":"Europe/Dublin","name":"Dublin","utc_offset":0},{"id":"Europe/Dublin","name":"Edinburgh","utc_offset":0},{"id":"Europe/Lisbon","name":"Lisbon","utc_offset":0},{"id":"Europe/London","name":"London","utc_offset":0},{"id":"Africa/Monrovia","name":"Monrovia","utc_offset":0},{"id":"Etc/UTC","name":"UTC","utc_offset":0},{"id":"Europe/Amsterdam","name":"Amsterdam","utc_offset":3600},{"id":"Europe/Belgrade","name":"Belgrade","utc_offset":3600},{"id":"Europe/Berlin","name":"Berlin","utc_offset":3600},{"id":"Europe/Berlin","name":"Bern","utc_offset":3600},{"id":"Europe/Bratislava","name":"Bratislava","utc_offset":3600},{"id":"Europe/Brussels","name":"Brussels","utc_offset":3600},{"id":"Europe/Budapest","name":"Budapest","utc_offset":3600},{"id":"Europe/Copenhagen","name":"Copenhagen","utc_offset":3600},{"id":"Europe/Ljubljana","name":"Ljubljana","utc_offset":3600},{"id":"Europe/Madrid","name":"Madrid","utc_offset":3600},{"id":"Europe/Paris","name":"Paris","utc_offset":3600},{"id":"Europe/Prague","name":"Prague","utc_offset":3600},{"id":"Europe/Rome","name":"Rome","utc_offset":3600},{"id":"Europe/Sarajevo","name":"Sarajevo","utc_offset":3600},{"id":"Europe/Skopje","name":"Skopje","utc_offset":3600},{"id":"Europe/Stockholm","name":"Stockholm","utc_offset":3600},{"id":"Europe/Vienna","name":"Vienna","utc_offset":3600},{"id":"Europe/Warsaw","name":"Warsaw","utc_offset":3600},{"id":"Africa/Algiers","name":"West Central Africa","utc_offset":3600},{"id":"Europe/Zagreb","name":"Zagreb","utc_offset":3600},{"id":"Europe/Athens","name":"Athens","utc_offset":7200},{"id":"Europe/Bucharest","name":"Bucharest","utc_offset":7200},{"id":"Africa/Cairo","name":"Cairo","utc_offset":7200},{"id":"Africa/Harare","name":"Harare","utc_offset":7200},{"id":"Europe/Helsinki","name":"Helsinki","utc_offset":7200},{"id":"Europe/Istanbul","name":"Istanbul","utc_offset":7200},{"id":"Asia/Jerusalem","name":"Jerusalem","utc_offset":7200},{"id":"Europe/Kiev","name":"Kyev","utc_offset":7200},{"id":"Europe/Minsk","name":"Minsk","utc_offset":7200},{"id":"Africa/Johannesburg","name":"Pretoria","utc_offset":7200},{"id":"Europe/Riga","name":"Riga","utc_offset":7200},{"id":"Europe/Sofia","name":"Sofia","utc_offset":7200},{"id":"Europe/Tallinn","name":"Tallinn","utc_offset":7200},{"id":"Europe/Vilnius","name":"Vilnius","utc_offset":7200},{"id":"Asia/Baghdad","name":"Baghdad","utc_offset":10800},{"id":"Asia/Kuwait","name":"Kuwait","utc_offset":10800},{"id":"Europe/Moscow","name":"Moscow","utc_offset":10800},{"id":"Africa/Nairobi","name":"Nairobi","utc_offset":10800},{"id":"Asia/Riyadh","name":"Riyadh","utc_offset":10800},{"id":"Europe/Moscow","name":"St. Petersburg","utc_offset":10800},{"id":"Europe/Moscow","name":"Volgograd","utc_offset":10800},{"id":"Asia/Tehran","name":"Tehran","utc_offset":12600},{"id":"Asia/Muscat","name":"Abu Dhabi","utc_offset":14400},{"id":"Asia/Baku","name":"Baku","utc_offset":14400},{"id":"Asia/Muscat","name":"Muscat","utc_offset":14400},{"id":"Asia/Tbilisi","name":"Tbilisi","utc_offset":14400},{"id":"Asia/Yerevan","name":"Yerevan","utc_offset":14400},{"id":"Asia/Kabul","name":"Kabul","utc_offset":16200},{"id":"Asia/Yekaterinburg","name":"Ekaterinburg","utc_offset":18000},{"id":"Asia/Karachi","name":"Islamabad","utc_offset":18000},{"id":"Asia/Karachi","name":"Karachi","utc_offset":18000},{"id":"Asia/Tashkent","name":"Tashkent","utc_offset":18000},{"id":"Asia/Kolkata","name":"Chennai","utc_offset":19800},{"id":"Asia/Kolkata","name":"Kolkata","utc_offset":19800},{"id":"Asia/Kolkata","name":"Mumbai","utc_offset":19800},{"id":"Asia/Kolkata","name":"New Delhi","utc_offset":19800},{"id":"Asia/Colombo","name":"Sri Jayawardenepura","utc_offset":19800},{"id":"Asia/Katmandu","name":"Kathmandu","utc_offset":20700},{"id":"Asia/Almaty","name":"Almaty","utc_offset":21600},{"id":"Asia/Dhaka","name":"Astana","utc_offset":21600},{"id":"Asia/Dhaka","name":"Dhaka","utc_offset":21600},{"id":"Asia/Novosibirsk","name":"Novosibirsk","utc_offset":21600},{"id":"Asia/Rangoon","name":"Rangoon","utc_offset":23400},{"id":"Asia/Bangkok","name":"Bangkok","utc_offset":25200},{"id":"Asia/Bangkok","name":"Hanoi","utc_offset":25200},{"id":"Asia/Jakarta","name":"Jakarta","utc_offset":25200},{"id":"Asia/Krasnoyarsk","name":"Krasnoyarsk","utc_offset":25200},{"id":"Asia/Shanghai","name":"Beijing","utc_offset":28800},{"id":"Asia/Chongqing","name":"Chongqing","utc_offset":28800},{"id":"Asia/Hong_Kong","name":"Hong Kong","utc_offset":28800},{"id":"Asia/Irkutsk","name":"Irkutsk","utc_offset":28800},{"id":"Asia/Kuala_Lumpur","name":"Kuala Lumpur","utc_offset":28800},{"id":"Australia/Perth","name":"Perth","utc_offset":28800},{"id":"Asia/Singapore","name":"Singapore","utc_offset":28800},{"id":"Asia/Taipei","name":"Taipei","utc_offset":28800},{"id":"Asia/Ulaanbaatar","name":"Ulaan Bataar","utc_offset":28800},{"id":"Asia/Urumqi","name":"Urumqi","utc_offset":28800},{"id":"Asia/Tokyo","name":"Osaka","utc_offset":32400},{"id":"Asia/Tokyo","name":"Sapporo","utc_offset":32400},{"id":"Asia/Seoul","name":"Seoul","utc_offset":32400},{"id":"Asia/Tokyo","name":"Tokyo","utc_offset":32400},{"id":"Asia/Yakutsk","name":"Yakutsk","utc_offset":32400},{"id":"Australia/Adelaide","name":"Adelaide","utc_offset":34200},{"id":"Australia/Darwin","name":"Darwin","utc_offset":34200},{"id":"Australia/Brisbane","name":"Brisbane","utc_offset":36000},{"id":"Australia/Melbourne","name":"Canberra","utc_offset":36000},{"id":"Pacific/Guam","name":"Guam","utc_offset":36000},{"id":"Australia/Hobart","name":"Hobart","utc_offset":36000},{"id":"Australia/Melbourne","name":"Melbourne","utc_offset":36000},{"id":"Pacific/Port_Moresby","name":"Port Moresby","utc_offset":36000},{"id":"Australia/Sydney","name":"Sydney","utc_offset":36000},{"id":"Asia/Vladivostok","name":"Vladivostok","utc_offset":36000},{"id":"Asia/Magadan","name":"Magadan","utc_offset":39600},{"id":"Pacific/Noumea","name":"New Caledonia","utc_offset":39600},{"id":"Asia/Magadan","name":"Solomon Is.","utc_offset":39600},{"id":"Pacific/Auckland","name":"Auckland","utc_offset":43200},{"id":"Pacific/Fiji","name":"Fiji","utc_offset":43200},{"id":"Asia/Kamchatka","name":"Kamchatka","utc_offset":43200},{"id":"Pacific/Majuro","name":"Marshall Is.","utc_offset":43200},{"id":"Pacific/Auckland","name":"Wellington","utc_offset":43200},{"id":"Pacific/Tongatapu","name":"Nuku\'alofa","utc_offset":46800}]'
      );
    },
    666: function (e, t, n) {
      var i = n(51).countryCodes(),
        r = (e.exports = {
          partition: function (e) {
            var t = [],
              o = [],
              a = [];
            return (
              !(function (e) {
                return 0 === n(0).difference(i, e).length;
              })(e)
                ? n(51)
                    .regions()
                    .forEach(function (i) {
                      var r = (function (e) {
                          return n(0).pluck(
                            n(51).countries([e.value]),
                            "value"
                          );
                        })(i),
                        s = n(0).intersection(r, e),
                        u = n(0).difference(r, e);
                      s.length > 0.8 * r.length
                        ? ((t = t.concat(i)), (a = a.concat(u)))
                        : (o = o.concat(s));
                    })
                : t.push(r.worldwide()),
              {
                regions: t,
                countries: o.map(n(51).country),
                exceptions: a.map(n(51).country),
              }
            );
          },
          worldwide: function () {
            return {
              title: n(1).Lingua.t("Worldwide"),
              value: "worldwide",
            };
          },
        });
    },
    668: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = (function () {
        function e() {
          this.listeners = [];
        }
        return (
          (e.prototype.subscribe = function (e) {
            this.listeners.push(e);
          }),
          (e.prototype.unsubscribe = function (e) {
            var t = this.listeners,
              n = t.indexOf(e);
            return -1 !== n && (t.splice(n, 1), !0);
          }),
          (e.prototype.dispatch = function (e) {
            var t = [];
            if (
              (this.listeners.forEach(function (n) {
                try {
                  n(e);
                } catch (e) {
                  t.push(e);
                }
              }),
              t.length)
            )
              throw t;
          }),
          e
        );
      })();
      t.EventDispatcher = i;
    },
    669: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = n(668),
        r = (function () {
          function e() {
            (this._onDirty = new i.EventDispatcher()), (this.isDirty = !1);
          }
          return (
            (e.prototype.onDirty = function (e) {
              this._onDirty.subscribe(e);
            }),
            (e.prototype.setDirty = function (e) {
              (this.isDirty = e), e && this._onDirty.dispatch(void 0);
            }),
            e
          );
        })();
      t.CanBeDirty = r;
    },
    67: function (e, t) {
      e.exports = {
        all: "all",
        none: "none",
        one: "one",
      };
    },
    671: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.isInserted = function (e) {
          return document.body.contains(e);
        }),
        (t.toggleEventListeners = function (e, t, n, i) {
          t.split(" ").forEach(function (t) {
            i ? e.addEventListener(t, n, !1) : e.removeEventListener(t, n, !1);
          });
        });
    },
    672: function (e, t, n) {
      "use strict";
      function i(e, t) {
        var n = e.mediaDuration / e.duration;
        return (Math.min(n, e.currentTime / e.duration) * t.width) / t.scale;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getPosition = function (e, t) {
          return Math.max(e.paused ? 0 : 1, Math.ceil(i(e, t)));
        }),
        (t.getPixelOffset = i);
    },
    676: function (e, t, n) {
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      e.exports = function (e, t) {
        return n(0).assign(
          {},
          {
            adVisual: e,
            adTracker: t,
            getAdVisualModel: function () {
              return this.adVisual;
            },
            getPlacement: function () {
              return this.getAdVisualModel().getPlacement();
            },
            processClickthrough: function (e) {
              void 0 === e && (e = {}),
                this.adTracker.track(
                  n(45).AudioAdVisualTrackingEvents.CLICKTHROUGH,
                  e
                );
            },
            processWhyAdsClick: function (e) {
              void 0 === e && (e = {}),
                this.adTracker.track(
                  n(45).AudioAdVisualTrackingEvents.WHY_ADS_CLICK,
                  e
                );
            },
            processImpression: function (e) {
              void 0 === e && (e = {}),
                this.adTracker.track(
                  n(45).AudioAdVisualTrackingEvents.IMPRESSION,
                  e
                );
            },
            processError: function (e) {
              void 0 === e && (e = {}),
                this.adTracker.track(
                  n(45).AudioAdVisualTrackingEvents.ERROR,
                  i({}, e, {
                    errorCode: n(230)
                      .VAST_ERROR_CODE_GENERAL_COMPANION_ADS_ERROR,
                  })
                );
            },
          }
        );
      };
    },
    677: function (e, t, n) {
      var i = (function () {
        "use strict";
        function e(e, t) {
          (this.audioAd = e),
            (this.audioAdVisual = t),
            (this.firedEvents = new Set());
        }
        return (
          (e.prototype.track = function (e, t) {
            if (
              (void 0 === t && (t = {}),
              this.audioAdVisual && !this.firedEvents.has(e))
            ) {
              var i = this.audioAd.getSound(),
                r = this.audioAd.getUrn(),
                o = this.audioAd.getUpcomingSoundUrn(),
                a = this.audioAdVisual.getUrn(),
                s = this.audioAdVisual.getTracking(),
                u =
                  this.audioAdVisual.getFormat() ===
                  n(64).AudioAdVisualFormats.html,
                l =
                  this.audioAdVisual.getPlacement() ===
                  n(64).AudioAdVisualPlacements.leaveBehind,
                c = u ? "html" : this.audioAdVisual.getContent(),
                d = 0;
              switch (
                (i && i.player && (d = Math.floor(i.player.getPosition())), e)
              ) {
                case n(45).AudioAdVisualTrackingEvents.IMPRESSION:
                  n(118).logEvent("adImpression", {
                    trackerUrlsByAdEvent: s,
                    contentPlayheadInMs: d,
                  }),
                    n(12).trackImpression({
                      ad_urn: a,
                      external_media: c,
                      impression_name: l ? "leave_behind" : "companion_display",
                      impression_object: r,
                      context: t.context,
                      monetization_type: "audio_ad",
                      monetized_object: o,
                    });
                  break;
                case n(45).AudioAdVisualTrackingEvents.CLICKTHROUGH:
                  n(118).logEvent("adClick", {
                    trackerUrlsByAdEvent: s,
                    contentPlayheadInMs: d,
                  }),
                    n(12).trackV0Click(null, {
                      ad_urn: a,
                      external_media: c,
                      click_name: l
                        ? "clickthrough::leave_behind"
                        : "clickthrough::companion_display",
                      click_object: r,
                      click_target: u
                        ? "html"
                        : this.audioAdVisual.getLandingPage(),
                      context: t.context,
                      monetization_type: "audio_ad",
                      monetized_object: o,
                    });
                  break;
                case n(45).AudioAdVisualTrackingEvents.WHY_ADS_CLICK:
                  n(12).trackV0Click(null, {
                    click_name: "companion_display::why_ads",
                    click_object: r,
                    click_target: null,
                    external_media: null,
                    ad_urn: a,
                    context: t.context,
                    monetization_type: "audio_ad",
                    monetized_object: o,
                  });
                  break;
                case n(45).AudioAdVisualTrackingEvents.ERROR:
                  n(118).log(this.audioAd.getErrorTrackers(), {
                    errorCode:
                      t.errorCode ||
                      n(230).VAST_ERROR_CODE_GENERAL_COMPANION_ADS_ERROR,
                    contentPlayheadInMs: d,
                  });
                  break;
                default:
                  0;
              }
              this.firedEvents.add(e);
            }
          }),
          e
        );
      })();
      e.exports = i;
    },
    678: function (e, t) {
      var n = (function () {
        "use strict";
        function e() {
          this.adListenHistory = new Set();
        }
        var t = e.prototype;
        return (
          (t.has = function (e) {
            return this.adListenHistory.has(e);
          }),
          (t.add = function (e) {
            return this.adListenHistory.add(e);
          }),
          (t.clear = function () {
            return this.adListenHistory.clear();
          }),
          e
        );
      })();
      e.exports = new n();
    },
    68: function (e, t, n) {
      var i = new (n(57))("already-seen"),
        r = "." + window.location.hostname.replace(/.*\.(.+\..+)/, "$1"),
        o = new (n(201))(),
        a = (e.exports = {
          get: function (e) {
            return (
              o.length ||
                window.document.cookie.split(/\s*;\s*/).forEach(function (e) {
                  var t = e.split("="),
                    n = t[0],
                    i = t[1];
                  o.set(n, i);
                }),
              o.get(e)
            );
          },
          set: function (e) {
            var t = e.name,
              i = e.value,
              a = e.expirationInDays,
              s = e.secure,
              u = e.domainStrict;
            (window.document.cookie = [
              t + "=" + i,
              a
                ? "expires=" +
                  new Date(Date.now() + a * n(29).MS_IN_DAY).toGMTString()
                : "",
              "path=/",
              u ? "" : "domain=" + r,
              s ? "secure" : "",
            ]
              .filter(Boolean)
              .join(";")),
              o.reset();
          },
          unset: function (e) {
            a.set(
              n(0).assign({}, e, {
                value: "",
                expirationInDays: -1,
              })
            ),
              o.reset();
          },
          usageAllowed: s,
          whenAllowed: function () {
            return n(7).promise(function (e) {
              s() ? e() : n(8).once("cookies:allowed", e);
            });
          },
          enable: function () {
            u() ||
              (a.set({
                name: n(319).COOKIE_CONSENT_NAME,
                value: n(319).COOKIE_CONSENT_VALUE,
              }),
              n(8).trigger("cookies:allowed"));
          },
        });
      function s() {
        return !(!u() && !i.get("cookies-notification-15-05-2018"));
      }
      function u() {
        return !(
          !n(4).get("me").id &&
          a.get(n(319).COOKIE_CONSENT_NAME) !== n(319).COOKIE_CONSENT_VALUE
        );
      }
      n(8).on("connect:login", function () {
        a.enable();
      });
    },
    685: function (e, t, n) {
      e.exports = n(39).extend(
        {
          source: null,
          makeFilter: null,
          query: null,
          filterSession: null,
          defaults: {
            batchSize: 1e3,
          },
          setup: function () {
            var e = this;
            (this.source = this.setupSource()),
              ["add", "remove", "reset"].forEach(function (t) {
                return e.source.on(t, i, e);
              }),
              this.setToFullyPopulated();
          },
          setupSource: function () {
            0;
          },
          setQuery: function (e) {
            var t = this;
            this.filterSession && this.filterSession.abort();
            var i = this.makeFilter(e);
            if (i) {
              this.query = e;
              var r = (function (e, t, i) {
                var r = !1,
                  o = n(7).defer(),
                  a = [];
                function s(n) {
                  r && o.reject();
                  for (var u = n, l = Math.min(n + i, e.length); u < l; )
                    t(e[u]) && a.push(e[u]), ++u;
                  u < e.length - 1
                    ? setTimeout(function () {
                        return s(u);
                      }, 0)
                    : o.resolve(a);
                }
                return (
                  s(0),
                  {
                    abort: function () {
                      r = !0;
                    },
                    deferred: o,
                  }
                );
              })(this.source.models, i, this.options.batchSize);
              (this.filterSession = r),
                r.deferred
                  .done(function (e) {
                    return t.reset(e);
                  })
                  .always(function () {
                    t.filterSession === r && (t.filterSession = null);
                  });
            } else this.reset([]);
          },
        },
        {
          onCleanup: function (e) {
            var t = this;
            ["add", "remove", "reset"].forEach(function (n) {
              return e.off(n, i, t);
            });
          },
        }
      );
      function i() {
        this.setQuery(this.query);
      }
    },
    694: function (e, t, n) {
      var i = [37, 38, 39, 40, 9, 35, 36];
      e.exports = {
        makeReadOnly: function (e) {
          n(60).ios
            ? e.on("keydown", function (e) {
                if ((e.isMetaKey() && !e.shiftKey) || n(0).include(i, e.which))
                  return !0;
                e.preventDefault();
              })
            : e.attr("readOnly", "readOnly");
        },
      };
    },
    695: function (e, t, n) {
      e.exports = {
        fetchColorsFromUrl: function (e) {
          if (/^data\:/.test(e)) {
            var t = n(7).defer(),
              o = new window.Image();
            return (
              (o.onload = function () {
                t.resolve(r(o));
              }),
              (o.src = e),
              t.promise()
            );
          }
          return (function (e) {
            var t = n(7).defer();
            if (e && n(75).blob) {
              var i = new window.XMLHttpRequest();
              (i.onload = function () {
                200 !== this.status ? t.reject() : t.resolve(this.response);
              }),
                (i.onerror = t.reject),
                i.open("GET", e, !0),
                (i.responseType = "blob"),
                i.send();
            } else t.reject();
            return t.promise();
          })(e).then(i);
        },
      };
      function i(e) {
        var t = window.URL.createObjectURL(e),
          i = n(7).defer(),
          o = new window.Image();
        return (
          (o.onload = function () {
            i.resolve(r(o)), window.URL.revokeObjectURL(t);
          }),
          (o.src = t),
          i.promise()
        );
      }
      function r(e) {
        try {
          return new (n(1780))().getPalette(e, 4);
        } catch (e) {
          return [
            [255, 51, 0],
            [255, 85, 0],
            [0, 0, 0],
            [102, 102, 102],
          ];
        }
      }
    },
    7: function (e, t, n) {
      var i = n(15).Deferred().resolve(),
        r = n(15).Deferred().reject(),
        o = (e.exports = {
          defer: function () {
            return n(15).Deferred();
          },
          promise: function (e) {
            var t = o.defer(),
              n = t.promise();
            return e.call(n, t.resolve, t.reject), n;
          },
          deferFrom: function (e) {
            var t = o.defer();
            return e.then(t.resolve, t.reject), t;
          },
          settled: function (e) {
            if (e && e.length) {
              var t = n(15).Deferred(),
                r = e.length,
                o = Array(r),
                a = !1,
                s = function () {
                  a = !0;
                };
              return (
                e.forEach(function (e, n) {
                  e.fail(s).always(function () {
                    for (
                      var e = arguments.length, i = new Array(e), s = 0;
                      s < e;
                      s++
                    )
                      i[s] = arguments[s];
                    (o[n] = i),
                      0 == --r &&
                        (a ? t.reject.apply(t, o) : t.resolve.apply(t, o));
                  });
                }),
                t
              );
            }
            return i;
          },
          all: function (e) {
            return n(15).when.apply(n(15), e);
          },
          resolve: function (e) {
            return void 0 === e ? i : n(15).Deferred().resolve(e);
          },
          reject: function (e) {
            return void 0 === e ? r : n(15).Deferred().reject(e);
          },
          value: function (e) {
            return i.then(function () {
              return e;
            });
          },
          promisify: function (e) {
            return function () {
              for (
                var t = n(15).Deferred(),
                  i = arguments.length,
                  r = new Array(i),
                  o = 0;
                o < i;
                o++
              )
                r[o] = arguments[o];
              return (
                r.push(function (e, n) {
                  e ? t.reject(e) : t.resolve(n);
                }),
                e.apply(void 0, r),
                t.promise()
              );
            };
          },
          call: function (e) {
            var t = n(15).Deferred();
            try {
              for (
                var i = arguments.length,
                  r = new Array(i > 1 ? i - 1 : 0),
                  o = 1;
                o < i;
                o++
              )
                r[o - 1] = arguments[o];
              t.resolve(e.apply(void 0, r));
            } catch (e) {
              t.reject(e);
            }
            return t.promise();
          },
          mapEither: function (e, t) {
            return t.then(e, e);
          },
          sequential: function (e) {
            return e.reduce(function (e, t) {
              return e.then(t, function () {
                return t().then(o.reject);
              });
            }, i);
          },
          delay: function (e) {
            var t = o.defer();
            return (
              window.setTimeout(function () {
                t.resolve();
              }, e),
              t
            );
          },
          poll: function (e, t, n) {
            return (function i(r) {
              return e()
                ? o.resolve()
                : r >= n
                ? o.reject()
                : o.delay(t).then(function () {
                    return i(r + 1);
                  });
            })(0);
          },
          anyTruthy: function (e) {
            return a(!0, e);
          },
          allTruthy: function (e) {
            return a(!1, e);
          },
        });
      function a(e, t) {
        void 0 === t && (t = []);
        var n = o.defer();
        return (
          t.forEach(function (t) {
            t.then(function (t) {
              !!t === e && n.resolve(e);
            });
          }),
          o.settled(t).then(
            function () {
              n.resolve(!e);
            },
            function () {
              n.reject();
            }
          ),
          n.promise()
        );
      }
    },
    700: function (e, t, n) {
      e.exports = {
        getContextText: function (e, t, i) {
          var r,
            o = t && n(4).get("me").id === t.id,
            a = null != (r = null == t ? void 0 : t.get("username")) ? r : null;
          switch (e.type) {
            case "conversation":
              return n(1).Lingua.t("From a conversation with [[username]]", {
                username: a,
              });
            case "stream":
              return n(1).Lingua.t("From your stream");
            case "search":
            case "search:albums":
            case "search:high_tier":
            case "search:playlists":
            case "search:top_results":
            case "search:tracks":
              return n(1).Lingua.t("From search results");
            case "tags-sound":
            case "tags-playlist":
              return n(1).Lingua.t("From [[tag]]", {
                tag: e.resourceId,
              });
            case "user-albums":
              return o
                ? n(1).Lingua.t("From your albums")
                : n(1).Lingua.t("From [[username]]’s albums", {
                    username: a,
                  });
            case "user-profile":
              return o
                ? n(1).Lingua.t("From your profile")
                : n(1).Lingua.t("From [[username]]’s profile", {
                    username: a,
                  });
            case "user-playlists":
              return o
                ? n(1).Lingua.t("From your playlists")
                : n(1).Lingua.t("From [[username]]’s playlists", {
                    username: a,
                  });
            case "user-likes":
              return o
                ? n(1).Lingua.t("From your likes")
                : n(1).Lingua.t("From [[username]]’s likes", {
                    username: a,
                  });
            case "user-track_likes":
              return o
                ? n(1).Lingua.t("From your liked tracks")
                : n(1).Lingua.t("From [[username]]’s liked tracks", {
                    username: a,
                  });
            case "user-tracks":
            case "user-sounds":
              return o
                ? n(1).Lingua.t("From your tracks")
                : n(1).Lingua.t("From [[username]]’s tracks", {
                    username: a,
                  });
            case "user-reposts":
              return o
                ? n(1).Lingua.t("From your reposts")
                : n(1).Lingua.t("From [[username]]’s reposts", {
                    username: a,
                  });
            case "user-liked-albums":
              return n(1).Lingua.t("From your liked albums");
            case "charts":
              var s = n(135).taglines(e.chartKind, e.genre);
              return n(1).Lingua.t("From [[[display]]]", {
                display: s ? s.short : void 0,
              });
            case "recommender":
              return n(1).Lingua.t("From related tracks for [[title]]", {
                title: t.get("title"),
              });
            case "home":
              return n(1).Lingua.t("From the home page");
            case "sets-for-sound":
              return n(1).Lingua.t("From playlists containing [[title]]", {
                title: t.get("title"),
              });
            case "history":
              return n(1).Lingua.t("From your history");
            case "single":
              var u = i.playlist || i.systemPlaylist;
              return u
                ? n(1).Lingua.t("From [[title]]", {
                    title: u.get("title"),
                  })
                : "";
            case "stations":
              var l = t.get(t.getTitleAttribute());
              return t.get("type") === n(119).types.ARTIST
                ? n(1).Lingua.t("From artist station [[title]]", {
                    title: l,
                  })
                : n(1).Lingua.t("From track station [[title]]", {
                    title: l,
                  });
            default:
              return "system-playlist" === e.resourceType
                ? n(1).Lingua.t("From [[title]]", {
                    title: t.get("title"),
                  })
                : "";
          }
        },
        getContextModelInfo: function (e) {
          var t = {
            resource_id: e.resourceId,
          };
          switch (e.resourceType) {
            case "user":
              return [
                new (n(32))(t),
                {
                  requiredAttributes: ["username"],
                },
              ];
            case "sound":
              return [
                new (n(17))(t),
                {
                  requiredAttributes: ["title"],
                },
              ];
            case "playlist":
              return [
                new (n(48))(t),
                {
                  requiredAttributes: ["title"],
                },
              ];
            case "station":
              return [
                new (n(119))({
                  id: e.resourceId,
                }),
                {
                  requiredAttributes: ["title"],
                },
              ];
            case "system-playlist":
              return [
                new (n(90))({
                  id: e.resourceId,
                }),
                {
                  requiredAttributes: ["title"],
                },
              ];
            default:
              return null;
          }
        },
      };
    },
    706: function (e, t) {
      e.exports = {
        ERROR: "banana-bus-error",
        OPEN: "banana-bus-open",
        DATA: "banana-bus-data",
        ACTION: "banana-bus-action",
        DISPOSE: "banana-bus-dispose",
        PUBLISH: "banana-bus-publish",
        PUBLISH_EVENT: "banana-bus-publish-event",
      };
    },
    71: function (e, t) {
      e.exports = {
        precise: function (e, t) {
          return (t = Math.pow(10, t || 0)), Math.round(e * t) / t;
        },
        clamp: function (e, t, n) {
          return Math.min(n, Math.max(t, e));
        },
        roundToNearest: function (e, t) {
          return Math.round(e / t) * t;
        },
        quickHash: function (e) {
          return String(e)
            .split("")
            .reduce(function (e, t, n) {
              return e + 31 * t.charCodeAt(0) * n;
            }, 7);
        },
        mod: function (e, t) {
          return ((e % t) + t) % t;
        },
      };
    },
    714: function (e, t) {
      function n(e) {
        return Array.prototype.slice.call(e);
      }
      e.exports = {
        whenElementAdded: function (e, t) {
          return new window.MutationObserver(function (i) {
            i.forEach(function (i) {
              n(i.addedNodes).forEach(function (n) {
                return e.forEach(function (e) {
                  return (function (e, t) {
                    var n = [];
                    e instanceof window.HTMLElement &&
                      (e.matches(t) && n.push(e),
                      n.push.apply(n, e.querySelectorAll(t)));
                    return n;
                  })(n, e).forEach(t);
                });
              });
            });
          });
        },
        toArray: n,
      };
    },
    715: function (e, t, n) {
      (function (t) {
        var i,
          r = new (n(57))("callouts");
        r.prune(Object.keys(n(741))), n(8).on("connect:logout", r.reset, r);
        e.exports = {
          shouldDisplay: function (e) {
            return !i && !r.get(e) && o(e).shouldDisplay();
          },
          display: function (e, r, u) {
            void 0 === u && (u = {});
            var l = t.extend(!0, {}, o(e), u),
              c =
                "callout" === l.viewType
                  ? (function (e, t) {
                      var i = new (n(716))(
                        n(0).defaults(
                          {
                            $targetEl: t,
                          },
                          e.viewOptions
                        )
                      );
                      return (
                        i.once("dismissed", a).once("closed", s),
                        n(7)
                          .all([
                            n(7).delay(500),
                            n(65).whenInserted(t[0], {
                              timeout: 1e4,
                            }),
                          ])
                          .then(function () {
                            i.disposed ||
                              (window.document.body.appendChild(i.el),
                              i.render());
                          }),
                        i
                      );
                    })(l, r)
                  : "modal" === l.viewType
                  ? (function (e) {
                      var t = new (n(46))(e.viewOptions);
                      return (
                        t.once(n(46).Events.CLOSED, function () {
                          a(), s();
                        }),
                        n(7)
                          .delay(500)
                          .then(function () {
                            t.disposed || t.open();
                          }),
                        t
                      );
                    })(l)
                  : "compact-callout" === l.viewType
                  ? (function (e, t) {
                      var i = new (n(2107))(
                        n(0).defaults(
                          {
                            $targetEl: t,
                          },
                          e.viewOptions
                        )
                      );
                      return (
                        i.once("dismissed", a).once("closed", s),
                        n(7)
                          .all([
                            n(7).delay(500),
                            n(65).whenInserted(t[0], {
                              timeout: 1e4,
                            }),
                          ])
                          .then(function () {
                            i.disposed ||
                              (window.document.body.appendChild(i.el),
                              i.render());
                          }),
                        i
                      );
                    })(l, r)
                  : null;
            return (
              (i = {
                id: e,
                config: l,
                view: c,
              }),
              c
            );
          },
        };
        function o(e) {
          return n(741)[e];
        }
        function a() {
          r.set(i.id, !0);
        }
        function s() {
          i = null;
        }
      }.call(this, n(15)));
    },
    716: function (e, t, n) {
      (function (t) {
        var i = window.document,
          r = t(i);
        e.exports = n(6).extend({
          className: "callout g-z-index-callout",
          css: n(2108),
          template: n(2110),
          defaults: {
            title: null,
            body: null,
            $targetEl: null,
            delay: 0,
            fixed: !1,
            width: 300,
          },
          element2selector: {
            bubble: ".callout__bubble",
          },
          events: {
            "click .callout__button button": s,
            "click .calloutBackground": s,
          },
          states: {
            active: "m-active",
            hidden: "m-hidden",
          },
          _hasRendered: !1,
          _renderRequested: !1,
          setup: function (e) {
            var t = e.fixed;
            (this.getTargetDimensions = n(0).memoize(this.getTargetDimensions)),
              (this.close = n(0).once(this.close)),
              (this.dismiss = n(0).once(this.dismiss)),
              (this.onDocumentKeydown = this.onDocumentKeydown.bind(this)),
              this.listenTo(n(79), "resize:debounced", o),
              t
                ? this.$el.css("position", "fixed")
                : this.listenTo(n(79), "scroll:debounced", a);
          },
          dispose: function () {
            this.stopListening(n(79)), this.trigger("closed");
          },
          hasData: function () {
            return (
              (this._renderRequested = !0),
              (this.getTargetDimensions.cache = {}),
              !!l.call(this, this.options.fixed ? 0 : -80)
            );
          },
          renderDecorate: function () {
            var e = this;
            (this._hasRendered = !0),
              r.on("keydown", this.onDocumentKeydown),
              this.toggleState("hidden", !0).toggleState("active", !0),
              (this.getTargetDimensions.cache = {}),
              this.getElement("bubble").css("width", this.options.width),
              this.positionBubble(),
              this.subviews.background.once("animationDone", function () {
                e.addTimeout(function () {
                  e.toggleState("hidden", !1);
                }, 500);
              });
          },
          teardown: function () {
            r.off("keydown", this.onDocumentKeydown);
          },
          getTargetDimensions: function () {
            var e = this.options.$targetEl[0],
              t = this.options.$targetEl.offset(),
              n = t.top,
              i = t.left,
              r = e.offsetHeight;
            return {
              x: i,
              y: n,
              w: e.offsetWidth,
              h: r,
            };
          },
          close: function () {
            var e = this;
            return (
              this.stopListening(n(79)),
              this.subviews.background
                ? (this.toggleState("hidden", !0),
                  n(7)
                    .all([
                      this.subviews.background.animateOut(),
                      n(7).delay(300),
                    ])
                    .then(function () {
                      e._dispose();
                    }))
                : (this._dispose(), n(7).resolve())
            );
          },
          dismiss: function () {
            this.trigger("dismissed"), this.close();
          },
          onDocumentKeydown: function (e) {
            e.which === n(63).ESC && this.dismiss();
          },
          positionBubble: function () {
            var e = this.getElement("bubble");
            e.length &&
              e.position({
                my: "left-50 bottom-8",
                at: "top center",
                of: this.options.$targetEl,
                offset: "0 -45px",
              });
          },
          updatePosition: function () {
            this.positionBubble(),
              this.subviews.background &&
                this.subviews.background.onCanvasResize();
          },
        });
        function o() {
          (this.getTargetDimensions.cache = {}), this.positionBubble();
        }
        function a() {
          u.call(this);
        }
        function s() {
          this.dismiss();
        }
        function u() {
          this._renderRequested &&
            (this._hasRendered
              ? !1 === l.call(this, 50) && this.dismiss()
              : l.call(this, -80) && this.render());
        }
        function l(e) {
          void 0 === e && (e = 0);
          var t = this.getTargetDimensions(),
            n = t.x,
            r = t.y,
            o = t.h;
          if (0 === n && 0 === r) return null;
          var a = i.body.scrollTop || i.documentElement.scrollTop,
            s = a + window.innerHeight;
          return r > a - e && r + o < s + e;
        }
      }.call(this, n(15)));
    },
    717: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        u = 0.5 * Math.PI,
        l = Math.PI,
        c = 1.5 * Math.PI,
        d = 2 * Math.PI,
        f = window.document,
        h = m(0, 0.5, v),
        p = m(
          0.2,
          0.8,
          ((r = 1e3),
          (o = 10),
          (a = ((i = 400) / d) * Math.asin(1)),
          (s = d / i),
          function (e) {
            return Math.pow(2, -o * e) * Math.sin((e * r - a) * s) + 1;
          })
        ),
        g = m(0.66, 1, v);
      e.exports = n(391).extend({
        className: "calloutBackground g-opacity-transition-300",
        css: n(2111),
        defaults: {
          $targetEl: null,
          delay: 0,
          fixed: !1,
        },
        states: {
          hidden: "m-hidden",
        },
        recalcOnWindowResizeX: !0,
        recalcOnWindowResizeY: !0,
        fullScreen: !0,
        _animId: null,
        _animState: null,
        setup: function () {
          this.getTargetDimensions = n(0).memoize(this.getTargetDimensions);
        },
        dispose: function () {
          this._animId && window.cancelAnimationFrame(this._animId);
        },
        renderDecorate: function () {
          var e = this;
          window.setTimeout(function () {
            e.disposed ||
              (n(391).prototype.renderDecorate.call(e),
              e.options.fixed ||
                e.listenTo(n(79), "scroll:throttled", e.requestFrame));
          }, this.options.delay);
        },
        teardown: function () {
          this.stopListening(n(79), "scroll:throttled", this.requestFrame);
        },
        onCanvasResize: function () {
          (this.getTargetDimensions.cache = {}), this.requestFrame();
        },
        getTVal: function () {
          var e = Date.now();
          return (
            (this.getTVal = function () {
              return Math.min(1, (Date.now() - e) / 1e3);
            }),
            0
          );
        },
        getTargetDimensions: function () {
          var e = (function (e) {
              var t = e[0],
                n = e.offset(),
                i = n.top,
                r = n.left,
                o = t.offsetHeight,
                a = t.offsetWidth;
              return {
                x: r,
                y: i,
                w: a,
                h: o,
              };
            })(this.options.$targetEl),
            t = e.x,
            n = e.y,
            i = e.w,
            r = e.h;
          return {
            x: t,
            y: n,
            w: i,
            h: r,
            radius: (Math.sqrt(i * i + r * r) + 10) / 2,
          };
        },
        animateOut: function () {
          return this.toggleState("hidden", !0), n(7).delay(300);
        },
        getNextAnimationState: function (e, t) {
          var n = this.getTargetDimensions(),
            i = n.x,
            r = n.y,
            o = n.w,
            a = n.h,
            s = n.radius,
            u = p(t),
            l = g(t),
            c = h(t),
            d = f.body.scrollLeft || f.documentElement.scrollLeft,
            m = f.body.scrollTop || f.documentElement.scrollTop,
            v = e ? e.scrollTop : m,
            y = e ? e.scrollLeft : d,
            _ = m - v,
            b = d - y;
          return {
            x: i,
            y: r,
            w: o,
            h: a,
            t: t,
            radius: s,
            holeSize: u,
            arcAmount: l,
            bgAlpha: c,
            scrollTop: v + _ / 8,
            scrollLeft: y + b / 8,
            scrollDeltaLeft: b,
            scrollDeltaTop: _,
            deltaT: t - (e ? e.t : 0),
          };
        },
        requestFrame: function () {
          var e = this;
          this._animId ||
            (this._animId = window.requestAnimationFrame(function () {
              (e._animId = null), e.draw();
            }));
        },
        draw: function () {
          var e = (this._animState = this.getNextAnimationState(
            this._animState,
            this.getTVal()
          ));
          !(function (e, t) {
            var n = t.x,
              i = t.y,
              r = t.w,
              o = t.h,
              a = t.radius,
              s = t.holeSize,
              u = t.arcAmount,
              l = t.bgAlpha,
              f = t.scrollTop,
              h = t.scrollLeft,
              p = e.canvas,
              g = p.width,
              m = p.height,
              v = r / 2,
              _ = o / 2;
            e.save(),
              e.clearRect(0, 0, g, m),
              e.save(),
              (e.globalAlpha = 0.5 * l),
              (e.fillStyle = "#000"),
              e.fillRect(0, 0, g, m),
              e.restore(),
              e.translate(-h, -f),
              s &&
                (e.save(),
                e.beginPath(),
                y(e, n, i, r, o, a, s),
                (e.globalCompositeOperation = "destination-out"),
                (e.globalAlpha = 1),
                e.fill(),
                e.restore());
            u &&
              s &&
              (e.save(),
              e.beginPath(),
              e.translate(n + v, i + _),
              e.moveTo(0, 0),
              e.arc(0, 0, r + o, c, d * u + c, !1),
              e.restore(),
              e.clip(),
              e.save(),
              e.beginPath(),
              y(e, n, i, r, o, a, s),
              (e.globalCompositeOperation = "source-over"),
              (e.lineWidth = 2),
              (e.strokeStyle = "#ff5500"),
              e.stroke(),
              e.restore());
            e.restore();
          })(this.context, e),
            this.queueFrame(e),
            e.t >= 1 && e.deltaT > 0 && this.trigger("animationDone");
        },
        queueFrame: function (e) {
          (!e ||
            e.t < 1 ||
            Math.abs(e.scrollDeltaTop) > 1 ||
            Math.abs(e.scrollDeltaLeft) > 1) &&
            this.requestFrame();
        },
      });
      function m(e, t, i) {
        return function (r) {
          return i((n(71).clamp(r, e, t) - e) / (t - e));
        };
      }
      function v(e) {
        return (1 - Math.cos(e * Math.PI)) / 2;
      }
      function y(e, t, n, i, r, o, a) {
        o <= 40
          ? (function (e, t, n, i) {
              e.arc(t, n, i, 0, d, !1);
            })(e, t + i / 2, n + r / 2, o * a)
          : (function (e, t, n, i, r, o) {
              var a = 25,
                s = i / 2,
                d = r / 2,
                f = -s - 18 + a,
                h = -f,
                p = -d - 15 + a,
                g = -p;
              e.save(),
                e.translate(t + s, n + d),
                e.scale(o, o),
                e.moveTo(f, p - a),
                e.arc(h, p, a, c, 0, !1),
                e.arc(h, g, a, 0, u, !1),
                e.arc(f, g, a, u, l, !1),
                e.arc(f, p, a, l, c, !1),
                e.restore();
            })(e, t, n, i, r, a);
      }
    },
    72: function (e, t, n) {
      var i,
        r =
          (((i = {})[n(27).CONSUMER_SUBSCRIPTION_MID_TIER] = "go"),
          (i[n(27).CONSUMER_SUBSCRIPTION_HIGH_TIER] = "go-plus"),
          i);
      e.exports = {
        getConsumerLink: function (e, t) {
          void 0 === e && (e = void 0), void 0 === t && (t = void 0);
          var i = [n(4).get("checkout_host"), "go"];
          return (
            t && i.push("buy", r[t]),
            {
              link: n(59).stringify({
                path: i,
                query: e
                  ? {
                      ref: e,
                    }
                  : {},
              }),
              target: "_blank",
            }
          );
        },
        getCreatorLink: function (e, t) {
          return (
            void 0 === e && (e = void 0),
            void 0 === t && (t = !1),
            {
              link: n(59).stringify({
                path: [n(4).get("checkout_host"), "pro"].concat(
                  t ? ["buy", "pro-unlimited"] : []
                ),
                query: e
                  ? {
                      ref: e,
                    }
                  : {},
              }),
              target: "_blank",
            }
          );
        },
        getStudentLink: function (e) {
          return (
            void 0 === e && (e = void 0),
            {
              link: n(59).stringify({
                path: [n(4).get("checkout_host"), "student"],
                query: e
                  ? {
                      ref: e,
                    }
                  : {},
              }),
              target: "_blank",
            }
          );
        },
        getStudentReverificationLink: function (e) {
          return (
            void 0 === e && (e = void 0),
            {
              link: n(59).stringify({
                path: [n(4).get("checkout_host"), "student", "reverify"],
                query: e
                  ? {
                      ref: e,
                    }
                  : {},
              }),
              target: "_blank",
            }
          );
        },
        getConsumerUpdatePaymentDetailsLink: function (e) {
          return (
            void 0 === e && (e = void 0),
            n(59).stringify({
              path: [n(4).get("checkout_host"), "you", "subscriptions", "go"],
              query: e
                ? {
                    ref: e,
                  }
                : {},
            })
          );
        },
        getCreatorUpdatePaymentDetailsLink: function (e) {
          return (
            void 0 === e && (e = void 0),
            n(59).stringify({
              path: [n(4).get("checkout_host"), "you", "subscriptions", "pro"],
              query: e
                ? {
                    ref: e,
                  }
                : {},
            })
          );
        },
      };
    },
    728: function (e, t, n) {
      var i = n(0).object(
        ["getSourceInfo"].map(function (e) {
          return [
            e,
            function () {
              var t;
              return (t = this.sources[0])[e].apply(t, arguments);
            },
          ];
        })
      );
      e.exports = new (n(16))({
        applyTo: function (e, t) {
          var r,
            o = t.fields,
            a = t.mixins,
            s = void 0 === a ? [] : a,
            u = t.protoProps,
            l = t.staticProps;
          e.getFilterClass = function () {
            return (
              r ||
                (r = n(152).extend.apply(
                  n(152),
                  [
                    n(374).withOptions({
                      fields: o,
                    }),
                  ].concat(s, [
                    n(0).assign(
                      {
                        model: e.prototype.model,
                        setupSources: function () {
                          return [new e(null, this.options)];
                        },
                      },
                      i,
                      u
                    ),
                    n(0).assign(
                      {
                        hashFn: e.hashFn,
                      },
                      l
                    ),
                  ])
                )),
              r
            );
          };
        },
      });
    },
    73: function (e, t, n) {
      var i = new (n(57))("promoted-persistent"),
        r = {
          addToSet: ["add_to_set_click"],
          follow: ["follow_click"],
          like: ["like_click"],
          play: ["sound_play", "SCAudioStart"],
          skip: ["sound_skip"],
          finish: ["sound_finish"],
          impression: ["impression"],
          adImpression: ["impression"],
          repost: ["repost_click"],
          share: ["share_click"],
          adClick: ["ad_click"],
          soundClickThrough: ["sound_click", "ad_click"],
          sponsorClickThrough: ["sponsor_click"],
          userClickThrough: ["profile_click", "ad_click"],
          purchaseClickThrough: ["purchase_click"],
          pause: ["SCAudioPause"],
          resume: ["SCAudioResume"],
          first_quartile: ["SCAudioFirstQuartile"],
          second_quartile: ["SCAudioSecondQuartile"],
          third_quartile: ["SCAudioThirdQuartile"],
        },
        o = {
          search: "promotedSearch",
          suggestedUsers: "promotedUsers",
          uploadTakeover: "promotedUploadTakeover",
          uploadText: "promotedUploadText",
        },
        a = {
          dashboxListen: "listen",
          dashboxNotifications: "notifications",
          dashboxStream: "stream",
          dashboxTags: "tags",
          dashboxUserProfile: "profile",
        },
        s = [],
        u = (e.exports = {
          getAdUrl: function (e, t) {
            var i = n(0).assign(u._getPromotedQueryParams(), t),
              r = o[e];
            return n(35).getUrlForEndpoint(r, {}, i);
          },
          lineId: "",
          creativeId: "",
          disableFrequencyCapping: !1,
          getAudioAdsUrl: function (e) {
            var t = u._getPromotedQueryParams();
            if (
              (e && e.trackId && (t.track_id = e.trackId),
              n(23).isOneTrustEnabled()
                ? n(23).isCategoryEnabled(n(23).CookieCategory.Targeting)
                : n(4).get("privacy_settings").isOptedInToTargetedAdvertising())
            ) {
              var i = n(1012).userId();
              void 0 !== i && (t.rubicon_user_id = i);
              var r = n(589).getUserData();
              r && ((t.dax_segment_ids = r.segments), (t.dax_user_id = r.uid));
              var o = n(588).getAdswizzId();
              o && (t.aw_listener_id = o);
            }
            return (
              (n(4).get("features").has("force_ad_testing") ||
                n(4).get("features").has("internal_qa")) &&
                ((this.lineId = n(26).getQueryParam("lineid") || this.lineId),
                (this.creativeId =
                  n(26).getQueryParam("creativeid") || this.creativeId),
                (this.disableFrequencyCapping =
                  "true" === n(26).getQueryParam("disable_frequency_capping") ||
                  this.disableFrequencyCapping),
                this.lineId && (t.lineid = this.lineId),
                this.creativeId && (t.creativeid = this.creativeId),
                this.disableFrequencyCapping &&
                  (t.requires_frequency_cap_duration = !0)),
              n(35).getUrlForEndpoint("audioAds", {}, t)
            );
          },
          getDashboxUrl: function (e, t) {
            var i = u._getPromotedQueryParams();
            i.locale = t;
            var r = {
              path: "/dashbox/" + a[e],
              query: i,
            };
            return n(26).stringify(r, n(4).get("api_v2_host"));
          },
          getAdUrlQuery: function () {
            var e = u._getPromotedQueryParams();
            return (
              (e.user_urn = n(4).get("me").getUrn()),
              (e.promoted_playlist = !0),
              {
                query: e,
              }
            );
          },
          extractPromotedAttrs: function (e) {
            if (e && e.isPromoted && e.isPromoted())
              return e.pick(
                "ad_urn",
                "campaign",
                "promoted_by",
                "promoted_by_urn",
                "tracking"
              );
          },
          parseResponse: function (e) {
            var t = n(0).first(e.promoted);
            return l(t) ? (c(t), t) : {};
          },
          parseDashboxResponse: function (e) {
            return l(e) && c(e), e && e.data ? e.data.dashbox : e;
          },
          parseStreamResponse: function (e) {
            return (
              e &&
                e.collection &&
                e.collection
                  .filter(function (e) {
                    return e.promoted;
                  })
                  .forEach(function (e) {
                    l(e.promoted) && c(e.promoted),
                      e.promoted &&
                        (e.promoted.ad_urn && (e.ad_urn = e.promoted.ad_urn),
                        e.promoted.tracking &&
                          (e.tracking = e.promoted.tracking),
                        (e.campaign = "promoted"),
                        delete e.promoted),
                      e.user &&
                        ((e.promoted_by = e.user),
                        (e.promoted_by_urn = n(24).generate(
                          e.promoted_by.kind,
                          e.promoted_by.id
                        )),
                        delete e.user);
                  }),
              e
            );
          },
          trackEvent: function (e, t) {
            var n = "impression" === e ? u._sendRequestOnce : u._sendRequest;
            u._getTrackingUrls(e, t).forEach(n);
          },
          _getTrackingUrls: function (e, t) {
            var i = r[e] || [],
              o = (t && t.tracking) || {},
              a = n(0).flatten(
                i.map(function (e) {
                  return o[e] || [];
                })
              );
            return n(0).isArray(a) ? a : [a];
          },
          _getPromotedQueryParams: function () {
            var e = n(0).reduce(
                n(4).get("experiments").getVariantIds(),
                function (e, t) {
                  return e.concat(t);
                },
                []
              ),
              t = {
                sc_a_id: i.get("sc_a_id"),
                device_locale:
                  n(13).LinguaLib.getLocale() &&
                  n(13).LinguaLib.getLocale().replace(/_/g, "-"),
                variant_ids: e.join(","),
              },
              r = n(387).getConsentString(),
              o = n(387).getTcfVersion();
            return r && o && ((t.consent_string = r), (t.tcf_version = o)), t;
          },
          _sendRequest: function (e) {
            new window.Image().src = e;
          },
          _sendRequestOnce: function (e) {
            -1 === s.indexOf(e) && (u._sendRequest(e), s.push(e));
          },
        });
      function l(e) {
        return e && e.sc_a_id;
      }
      function c(e) {
        i.set("sc_a_id", e.sc_a_id);
      }
    },
    733: function (e, t, n) {
      var i = new (n(57))("already-seen"),
        r = (e.exports = {
          getUpsellableTrackCount: function () {
            return 4;
          },
          couldHaveUserUpsell: function (e) {
            return (
              (t = e === n(4).get("me").id),
              (i = n(18).isLoggedIn()),
              t &&
                i &&
                !r.alreadySeenUserUpsell() &&
                !n(4).get("me").isPremium()
            );
            var t, i;
          },
          isValidSound: function (e) {
            var t = n(4).get("me");
            if (
              "sound" === e.resource_type &&
              !e.hasVisuals() &&
              !t.isPremium() &&
              t.get("track_count") >= 4 &&
              t.owns(e)
            ) {
              var i = new Date(e.get("created_at")),
                r = Date.now(),
                o = new Date(r - n(29).MS_IN_HOUR),
                a = new Date(r - n(29).MS_IN_WEEK);
              return i <= o && i >= a;
            }
            return !1;
          },
          isValidIndex: function (e, t) {
            return e > -1 && t.length >= 4;
          },
          isValidUserSounds: function (e) {
            var t = e.length && e.first().get("created_at"),
              i = new Date(t);
            return (
              !n(4).get("me").isPremium() &&
              e.length > 4 &&
              i >= new Date(Date.now() - n(29).MS_IN_WEEK) &&
              i <= new Date(Date.now() - n(29).MS_IN_DAY)
            );
          },
          alreadySeenListenUpsell: function () {
            return 1 === i.get("listen-upsell");
          },
          alreadySeenUserUpsell: function () {
            return 1 === i.get("stream-upsell")
              ? (i.unset("stream-upsell"), this.dismissUserUpsell(), !0)
              : 1 === i.get("user-upsell");
          },
          dismissListenUpsell: function () {
            i.set("listen-upsell", 1);
          },
          dismissUserUpsell: function () {
            i.set("user-upsell", 1);
          },
          startPlayTracking: function () {
            n(18).isLoggedIn() || n(8).on("audio:play", o, this);
          },
          stopPlayTracking: function () {
            n(8).off("audio:play", o, this);
          },
          showSignupTeaser: function (e) {
            new (n(1952))({
              width: 625,
              soundUrn: e,
            }).open(),
              i.set("signup-teaser-modal", 1);
          },
        });
      function o(e) {
        var t = n(422).numSessionPlays(),
          r = 1 === i.get("signup-teaser-modal"),
          o = e.userInitiated;
        !n(18).isLoggedIn() &&
          !r &&
          t > 2 &&
          o &&
          this.showSignupTeaser(e.sound.getUrn());
      }
    },
    734: function (e, t, n) {
      e.exports = n(279).extend({
        includeFooter: ".l-sidebar-right",
        css: n(768),
        template: n(1424),
      });
    },
    74: function (e, t, n) {
      var i = (e.exports = n(140).extend({
        nullable: !0,
        validate: function (e, t) {
          var i = n(7).defer();
          return (
            null == t
              ? this.result(i, this.nullable)
              : this.check(t, this.result.bind(this, i)),
            i
          );
        },
      }));
      n(332).applyTo(i.prototype);
    },
    748: function (e, t, n) {
      var i = /^\s*([^@]+)@(\S+\.[a-z]{2,})\s*$/i;
      e.exports = n(74).extend({
        message: n(1).Lingua.t("This email address is invalid."),
        check: function (e, t) {
          t(!e || i.test(e));
        },
      });
    },
    75: function (e, t, n) {
      e.exports = n(0).reduce(
        {
          sessionStorage: function () {
            try {
              return (
                void 0 !== window.sessionStorage && i(window.sessionStorage)
              );
            } catch (e) {
              return !1;
            }
          },
          localStorage: function () {
            try {
              return void 0 !== window.localStorage && i(window.localStorage);
            } catch (e) {
              return !1;
            }
          },
          dragDrop: function () {
            var e = window.document.createElement("div");
            return "draggable" in e || ("ondragstart" in e && "ondrop" in e);
          },
          webSocket: function () {
            return window.WebSocket;
          },
          WebWorker: function () {
            return window.Worker;
          },
          svg: function () {
            return window.document.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#Image",
              "1.1"
            );
          },
          touch: function () {
            try {
              return window.hasOwnProperty("ontouchstart");
            } catch (e) {
              return !1;
            }
          },
          typedArrays: function () {
            return window.hasOwnProperty("Uint8Array");
          },
          pushState: function () {
            return window.history && window.history.pushState;
          },
          formData: function () {
            return window.FormData;
          },
          corsImg: function () {
            return !1;
          },
          MutationObserver: function () {
            return window.MutationObserver;
          },
          getUserMedia: function () {
            return window.navigator.getUserMedia;
          },
          audioTabIndicator: function () {
            return n(60).chrome || n(60).gecko;
          },
          blob: function () {
            try {
              return new window.Blob();
            } catch (e) {
              return !1;
            }
          },
          Notification: function () {
            return window.Notification;
          },
          sendBeacon: function () {
            return window.navigator.sendBeacon;
          },
          doNotTrack: function () {
            var e = window,
              t = e.navigator,
              i = e.doNotTrack;
            return n(0).contains(
              ["1", 1, "yes"],
              t.doNotTrack || t.msDoNotTrack || i
            );
          },
          flagEmoji: function () {
            return n(954)("🇦🇹");
          },
        },
        function (e, t, n) {
          return (e[n] = !!t()), e;
        },
        {}
      );
      function i(e) {
        try {
          if (e.getItem) {
            var t = Date.now();
            return e.setItem(t, t), e.removeItem(t), !0;
          }
        } catch (e) {}
        return !1;
      }
    },
    759: function (e, t, n) {
      var i = n(9),
        r = n(2104);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    768: function (e, t, n) {
      var i = n(9),
        r = n(1423);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
          insert: "head",
          singleton: !1,
        },
        a = (i(r, o), r.locals ? r.locals : {});
      e.exports = a;
    },
    78: function (e, t, n) {
      e.exports = n(21).extend(
        n(1185),
        n(1187),
        n(1188),
        {
          isPopulated: function () {
            return !0;
          },
          destroy: function (e) {
            return (
              this.trigger("destroy", this, this.collection, e), n(7).resolve()
            );
          },
        },
        {
          hashFn: function (e, t) {
            return (e && e.id) || (t && t.resource_id);
          },
        }
      );
    },
    788: function (e, t, n) {
      e.exports = new (n(16))({
        override: {
          model: n(359),
        },
        audibleAt: function (e) {
          var t = this.at(e);
          return t && t.getSound();
        },
      });
    },
    79: function (e, t, n) {
      (function (t) {
        var i = (e.exports = n(0).assign({}, n(31).Events, {
          TIMEOUT: 200,
        }));
        function r(e, t) {
          var r = t + "d",
            o =
              "resize" === e
                ? (function (e) {
                    var t = window.innerWidth,
                      n = window.innerHeight,
                      r = i.trigger.bind(i, "resize:x:" + e),
                      o = i.trigger.bind(i, "resize:y:" + e),
                      a = i.trigger.bind(i, "resize:" + e);
                    return function (e) {
                      var i = window.innerWidth,
                        s = window.innerHeight;
                      i !== t && r(e), s !== n && o(e), a(e), (n = s), (t = i);
                    };
                  })(r)
                : i.trigger.bind(i, e + ":" + r);
          return n(0)[t](o, 200);
        }
        t(window)
          .on("resize", r("resize", "debounce"))
          .on("resize", r("resize", "throttle"))
          .on("scroll", r("scroll", "debounce"))
          .on("scroll", r("scroll", "throttle"));
      }.call(this, n(15)));
    },
    795: function (e, t, n) {
      (function (t) {
        e.exports = n(140).extend({
          upload: function (e) {
            var t,
              r = n(259).createAbortController(),
              o = this.presign(e, r.signal),
              a =
                ((t = this.uploadFile),
                function () {
                  var e = n(7).defer(),
                    i = e.promise(),
                    r = e.notify,
                    o = n(0).toArray(arguments).concat(r),
                    a = t.apply(this, o);
                  return a.then(e.resolve, e.reject), (i.abort = a.abort), i;
                }),
              s = this.resolveWith,
              u = o.then(function (t) {
                return n(433)(
                  function () {
                    return a(e, t, r.signal);
                  },
                  i,
                  {
                    abort: r.signal,
                  }
                ).then(function () {
                  return s(t);
                });
              });
            return (u.abort = r.abort), u;
          },
          presign: function (e, t) {
            var i = {
              filename: e.name,
              filesize: r(e),
            };
            return n(35)
              .callEndpoint("uploadPolicyCreate", null, null, null, i, {
                abort: t,
              })
              .then(function (e) {
                return e.body;
              });
          },
          uploadFile: function (e, i, r, o) {
            var a = i.url,
              s = i.method,
              u = [/^content-length$/i, /^host$/i, /^expect$/i],
              l = n(0).pick(i.headers, function (e, t) {
                return !u.some(function (e) {
                  return t.match(e);
                });
              });
            return t.ajax({
              url: a,
              type: s,
              data: e,
              processData: !1,
              contentType: "application/octet-stream",
              dataType: "xml",
              headers: l,
              timeout: 0,
              progress: o,
              abort: r,
            });
          },
          resolveWith: function (e) {
            return e.uid;
          },
        });
        function i(e) {
          return (
            400 === e.status &&
            "RequestTimeout" ===
              ((n = e.responseXML), t(n).find("Error Code").text())
          );
          var n;
        }
        function r(e) {
          try {
            return e.size;
          } catch (e) {
            return -1;
          }
        }
      }.call(this, n(15)));
    },
    797: function (e, t, n) {
      e.exports = n(74).extend({
        constraints: [],
        check: function (e, t) {
          var i = this,
            r = this.constraints
              .map(function (e) {
                return n(332).hydrateConstraintDefinition.call(i, e);
              })
              .map(function (t) {
                return t.validate(i._form, e);
              });
          n(7)
            .settled(r)
            .then(function () {
              for (
                var e = arguments.length, i = new Array(e), r = 0;
                r < e;
                r++
              )
                i[r] = arguments[r];
              var o = n(0).any(
                i.map(function (e) {
                  return e[0].success;
                })
              );
              t(o);
            });
        },
      });
    },
    798: function (e, t, n) {
      e.exports = n(74).extend({
        message: function () {
          return n(4).get("me").isAudioPartner()
            ? n(1).Lingua.t("You can only monetize audio content")
            : n(1).Lingua.t("You can only monetize music content");
        },
        check: function (e, t) {
          var i = n(4).get("me").isAudioPartner();
          t((i && !1 === e) || (!i && !0 === e));
        },
      });
    },
    799: function (e, t, n) {
      e.exports = n(74).extend({
        minLength: 1,
        maxLength: 50,
        check: function (e, t) {
          var i = e.split(/\s+/).filter(Boolean),
            r = n(0).uniq(i);
          if (r.length > this.maxLength)
            return (
              (this.message = n(1).Lingua.tp(
                "No more than [[maxLength]] URL allowed",
                "No more than [[maxLength]] URLs allowed",
                this.maxLength,
                {
                  maxLength: this.maxLength,
                }
              )),
              void t(!1)
            );
          if (r.length < this.minLength)
            return (
              (this.message = n(1).Lingua.tp(
                "Enter at least [[minLength]] URL",
                "Enter at least [[minLength]] URLs",
                this.minLength,
                {
                  minLength: this.minLength,
                }
              )),
              void t(!1)
            );
          var o = r.filter(function (e) {
            return !(function (e) {
              var t = e.match(/^https?:\/\/soundcloud\.com(\/.*)$/);
              if (t) {
                var i = n(108).getRouteInfo(t[1]);
                return i && "listen" === i.name;
              }
              return !1;
            })(e);
          });
          if (o.length > 0)
            return (
              (this.message = n(1).Lingua.t(
                "[[url]] is not a valid SoundCloud track URL",
                {
                  url: o[0],
                }
              )),
              void t(!1)
            );
          t(!0);
        },
      });
    },
    800: function (e, t, n) {
      var i = [
        {
          emitter: n(34),
          event: "repost",
          getInstance: function (e, t) {
            var n = t.origin;
            return e.options.userId === n;
          },
          handler: function (e) {
            var t,
              n = e.state,
              i = e.target,
              r = "sound" === e.targetType ? "track" : "playlist",
              o = r + "-repost";
            n
              ? this.add(
                  {
                    type: o,
                    created_at: new Date().toISOString(),
                    track:
                      "track" === r
                        ? {
                            id: i,
                            kind: r,
                          }
                        : null,
                    playlist:
                      "playlist" === r
                        ? {
                            id: i,
                            kind: r,
                          }
                        : null,
                  },
                  {
                    at: 0,
                  }
                )
              : (t = this.find(function (e) {
                  return e.get("type") === o && e.get(r).id === i;
                })) && this.remove(t);
          },
        },
      ];
      e.exports = new (n(16))(
        n(188).withOptions({
          events: i,
        }),
        {
          override: {
            model: n(499),
          },
          audibleAt: function (e) {
            var t = this.at(e);
            return t && t.getAudible();
          },
        }
      );
    },
    812: function (e, t, n) {
      var i;
      i = {
        add: !0,
        remove: !0,
        merge: !0,
      };
      e.exports = n(39).extend({
        model: null,
        setup: n(0).noop,
        _prepareModel: function (e) {
          return e;
        },
        _removeReference: n(0).noop,
        parse: function (e) {
          return (e && e.collection) || e;
        },
        indexOfEquivalentModel: function (e, t, n) {
          return (t || this.models).indexOf(e, n);
        },
        getKeyForModel: function (e) {
          return e;
        },
        toJSON: function () {
          return this.models.slice();
        },
        set: function (e, t) {
          var r,
            o,
            a,
            s = this.indexOfEquivalentModel.bind(this);
          for (
            t = n(0).defaults({}, t, i),
              e = this.parse(e, t),
              r = (e = n(0).isArray(e) ? e.slice() : [e]).length;
            r--;

          )
            (s((a = e[r]), e.slice(r + 1)) > -1 || s(a) > -1) && e.splice(r, 1);
          return (
            (this.length += e.length),
            (o = null !== t.at && void 0 !== t.at ? t.at : this.models.length),
            Array.prototype.splice.apply(this.models, [o, 0].concat(e)),
            this.comparator &&
              this.sort({
                silent: !0,
              }),
            t.silent ||
              e.forEach(function (e) {
                this.trigger("add", e, this, t);
              }, this),
            this
          );
        },
        remove: function (e, t) {
          var i, r, o, a;
          for (
            t || (t = {}),
              i = 0,
              r = (e = n(0).isArray(e) ? e.slice() : [e]).length;
            i < r;
            i++
          )
            (a = e[i]),
              (o = this.indexOf(a)) >= 0 &&
                (this.models.splice(o, 1),
                this.length--,
                t.silent ||
                  ((t.index = o), this.trigger("remove", a, this, t)));
          return this;
        },
      });
    },
    814: function (e, t, n) {
      e.exports = n(279).extend({
        includeFooter: ".l-sidebar-left",
        css: n(1425),
        template: n(1427),
      });
    },
    82: function (e, t) {
      e.exports = {
        CHANGE_CURRENT_AD_SOUND: "ads:changeCurrentAdSound",
        CHANGE_AD_SKIPPABILITY: "ads:changeAdSkippability",
        END_AD_BREAK: "ads:endAdBreak",
      };
    },
    827: function (e, t, n) {
      var i = window.document.referrer,
        r = n(26).parse(i).host || "",
        o = (n(26).getQueryParam("utm_medium") || "").toLowerCase();
      e.exports = {
        facebook:
          "facebook" === o ||
          /\bfacebook\.com/.test(i) ||
          (/\bw\.soundcloud\.com/.test(i) && /origin=facebook/.test(i)) ||
          !!n(26).getQueryParam("fb_action_ids"),
        googleplus: "googleplus" === o,
        searchEngine: [
          /\.ask\.com$/,
          /\.baidu\.com$/,
          /\.bing\.com$/,
          /\.duckduckgo\.com$/,
          /\.google\.com$/,
          /\.yahoo\.com$/,
          /\.yandex\.com$/,
        ].some(i.match, r),
      };
    },
    846: function (e, t, n) {
      var i = n(11);
      e.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, n, i, r) {
          return '<div class="l-one-column">\n  <div class="l-main">\n\n  </div>\n</div>\n';
        },
        useData: !0,
      });
    },
    87: function (e, t, n) {
      e.exports = n(74).extend({
        maxLength: 100,
        message: function () {
          return n(1).Lingua.t("[[maxLength]] characters max", {
            maxLength: this.maxLength,
          });
        },
        userPerceived: !1,
        check: function (e, t) {
          t(
            (this.userPerceived ? n(111).countLetters(e) : e.length) <=
              this.maxLength
          );
        },
      });
    },
    92: function (e, t, n) {
      var i = (e.exports = new (n(57))("settings"));
      n(0).forEach(
        {
          volume: 1,
          muted: !1,
          newTrackNotifications: "always",
          showTimeRemaining: !1,
          streamingQuality: null,
        },
        function (e, t) {
          i.has(t) ||
            i.set(t, e, {
              dontPersist: !0,
            });
        }
      ),
        i.finalize();
    },
    93: function (e, t, n) {
      e.exports = n(78).extend(
        n(624),
        n(213),
        n(628),
        n(1191),
        n(629),
        n(630),
        n(1201),
        {
          fields: {
            offlineSyncEnabled: {
              defaultValue: !0,
            },
            snippet_presets: {
              defaultValue: null,
            },
          },
          constraints: {
            title: [
              [
                n(62),
                {
                  message: n(1).Lingua.t("Enter a title."),
                },
              ],
              [
                n(87),
                {
                  maxLength: 100,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a title that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
            description: [
              [
                n(87),
                {
                  maxLength: 4e3,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a track description that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
            permalink: [
              [
                n(334),
                {
                  type: "sound",
                  getResource: function () {
                    return this.getAudible();
                  },
                },
              ],
              [
                n(62),
                {
                  message: n(1).Lingua.t("Enter a permalink."),
                  shouldCheck: function () {
                    return this.isEdit;
                  },
                },
              ],
            ],
            tags: [[n(529)]],
            customGenre: [
              [
                n(87),
                {
                  maxLength: 100,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a custom genre that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
            caption: [
              [
                n(87),
                {
                  userPerceived: !0,
                  maxLength: 140,
                  message: function () {
                    return n(1).Lingua.t(
                      "Enter a track caption that is up to [[maxLength]] characters.",
                      {
                        maxLength: this.maxLength,
                      }
                    );
                  },
                },
              ],
            ],
          },
          _sound: null,
          resource_type: "sound-upload-edit",
          requiredModelAttributes: [
            "commentable",
            "downloadable",
            "embeddable_by",
            "feedable",
            "genre",
            "geo_blockings",
            "label_name",
            "purchase_title",
            "purchase_url",
            "release_date",
            "reveal_comments",
            "reveal_stats",
            "api_streamable",
            "track_format",
            "snippet_presets",
          ],
          actions: {
            save: function () {
              var e = this;
              return o.call(this).then(function () {
                return e.set("editing", !1), e.saveEdits();
              });
            },
            cancel: function () {
              var e = this;
              r.call(this).then(function () {
                return e.cancel();
              });
            },
          },
          setup: function (e, t) {
            if ((this.listenTo(this, "upload:completed:saved", i), t.isEdit)) {
              var r = this.requiredModelAttributes.map(function (e) {
                return "change:" + e;
              });
              (this.isEdit = !0),
                (this._sound = new (n(17))({
                  id: t.resource_id,
                })),
                this.listenTo(this._sound, r.join(" "), a),
                this._sound.attrExists(this.requiredModelAttributes)
                  ? this.setToModelAttributes()
                  : this._sound
                      .fetch({
                        attrs: this.requiredModelAttributes,
                      })
                      .fail(function () {
                        n(189).raise({
                          fatal: !0,
                        });
                      }),
                this.setButtonConfig("save", {
                  label: n(1).Lingua.t("Save changes"),
                }),
                this.addSubmodel(this._sound);
            }
          },
          cancel: function () {
            var e = this.getFileUpload(),
              t = e && e.getTrackingId();
            this.removeUpload(),
              e &&
                n(12).trackUploadFunnel({
                  chapter: "cancel",
                  uploadId: t,
                }),
              this.isEdit
                ? (this.setToModelAttributes(), this.trigger("canceled"))
                : (this.destroy(), this._sound && n(34).destroy(this._sound));
          },
          createAudible: function () {
            return (
              (this._sound = new (n(17))(this.getUploadAttributes())),
              this._sound
            );
          },
          getAudible: function () {
            return this._sound;
          },
          unsetAudible: function () {
            this._sound = null;
          },
          onAudibleEdited: function (e, t) {
            this.isEdit &&
              (function (e, t) {
                e.scheduled_public_date &&
                  t.scheduled_public_date !== e.scheduled_public_date &&
                  ((i = e.scheduled_public_date),
                  (r = Math.round(
                    (new Date().setTime(i) - Date.now()) / n(29).MS_IN_DAY
                  )),
                  n(12).trackV1Click({
                    click_name: "track-edit::saved_with_scheduling",
                    click_attributes: {
                      user_subscription: n(4)
                        .get("me")
                        .getCreatorSubscriptionIdentifier(),
                      daysScheduled: r,
                    },
                  }));
                var i, r;
                if (n(4).get("me").hasMonetization()) {
                  s(t.geo_blockings, e.geo_blockings) &&
                    ((f = e.geo_blockings),
                    (h = f && f.length > 0),
                    n(12).trackV1Click(
                      h
                        ? {
                            click_name: "track-edit::enable_geoblocking",
                            click_attributes: {
                              blocked_countries: f,
                            },
                          }
                        : {
                            click_name: "track-edit::disable_geoblocking",
                          }
                    ));
                  var o = t.monetization || {},
                    a = e.monetization || {};
                  s(o.territories, a.territories) &&
                    ((c = o.territories),
                    (d = a.territories),
                    n(0).isEmpty(c) && !n(0).isEmpty(d)
                      ? n(12).trackV1Click({
                          click_name: "track-edit::enable_monetization",
                          click_attributes: {
                            blocked_countries: d,
                          },
                        })
                      : !n(0).isEmpty(c) &&
                        n(0).isEmpty(d) &&
                        n(12).trackV1Click({
                          click_name: "track-edit::disable_monetization",
                        }),
                    n(12).trackV1Click({
                      click_name: "track-edit::saved_with_monetization_changes",
                    })),
                    s(o.start_timestamp, a.start_timestamp) &&
                      ((l = a.start_timestamp),
                      n(12).trackV1Click(
                        l
                          ? {
                              click_name:
                                "track-edit::enable_start_monetization",
                            }
                          : {
                              click_name:
                                "track-edit::disable_start_monetization",
                            }
                      )),
                    s(o.end_timestamp, a.end_timestamp) &&
                      ((u = a.end_timestamp),
                      n(12).trackV1Click(
                        u
                          ? {
                              click_name: "track-edit::enable_end_monetization",
                            }
                          : {
                              click_name:
                                "track-edit::disable_end_monetization",
                            }
                      ));
                }
                var u;
                var l;
                var c, d;
                var f, h;
              })(e, t);
          },
          onAudibleSaved: function () {
            var e,
              t,
              i,
              r = this.getAudible();
            if (this.isEdit) {
              var o,
                a = Boolean(
                  null == r || null == (o = r.getSounds()[0])
                    ? void 0
                    : o.get("caption")
                );
              if (
                (n(8).trigger("sound:saved", r),
                n(12).trackV0Click(null, {
                  click_name: "track::edit_saved",
                  click_object: r.getUrn(),
                  click_attributes: {
                    has_caption: a,
                  },
                }),
                n(4).get("me").hasMonetization())
              )
                return (function (e) {
                  return n(7)
                    .delay(2e3)
                    .then(function () {
                      return e.fetch({
                        attrs: ["monetization_enabled"],
                      });
                    });
                })(r);
            } else
              (e = r),
                (i = n(762).instances.get(n(18).currentUserId())) &&
                  ((t = n(499).convert(e)),
                  i.add(t, {
                    at: 0,
                  }),
                  t.release());
            return n(7).resolve();
          },
          onSaveFailed: function (e) {
            var t = this.getFileUpload();
            this.setToFailed("save", e), this.set("editing", !0);
            var r = (function (e) {
              var t = (void 0 === e ? {} : e).responseJSON;
              try {
                return t.errors[0].error_type;
              } catch (e) {
                return "";
              }
            })(e);
            "QUOTA_EXCEEDED" === r &&
              (n(8).trigger("quota:exceeded"), this.set("savingFailed", r)),
              t &&
                n(12).trackUploadFunnel({
                  chapter: ["failed", "save"],
                  uploadId: t.getTrackingId(),
                }),
              i();
          },
          hasFailed: function () {
            return !!this.get("fileUploadFailed") || !!this.get("savingFailed");
          },
          failedDueToQuota: function () {
            return "QUOTA_EXCEEDED" === this.get("savingFailed");
          },
          getAttributesToBeSaved: function () {
            var e = n(0).pick(
              this.attributes,
              "feedable",
              "downloadable",
              "commentable",
              "snippet_presets"
            );
            return (
              (e.api_streamable = this.get("apiStreamable")),
              (e.reveal_comments = this.get("publicComments")),
              (e.restrictions = this.get("offlineSyncEnabled")
                ? []
                : ["no_offline_sync"]),
              n(0).assign(e, this.getUploadAttributes()),
              e
            );
          },
          getAttributesFromModel: function () {
            var e = this.getAudible(),
              t = n(0).pick(
                e.attributes,
                "feedable",
                "downloadable",
                "commentable"
              );
            return (
              (t.apiStreamable = !!e.get("api_streamable")),
              (t.buyLink = e.get("purchase_url")),
              (t.buyTitle =
                e.get("purchase_title") ||
                this.getFieldMetadata("buyTitle").defaultValue),
              (t.embeddableByAll = e.isEmbeddableByAll()),
              (t.stats = !!e.get("reveal_stats")),
              (t.publicComments = !!e.get("reveal_comments")),
              (t.labelName = e.get("label_name")),
              (t.releaseDate =
                e.get("release_date") &&
                n(13).LinguaLib.dateTimeHelper.fromString(
                  e.get("release_date")
                )),
              (t.offlineSyncEnabled = e.isOfflineSyncEnabled()),
              t
            );
          },
          updateSound: function (e) {
            this._sound && (this._sound.release(), (this._sound = e));
          },
          isDjMix: function () {
            return "dj-mix" === this.attributes.track_format;
          },
        },
        {
          neverRelease: !0,
          hashFn: function (e, t) {
            return e.resource_id || (t && t.resource_id) || e.id || null;
          },
        }
      );
      function i() {
        n(4).get("me").fetch();
      }
      function r() {
        return this.isEdit
          ? n(7).resolve()
          : n(294).confirm(
              n(1).Lingua.t(
                "Are you sure you want to stop your upload? Any unsaved changes will be lost."
              )
            );
      }
      function o() {
        return this.validate().then(function (e) {
          return e ? n(7).resolve() : n(7).reject();
        });
      }
      function a() {
        this.isDirty() || this.setToModelAttributes();
      }
      function s(e, t) {
        return (
          !n(0).isEqual(e, t) &&
          !((void 0 === e && null == t) || (null === e && void 0 === t))
        );
      }
    },
    94: function (e, t, n) {
      function i(e) {
        return n("playlist-upload" === e ? 333 : 93);
      }
      (e.exports = function (e, t) {
        return new (i(t.resource_type))(e, t);
      }).getClass = function (e) {
        return i(e.resource_type);
      };
    },
    956: function (e, t, n) {
      e.exports = (function () {
        "use strict";
        function e(e) {
          (this.items = []), (this.rankFn = e);
        }
        var t = e.prototype;
        return (
          (t.peek = function () {
            return this.items[0];
          }),
          (t.enqueue = function (e) {
            n(121).insertAtIndex(
              this.items,
              e,
              n(121).sortedLastIndex(this.items, e, this.rankFn)
            );
          }),
          (t.dequeue = function () {
            return this.items.shift();
          }),
          (t.remove = function (e) {
            n(121).removeElement(this.items, e);
          }),
          (t.clear = function () {
            this.items = [];
          }),
          (t.size = function () {
            return this.items.length;
          }),
          e
        );
      })();
    },
    958: function (e, t, n) {
      (function (t) {
        e.exports = new (n(16))({
          requirePrototype: n(21).prototype,
          createSnapshot: function (e) {
            return new i(this, e);
          },
        });
        function i(e, i) {
          var r = n(0).reduce(
              i,
              function (i, r) {
                var o = e.get(r);
                return (
                  n(0).isObject(o)
                    ? (i[r] = t.extend(!0, {}, o))
                    : e.attrExists(r) && (i[r] = o),
                  i
                );
              },
              {}
            ),
            o = n(0).reject(i, function (t) {
              return e.attrExists(t);
            });
          this.rollback = function () {
            n(0).each(o, function (t) {
              e.unset(t);
            }),
              e.set(r);
          };
        }
      }.call(this, n(15)));
    },
    959: function (e, t, n) {
      var i = "V2",
        r = new RegExp("^" + i + "::(\\S+?)::(\\S+)");
      window.addEventListener(
        "storage",
        function (e) {
          var t = {
            dontPersist: !0,
          };
          if (!e.key)
            return void n(0).each(
              n(0).values(o.local).concat(n(0).values(o.session)),
              function (e) {
                e.reset(t);
              }
            );
          r.lastIndex = 0;
          var i = r.exec(e.key) || [void 0, void 0, void 0],
            a = i[1],
            u = i[2];
          if (a && u) {
            var l = o[a][u];
            if (l) {
              var c = s(l),
                d = Object.keys(c);
              n(0).each(c, function (e, n) {
                l.set(n, e, t);
              }),
                n(0)
                  .difference(l.keys(), d)
                  .forEach(function (e) {
                    l.unset(e, t);
                  });
            }
          }
        },
        !1
      );
      var o = {
        local: {},
        session: {},
      };
      e.exports = new (n(16))({
        storage: null,
        keyName: null,
        type: null,
        namespace: null,
        around: {
          initialize: function (e, t, r) {
            if ((void 0 === r && (r = "local"), o[r][t])) return o[r][t];
            (o[r][t] = this),
              e(),
              (this.type = r),
              (this.namespace = t),
              (this.storage = (function (e) {
                return "local" === e && n(75).localStorage
                  ? window.localStorage
                  : "session" === e && n(75).sessionStorage
                  ? window.sessionStorage
                  : null;
              })(r)),
              (this.keyName = (function (e, t) {
                return [i, e, t].join("::");
              })(r, t)),
              (this._store = s(this)),
              (this.length = n(0).keys(this._store).length);
          },
        },
        after: {
          set: function (e, t, n) {
            (n && n.dontPersist) || a(this);
          },
          unset: function (e, t) {
            (t && t.dontPersist) || a(this);
          },
          reset: function (e) {
            (e && e.dontPersist) || a(this);
          },
        },
        dispose: function () {
          this.storage && this.storage.removeItem(this.keyName),
            this.reset({
              dontPersist: !0,
            }),
            delete o[this.type][this.namespace];
        },
        write: function () {
          a(this);
        },
      });
      function a(e) {
        var t = e.storage,
          n = e.keyName,
          i = e._store;
        if (t)
          try {
            return t.setItem(n, JSON.stringify(i)), !0;
          } catch (e) {
            return !1;
          }
        return !1;
      }
      function s(e) {
        var t = e.storage,
          n = e.keyName;
        if (t)
          try {
            return JSON.parse(t.getItem(n) || "{}");
          } catch (e) {}
        return {};
      }
    },
    960: function (e, t, n) {
      e.exports = new (n(16))(
        n(0).assign(
          {
            around: {
              set: function (e, t, n, i) {
                var r,
                  o,
                  a = i && i.silent;
                return (
                  a || (o = this.get(t)),
                  (r = e(t, n, i)),
                  a ||
                    o === n ||
                    this.trigger(t, {
                      prev: o,
                      current: n,
                    }),
                  r
                );
              },
              unset: function (e, t, n) {
                var i,
                  r,
                  o = n && n.silent;
                return (
                  o || (r = this.get(t)),
                  (i = e(t, n)),
                  o ||
                    void 0 === r ||
                    this.trigger(t, {
                      prev: r,
                      current: void 0,
                    }),
                  i
                );
              },
              reset: function (e, t) {
                var i, r;
                return (
                  (t && t.silent) ||
                    (r = this.reduce(
                      function (e, t, n) {
                        return void 0 !== t && (e[n] = t), e;
                      },
                      {},
                      this
                    )),
                  (i = e(t)),
                  r &&
                    n(0).each(
                      r,
                      function (e, t) {
                        this.trigger(t, {
                          prev: e,
                          current: void 0,
                        });
                      },
                      this
                    ),
                  i
                );
              },
            },
          },
          n(31).Events
        )
      );
    },
    961: function (e, t, n) {
      e.exports = n(39).extend({
        model: n(145),
        setup: function () {
          this.setToFullyPopulated();
        },
      });
    },
    962: function (e, t, n) {
      e.exports = new (n(16))({
        onCleanup: null,
        onIncrement: null,
        onDecrement: null,
        _zeroList: null,
        _killList: null,
        _zeroListSnap: null,
        after: {
          initialize: function (e) {
            var t = void 0 === e ? {} : e,
              n = t.autoCleanup,
              i = t.onCleanup,
              r = t.onIncrement,
              o = t.onDecrement;
            (this._counts = Object.create(null)),
              (this._totalCount = 0),
              (this._autoCleanup = !!n),
              (this.onCleanup = i),
              (this.onIncrement = r),
              (this.onDecrement = o),
              (this._zeroList = new Set()),
              (this._killList = new Set());
          },
          reset: function () {
            (this._counts = Object.create(null)),
              (this._totalCount = 0),
              this._zeroList.clear(),
              this._killList.clear();
          },
          set: function (e, t) {
            this._counts[e] ||
              ((this._counts[e] = 1),
              this._totalCount++,
              this.onIncrement && this.onIncrement(t, e, 1));
          },
          unset: function (e) {
            (this._totalCount -= this.countFor(e)),
              delete this._counts[e],
              this._zeroList.delete("" + e),
              this._killList.delete("" + e);
          },
        },
        before: {
          reset: function () {
            this.onCleanup && this.forEach(this.onCleanup);
          },
        },
        countFor: function (e) {
          return this._counts[e] || 0;
        },
        totalCount: function () {
          return this._totalCount;
        },
        increment: function (e, t) {
          return (
            this.has(e) &&
              ((t = "number" == typeof t ? t : 1) > 0
                ? ((this._totalCount += t),
                  this._counts[e] <= 0 &&
                    (this._zeroList.delete("" + e),
                    this._killList.delete("" + e)),
                  (this._counts[e] = (this._counts[e] || 0) + t),
                  this.onIncrement && this.onIncrement(this.get(e), e, t))
                : t < 0 && this.decrement(e, -t)),
            this
          );
        },
        decrement: function (e, t) {
          return (
            this.has(e) &&
              ((t = "number" == typeof t ? t : 1) > 0
                ? ((this._totalCount -= t),
                  (this._counts[e] = (this._counts[e] || 1) - t),
                  this.onDecrement && this.onDecrement(this.get(e), e, t),
                  this._counts[e] <= 0 &&
                    (this._zeroList.add("" + e),
                    this._autoCleanup && this.cleanup()))
                : t < 0 && this.increment(e, -t)),
            this
          );
        },
        changeKey: function (e, t) {
          if (e !== t) {
            var n = this.get(e),
              i = this.countFor(e);
            this.unset(e), this.set(t, n), this.increment(t, i - 1);
          }
        },
        cleanup: function () {
          return this.mark(), this.sweep();
        },
        mark: function () {
          var e;
          (e = this._killList),
            this._zeroList.forEach(function (t) {
              return e.add(t);
            }),
            this._zeroList.clear();
        },
        beginSweep: function () {
          (this._zeroListSnap = r(this._zeroList)), this._zeroList.clear();
        },
        endSweep: function () {
          (this._zeroList = this._zeroListSnap), (this._zeroListSnap = null);
        },
        sweep: function () {
          var e = !!this._zeroListSnap;
          if (!(this._killList.size || (e && this._zeroList.size))) return !1;
          e || this.beginSweep();
          do {
            r(this._killList).forEach(i, this),
              (this._killList = this._zeroList);
          } while (this._killList.size);
          return (this._zeroList = new Set()), e || this.endSweep(), !0;
        },
      });
      function i(e) {
        var t = this.onCleanup;
        if (t) {
          var n = this.get(e);
          null != n && t.call(n, n, e);
        }
        this.unset(e);
      }
      function r(e) {
        var t = new Set();
        return (
          e.forEach(function (e) {
            return t.add(e);
          }),
          t
        );
      }
    },
    963: function (e, t, n) {
      e.exports = function (e) {
        var t,
          r,
          o = !1,
          a = !1,
          s = !0,
          u = -1,
          l = 3,
          c = !1;
        function d() {
          u = r ? e.indexOf(r) : -1;
        }
        function f(t) {
          e.indexOf(t) <= u && ++u;
        }
        function h(e, t, n) {
          n.index <= u && --u;
        }
        function p() {
          for (var t; !s && u + 1 < e.length; )
            ++u,
              (t = i(e, u)) &&
                ((r = e.at(u)), _.trigger("data", t, e.getQueueMetadataAt(u)));
          s || (e.isFullyPopulated() ? y() : c || ((c = !0), g()));
        }
        function g() {
          e.fetch({
            reset: !1,
            remove: !1,
          }).then(m, v);
        }
        function m() {
          (l = 3), (c = !1), p();
        }
        function v() {
          --l ? (t = window.setTimeout(g, 2e3)) : ((c = !1), y());
        }
        function y() {
          (o = !0), _.trigger("end");
        }
        e.on("reset", d).on("add", f).on("remove", h);
        var _ = n(0).assign(
          {
            peek: function () {
              if (!a)
                for (var t = u + 1; t < e.length; t++) {
                  var n = i(e, t);
                  if (n)
                    return {
                      audible: n,
                      metadata: e.getQueueMetadataAt(t),
                    };
                }
            },
            resume: function () {
              !s || o || a || ((s = !1), p());
            },
            pause: function () {
              s = !0;
            },
            isEnded: function () {
              return o;
            },
            dispose: function () {
              e.off("reset", d).off("add", f).off("remove", h),
                this.off(),
                (a = !0),
                (s = !0),
                window.clearTimeout(t);
            },
          },
          n(31).Events
        );
        return _;
      };
      function i(e, t) {
        return (
          (function (e, t) {
            return (e.audibleAt || e.at).call(e, t);
          })(e, t) || void 0
        );
      }
    },
    964: function (e, t, n) {
      e.exports = function (e) {
        var t = !1,
          i = !1,
          r = n(0).assign(
            {
              peek: function () {
                if (!i && e)
                  return {
                    audible: e,
                    metadata: e.getQueueMetadataAt(0),
                  };
              },
              resume: function () {
                if (!t && !i && e) {
                  var n = e;
                  (e = null),
                    (t = !0),
                    r.trigger("data", n, n.getQueueMetadataAt(0)),
                    r.trigger("end");
                }
              },
              pause: function () {},
              isEnded: function () {
                return t;
              },
              dispose: function () {
                r.off(), (i = !0);
              },
            },
            n(31).Events
          );
        return r;
      };
    },
    965: function (e, t, n) {
      e.exports = function (e) {
        var t,
          r = [],
          o = !0,
          a = !1,
          s = !1,
          u = !1;
        function l() {
          for (; !o && r.length; ) d.trigger("data", r.shift(), t);
          o || 0 !== r.length || (e.isEnded() ? c() : e.resume());
        }
        function c() {
          u || ((u = !0), d.trigger("end"));
        }
        e.on("data", function (n, o) {
          e.pause(),
            (t = o),
            (function e(t) {
              i(t)
                ? (r.push.apply(r, t.getSounds()), l())
                : s ||
                  ((s = !0),
                  (function (e) {
                    return e.fetch();
                  })(t)
                    .always(function () {
                      s = !1;
                    })
                    .then(function () {
                      return e(t);
                    }, l));
            })(n);
        }),
          e.on("end", function () {
            s || 0 !== r.length || c();
          });
        var d = n(0).assign(
          {
            pause: function () {
              o = !0;
            },
            peek: function () {
              if (!a) {
                if (r[0])
                  return {
                    sound: r[0],
                    metadata: t,
                  };
                var n = e.peek();
                if (n) {
                  var o = n.audible,
                    s = n.metadata;
                  if (i(o)) {
                    var u = o.getSounds();
                    if (u.length)
                      return {
                        sound: u[0],
                        metadata: s,
                      };
                  }
                }
              }
            },
            resume: function () {
              !o || a || u || ((o = !1), s || l());
            },
            isEnded: function () {
              return u;
            },
            dispose: function () {
              (a = !0), (o = !0), d.off(), e.dispose();
            },
          },
          n(31).Events
        );
        return d;
      };
      function i(e) {
        return "playlist" !== e.resource_type || e.attrExists("tracks");
      }
    },
    966: function (e, t, n) {
      e.exports = function (e, t, i, r, o, a) {
        void 0 === i && (i = n(0).identity),
          void 0 === r && (r = 1),
          void 0 === o && (o = 0),
          void 0 === a && (a = n(0).constant(!0));
        var s,
          u = !1,
          l = o,
          c = [],
          d = [],
          f = 1,
          h = !!t && a(t),
          p = function () {
            return (
              s ||
                (s = n(7).promise(function (n) {
                  e.on("data", function (i, r) {
                    var o = a(i, r);
                    u || (t && i !== t)
                      ? o && u
                        ? (d.push({
                            sound: i,
                            index: l++,
                            metadata: r,
                          }),
                          m())
                        : o &&
                          c.push({
                            sound: i,
                            metadata: r,
                          })
                      : ((u = !0),
                        e.pause(),
                        c.forEach(function (e, t) {
                          e.index = t - c.length;
                        }),
                        o &&
                          d.push({
                            sound: i,
                            index: l++,
                            metadata: r,
                          }),
                        n());
                  }),
                    e.on("end", function () {
                      y || 0 !== d.length ? m() : (_.trigger("end"), (y = !0));
                    });
                })),
              u || e.resume(),
              s
            );
          };
        function g() {
          if (1 === d.length) return d.pop();
          var e = Math.floor(Math.random() * d.length);
          return d.splice(e, 1)[0];
        }
        function m() {
          if (h && !v && d.length) {
            var t = d.shift();
            _.trigger("data", i(t)), (h = !1);
          }
          for (; !v && d.length && (e.isEnded() || d.length === f); )
            _.trigger("data", i(g()));
          e.isEnded()
            ? y || 0 !== d.length || (_.trigger("end"), (y = !0))
            : y || v || e.resume();
        }
        var v = !0,
          y = !1,
          _ = n(0).assign(
            {
              shuffle: function () {
                f = r;
              },
              unshuffle: function () {
                return (f = 1), d.splice(0, d.length).map(i);
              },
              pause: function () {
                (v = !0), u && e.pause();
              },
              peek: function () {
                return e.peek();
              },
              resume: function () {
                (v = !1), p().then(m);
              },
              isEnded: function () {
                return e.isEnded() && 0 === d.length;
              },
            },
            n(31).Events
          ),
          b = !0,
          w = !1,
          k = n(0).assign(
            {
              pause: function () {
                b = !0;
              },
              resume: function () {
                var e = this;
                b &&
                  ((b = !1),
                  p().then(function () {
                    for (; !b && c.length; ) e.trigger("data", i(c.pop()));
                    w || 0 !== c.length || (e.trigger("end"), (w = !0));
                  }));
              },
              isEnded: function () {
                return w;
              },
            },
            n(31).Events
          );
        return {
          next: _,
          prev: k,
          dispose: function () {
            k.off(), _.off(), e.dispose();
          },
        };
      };
    },
    967: function (e, t, n) {
      e.exports = function (e, t, i, r, o) {
        void 0 === i && (i = n(0).identity),
          void 0 === r && (r = 1),
          void 0 === o && (o = 0);
        var a,
          s = !1,
          u = o,
          l = [],
          c = [],
          d = 1,
          f = !!t,
          h = function () {
            return (
              a ||
                (a = n(7).promise(function (n) {
                  e.on("data", function (i, r) {
                    s || (t && i !== t)
                      ? s
                        ? (c.push({
                            sound: i,
                            index: u++,
                            metadata: r,
                          }),
                          g())
                        : l.push({
                            sound: i,
                            metadata: r,
                          })
                      : ((s = !0),
                        e.pause(),
                        l.forEach(function (e, t) {
                          e.index = t - l.length;
                        }),
                        c.push({
                          sound: i,
                          index: u++,
                          metadata: r,
                        }),
                        n());
                  }),
                    e.on("end", function () {
                      v || 0 !== c.length ? g() : (y.trigger("end"), (v = !0));
                    });
                })),
              s || e.resume(),
              a
            );
          };
        function p() {
          if (1 === c.length) return c.pop();
          var e = Math.floor(Math.random() * c.length);
          return c.splice(e, 1)[0];
        }
        function g() {
          if (f && !m && c.length) {
            var t = c.shift();
            y.trigger("data", i(t)), (f = !1);
          }
          for (; !m && c.length && (e.isEnded() || c.length === d); )
            y.trigger("data", i(p()));
          e.isEnded()
            ? v || 0 !== c.length || (y.trigger("end"), (v = !0))
            : v || m || e.resume();
        }
        var m = !0,
          v = !1,
          y = n(0).assign(
            {
              shuffle: function () {
                d = r;
              },
              unshuffle: function () {
                return (d = 1), c.splice(0, c.length).map(i);
              },
              pause: function () {
                (m = !0), s && e.pause();
              },
              peek: function () {
                return e.peek();
              },
              resume: function () {
                (m = !1), h().then(g);
              },
              isEnded: function () {
                return e.isEnded() && 0 === c.length;
              },
            },
            n(31).Events
          ),
          _ = !0,
          b = !1,
          w = n(0).assign(
            {
              pause: function () {
                _ = !0;
              },
              resume: function () {
                var e = this;
                _ &&
                  ((_ = !1),
                  h().then(function () {
                    for (; !_ && l.length; ) e.trigger("data", i(l.pop()));
                    b || 0 !== l.length || (e.trigger("end"), (b = !0));
                  }));
              },
              isEnded: function () {
                return b;
              },
            },
            n(31).Events
          );
        return {
          next: y,
          prev: w,
          dispose: function () {
            w.off(), y.off(), e.dispose();
          },
        };
      };
    },
    968: function (e, t, n) {
      e.exports = {
        fromSDK: function (e, t) {
          var r = n(4).get("features").has("internal_qa")
              ? "BCFFBE3E"
              : "9A5289F5",
            o = t.framework.CastContext.getInstance(),
            a = new t.framework.RemotePlayer(),
            s = new t.framework.RemotePlayerController(a),
            u = null,
            l = null,
            c = "disconnected",
            d = !1,
            f = !1,
            h = null,
            p = n(0).assign({}, n(31).Events, {
              loadQueue: function (e, t, i, r, o) {
                var a = {
                  revision: null,
                  credentials: i
                    ? {
                        authorization: "OAuth " + i,
                      }
                    : null,
                  queue: e,
                  current_index: t,
                };
                f
                  ? (n(102).log("enqueuing load request", a), (h = a))
                  : (n(102).log("sending load request", a),
                    v(a, r, o),
                    (h = null));
              },
              getContext: function () {
                return o;
              },
              getSafeDeviceName: function () {
                var e = o.getCurrentSession(),
                  t = e ? e.getCastDevice() : null;
                return t ? t.friendlyName : null;
              },
              getLastRemoteQueue: function () {
                return l;
              },
              isRemoteQueueEmpty: function () {
                return !l || 0 === l.queue.length;
              },
              isPaused: function () {
                return a.isPaused;
              },
              isConnected: function () {
                return a.isConnected;
              },
              isAvailable: function () {
                return d;
              },
              getRepeatMode: function () {
                var t = i(o);
                if (!t) return null;
                switch (t.repeatMode) {
                  case e.cast.media.RepeatMode.OFF:
                    return n(67).none;
                  case e.cast.media.RepeatMode.ALL:
                    return n(67).all;
                  case e.cast.media.RepeatMode.SINGLE:
                    return n(67).one;
                  case e.cast.media.RepeatMode.ALL_AND_SHUFFLE:
                    return n(67).all;
                  default:
                    return null;
                }
              },
              setRepeatMode: function (t) {
                var r = i(o);
                r &&
                  r.queueSetRepeatMode(
                    t === n(67).all
                      ? e.cast.media.RepeatMode.ALL
                      : t === n(67).one
                      ? e.cast.media.RepeatMode.SINGLE
                      : e.cast.media.RepeatMode.OFF
                  );
              },
              getVolume: function () {
                return a.volumeLevel;
              },
              isMuted: function () {
                return a.isMuted;
              },
              setVolume: n(0).throttle(function (e) {
                var t = o.getCurrentSession();
                t &&
                  e !== p.getVolume() &&
                  (n(102).log("sending volume: ", e), t.setVolume(e));
              }, 300),
              setMuted: n(0).debounce(function (e) {
                var t = o.getCurrentSession();
                t &&
                  e !== p.isMuted() &&
                  (n(102).log("sending mute: ", e), t.setMute(e));
              }, 300),
            });
          function g(e) {
            c !== e &&
              ((c = e),
              (u = null),
              (l = null),
              (d = !1),
              (f = !1),
              (h = null),
              "disconnected" === e
                ? (n(102).log("session change: end"),
                  n(8).trigger("googleCast:end"),
                  n(8).trigger("googleCast:audioRestored"))
                : "connected" === e &&
                  (n(102).log("session change: start"),
                  n(8).trigger("googleCast:start", p),
                  n(8).trigger("googleCast:audioHijack")));
          }
          function m(e) {
            d !== e &&
              ((d = e)
                ? (n(102).log("cast is available"),
                  n(98).updateRemoteVolumeAndMuted({
                    volume: a.volumeLevel,
                    muted: a.isMuted,
                  }),
                  n(8).trigger("googleCast:available"))
                : (n(102).log("cast is unavailable"),
                  n(8).trigger("googleCast:unavailable")));
          }
          function v(t, i, r) {
            void 0 === i && (i = !0), void 0 === r && (r = 0);
            var s = o.getCurrentSession();
            if (s)
              if (((t.revision = u), (f = !0), a.isMediaLoaded))
                n(102).log("media session present - sending queue update"),
                  s.sendMessage("urn:x-cast:com.soundcloud.chromecast", {
                    type: "UPDATE_QUEUE",
                    payload: t,
                  });
              else {
                var l = new e.cast.media.MediaInfo(
                    t.queue[t.current_index].urn,
                    "audio/mpeg"
                  ),
                  c = new e.cast.media.LoadRequest(l);
                (c.autoplay = i),
                  (c.currentTime = r / 1e3),
                  (c.customData = t),
                  s.loadMedia(c);
              }
            else n(102).log("aborting queue load – no active session");
          }
          return (
            t.framework.CastContext.getInstance().setOptions({
              receiverApplicationId: r,
              autoJoinPolicy: e.cast.AutoJoinPolicy.ORIGIN_SCOPED,
            }),
            o.addEventListener(
              t.framework.CastContextEventType.SESSION_STATE_CHANGED,
              function (e) {
                e.session;
                switch (e.sessionState) {
                  case t.framework.SessionState.SESSION_RESUMED:
                  case t.framework.SessionState.SESSION_STARTED:
                    g("connected"),
                      window.setTimeout(function () {
                        p.trigger("queue:ready");
                      }, 1e3);
                    break;
                  case t.framework.SessionState.SESSION_ENDED:
                    g("disconnected");
                }
              }
            ),
            o.addEventListener(
              t.framework.CastContextEventType.CAST_STATE_CHANGED,
              function (e) {
                switch (e.castState) {
                  case t.framework.CastState.NO_DEVICES_AVAILABLE:
                    m(!1);
                    break;
                  case t.framework.CastState.NOT_CONNECTED:
                  case t.framework.CastState.CONNECTING:
                  case t.framework.CastState.CONNECTED:
                    m(!0);
                }
              }
            ),
            s.addEventListener(
              t.framework.RemotePlayerEventType.ANY_CHANGE,
              function (e) {
                e.type;
                var t = e.field,
                  i = e.value,
                  r = a.mediaInfo,
                  o = r && r.customData,
                  s = o && o.queue_status;
                s &&
                  (g("connected"),
                  (function (e) {
                    e.revision !== u &&
                      ((u = e.revision),
                      (l = {
                        queue: e.queue,
                        currentIndex: e.current_index,
                      }),
                      h
                        ? n(102).log("silent queue update", l, u)
                        : (n(102).log("trigger queue update", l, u),
                          p.trigger("queue:update", l)),
                      (f = !1),
                      h &&
                        (n(102).log("sending pending load", h),
                        v(h),
                        (h = null)));
                  })(s)),
                  "connected" === c &&
                    ("volumeLevel" === t &&
                      (n(102).log("Remote volume: ", i),
                      n(98).updateRemoteVolumeAndMuted({
                        volume: i,
                      })),
                    "isMuted" === t &&
                      (n(102).log("Remote isMuted: ", i),
                      n(98).updateRemoteVolumeAndMuted({
                        muted: i,
                      })));
              }
            ),
            p.listenTo(n(98), "change:remote", function (e) {
              var t = e.volume,
                n = e.muted;
              p.setVolume(t), p.setMuted(n);
            }),
            p
          );
        },
      };
      function i(e) {
        var t = e.getCurrentSession();
        return (t && t.getMediaSession()) || null;
      }
    },
    969: function (e, t, n) {
      e.exports = function () {
        var e = 1,
          t = !1,
          i = 1,
          r = !1,
          o = !1;
        var a = n(0).assign({}, n(31).Events, {
          loadFromSettings: function (e) {
            void 0 === e && (e = !1);
            var t = n(122) && n(122).size() > 1,
              i = {
                storeVolume: n(92).get("volume"),
                storeMuted: n(92).get("muted"),
              },
              r = i.storeVolume,
              o = void 0 === r ? 1 : r,
              a = i.storeMuted;
            s(
              t || e
                ? {
                    volume: o,
                    muted: void 0 !== a && a,
                    updateRemote: !1,
                  }
                : {
                    volume: o || 1,
                    muted: !1,
                    updateRemote: !1,
                  }
            );
          },
          setVolumeAndMuted: function (e) {
            s({
              volume: e.volume,
              muted: e.muted,
              triggers: {
                broadcast: !0,
              },
            });
          },
          updateRemoteVolumeAndMuted: function (e) {
            s({
              volume: e.volume,
              muted: e.muted,
              updateRemote: !0,
            });
          },
          getVolume: function () {
            return o ? i : e;
          },
          getMuted: function () {
            return o ? r : t;
          },
          changeVolume: function (e) {
            var t = n(71).clamp(a.getVolume() + e, 0, 1);
            a.setVolumeAndMuted({
              volume: t,
              muted: 0 === t,
            });
          },
          toggleMuted: function () {
            a.setMuted(!a.getMuted());
          },
          setMuted: function (e) {
            a.setVolumeAndMuted({
              volume: a.getVolume(),
              muted: e,
            });
          },
          setVolume: function (e) {
            a.setVolumeAndMuted({
              volume: e,
              muted: a.getMuted(),
            });
          },
          dispose: function () {
            a.stopListening();
          },
        });
        function s(s) {
          var u = s.volume,
            l = void 0 === u ? a.getVolume() : u,
            c = s.muted,
            d = void 0 === c ? a.getMuted() : c,
            f = s.triggers,
            h = s.updateRemote,
            p = void 0 === h ? o : h,
            g = n(71).clamp(l, 0, 1),
            m = !!d,
            v = a.getVolume(),
            y = a.getMuted();
          !p || (i === g && r === m)
            ? p ||
              (e === g && t === m) ||
              ((e = g),
              (t = m),
              a.trigger("change:local", {
                volume: g,
                muted: m,
              }),
              f &&
                f.broadcast &&
                (n(92).set("volume", n(71).precise(g, 1)),
                n(92).set("muted", m),
                n(8).broadcast(
                  {
                    excludeThis: !0,
                  },
                  "volume",
                  {
                    volume: g,
                    muted: m,
                  }
                )))
            : ((i = g),
              (r = m),
              a.trigger("change:remote", {
                volume: g,
                muted: m,
              })),
            (v === a.getVolume() && y === a.getMuted()) ||
              a.trigger("change", {
                volume: g,
                muted: m,
              });
        }
        return (
          a.listenTo(n(8), "broadcast:volume", function (e) {
            return s({
              volume: e.volume,
              muted: e.muted,
              updateRemote: !1,
            });
          }),
          a.listenTo(n(8), "googleCast:audioHijack", function () {
            (o = !0),
              a.trigger("change", {
                volume: a.getVolume(),
                muted: a.getMuted(),
              });
          }),
          a.listenTo(n(8), "googleCast:audioRestored", function () {
            (o = !1),
              a.trigger("change", {
                volume: a.getVolume(),
                muted: a.getMuted(),
              });
          }),
          a
        );
      };
    },
    97: function (e, t, n) {
      var i = (e.exports = {
        isPremierVIPMember: function () {
          return n(4).get("features").has("can_see_revshare_premier_agreement");
        },
        isPremierMonetizationMember: function () {
          return n(4).get("features").has("can_see_revshare_pro_agreement");
        },
        isQualified: function () {
          return n(4).get("features").has("can_view_revshare_pro_prospect");
        },
        shouldShowUpsells: function () {
          return i.canJoinPremier();
        },
        hasJoinedPremier: function () {
          return i.isPremierVIPMember() || i.isPremierMonetizationMember();
        },
        canJoinPremier: function () {
          return i.isQualified() && !i.hasJoinedPremier();
        },
        cantMonetizeLongContent: function () {
          return n(4).get("features").has("cant_monetize_long_content");
        },
      });
    },
    975: function (e, t, n) {
      var i = n(580);
      function r(e) {
        (this.data = e),
          (this.left = null),
          (this.right = null),
          (this.red = !0);
      }
      function o(e) {
        (this._root = null), (this._comparator = e), (this.size = 0);
      }
      function a(e) {
        return null !== e && e.red;
      }
      function s(e, t) {
        var n = e.get_child(!t);
        return (
          e.set_child(!t, n.get_child(t)),
          n.set_child(t, e),
          (e.red = !0),
          (n.red = !1),
          n
        );
      }
      function u(e, t) {
        return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t);
      }
      (r.prototype.get_child = function (e) {
        return e ? this.right : this.left;
      }),
        (r.prototype.set_child = function (e, t) {
          e ? (this.right = t) : (this.left = t);
        }),
        (o.prototype = new i()),
        (o.prototype.insert = function (e) {
          var t = !1;
          if (null === this._root)
            (this._root = new r(e)), (t = !0), this.size++;
          else {
            var n = new r(void 0),
              i = 0,
              o = 0,
              l = null,
              c = n,
              d = null,
              f = this._root;
            for (c.right = this._root; ; ) {
              if (
                (null === f
                  ? ((f = new r(e)), d.set_child(i, f), (t = !0), this.size++)
                  : a(f.left) &&
                    a(f.right) &&
                    ((f.red = !0), (f.left.red = !1), (f.right.red = !1)),
                a(f) && a(d))
              ) {
                var h = c.right === l;
                f === d.get_child(o)
                  ? c.set_child(h, s(l, !o))
                  : c.set_child(h, u(l, !o));
              }
              var p = this._comparator(f.data, e);
              if (0 === p) break;
              (o = i),
                (i = p < 0),
                null !== l && (c = l),
                (l = d),
                (d = f),
                (f = f.get_child(i));
            }
            this._root = n.right;
          }
          return (this._root.red = !1), t;
        }),
        (o.prototype.remove = function (e) {
          if (null === this._root) return !1;
          var t = new r(void 0),
            n = t;
          n.right = this._root;
          for (
            var i = null, o = null, l = null, c = 1;
            null !== n.get_child(c);

          ) {
            var d = c;
            (o = i), (i = n), (n = n.get_child(c));
            var f = this._comparator(e, n.data);
            if (((c = f > 0), 0 === f && (l = n), !a(n) && !a(n.get_child(c))))
              if (a(n.get_child(!c))) {
                var h = s(n, c);
                i.set_child(d, h), (i = h);
              } else if (!a(n.get_child(!c))) {
                var p = i.get_child(!d);
                if (null !== p)
                  if (a(p.get_child(!d)) || a(p.get_child(d))) {
                    var g = o.right === i;
                    a(p.get_child(d))
                      ? o.set_child(g, u(i, d))
                      : a(p.get_child(!d)) && o.set_child(g, s(i, d));
                    var m = o.get_child(g);
                    (m.red = !0),
                      (n.red = !0),
                      (m.left.red = !1),
                      (m.right.red = !1);
                  } else (i.red = !1), (p.red = !0), (n.red = !0);
              }
          }
          return (
            null !== l &&
              ((l.data = n.data),
              i.set_child(i.right === n, n.get_child(null === n.left)),
              this.size--),
            (this._root = t.right),
            null !== this._root && (this._root.red = !1),
            null !== l
          );
        }),
        (e.exports = o);
    },
    976: function (e, t, n) {
      var i = n(580);
      function r(e) {
        (this.data = e), (this.left = null), (this.right = null);
      }
      function o(e) {
        (this._root = null), (this._comparator = e), (this.size = 0);
      }
      (r.prototype.get_child = function (e) {
        return e ? this.right : this.left;
      }),
        (r.prototype.set_child = function (e, t) {
          e ? (this.right = t) : (this.left = t);
        }),
        (o.prototype = new i()),
        (o.prototype.insert = function (e) {
          if (null === this._root)
            return (this._root = new r(e)), this.size++, !0;
          for (var t = 0, n = null, i = this._root; ; ) {
            if (null === i)
              return (
                (i = new r(e)), n.set_child(t, i), (ret = !0), this.size++, !0
              );
            if (0 === this._comparator(i.data, e)) return !1;
            (t = this._comparator(i.data, e) < 0),
              (n = i),
              (i = i.get_child(t));
          }
        }),
        (o.prototype.remove = function (e) {
          if (null === this._root) return !1;
          var t = new r(void 0),
            n = t;
          n.right = this._root;
          for (var i = null, o = null, a = 1; null !== n.get_child(a); ) {
            (i = n), (n = n.get_child(a));
            var s = this._comparator(e, n.data);
            (a = s > 0), 0 === s && (o = n);
          }
          return (
            null !== o &&
            ((o.data = n.data),
            i.set_child(i.right === n, n.get_child(null === n.left)),
            (this._root = t.right),
            this.size--,
            !0)
          );
        }),
        (e.exports = o);
    },
    978: function (e, t) {
      e.exports = function (e, t) {
        var f = 0;
        return {
          time: i,
          toRelativeTime: h,
          format: function (t, n) {
            var i,
              r,
              o,
              a,
              s,
              u = e.dates;
            if (!(t instanceof Date))
              throw new Error(
                "format method expects first argument to be Date"
              );
            return "relative" === n
              ? h(t)
              : ((i = t.getDate()),
                (r = t.getDay()),
                (o = t.getMonth()),
                (a = t.getFullYear()),
                (l = t.getMinutes()),
                (s = ("0" + l).substr(-2)),
                [
                  ["YYYY", a],
                  ["MMMM", (u.monthsDay && u.monthsDay[o]) || u.months[o]],
                  ["DDDD", u.weekdays[r]],
                  ["DDD", u.shortWeekdays[r]],
                  [
                    "MMM",
                    (u.monthsDayShort && u.monthsDayShort[o]) ||
                      u.monthsShort[o],
                  ],
                  ["DD", i],
                  ["MM", o + 1],
                  ["HH", t.getHours()],
                  ["mm", s],
                ].reduce(
                  function (e, t) {
                    return e.replace(new RegExp(t[0], "g"), t[1]);
                  },
                  (function (t) {
                    var n;
                    switch (t) {
                      case "iso":
                        return "YYYY-MM-DD";
                      case "readable":
                        n = "readable";
                        break;
                      case "readable_time":
                        n = "readableTime";
                        break;
                      case "readable_abbreviated_time":
                        n = "readableAbbreviatedTime";
                        break;
                      case "readable_abbreviated":
                        n = "readableAbbreviated";
                        break;
                      case "readable_abbreviated_without_year":
                        n = "readableAbbreviatedWithoutYear";
                        break;
                      case "readable_without_day":
                        n = "readableWithoutDay";
                        break;
                      case "readable_abbreviated_without_day":
                        n = "readableAbbreviatedWithoutDay";
                        break;
                      case "readable_with_weekday":
                        n = "readableWithWeekday";
                        break;
                      case "year":
                        n = "year";
                        break;
                      case "month_abbreviated":
                        n = "monthAbbreviated";
                        break;
                      case "readable_abbreviated_with_weekday":
                        n = "readableAbbreviatedWithWeekday";
                        break;
                      default:
                        n = "default";
                    }
                    return e.dateFormats[n];
                  })(n)
                ));
            var l;
          },
          fromString: r,
          setServerTime: function (e) {
            var t, n;
            if (
              ((t = "number" == typeof e ? new Date(e) : r(e)),
              (n = t - Date.now()),
              Math.abs(n) > 6048e5)
            )
              return !1;
            return (f = n), !0;
          },
          nowAtServer: function () {
            return Date.now() + f;
          },
          timecode: function (t, n) {
            if (isNaN(t)) return t;
            var i = [],
              r = Math.floor(t / 36e5),
              o = Math.floor((t / 6e4) % 60),
              a = Math.floor((t / 1e3) % 60),
              s = e.relativeTime;
            return n && n.inWords
              ? (r > 0 && i.push(s.hour(r)),
                o > 0 && i.push(s.min(o)),
                (a > 0 || (0 === o && 0 === r)) && i.push(s.sec(a)),
                i.join(" "))
              : (r > 0 && i.push(r),
                n && n.minimal && 0 === r && 0 === o
                  ? i.push("")
                  : i.push(o < 10 && r > 0 ? "0" + o : o),
                i.push(a < 10 ? "0" + a : a),
                i.join(":"));
          },
          stringToTime: o,
          convert: a,
          floorTo30Minutes: s,
          parseTime: u,
          formatTime: function (e) {
            return (
              t.zeroPad(e.getHours(), 2) + ":" + t.zeroPad(e.getMinutes(), 2)
            );
          },
          getTimezoneOffset: l,
          getBounds: c,
          toLocalDate: d,
        };
        function h(t, i, r) {
          if (!(t instanceof Date))
            throw new Error(
              "toRelativeTime method expects first argument to be Date"
            );
          var o,
            a,
            s,
            u = (r = r || Date.now()) - t,
            l = u > 0,
            c = null,
            d = e.relativeTime;
          if (((i = (i && parseInt(i, 10)) || 1e3), (u = Math.abs(u)) <= i))
            return l ? d.justNow : d.rightNow;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              if (u < n[o]) break;
              (c = o), (u /= n[o]);
            }
          return (
            (u = Math.floor(u)),
            (a = l ? d.past : d.future),
            (s = d[c](u)),
            "function" == typeof a ? a(s) : a.replace(/%s/i, s)
          );
        }
      };
      var n = {
          sec: 1e3,
          min: 60,
          hour: 60,
          day: 24,
          month: 30,
          year: 12,
        },
        i = {
          minute: 6e4,
          hour: 36e5,
          day: 864e5,
        };
      function r(e) {
        return new Date(Date.parse(e) || e);
      }
      function o(e) {
        var t;
        return /^\d+(\.\d+)?$/g.test(e)
          ? 1e3 * parseFloat(e)
          : (t =
              /^(?:npt:)?(?:(?:(\d+):)?(\d\d?):)?(\d\d?)(\.\d+)?$/.exec(e) ||
              /^(?:(\d\d?)[hH])?(?:(\d\d?)[mM])?(\d\d?)[sS]$/.exec(e))
          ? 1e3 *
            (3600 * (parseInt(t[1], 10) || 0) +
              60 * (parseInt(t[2], 10) || 0) +
              parseInt(t[3], 10) +
              (parseFloat(t[4]) || 0))
          : 0;
      }
      function a(e, t, n) {
        n = n || "s";
        var i = "smh".indexOf(t),
          r = "smh".indexOf(n);
        if (-1 === i || -1 === r)
          throw new Error('Units must be expressed as either "h", "m" or "s"');
        return Math.round(Math.pow(60, r - i) * e);
      }
      function s(e) {
        return (
          (e = new Date(e)).setMinutes(e.getMinutes() - (e.getMinutes() % 30)),
          e
        );
      }
      function u(e) {
        var t,
          n,
          i,
          r = e.match(/^\s*(\d{1,2})\s*(?::\s*(\d{1,2}))?\s*(?:(a|p)m?)?\s*$/i);
        if (
          r &&
          ((t = r[1] && parseInt(r[1], 10)),
          (n = r[2] && parseInt(r[2], 10)),
          (i = r[3] && r[3].toLowerCase()),
          !(t > 23 || n > 59))
        ) {
          if (i)
            if ("p" === i) {
              if (t < 12) t += 12;
              else if (t > 13) return;
            } else if ("a" === i)
              if (12 === t) t = 0;
              else if (t > 12) return;
          return n || (n = 0), [t, n];
        }
      }
      function l() {
        var e = new Date(2009, 0, 1, 6, 0, 0),
          t = new Date(2009, 6, 1, 6, 0, 0);
        return e.getUTCHours() > t.getUTCHours()
          ? e.getTimezoneOffset()
          : t.getTimezoneOffset();
      }
      function c(e) {
        if (null == e.offset) return {};
        var t = new Date();
        !(function (e, t) {
          switch (t) {
            case "day":
              e.setUTCHours(0, 0, 0, 0);
              break;
            case "hour":
              e.setUTCMinutes(0, 0, 0);
          }
        })(t, e.resolution);
        var n = +new Date(+t + e.offset * i[e.resolution]);
        return {
          from: n,
          to: +new Date(n + (e.duration - 1) * i[e.resolution]),
        };
      }
      function d(e) {
        var t =
            "string" == typeof e
              ? Date.parse(e)
              : "number" == typeof e
              ? e
              : e.valueOf(),
          n = 60 * l() * 1e3;
        return new Date(t + n);
      }
    },
    979: function (e, t) {
      function n(e, t, n) {
        n = n || Math.round;
        var i = Math.pow(10, t || 0);
        return n(e * i) / i;
      }
      e.exports = function (e) {
        return {
          round: n,
          format: function (t, i) {
            if ("" === t || null == t || isNaN(t) || Math.abs(t) === 1 / 0)
              return "";
            t = parseFloat(t);
            var r = (i && i.precision) || 0,
              o = e.delimiters;
            return (
              (t = n(t, (r = Math.max(Math.min(r, 20), 0)), i && i.roundingFn)),
              i &&
                !isNaN(i.fixed) &&
                (t = t.toFixed(Math.max(Math.min(i.fixed, 20), 0))),
              ("" + t)
                .split(".")
                .map(function (e, t) {
                  return 0 === t
                    ? e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o.thousands)
                    : e;
                })
                .join(o.decimal)
            );
          },
          zeroPad: function (e, t) {
            if (null == e) return e;
            var n = t - (e += "").length;
            return n > 0 && (e = new Array(n + 1).join("0") + e), e;
          },
        };
      };
    },
    98: function (e, t, n) {
      e.exports = n(969)();
    },
    980: function (e, t) {
      var n = {
        has: function (e, t) {
          return null != e && hasOwnProperty.call(e, t);
        },
        memoize: function (e, t) {
          var i = function i(r) {
            var o = i.cache,
              a = "" + (t ? t.apply(this, arguments) : r);
            return n.has(o, a) || (o[a] = e.apply(this, arguments)), o[a];
          };
          return (i.cache = {}), i;
        },
      };
      e.exports = function (e, t) {
        var o = n.memoize(
          function (t, n) {
            try {
              return new Intl.NumberFormat(e.replace("_", "-"), {
                style: t ? "currency" : "decimal",
                currency: t,
                minimumFractionDigits: n,
              }).format;
            } catch (t) {
              return new Intl.NumberFormat(e.replace("_", "-"), {
                style: "decimal",
                minimumFractionDigits: n,
              }).format;
            }
          },
          function (e, t) {
            return "" + e + t;
          }
        );
        return {
          format: function (n, s, u) {
            var l = n / Math.pow(10, a(s)),
              c = (function (e, t, n) {
                var i = a(t);
                if (n < i) {
                  var r =
                    Math.round(e) * Math.pow(10, i) !==
                    Math.round(e * Math.pow(10, i));
                  if (n > 0 || r) return i;
                }
                return n;
              })(l, s, u);
            if ("undefined" != typeof Intl)
              return (function (e, t) {
                if (r.hasOwnProperty(e))
                  return t.replace(r[e].default, r[e].override);
                return t;
              })(s, o(s, c)(l));
            var d = t.format(l, {
                precision: 2,
                minFractionDigits: c,
              }),
              f = i[s] || s;
            switch (e) {
              case "en":
              case "en_GB":
                return "" + f + d;
              case "fr":
                return d + " " + f;
              default:
                return "" + d + f;
            }
          },
        };
      };
      var i = {
          AUD: "AU$",
          CAD: "CA$",
          EUR: "€",
          GBP: "£",
          NZD: "NZ$",
          USD: "$",
        },
        r = {
          AUD: {
            default: "A$",
            override: "AU$",
          },
          USD: {
            default: /US\$|\$US/,
            override: "$",
          },
          GBP: {
            default: "£GB",
            override: "£",
          },
        };
      var o = {
        BIF: 0,
        CLP: 0,
        DJF: 0,
        GNF: 0,
        ISK: 0,
        JPY: 0,
        KMF: 0,
        KRW: 0,
        PYG: 0,
        RWF: 0,
        UGX: 0,
        UYI: 0,
        VND: 0,
        VUV: 0,
        XAF: 0,
        XOF: 0,
        XPF: 0,
        BHD: 3,
        IQD: 3,
        JOD: 3,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        TND: 3,
        CLF: 4,
      };
      function a(e) {
        return o.hasOwnProperty(e) ? o[e] : 2;
      }
    },
    99: function (e, t, n) {
      (function (t) {
        var i = new window.Image();
        i.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        e.exports = (function e(r) {
          var o,
            a = t(window.document),
            s = [],
            u = -1,
            l = -1,
            c = r.getQueue(),
            d = !1,
            f = n(0).assign({}, n(31).Events, {
              initDragNDrop: e,
              start: function (e) {
                s.length && (n(0).invoke(s, "release"), (s.length = 0)),
                  (d = !1),
                  a.on("drop", p).on("dragover", h),
                  (l = u = c.indexOf(e[0])),
                  n(0).invoke(e, "hold"),
                  s.push.apply(s, e),
                  c.remove(e);
              },
              setDropCursor: function (e) {
                u = e;
              },
              getDropCursor: function () {
                return u;
              },
              end: function () {
                o && (window.clearTimeout(o), (o = null)),
                  a.off("drop", p).off("dragover", h),
                  n(0).invoke(s, "release");
                var e = s.splice(0, s.length),
                  t = d ? u : l;
                t > -1 &&
                  c.add(e, {
                    at: t,
                  }),
                  (l = u = -1),
                  (d = !1),
                  f.trigger("end");
              },
              getItems: function () {
                return s;
              },
              isDragging: function () {
                return s.length > 0;
              },
              dispose: function () {
                n(0).invoke(s, "release"),
                  (s.length = 0),
                  a.off("drop", p).off("dragover", h);
              },
              prepareDragEvent: function (e) {
                if (
                  (e.dataTransfer.setData("text", ""),
                  (e.dataTransfer.effectAllowed = "all"),
                  e.dataTransfer.setDragImage)
                )
                  e.dataTransfer.setDragImage(i, 0, 0);
                else {
                  var t = e.target.style,
                    n = t.opacity;
                  (t.opacity = 0.01),
                    window.requestAnimationFrame(function () {
                      t.opacity = n;
                    });
                }
              },
            });
          return f;
          function h() {
            return !1;
          }
          function p() {
            return (d = !0), (o = window.setTimeout(f.end, 20)), !1;
          }
        })(n(14));
      }.call(this, n(15)));
    },
  },
]);
//# sourceMappingURL=http://ent/web-sourcemaps/0-03cbe7b6.js.map
