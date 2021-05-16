APP_BUILD_SCRIPT := Android.mk
APP_PLATFORM := android-21

APP_MK_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

NDK_MODULE_PATH := $(REACT_ANDROID_DIR)/../ReactCommon$(HOST_DIRSEP)$(REACT_ANDROID_DIR)/src/main/jni/first-party

APP_STL := c++_shared

APP_CFLAGS := -Wall -Werror -fexceptions -frtti -DWITH_INSPECTOR=1
APP_CPPFLAGS := -std=c++1y
# Make sure every shared lib includes a .note.gnu.build-id header
APP_LDFLAGS := -Wl,--build-id

NDK_TOOLCHAIN_VERSION := clang
